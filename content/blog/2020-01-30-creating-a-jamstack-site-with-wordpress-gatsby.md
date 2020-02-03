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

You can install a local version of wordpress by [downloading it from the website](https://wordpress.org/download/). This will give you a basic wordpress site set up and if you point your local server at it (i use MAMP) you can see the default wordpress site. This is a perfectly valid way of using a wordpress site if you wanted to, but i want to run it headlessly for the performance benefits and preferred coding experience.

To do this we also need to enable the WordPress JSON API. This is a default feature of WordPress but the initial site config doesn't allow it so we need to ensure that the permalinks are set up correctly.\
\
We need to set the permalinks up so they don't use the "plain" option.\
In the settings choose **Permalinks > Post Name** (any other option should work too). The short answer, is yes. [Smashing Magazine did this exact thing on a massive scale](https://www.smashingmagazine.com/2020/01/migration-from-wordpress-to-jamstack/) so if they can do it, so can you. But the real question is - how?

There are lots of CMS' out there designed specifically for JAMstack which exist entirely independently from your site and these are great ([Prismic](https://prismic.io/), [Contentful](https://www.contentful.com/)). For smaller sites, there are also ones which work directly with markdown files and save them in your repo ([Forestry](https://forestry.io/), [NetlifyCMS](https://www.netlifycms.org/)). But both of these approaches require a change in client mindset, relearning technologies and convincing them of this change can be hard.

But if you don't want to use these approaches, old CMS' can still work just as well.

## Installing Wordpress and setting up the Rest API

You can install a local version of wordpress by [downloading it from the website](https://wordpress.org/download/). This will give you a basic wordpress site set up and if you point your local server at it (i use MAMP) you can see the default wordpress site  (when setting up your local server, don't use a fake SSL certificate if you have the option to do so). 

This is a perfectly valid way of using a wordpress site if you wanted to, but i want to run it headlessly for the performance benefits and preferred coding experience.

First we need to make sure that we can work locally. The GraphQL plugin (and node) will error if we're set up using a fake SSL certificate, so we want to use HTTP, but this will cause an error when trying to login to the admin panel as by default WordPress requires https to login. We can override that setting by adding this config option to wp-config.php. You can change "false" to an .env config variable later if you want to (so that it "does" force https on a production site).

```php
// wp-config.php

/**
 * For developers: WordPress force SSL to login
 */
define( 'FORCE_SSL_ADMIN', false );/**
```

\
We also need to enable the WordPress JSON API so we can access our data. This is a default feature of WordPress but the initial site config doesn't allow it so we need to ensure that the permalinks are set up correctly.\
\
We need to set the permalinks up so they don't use the "plain" option.\
In the settings choose **Permalinks > Post Name** (any other option should work too).

Wordpress Settings image ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

The api should now be working and if you go to \`/wp-json/\` you should see a lot of json. This is what we want!

And that's all the WordPress set up we need for now.

## Installing Gatsby and sourcing data from Wordpress

* make sure the permalinks are set to post name so the json api can populate
* make sure that https isn't required so that the gatsby plugin works correctly locally

```php
/**
 * For developers: WordPress force SSL to login
 *
 * Ensure the SSL admin is not required for local environments but is enabled
 * for staging/prod
 */
define( 'FORCE_SSL_ADMIN', false );/**
```

## Installing Gatsby and sourcing data from Wordpress
