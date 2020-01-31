---
title: Creating a JAMstack site with Wordpress & Gatsby
date: 2020-01-30T17:39:49.710Z
description: >-
  Creating gatsby sites is great but sometimes clients want what they're
  comfortable with. Can we create a site without compromise?
---
The short answer, is yes. [Smashing Magazine did this exact thing on a massive scale](https://www.smashingmagazine.com/2020/01/migration-from-wordpress-to-jamstack/) so if they can do it, so can you. But the real question is - how?

There are lots of CMS' out there designed specifically for JAMstack which exist entirely independently from your site and these are great ([Prismic](https://prismic.io/), [Contentful](https://www.contentful.com/)). For smaller sites, there are also ones which work directly with markdown files and save them in your repo ([Forestry](https://forestry.io/), [NetlifyCMS](https://www.netlifycms.org/)). But both of these approaches require a change in client mindset, relearning technologies and convincing them of this change can be hard.

But if you don't want to use these approaches, old CMS' can still work just as well.

## Installing Wordpress and setting up the Rest API

\* make sure the permalinks are set to post name so the json api can populate

## Installing Gatsby and sourcing data from Wordpress
