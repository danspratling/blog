---
title: Creating a user controllable Dark Theme
date: 2019-12-11T15:25:25.563Z
description: How to create a dark theme on your react website which the user can control
---

Dark themes have been surging in popularity recently. For developers, they've existed for years as they tend to be standard with code editors but they've been spreading to other apps. Youtube and Twitter notably have a dark mode which is extremely popular but lots of other apps exist which use them and they're spreading to websites too.

Dark modes can provide a number of benefits for users, like reducing eye strain, increasing contrast for people with difficulty seeing.

_So let's get started._

\_\_

## Setup

We're going to focus on the CSS-in-JS approach, however this isn't the only way you might approach this task.

If you're using only CSS you can use `@media (prefers-color-scheme: dark) {}` which works on all modern browsers. [There's an interesting article on csstricks which you can follow for that approach.](https://css-tricks.com/dark-modes-with-css/)

### Adding use-dark-mode

The general approach manages the dark mode state and attaches a class to the `<body>` which then adjusts. This should work with all react projects. It's worth noting that both approaches require React hooks which were included in `react 16.8.

First run

```sh
yarn add use-dark-mode
```

use-dark-mode takes an initial state and an optional config object. The config below are the defaults so don't need to be included but if you wish to change them you can do so.

```js
const darkMode = useDarkMode(
  false, //initial state - if dark mode should be enabled by default
  {
    classNameDark: 'dark-mode',
    classNameLight: 'light-mode',
    storageKey: 'darkMode', //the key used in localstorage
    minify: true,
  }
)
```

Next we need to set up our css. I'm assuming we already have the default styling down for the site so we just need to handle the dark mode css.

This could be as simple as adding this to one of your css files.

```css
body.dark-mode {
  background-color: #000;
  color: #fff;
}
```

Though it's likely you will need to adjust various components, either by adding dark overrides to all your component css files or by adding a theme folder to override that way.

Finally, we need to create a toggle button. I'm adding mine to layout.js so that it appears on every page

```js
// Layout.js

// at the top with the imports
import useDarkMode from 'use-dark-mode'

// inside the component with the other functions (if any exist), before render()
const darkMode = useDarkMode(false) //see above for config options

// inside the render function
<button onClick={() => darkMode.toggle()}>Dark mode</button> //if you want to have 2 buttons then use darkMode.enable() and darkMode.disable()
```

We're finished - kinda. If you're using css, sass or less then you're done. You can test this by opening up the inspector and looking at the body class.

That was pretty easy, right? But that doesn't cover all ways to use css, so let's keep going.

### use-dark-mode with CSS-in-JS

CSS-in-JS is a bit more complex if working from scratch but this also gives you the benefit of only having to change theme colours in 1 file and it working across all components.

How this works changes a little between different tools but the general approach is to have something like the following

```js
// App.js
import useDarkMode from 'use-dark-mode'
import {lightTheme, darkTheme} from './theme //your two theme.js files which would be exported from a theme/index.js file

const App = () => {
  const darkMode = useDarkMode(false)

  return (
    <ThemeProvider theme={darkMode.value === 'true' ? darkTheme : lightTheme}>
      ...
    </ThemeProvider>
  );
};
```

ThemeProvider wraps the app and gives react the knowledge of what each of the variables held in your theme file are. Updating the state of darkMode triggers a rerender, which then re-checks the ThemeProvider theme file.

### use-dark-mode with Gatsby

If you're using Gatsby to handle your site, you can use the gatsby plugin which provides some added benefits and makes setting this up really easy. First we need to install the gatsby plugin alongside the default package.

```shell
yarn add use-dark-mode gatsby-plugin-use-dark-mode //adds both plugins
```

This new plugin does all the CSS-in-JS for us so it adds the correct theme to ThemeProvider and also handles the flash of unstyled content if the user loads the site with the dark theme enabled. Nice!

We first need to add the config options. As it's now handled by a gatsby plugin, these need to go into gatsby-config.js

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        //these options are all optional still and can be excluded
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
  ],
}
```

From here, the instructions are the same depending on if you're using CSS-in-JS or just a css approach.

### Theme UI with Gatsby

I'm using Gatsby and Theme UI for my site which has its own implementation for theme switching. This approach is actually more flexible than the previous approaches and theoretically allows you to have more than 2 themes, if you wish. This approach is entirely different to the previous ones though.

_If you're taking this approach i'm assuming you have a Gatsby project set up with Theme UI installed._

First we want to set up our theme colours. We need to add an intialColorMode property so that Theme UI knows where we're starting from and then any additional modes we want need to be placed inside the colors object.

```js
// theme.js

export default {
  initialColorMode: 'light',
  colors: {
    ...
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
      },
    }
  ...
}
```

Then, simiarly to how we created the button before we want to create a new button which references the useColorMode hook.

```js
// Layout.js

// at the top with the imports
import {useColorMode} from 'theme-ui'

// inside the component with the other functions (if any exist), before render()
const [colorMode, setColorMode] = useColorMode()

// inside the render function
<button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>Dark mode</button>
```

These two methods are very similar but slightly different.

### Cleanup

You'll likely find that once you've gotten it working there'll be a few bugs to smooth out but it should be fairly straightforward. Congratulations on getting a dark theme set up!

#### Project

This site! Check the top right corner or see the github page
https://github.com/danspratling/blog

#### References

[Use Dark Mode Github](https://github.com/donavon/use-dark-mode#readme)
[Gatsby Plugin Use Dark Mode Github](https://github.com/wKovacs64/gatsby-plugin-use-dark-mode#readme)
[Theme UI Color Modes](https://theme-ui.com/gatsby-plugin#color-modes)
[Theme UI Color Modes Tutorial (Video)](https://egghead.io/lessons/react-add-dark-mode-to-a-gatsby-site-with-theme-ui?pl=theme-ui-37644190)
