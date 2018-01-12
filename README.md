# Second Classroom

This is Second Classroom project!

---
## Create Project

```javascript
mkdir second && cd second
npm init
npm install webpack --save-dev
```

---
## Configuration

参考 [博客原文](http://blog.csdn.net/dengdengda/article/details/77892052) 

### Webpack

Create webpack configuration file `webpack.config.js`  [[官方文档]](https://doc.webpack-china.org/configuration/)

```javascript
const path = require('path);
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    ...
}
```

Add `HtmlWebpackPlugin`, `react`, `react-dom`, `babel-cli`, `babel-loader`, `babel-preset-env`, `babel-preset-react`, `style-loader`, `css-loader`, `postcss-loader`, `autoprefixer`, `precss`, `file-loader`, `url-loader`, `eslint`, `eslint-loader`, `eslint-plugin-react` and so on.

**Note:** You can remove unused package with `npm prune` .

```javascript
npm install *** --save-dev  # install package into development environment
npm prune   # remove unused package
```

### ESLint

```javascript
eslint --init
```