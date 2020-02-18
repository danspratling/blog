---
title: Switching to native app development - Week 1
date: 2020-02-18T10:46:39.656Z
description: >-
  Week 1 of my experience moving away from Web development and into App
  development.
---
Last week, I started a new job working on mobile apps. Before this I’d only worked on websites so this is a substantial change for me. As you can expect, after only a week I’ve not done too much - some setup, a few bug fixes, a lot of perusing already written code.\
\
Note: I’m creating apps using Vue.js and NativeScript. This may not apply to every development flow, but *should* apply across all NativeScript projects.

## What I've learned so far.

* App structure looks almost exactly the same as website structure. node_modules, package.json, webpack.config (and all the other .config files) still exist. App replaces src but contains components, pages, images, store, which you’d also find in a web app.
* You still have the ability to use everything you used in web development if you wanted. JavaScript frameworks and libraries, css compilers (sass, less, etc), state management tools. If you can do it on the web, you can probably do it here too.
* Emulators are fiddly to set up (but not painstakingly so) as they require changes to your system config. Guides are really helpful.
* Other than the visual rendering of the apps (which you can’t use browsers for, but will need to use emulators or connected apps on real devices), your code 
* Code is not written in HTML, despite looking similar. Instead it’s compiled down to XML which restricts what you’re able to use. `<div>`  doesn’t exist any more but the built in components work in a very similar to way to what you’re used to (GridLayout = css Grid). Here’s a code example which creates the image below (ignoring styling).

```html
<GridLayout rows=“auto, auto” columns=“*, auto” col=“1” row=“1” class=“status-wrapper”>
  <Label row=“0” col=“0” class=“title”>This is the title</Label>
  <Label row=“1” col=“0” class=“subtitle”>This is the description</Label>
  <Label row=“0” col=“1” rowSpan=“2” class=“icon”>Icon</Label>
</GridLayout>
```
![Component output by the above code](https://danspratling.com/images/nativescript-app-component-demo.png)


[NativeScript Docs](https://docs.nativescript.org/start/introduction)
