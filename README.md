# ![DA CS][img-logo]

[![Downloads @ Package Control][img-downloads]][link-downloads]
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
3. Choose `Command Palette › UI: Select Color Scheme`.
4. Find your favorite one.
5. Enjoy!



## Customization

> This package requires **[DA UI][link-engine]** package for customization support. Please install it before continuing.


### Adjust Common Color Scheme Settings

1. Choose `Command Palette › DA UI: Color Scheme Settings`.
2. Change some setting and save (e.g. change `"caret_color"` to `"red"`).

**Behind the scene**:

- DA UI will re-apply your new settings for the current global color scheme automatically if the engine is supported.
- If you've changed the global color scheme, run `DA UI: Re-apply Settings` command to do that manually.


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



## Found an Issue?

Please [search][link-search-issue] for a similar issue first, before creating [a new one][link-new-issue].

Please fill out the issue template when reporting a bug or suggestion.



## Color Schemes


### Color Pack from Chris Kempson

* Original [sources](https://github.com/chriskempson/base16).
* Licensed under the [MIT License](https://github.com/chriskempson/base16/blob/master/LICENSE.md).


<p>
    <details>
        <summary><strong>Eighties Dark</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/eighties-dark.png" alt="Eighties Dark" title="Eighties Dark"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Ocean Dark</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/ocean-dark.png" alt="Ocean Dark" title="Ocean Dark"></p>
    </details>
</p>

<p>
    <details>
        <summary><strong>Ocean Light</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/ocean-light.png" alt="Ocean Light" title="Ocean Light"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Tomorrow Dark</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/tomorrow-dark.png" alt="Tomorrow Dark" title="Tomorrow Dark"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Tomorrow Light</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/tomorrow-light.png" alt="Tomorrow Light" title="Tomorrow Light"></p>
    </details>
</p>


### Color Pack from Ethan Schoonover

* Original [sources](http://ethanschoonover.com/solarized).
* Licensed under the [MIT License](https://github.com/altercation/solarized/blob/master/LICENSE).


<p>
    <details>
        <summary><strong>Solarized Dark</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/solarized-dark.png" alt="Solarized Dark" title="Solarized Dark"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Solarized Light</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/solarized-light.png" alt="Solarized Light" title="Solarized Light"></p>
    </details>
</p>


### Color Pack from Dmitri Voronianski

* Original [sources](https://labs.voronianski.com/oceanic-next-color-scheme/).
* Licensed under the [MIT License](https://github.com/voronianski/oceanic-next-color-scheme/blob/master/README.md).
* You can show your appreciation to Dmitri using [PayPal](https://www.paypal.me/voronianski).


<p>
    <details>
        <summary><strong>Oceanic Next</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/oceanic-next.png" alt="Oceanic Next" title="Oceanic Next"></p>
    </details>
</p>


### Color Pack from Wimer Hazenberg

* Original [sources](https://www.monokai.pro/sublime-text/).
* Monokai &copy; 2017.
* You can show your appreciation to Wimer via buying [Monokai Pro](https://www.monokai.pro/sublime-text/).


<p>
    <details>
        <summary><strong>Monokai Classic</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/monokai-classic.png" alt="Monokai Classic" title="Monokai Classic"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Monokai Machine</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/monokai-machine.png" alt="Monokai Machine" title="Monokai Machine"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Monokai Octagon</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/monokai-octagon.png" alt="Monokai Octagon" title="Monokai Octagon"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Monokai Pro</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/monokai-pro.png" alt="Monokai Pro" title="Monokai Pro"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Monokai Ristretto</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/monokai-ristretto.png" alt="Monokai Ristretto" title="Monokai Ristretto"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Monokai Spectrum</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/monokai-spectrum.png" alt="Monokai Spectrum" title="Monokai Spectrum"></p>
    </details>
</p>


### Color Pack from Mattia Astorino

* Original [sources](https://github.com/equinusocio/material-theme).
* Licensed under the [MIT License](https://github.com/equinusocio/material-theme/blob/master/LICENSE.md).
* You can show your appreciation to Mattia using [Beerpay](https://beerpay.io/equinusocio/material-theme).


<p>
    <details>
        <summary><strong>Material</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/material.png" alt="Material" title="Material"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Material Darker</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/material-darker.png" alt="Material Darker" title="Material Darker"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Material Palenight</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/material-palenight.png" alt="Material Palenight" title="Material Palenight"></p>
    </details>
</p>


### Color Pack from GitHub Inc.

* Original [sources](https://github.com/atom/one-dark-syntax).
* Licensed under the [MIT License](https://github.com/atom/one-dark-syntax/blob/master/LICENSE.md).


<p>
    <details>
        <summary><strong>One Dark</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/one-dark.png" alt="One Dark" title="One Dark"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>One Light</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/one-light.png" alt="One Light" title="One Light"></p>
    </details>
</p>


### Color Pack from Jani Nurminen, Colin T.A. Gray, William D. Neumann

* Original [sources](https://github.com/colinta/zenburn).
* Licensed under the [BSD 2-clause "Simplified" License](https://github.com/colinta/zenburn/blob/master/LICENSE).


<p>
    <details>
        <summary><strong>Zenburn</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/zenburn.png" alt="Zenburn" title="Zenburn"></p>
    </details>
</p>


### Color Pack from Adam Christiansen, Merrick Christensen, Trevor D. Miller

* Original [sources](https://trevordmiller.com/projects/nova).
* Licensed under the [MIT License](https://github.com/trevordmiller/nova-colors/blob/master/LICENSE).


<p>
    <details>
        <summary><strong>Nova</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/nova.png" alt="Nova" title="Nova"></p>
    </details>
</p>


### Color Pack from Arctic Ice Studio

* Original [sources](https://github.com/arcticicestudio/nord).
* Licensed under the [Apache License](https://github.com/arcticicestudio/nord/blob/develop/LICENSE.md).


<p>
    <details>
        <summary><strong>Nord</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/nord.png" alt="Nord" title="Nord"></p>
    </details>
</p>


### Color Pack from Chris Thomas

* Original [sources](https://github.com/textmate/themes.tmbundle/blob/master/Themes/Espresso%20Libre.tmTheme).
* Licensed under the [Permissive License](https://github.com/textmate/themes.tmbundle/blob/master/README.mdown).


<p>
    <details>
        <summary><strong>Espresso Libre</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/espresso-libre.png" alt="Espresso Libre" title="Espresso Libre"></p>
    </details>
</p>


### Color Pack from Ian Hill

* Original [sources](https://github.com/buymeasoda/soda-theme).
* Licensed under the [Creative Commons Attribution-ShareAlike 3.0 License](https://creativecommons.org/licenses/by-sa/3.0/).


<p>
    <details>
        <summary><strong>Espresso Soda</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/espresso-soda.png" alt="Espresso Soda" title="Espresso Soda"></p>
    </details>
</p>


### Color Pack from Ike Ku

* Original [sources](https://github.com/dempfi/ayu).
* Licensed under the [MIT License](https://github.com/dempfi/ayu/blob/master/LICENSE).


<p>
    <details>
        <summary><strong>Ayu Dark</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/ayu-dark.png" alt="Ayu Dark" title="Ayu Dark"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Ayu Light</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/ayu-light.png" alt="Ayu Light" title="Ayu Light"></p>
    </details>
</p>


<p>
    <details>
        <summary><strong>Ayu Mirage</strong></summary><p></p>
        <p><img src="https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/showcase/ayu-mirage.png" alt="Ayu Mirage" title="Ayu Mirage"></p>
    </details>
</p>



<!-- Links -->

[link-downloads]: https://packagecontrol.io/packages/DA%20CS
[link-engine]: https://packagecontrol.io/packages/DA%20UI
[link-forum]: https://forum.sublimetext.com/t/da-ui-is-now-a-public-beta-adaptive-customizable-elegant/32090
[link-gitter]: https://gitter.im/sublime-da-ui/Lobby
[link-new-issue]: https://github.com/ihodev/sublime-da-ui/issues/new
[link-search-issue]: https://github.com/ihodev/sublime-da-ui/search?q=&type=Issues
[link-twitter]: https://twitter.com/intent/tweet?hashtags=sublimetext%2C%20popular%2C%20colors&ref_src=twsrc%5Etfw&text=DA%20CS%20%E2%9D%A4%20Popular%20Color%20Schemes%20for%20Sublime%20Text%203&tw_p=tweetbutton&url=https%3A%2F%2Fpackagecontrol.io%2Fpackages%2FDA%2520CS&via=trydaui



<!-- Images -->

[img-downloads]: https://img.shields.io/packagecontrol/dt/DA%20CS.svg?style=flat-square&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMiAxMiI%2BPGRlZnM%2BPHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU%2BPC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwLDVIOFYxSDRWNUgyTDYsOVpNMiwxMHYxaDhWMTBaIi8%2BPC9zdmc%2B&logoWidth=12&maxAge=3600
[img-forum]: https://cdn.rawgit.com/ihodev/sublime-da-ui/3c679bd4/assets/shields/reply-on-forum.svg
[img-gitter]: https://cdn.rawgit.com/ihodev/sublime-da-ui/3c679bd4/assets/shields/chat-on-gitter.svg
[img-logo]: https://raw.githubusercontent.com/ihodev/sublime-da-cs/master/assets/github/logo.png
[img-twitter]: https://cdn.rawgit.com/ihodev/sublime-da-ui/3c679bd4/assets/shields/share-on-twitter.svg
