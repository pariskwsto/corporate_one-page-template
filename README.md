# Corporate - One page template

> A professional, responsive one-page template for corporate websites

- Live Demo: [Visit Project Page](https://github.pariskwsto.com/corporate_one-page-template)
- Alternative URL: [GitHub Pages](https://pariskwsto.github.io/corporate_one-page-template)

![corporate_one-page-template-ss-1](https://user-images.githubusercontent.com/22442894/235480903-20286e79-fcb6-46a5-99ba-acbcf0bf1551.png)

This is a mobile-first HTML template designed for corporate businesses. It employs the BEM methodology for CSS, utilizes PostCSS for style processing, and follows object-oriented programming principles and module pattern in JavaScript. The build process, managed by Gulp, includes support for CSS prefixes, image optimization, lazy loading for improved performance, and more.

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

## Getting Started

Clone this repository:

```sh
git clone https://github.com/pariskwsto/corporate_one-page-template.git
```

Navigate into project root:

```sh
cd corporate_one-page-template
```

Install dependencies:

```sh
npm install && npm install gulp-cli@2.3.0 -g
```

For development:

```sh
gulp watch
```

For building:

```sh
gulp build
```

For built application preview:

```sh
gulp previewDist
```

## Tasks

### Build

```sh
gulp build
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
gulp icons
```

- It creates a new copy of svg and png icons set

### Preview Dist

```sh
gulp previewDist
```

- It runs the BrowserSync static server to preview the built project

### Scripts

```sh
gulp scripts
```

- It bundles the javascript files
- It transforms the javascript files from ES6+ to older version

### Styles

```sh
gulp styles
```

- It generates the stylesheets from the PostCSS of the css files
- It minifies the css files

### Watch

```sh
gulp watch
```

- It runs the BrowserSync static server to preview the project
- It watches for changes to the html file and reloads the browser
- It compiles the PostCSS of the css files
- It watches for changes to the css files and injects them into the browser
- It bundles the js scripts and transforms them from ES6 to older version
- It watches for changes to the js files and reloads the browser

### See all available tasks

```sh
gulp --tasks
```

## Technologies Used

- HTML5
- CSS3 (Flexbox)
- PostCSS
- Normalize.css
- BEM Methodology
- Mobile-first Design
- Responsive Images & Lazy Loading
- JavaScript (OOP & Module Pattern)
- jQuery
- Gulp
- BrowserSync
- Autoprefixer
- Icon Sprites
- Modernizr
- Babel
- Webpack
- Git & GitHub
- Node.js & NPM

## Credits

Designed and built by [pariskwsto](https://github.com/pariskwsto).

## License

This template is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Support

For support and questions, please open an issue in the repository or contact the designer directly.
