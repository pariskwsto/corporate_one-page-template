# Corporate - One page template

> A corporate one-page responsive template, designed and coded by [Paris Kostopoulos](https://github.com/pariskwsto). 

Demo: [https://pariskwsto.github.io/corporate_one-page-template/](https://pariskwsto.github.io/corporate_one-page-template/)

![Mockup demo](screenshots/pic.png)

## Contents
* [Requirements](#requirements)
* [Install and Use](#install-and-use)
* [Tasks](#tasks)
    - [Icons](#icons)
    - [Watch](#watch)
    - [Build](#build)
    - [Preview Build](#preview-build)
    - [See all available tasks](#see-all-available-tasks)
* [License](#license)

## Requirements:
- [Node.js](https://nodejs.org/)
- Build sytem: [Gulp](https://gulpjs.com/)

## Install and Use

Start by cloning this repository

```sh
# HTTPS
$ git clone https://github.com/pariskwsto/corporate_one-page-template.git

# cd into project root
$ cd corporate_one-page-template
```

then

```sh
# install node modules
$ npm install

# install gulp-cli globally
$ npm install gulp-cli -g
```

## Tasks

#### Icons

```sh
# create new svg and png icons sprite
$ gulp icons
```

* It creates a new copy of svg and png icons set

#### Watch

```sh
# start the development server
$ gulp watch
```

* It watches for changes to the html file and reloads the browser
* It compiles the PostCSS of the css files
* It watches for changes to the css files and injects them into the browser
* It bundles the js scripts and transforms them from ES6 to older version
* It watches for changes to the js files and reloads the browser

#### Build

```sh
# build the project
$ gulp build
```

* It deletes the build file (if already exists)
* It creates a new copy of svg and png icons set
* It copies all directories and files
* It optimizes the images
* It minifies the stylesheets
* It minifies the javascript files

#### Preview Build

```sh
# preview the built project
$ gulp previewBuild
```

* It runs the BrowserSync static server to preview the built project

#### See all available tasks

```sh
$ gulp --tasks
```

## License
[MIT](https://github.com/pariskwsto/corporate_one-page-template/blob/master/LICENSE.md)
