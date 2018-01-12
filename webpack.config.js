const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        // 别名,简化路径 ( $ => ./src )
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        //自动解析扩展名
        extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
        // 查找模块的目录
        modules: ['node_modules']
    },
    extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
    // (开发环境中)增强浏览器调试信息,一般情况下 cheap-module-eval-source-map 是最优选则
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                // babel的配置参数，可以写在.babelrc文件里也可以写在这里
                options: {
                    presets: ['env', 'react']
                }
            },
            {
                loader: 'eslint-loader',
                options: {
                    enforce: 'pre' // 加载器的执行顺序 (默认正常执行); 可选值: pre | post，应该在编译前就检查代码规范
                }
            }]
        },
        {
            test: /\.s?css$/,
            exclude: /node_modules/,
            // use 是 loader 的简写,等价于 use: [{loader: 'style-loader'}]
            // 应该可以写成 [ 'style-loader', 'css-loader', { loader: 'postcss-loader', options: {...} } ]
            use: [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        require('autoprefixer')
                    ]
                }
            }
            ]
        },
        {
            test: /\.(gif|jpg|jpeg|png)$/,
            // url-loader 额外提供将图片转换成字符串的功能
            use: [
                'file-loader',
                {
                    loader: 'url-loader',
                    options: {
                        limit: 10240 // 10KB 以下的图片会转成 base64 字符串
                    }
                }
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 使用指定模板
            // filename: 'index.html', // 要写入 html 的文件名( template => filename ),默认为 index.html
            title: 'Hello World',
            favicon: './public/favicon.ico'
        })
    ]
};
