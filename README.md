# react-application

## Command line
``
- npm install react react-dom --save
``

## Dependencies
``
- npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
- npm install webpack webpack-dev-server --save-dev
``

## Developer Dependencies
1. Create webpack.config.js with the following file:
https://gist.github.com/iamshaunjp/a1c8fb653ddd5d27c3e38ab55e3c0a44
2. Add scripts to package.json
``
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run build",
    "build": "webpack -d && webpack-dev-server --content-base src/ --inline --hot --port 1234"
  },
``
3. npm start
