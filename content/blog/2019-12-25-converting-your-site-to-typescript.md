---
title: Converting your site to TypeScript
date: 2019-12-27T10:15:00.000Z
description: >-
  Guarantee your data props are correct by converting your React site to
  TypeScript
---
# TypeScript: An alternative to JavaScript

Okay, that heading is slightly misleading. TypeScript isn't really an alternative to javascript as it still shares all the same syntax. TypeScript is actually a superset of Javascript. TypeScript's main benefit is ensuring that your javascript variables are type dependent, ensuring your variables are always a single type, whether that be string, number, boolean etc.

This is useful, especially when working in teams as it gives you more confidence in your code by ensuring data is always the correct type. You can even define these types yourself to narrow the selection down even more.

## Is it worth converting to TypeScript?

That depends on your needs. TypeScript has only been adopted fairly recently and plenty of JavaScript solutions before have worked perfectly well without it. TypeScript adds security and confidence in your code, especially when working with other developers. But no, you don't have to include typescript.

That being said, it's definitely worth trying out. Typescript is clever enough to define its own types if you don't so to get started, you really don't have to change anything. Great for if you want to learn how to use typescript without having to write a whole new application or doing major refactoring. Then, when you're ready you can start adding in types however you want.

## How to convert?

It depends on your setup but the general process is pretty straightforward. The good news is react comes with typescript built in. Adding typescript is really easy.

For react apps (or any javascript app) all you really need to do is run the following.

\`\``sh

yarn add typescript @types/node @types/react @types/react-dom @types/jest

\`\``

For a Gatsby project [you'll need to add the typescript plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/), and the react type definitions using the following.

\`\``sh

yarn add gatsby-plugin-typescript @types/react @types/react-dom @types/node

\`\``

Then in your \`gatsby-node.js\` file add 

\`\``js

module.exports = {

  plugins: [

\    ...,

\    \`gatsby-plugin-typescript\`,

  ],

}

\`\``

 Then it's just a case of converting your file types to \`.ts\` and/or \`.tsx\`(TypeScript is stricter than JavaScript when it comes to file names so if your file includes any jsx, it requires your file extension to be a \`.tsx\` file). Note that you only need to convert your components. It's perfectly valid to continue working with some \`.js\` files for your config options if you wish.



## Converting my blog

This blog was written in Javascript originally and during the process of writing this post i was converting the site to TypeScript. There's no reason for this site to go extremely in depth with typescript so i've only defined a custom type once. Feel free to have a look through the commit but there honestly isn't anything here worth pointing out - it's really straightfoward to switch over so if you're unsure, just try it out.

[Here's a link to the pull requirest showing all the changes i made to my blog when adding typescript.](https://github.com/danspratling/blog/pull/12/files)

Note that not all of the changes made here are \*required\* to get typescript up and running.

Good luck!
