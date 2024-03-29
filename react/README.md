
HTML & CSS
javascript
React

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
  

# Webpack Features (bundler) 
defferent type of bundler => parcel/vite

    1. Module bundling
    2. Code splitting
    3. Loaders (css-loader style-loader, file-loader, url-loader) 
    4. Plugins  (html-webpack-plugin, HotModuleReplacementPlugin)
    5. Development server / Multiple environments and configuration
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
    8. Integration with the ecosystem
        1. Integration with Babel (babel-loader, @babel/preset-env)
        JSX => Javascript XML
        2. Integration with CSS preprocessors
        3. Integration with React
        4. Integration with Testing Framework
        5. ESLint (eslint eslint-loader)
  
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
      `npm install css-loader style-loader --save-dev`
      module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
      }
    setup babel/jsx/html
      `npm install react react-dom`
      `npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev`
        module.exports = {
          entry: './src/index.js',
          output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
          },
          module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                  },
                },
              },
            ],
          },
          resolve: {
            extensions: ['.js', '.jsx'],
          },
        };


        {
          "presets": ["@babel/preset-env", "@babel/preset-react"]
        }

    Step 10. image/font loading
      npm install file-loader --save-dev

        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images',
                },
              },
            ],
          },

    Step 11. move index.html into src folder
        npm i html-webpack-plugin --save-dev
     
        plugins: HtmlWebpackPlugin({
        filename: 'index.html' ,
        template: './src/index.html'
        '})

# npm => it's node package and javascript package manager
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



# React Setup
 npx create-react-app project_name

 cd prject_name

 npm run start/npm start
 npm run build

# props => 
props(Short of Property) is a property of a component, we send props from parent component to child and when we recieve props in child we can not edit but we use all properties of props in child component.


function MyFun(props) {
  console.log(param1)
}

<MyFun name="amar"/>

# state => 
it's properties of react which  refers to an internal memory mechanism, when we update state then it renders the ui for updating state value. 
there are two types of state.
Stateless => fucntion is a stateless component 
Stateful =>  class is a stateful
# state behaviour =>
 1. it updates componet value in asynchronic behaviour
 2. if we want to update state value in UI directly then we can use callback/promise

# components => 
component is a a component is a reusable, self-contained building block that part of the user interface which recieves props and return a react elements.
component allows developers to create modular and reusable code.
Type of component
1. class component
2. function component

# Class Component ==> it's stateful, it manages state
   life cycle method
    phase 1=>  constructor
    phase 2=> componentDidMount
    phase 3=> componentDidUpdate(prevProps, prevState)
    phase 4=> componentWillUnmount()

    other method ==>
      1. shouldComponentUpdate(nextProps, nextState) => pure component
      2. static getDerivedStateFromProps(nextProps, prevState)
      3. getSnapshotBeforeUpdate(prevProps, prevState)

# functional component => it's stateless, it does not manage state and life cycle method
  lifecycle method
  1. useState
  2. useEffect

# difference between class component and functional component
  1. class component
      a. We use javascript but we inherit React.Component from react library
      b. it is stateful because it maintains the state
      c. we have to constructor to initialize state and props
      d. we use multiple function to handle lifecycle method
        componentDidMount, componentDidUpdate, componentWillUnmount
      e. we use render() to render the UI (JSX)
      f. it's more complex and more verbose then functional component
  2. functional component
    a. WE use javascript regular and arrow function ut we don't need to inherit any property.
    b. It is stateless because it does not have state management.
    c. It uses hooks to manage lifecycle and state management
      useState ==> it's for state management
      useReducer ===> it's also manage the state
      useEffect ===> it manages the lifecycle
    d. it returns UI(JSX) as we return something in normal javascript function.
    e. it's very easy to use and learn, it's very light weight then the class component
    f. React provides lots of hooks that makes to easy to work in react.




# todo list (Project)

1. requirement
2. clarifications
3. tech stack
functional component, state manage, useEffect

# controlled component and uncontrolled component
  1. When we manage form and input fields by state/useState, it's called controlled component.

  2. When we can not manage form and input fields by state/useState and we use ref,normal form or other way (Formik library), it's called uncontrolled component.

# Fragement
  when we use multiple html/jsx layout in single component then we must use fragement. there are three type of fragement in react.
    1. <div></div> I(Avoid)
    2. React.Fragement (use when we need to pass key)
    3. <></> (common use)

    Note: it maintains react performance.

# key ==>
   we must use unique key when we use map to iteration to itrate UI like <li></li> or other html/jsx dom.
   If we don't use key using map then react gives warning.
   it maintains also react performance.

# Routing/React Router DOM
  1. install react router dom
          npm i react-router-dom
  2. import react-router-dom on main page
      a. createBrowserRouter
      b. RouterProvider
      c. Link
      d. useParams
      f. useNavigate
        when we redirect one page to other, we use useNavigate in v6>
        but in older version we use useHistory.
      g. useLocation

# Lifting State up / State Lifting
We can send data from child to parent component to use lifiting state up in react.
  1. useing useState()
  2. using function

# Hooks
  Hooks is a function which inject in react without sideeffects. React introduced hooks in 16.8 version. we can use state management and lifecycle and other react feature with writing class component.
# Rules of hooks ==>
  1. We have to import all hooks on top of file in react.
  2. hook must be used use prefix in hooks name.

inbuilt hooks in reacts:

1. useState ==> state management
2. useReducer ==> it is also for state management as similer to useState but it uses for multiple condition and complex data management.

3. useEffect ===> maintain life cycle, it has asynchromous
4. useLayoutEffect ==> maintain life cycle but it has synchronous behaviour

 
5. useMemo & useCallback => useMemo and useCallback use for memoise expnesive caculation which save re-rendering. useMemo returns value and useCallback return function. it use for maintion performance of application.


6. useRef ==> We can manipulate dom in react using useRef
7. useContext

Project - Ecommerce
features===>
login
registration
forgot password
user profile
product list
filters
search
cart
product order
payment gateway(by pass)
shipping address
order tracking
transaction
invoice

APIs list
https://fakestoreapi.com/docs
https://fakeapi.platzi.com/en/rest/files
other api http://sahosoftweb.com/swagger/index.html


tech stack
react
hooks
context api

UI
Bootsrap

setup boostrap
registrtion, login, logout 
context api, session, useReducer, multiple environment, api itnergation


form
contextAPI
run api ==> api structure
setup session

data flow
1. props
2. contextAPI/ useContext 
3. redux/ redux toolkit/mobx

create context
provider
consumer


registration
form
multiple values (name, passpword, address, email)
after submit form we consuming context api for registration

1. direct login after registration
2. after registration we can reidrect on login




















    



      
       
























