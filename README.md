# Corporate - One page template

> A corporate one-page responsive template

- Live Demo: [https://github.pariskwsto.com/corporate_one-page-template/](https://github.pariskwsto.com/corporate_one-page-template/)
- GitHub Pages: [https://pariskwsto.github.io/corporate_one-page-template/](https://pariskwsto.github.io/corporate_one-page-template/)

![corporate_one-page-template-ss-1](https://user-images.githubusercontent.com/22442894/235325342-3f9db2d1-a3c1-426a-8dd3-75d0fe7b5f18.jpg)

## Contents

- [Getting Started](#getting-started)
- [Tasks](#tasks)
  - [Build](#build)
  - [Icons](#icons)
  - [Preview Dist](#preview-dist)
  - [Scripts](#scripts)
  - [Styles](#styles)
  - [Watch](#watch)
  - [See all available tasks](#see-all-available-tasks)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)
- [Support](#support)

This is a mobile-first HTML template website that promotes businesses. The website is built using the BEM methodology for CSS and uses PostCSS for style processing. The JavaScript code follows the object-oriented programming and module pattern, is transpiled with Babel, and is bundled with Webpack. The build process is handled by Gulp and includes support for CSS prefixes such as Autoprefixer and other Gulp plugins. The template also includes lazy loading for images to improve performance.

## Getting Started

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

# install gulp-cli globally (if you don't have it already)
$ npm install gulp-cli -g
```

Continue with the website development

```sh
# start the development server
$ gulp watch
```

or build and preview the website

```sh
# build the project
$ gulp build

# preview the built project
$ gulp previewDist
```

## Tasks

### Build

```sh
# build the project
$ gulp build
```

- It deletes the dist directory (if already exists)
- It creates a new copy of svg and png icons set
- It copies all directories and files from src to dist
- It optimizes the images
- It generate the stylesheets from the PostCSS of the css files
- It bundles the javascript files
- It minifies the css and js files

### Icons

```sh
# create new svg and png icons sprite
$ gulp icons
```

- It creates a new copy of svg and png icons set

### Preview Dist

```sh
# preview the built project
$ gulp previewDist
```

- It runs the BrowserSync static server to preview the built project

### Scripts

```sh
# bundle the javascript files
$ gulp scripts
```

- It bundles the javascript files
- It transforms the javascript files from ES6+ to older version

### Styles

```sh
# generate the stylesheets from the PostCSS of the css files
$ gulp styles
```

- It generates the stylesheets from the PostCSS of the css files
- It minifies the css files

### Watch

```sh
# start the development server
$ gulp watch
```

- It runs the BrowserSync static server to preview the project
- It watches for changes to the html file and reloads the browser
- It compiles the PostCSS of the css files
- It watches for changes to the css files and injects them into the browser
- It bundles the js scripts and transforms them from ES6 to older version
- It watches for changes to the js files and reloads the browser

### See all available tasks

```sh
$ gulp --tasks
```

## Technologies Used

- HTML5
- CSS3
- Flexbox
- PostCSS
- Normalize.css
- BEM Methodology
- Mobile-first
- JavaScript
- jQuery
- Gulp
- BrowserSync
- Autoprefixer
- Lazy loading images
- Responsive images
- Modernizr
- Babel
- Webpack
- LazySizes
- Picturefill
- Waypoints

## Credits

This template was designed and built by [pariskwsto](https://github.com/pariskwsto).

## License

This template is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Support

For support and questions, please open an issue in the repository or contact the designer directly.
