# ![DA CS][img-logo]

[![Stars @ GitHub][img-stars]][link-stars]
[![Discuss at Sublime Forum][img-forum]][link-forum]
[![Share via Twitter][img-twitter]][link-twitter]
[![Join the Chat at Gitter][img-gitter]][link-gitter]


**DA CS** is a set of popular and customizable color schemes for Sublime Text 3.

Its aim is to provide a first-class syntax highlighting with colors you love.

>    - I'm not author of all those carefully selected colors.
>    - Only background, foreground, comment and six base colors are used.
>    - Syntax highlighting differs from original ones.

Share your ❤ with original authors: support or just thank them!



## Get It

1. Choose `Command Palette › Package Control: Install Package`.
2. Find `DA CS` and hit `Enter`.
3. Enjoy!



## Customization

> This package requires [DA UI][link-engine] package for customization support. Please install it before continuing.


### Adjust Common Color Scheme Settings

1. Choose `Command Palette › DA UI: Color Scheme Settings`.
2. Change some setting and save (e.g. change `"caret_color"` to `"red"`).

**Behind the scene**:

- DA UI will re-apply your new settings for the current global color scheme automatically if the engine is supported.
- If you've changed the global color scheme, run `DA UI: Re-apply Settings` command to do that manually. Later, there will be option to do that automatically on color scheme change.


### Change Some Colors of the Specific Color Scheme

For example, if you do not like the accent color of the Oceanic Next color scheme you can:

1. Choose `Command Palette › Preferences: Browse Packages...`.
2. Open `User` folder.
3. Create `DA Color.sublime-settings` file in it with next contents:

```js
"Oceanic Next": {
    "colors": {
        "accent": "#f0f"
    }
}
```

4. Activate the color scheme.
5. Run `DA UI: Re-apply Settings` command.

<!-- Links -->

[link-engine]: https://packagecontrol.io/packages/DA%20UI
[link-forum]: https://forum.sublimetext.com/t/da-ui-is-now-a-public-beta-adaptive-customizable-elegant/32090
[link-gitter]: https://gitter.im/sublime-da-ui/Lobby
[link-new-issue]: https://github.com/ihodev/sublime-da-ui/issues/new
[link-search-issue]: https://github.com/ihodev/sublime-da-ui/search?q=&type=Issues
[link-stars]: https://github.com/ihodev/sublime-da-cs/stargazers
[link-twitter]: https://twitter.com/intent/tweet?hashtags=sublimetext%2C%20popular%2C%20colors&ref_src=twsrc%5Etfw&text=DA%20CS%20%E2%9D%A4%20Popular%20Color%20Schemes%20for%20Sublime%20Text%203&tw_p=tweetbutton&url=https%3A%2F%2Fpackagecontrol.io%2Fpackages%2FDA%2520CS&via=trydaui



<!-- Images -->

[img-forum]: https://cdn.rawgit.com/ihodev/sublime-da-ui/3c679bd4/assets/shields/reply-on-forum.svg
[img-gitter]: https://cdn.rawgit.com/ihodev/sublime-da-ui/3c679bd4/assets/shields/chat-on-gitter.svg
[img-logo]: https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/pkgctrl/logo.png
[img-stars]: https://img.shields.io/github/stars/ihodev/sublime-da-cs.svg?style=flat-square&label=%E2%98%85%20stars
[img-twitter]: https://cdn.rawgit.com/ihodev/sublime-da-ui/3c679bd4/assets/shields/share-on-twitter.svg
