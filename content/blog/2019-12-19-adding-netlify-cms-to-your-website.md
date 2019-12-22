---
title: Adding Netlify CMS to your website
date: 2019-12-19T14:08:20.128Z
description: >-
  Netlify CMS is a great tool for adding simple content to your site, and this
  is how to set it up
---
Netlify CMS is a tool designed by the team at Netlify to handle your content. Its beauty is that everything is handled via your repo, and you don't need to think about a database as your posts are stored as markdown files. I'm currently using it in it's most minimal form but want to expand my workflow, so we'll be working out how to add draft posts, additional fields and extra pages to the site so we can create something a bit more complex than just a blog if we want to.

You can demo the Netlify CMS to see if it is right for you by [going to their demo site](https://cms.netlify.com/#/collections/posts).

## Installing Netlify CMS

I'm using Gatsby so this guide will go through the setup instructions assume that we're using that. However Netlify CMS can be used across a whole host of site types so [find the instructions which suit you on their site](https://www.netlifycms.org/docs/start-with-a-template/).

If you're starting from nothing, then there's a [prebuilt template you can use](https://www.netlifycms.org/docs/start-with-a-template/) which will setup a new site for you hosted on Netlify. Setting up a Gatsby site with Netlify CMS this way is as simple as a few clicks.

If you want to do it yourself, there are a few options [which can be found on netlify's site](https://www.netlifycms.org/docs/add-to-your-site/). 

We're going to be adding it to Gatsby. To do this we only need to do 2 things.

```sh
yarn add gatsby-plugin-netlify-cms
```

This will add Netlify CMS to your site. Then all we need to do is create a blog.

Create a new file called config.yml at */static/admin/config.yml*. This will hold all the details we want our CMS to use.

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

Now just run `gatsby develop` in the terminal to kick the CMS into action. You can get there by going to `localhost:8000/admin/` - note that you will need the trailing / in the url. Forgetting it will cause an error.

[Full instructions for setting up a gatsby site from scratch and adding netlify cms](https://www.gatsbyjs.org/docs/sourcing-from-netlify-cms/)

## Adding draft post functionality

In most cases you'll want to be able to save posts as a draft before having to publish them.

To do that, we only need to make one small change to our `config.yml`.

```yml
publish_mode: editorial_workflow
```

Adding this will enable the editorial workflow which gives you draft, review and ready modes, all you (or a team) should need to be able to pump out new articles.

## Adding page types (collections)

Netlify CMS is perfect for blogging with its simple interface and workflow but it can be expanded further if you desire. By adding extra collections (essentially page types or doctypes, however you've heard it called before) we can add in new functionality keeping things like blogs, pages, faqs and whatever else you might need to use separate.

We've already created the 'Blog' collection to handle our blog posts but we can create a new one to handle our pages if we want.

```yml
collections:
    ....

  - name: page
    label: Pages
    folder: page
    create: true
    slug: '{{slug}}'
    fields:
      - { name: path, label: Path }
      - { name: date, label: Date, widget: datetime }
      - { name: title, label: Title }
      - { name: body, label: Body, widget: markdown }
```

This will add a new collection type called 'Pages' so now we have 'Blog' and 'Pages'. Nice!

## Adding field types

If you find that these aren't quite satisfying your needs, we can add extra fields. This might be useful for additional content. A good example for blogging is featured images. A lot of blog designs expect a featured image, which is a good example of an additional field we could use.

Extra fields can be added like so - see featured image below. This can be done for as many fields as you would like.

```yml
collections:
  - name: blog
    label: Blog
    folder: blog     
    create: true     
    fields:
      - { name: path, label: Path }
      - { name: date, label: Date, widget: datetime }
      - { name: title, label: Title }
      - { name: featured image, label: Featured Image, widget: image }
      - { name: body, label: Body, widget: markdown }
```

[Full documentation on collections and field types can be found on the Netlify CMS site.](https://www.netlifycms.org/docs/collection-types/)

## Wrapping up

Netlify CMS looks like a simple blogging CMS but can be utilised to great effect. We have created multiple page types with as many fields as we'd like.

The final `config.yml` file looks like this.

```yml
backend:   
  name: git-gateway
  branch: master

media_folder: static/assets
public_folder: assets

publish_mode: editorial_workflow

collections:
  - name: blog
    label: Blog
    folder: blog     
    create: true     
    fields:
      - { name: path, label: Path }
      - { name: date, label: Date, widget: datetime }
      - { name: title, label: Title }
      - { name: featured image, label: Featured Image, widget: image }
      - { name: body, label: Body, widget: markdown }

  - name: page
    label: Pages
    folder: page
    create: true
    slug: '{{slug}}'
    fields:
      - { name: path, label: Path }
      - { name: date, label: Date, widget: datetime }
      - { name: title, label: Title }
      - { name: body, label: Body, widget: markdown }
```

[You can see the setup for this blog on my github page](https://github.com/danspratling/blog)

[Netlify CMS documentation](https://www.netlifycms.org/docs/intro/)
