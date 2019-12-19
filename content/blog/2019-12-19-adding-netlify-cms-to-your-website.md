---
title: Adding Netlify CMS to your website
date: 2019-12-19T14:08:20.128Z
description: >-
  Netlify CMS is a great tool for adding simple content to your site, and this
  is how to set it up
---
Netlify CMS is a tool designed by the team at Netlify to handle your content. Its beauty is that everything is handled via your repo, and you don't need to think about a backend as it's handled entirely by Netlify CMS inside markdown files. I'm currently using it in it's most minimal form for my blog (this one) but want to expand my workflow, so we'll be working out how to add draft posts, additional fields and extra pages to the site so we can create something a bit more complex than just a blog if we want to.

You can demo the netlify CMS to see if it is right for you by [going to their demo site](https://cms.netlify.com/#/collections/posts).



## Installing Netlify CMS

I'm using gatsby so this guide will go through the setup instructions assume that we're using that. However Netlify CMS can be used across a whole host of site types so [find the instructions which suit you on their site](https://www.netlifycms.org/docs/start-with-a-template/).

For a Gatsby site, adding netlify cms is pretty simple.

If you're starting from nothing, then there's a [prebuilt template you can use](https://www.netlifycms.org/docs/start-with-a-template/) which will setup a new site for you hosted on netlify.

If you want to do it yourself, there are a few options [which can be found on netlify's site](https://www.netlifycms.org/docs/add-to-your-site/). 

We're going to be adding it to Gatsby. To do this we only need to do 2 things.\

```sh
yarn add gatsby-plugin-netlify-cms
```

This will add netlify cms to your site. Then all we need to do is create a blog.

Create a new file called config.yml at `/static/admin/config.yml`. This will hold all the details we want our CMS to use.

Add this to the new file to create a blog and a media folder

```yml
backend:   
  name: git-gateway
  branch: master

media_folder: static/assets
public_folder: assets

collections:
  - name: blog
    label: Blog
    folder: blog     
    create: true     
    fields:
      - { name: path, label: Path }
      - { name: date, label: Date, widget: datetime }
      - { name: title, label: Title }
      - { name: body, label: Body, widget: markdown }
```

  Now just run `gatsby develop` in the terminal to kick the CMS into action. You can visit the cms by going to `localhost:8000/admin/` - note that you will need the trailing / in the url. Forgetting it will cause an error.

[Full instructions for setting up a gatsby site and adding netlify cms](https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/)



## Adding draft post functionality



## Adding page types



## Adding field types
