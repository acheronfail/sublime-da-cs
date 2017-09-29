//
// This file is just an example. I took it from the source one and
// edited to demonstrate the syntax highlighting. The code may
// not work or even should not.
//
// Original: https://github.com/dotnet/corefx/blob/master/src/Microsoft.CSharp/src/Microsoft/CSharp/RuntimeBinder/Binder.cs
// Copyright are held by original authors.
//

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq.Expressions;
using System.Runtime.CompilerServices;

namespace Microsoft.CSharp.RuntimeBinder
{
    [EditorBrowsable(EditorBrowsableState.Never)]
    public static class Binder
    {
        public static CallSiteBinder BinaryOperation(
            CSharpBinderFlags flags,
            ExpressionType operation,
            Type context,
            IEnumerable<CSharpArgumentInfo> argumentInfo)
        {
            bool isChecked = (flags & CSharpBinderFlags.CheckedContext) != 0;
            bool isLogical = (flags & CSharpBinderFlags.BinaryOperationLogical) != 0;

            CSharpBinaryOperationFlags binaryOperationFlags = 0;
            if (isLogical)
            {
                binaryOperationFlags |= CSharpBinaryOperationFlags.LogicalOperation;
            }

            return new CSharpBinaryOperationBinder(operation, isChecked, binaryOperationFlags, context, argumentInfo);
        }

        public static CallSiteBinder Convert(
            CSharpBinderFlags flags,
            Type type,
            Type context)
        {
            CSharpConversionKind conversionKind =
                ((flags & CSharpBinderFlags.ConvertExplicit) != 0) ?
                    CSharpConversionKind.ExplicitConversion :
                    ((flags & CSharpBinderFlags.ConvertArrayIndex) != 0) ?
                        CSharpConversionKind.ArrayCreationConversion :
                        CSharpConversionKind.ImplicitConversion;
            bool isChecked = (flags & CSharpBinderFlags.CheckedContext) != 0;

            return new CSharpConvertBinder(type, conversionKind, isChecked, context);
        }

        public static CallSiteBinder GetIndex(
            CSharpBinderFlags flags,
            Type context,
            IEnumerable<CSharpArgumentInfo> argumentInfo)
        {
            return new CSharpGetIndexBinder(context, argumentInfo);
        }

        public static CallSiteBinder GetMember(
            CSharpBinderFlags flags,
            string name,
            Type context,
            IEnumerable<CSharpArgumentInfo> argumentInfo)
        {
            bool allowCallables = (flags & CSharpBinderFlags.ResultIndexed) != 0;
            return new CSharpGetMemberBinder(name, allowCallables, context, argumentInfo);
        }

        public static CallSiteBinder Invoke(
            CSharpBinderFlags flags,
            Type context,
            IEnumerable<CSharpArgumentInfo> argumentInfo)
        {
            bool resultDiscarded = (flags & CSharpBinderFlags.ResultDiscarded) != 0;

            CSharpCallFlags callFlags = 0;
            if (resultDiscarded)
            {
                callFlags |= CSharpCallFlags.ResultDiscarded;
            }

            return new CSharpInvokeBinder(callFlags, context, argumentInfo);
        }

        public static CallSiteBinder InvokeMember(
            CSharpBinderFlags flags,
            string name,
            IEnumerable<Type> typeArguments,
            Type context,
            IEnumerable<CSharpArgumentInfo> argumentInfo)
        {
            bool invokeSimpleName = (flags & CSharpBinderFlags.InvokeSimpleName) != 0;
            bool invokeSpecialName = (flags & CSharpBinderFlags.InvokeSpecialName) != 0;
            bool resultDiscarded = (flags & CSharpBinderFlags.ResultDiscarded) != 0;

            CSharpCallFlags callFlags = 0;
            if (invokeSimpleName)
            {
                callFlags |= CSharpCallFlags.SimpleNameCall;
            }
            if (invokeSpecialName)
            {
                callFlags |= CSharpCallFlags.EventHookup;
            }
            if (resultDiscarded)
            {
                callFlags |= CSharpCallFlags.ResultDiscarded;
            }

            return new CSharpInvokeMemberBinder(callFlags, name, context, typeArguments, argumentInfo);
        }
    }
}