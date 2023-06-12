# ===============React JS========================

# What is reactjs?
    It is simple javascript library. It uses different library/packages for new feature. it created by Facebook.

# What is react features/key prenciples? / Why should we use React? / Advantages of React?
    1. Component-based architecture
    2. Virtual DOM
    3. Declarative syntax
    4. Unidirectional data flow
    5. Reusability
    6. State management
    7. Lifecycle methods
        mounting
        updating
        unmounting
    8. React Hooks 16.8 reactjs 
    9. Easy to Learn
# First Hello Program in ReactJS / React setup using CDN link

# Webpack => 
    this is bundler, which generate bundles of js, css & assets of react project.  
  
# Setup webpack
    Step 1. setup package file & webpack package
        a. npm init -y
        b. npm i webpack webpack-cli
    Step 2. create dist folder & create entry file
    Step 3. Add entry filename in package.json file
    Step 4. Run command `npm run build` to create build
    Step 5. check development & production mode
    Step 6. rename entry file
    Step 7. change dist filename
    Step 8. Run project on server
           command =>  `npm i webpack-dev-server --save-dev`
            add into webpack.config.js => devServer: {
                static:path.join(__dirname, 'dist'),
                compress: true,
                port: 3000
            },

           package.json inside script => "start": "webpack-dev-server --mode development --open"

    Step 9. css loading
    Step 10. image/font loading
    Step 11. move index.html into src folder
     npm i html-webpack-plugin --save-dev
     
        plugins: HtmlWebpackPlugin({
        filename: 'index.html' ,
        template: './src/index.html'
        '})





        



    add starting file name in josn file inside script

npm run build
explain webpack & it's feature

create webpack.config.js and remove warning 
module.exports={
mode: "development" / "production"
}

rename name index.js to app.js
and add entry point into webpack.config.js
module.exports={
mode: "development" / "production",
entry: "./src/app.js"
}


change dist file name => main.js

add path
const path = require('path')module.exports={
mode: "development" / "production",
entry: "./src/app.js",
output: {
  path: path.resolve(__dirname, dist),
  filename: 'out.js'
}
}

install 
npm i webpack-dev-server --save-dev

create script inside package.json
"start": "webpack-dev-server --mode development --open"

set server inside webpack.config.js
const path = require('path')module.exports={
mode: "development" / "production",
entry: "./src/app.js",
output: {
  path: path.resolve(__dirname, dist),
  filename: 'out.js'
},
devServer: {
static:path.join(__dirname, dist),
compress: true,
port: 3000
}
}


setup css loaing package
npm i --save-dev style-loader css-loader
after install set up css loader inside webpack.config.jsset server inside webpack.config.js
const path = require('path')module.exports={
mode: "development" / "production",
entry: "./src/app.js",
output: {
  path: path.resolve(__dirname, dist),
  filename: 'out.js'
},
devServer: {
static:path.join(__dirname, dist),
compress: true,
port: 3000
},

module:{
  rules:[
   {
   test:/\.css$/,
   use:['style-loader', css-loader]
  }
]
}
}


move index.html into src folder
npm i html-webpack-plugin --save-dev

add plugins inside webpack.config

const HtmlWebpackPlugin = require('html-webpack-plugin')

plugins: HtmlWebpackPlugin({
filename: 'index.html' ,
template: './src/index.html'
'})

# npm
    1. npm init / npm init (--y/-y) 
    2. npm install package-name
    3. npm install package-name --save-dev
    4. npm install -g package-name
    5. npm ls
    6. npm update
    7. npm uninstall package-name
    8. npm run script-name
    9. npm -v
    10. npm search package-name
    11. npm outdated
    12 npm cache clean




# Webpack Features (bundler) 
defferent type of bundler => parcel/vite

    1. Module bundling
    2. Code splitting
    3. Loaders (css-loader style-loader, file-loader, url-loader) 
    4. Plugins  (html-webpack-plugin, HotModuleReplacementPlugin)
    5. Development server / Multiple environments and configuration
    
        //for development (webpack-dev-server)

        webpack file
        const path = require('path');

        module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            port: 8080,
        },
        };

        package.json scripts
        "scripts": {
            "start": "webpack-dev-server --open"
        }

        // for production 
        "scripts": {
            "build": "webpack --mode production"
        }

    6. Code optimization / Performance optimization
        1. Minification (terser-webpack-plugin)
        2. Tree Shaking
        3. Code Splitting
            a. lazy loading
            b. dynamic loading/imports 
        4. Caching and Long-Term Caching:
        5. webpack-bundle-analyzer
    
    7. Asset management
        1. file-loader / url-loader
        2. json-loader

        module.exports = {
        // ...
        module: {
            rules: [
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                name: '[name].[hash].[ext]',
                outputPath: 'images/',
                    },
                    },
                    ],  
                    },
                ],
            },
            };

    Integration with the ecosystem
        1. Integration with Babel (babel-loader, @babel/preset-env)
        2. Integration with CSS preprocessors
        3. Integration with React
        4. Integration with Testing Framework
        5. ESLint (eslint eslint-loader)













