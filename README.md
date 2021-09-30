<h3 align="center">Template Project</h3>

<p align="center">
    This is a ready-to-use template project for personal projects.
</p>

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#tech-stack">Tech Stack</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li>
      <a href="#template-development-pipeline">Template Development Pipeline</a>
    </li>
    <li>
      <a href="#project-pipeline">Project Pipeline</a>
    </li>
    <li>
      <a href="#notes">Notes</a>
      <ul>
        <li><a href="#updating-global-tools">Updating global tools</a></li>
        <li><a href="#clean-reinstall-of-newest-versions-of-all-project-packages">Clean reinstall of newest versions of all project packages</a></li>
      </ul>
    </li>
  </ol>
</details>

### Tech Stack

The current tech stack includes:

-  Webpack, Babel and TypeScript
-  ReactJS
   -  using Suspense API
   -  w. Recoil as state management
-  SCSS as preprocessor CSS
-  Firebase as database and hosting
-  Cypress as testing framework
-  MaterialUI as UI framework
-  Lottie for animated SVGs
-  prettier-standard as linting and formatting tool

### Getting Started

-  Make sure to have Node.js, npm and firebase-tools installed globally (see further below for clean reinstall)
-  `npm i`
-  Delete unneeded packages and files (e.g. recoil)
   -  (TO DO) Expand on this.
-  Update "name", "version", "description" and "repository" in package.json
-  Update HTMLWebpackPlugin attributes in webpack.common.js
-  Update .firebaserc and firebase.config.ts
-  Update LICENSE.txt
-  Update README.md

**Preferably, but not necessary:**

-  Install VSCode extension: "Prettier-Standard - JavaScript formatter"
-  Add the following lines to your VSCode settings.json:

```
"editor.defaultFormatter": "numso.prettier-standard-vscode",
"editor.formatOnSave": true,
```

### Template Development Pipeline

-  Is react-scripts necessary? Try removing it, and see if everything still works...

-  Find a way to ensure 'single source of truth' when it comes to CSS

   -  CSS Modules does not seem to fix the issue, unless you create typing files for each and every scss file. (see https://medium.com/@sapegin/css-modules-with-typescript-and-webpack-6b221ebe5f10, package no longer maintained)
   -  I could use styled-components instead, but this would entirely replace SCSS, and I would have to find out how to use CSS functions such as 'clamp' in JS.

-  Precommit hook for linting and formatting (see https://prettier.io/docs/en/precommit.html)

-  Transfer example features to another repo

   -  for libraries like recoil, firestore, fetch, lottie: replace their actual usage in this project with simple links to examples in the other repo.

-  Check the data fetching library Relay out. It should work well with the new Suspense API.

   -  Relay requires GraphQL backend... see https://medium.com/@lukepighetti/yes-you-can-query-firebase-with-graphql-e79a45990f22
   -  Instead check out React Query.

-  Feature-driven architecture? https://www.blog.duomly.com/how-to-create-frontend-project-structure-that-scales-and-is-easy-to-maintain/

### Project Pipeline

-  Initial portfolio showcasing everything from Santanism to PC Builder, Spellcaster's Archive, Mapmaker Framework and the Unity Stealth Game to placeholders for eventual later projects like the Black Lemon Test Case.

-  Spellcaster's Archive v2 as a Web App.

-  Spellcaster's Archive mobile helper.

-  forsøgsperson.dk

### Notes

##### Updating global tools

-  Uninstall Node and npm
   -  Uninstall Node from Windows applications
   -  delete npm and npm-cache folders from AppData/Roaming
-  Install Node for Windows from the website
-  restart command line (e.g. Git Bash)
-  `npm i -g npm`
-  `npm i -g firebase-tools`

##### Clean reinstall of newest versions of all project packages

-  `rm -rf node_modules`
-  delete package.json and package-lock.json
-  install all packages (this list can not be expected to be updated, so check package.json for changes and additions that also need to be installed):

```
npm i -D webpack webpack-dev-server webpack-cli file-loader style-loader css-loader html-webpack-loader image-webpack-loader css-minimizer-webpack-plugin terser-webpack-plugin
npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-env @babel/plugin-transform-modules-commonjs @babel/plugin-proposal-object-rest-spread @babel/plugin-proposal-class-properties
npm i -D typescript ts-loader @babel/preset-typescript
npm i -D sass sass-loader
npm i lodash
npm i firebase
npm i react react-dom react-scripts react-router-dom react-error-boundary lottie-web
npm i -D @babel/preset-react
npm i -D cypress @cypress/webpack-dev-server @cypress/react @testing-library/cypress
npm i -D @types/lodash @types/react @types/react-dom @types/react-router-dom @types/cypress @types/chai
npm i recoil recoil-persist
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material
npm i -D prettier-standard@16.3.0
```
