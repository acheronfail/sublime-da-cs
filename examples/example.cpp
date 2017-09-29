/*
 * This file is just an example. I took it from the source one and
 * edited to demonstrate the syntax highlighting. The code may
 * not work or even should not.
 *
 * Original: https://github.com/apple/swift/blob/master/lib/Parse/Lexer.cpp
 * Copyright are held by original authors.
 */

#include "swift/Basic/SourceManager.h"
#include "swift/Syntax/TokenSyntax.h"
#include "llvm/ADT/StringSwitch.h"
#include "llvm/ADT/Twine.h"
#include "clang/Basic/CharInfo.h"

using namespace swift;

using clang::isAlphanumeric;
using clang::isDigit;


static bool EncodeToUTF8(unsigned CharValue,
                         SmallVectorImpl<char> &Result) {
  unsigned NumBits = 32-llvm::countLeadingZeros(CharValue);

  unsigned NumTrailingBytes;
  if (NumBits <= 5+6) {
    Result.push_back(char(0xC0 | (CharValue >> 6)));
    NumTrailingBytes = 1;
  } else if (NumBits <= 4+6+6) {
    Result.push_back(char(0xE0 | (CharValue >> (6+6))));
    NumTrailingBytes = 2;

    if (CharValue >= 0xD800 && CharValue <= 0xDFFF)
      return true;
    if (CharValue >= 0xFDD0 && CharValue <= 0xFDEF)
      return true;
  } else if (NumBits <= 3+6+6+6) {
    Result.push_back(char(0xF0 | (CharValue >> (6+6+6))));
    NumTrailingBytes = 3;
    if (CharValue > 0x10FFFF)
      return true;
  } else {
    return true;
  }

  while (NumTrailingBytes--)
    Result.push_back(char(0x80 | (0x3F & (CharValue >> (NumTrailingBytes*6)))));
  return false;
}


static unsigned CLO8(unsigned char C) {
  return llvm::countLeadingOnes(uint32_t(C) << 24);
}


static bool isStartOfUTF8Character(unsigned char C) {
  return C <= 0x80 || (C >= 0xC2 && C < 0xF5);
}
