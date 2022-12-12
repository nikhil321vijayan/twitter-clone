# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Hooking up the react app with the firebase:

1. Create a firebase project on their web application.
2. Install firebase tools using "npm install -g firebase-tools" command.
3. Install firebase package on the react project with "npm i firebase".
4. Go to Project settings in Firebase and copy the firebaseConfig from the settings.
5. Create a new component called firebase.js in the react app and paste the config in it and create an exportable component as shown below:
   import firebase from "firebase";

   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
   apiKey: "AIzaSyA3ZsDciuD2KsQnY7YrNZjmGlHvo5-2QHY",
   authDomain: "twitter-clone-e9b7e.firebaseapp.com",
   projectId: "twitter-clone-e9b7e",
   storageBucket: "twitter-clone-e9b7e.appspot.com",
   messagingSenderId: "997135989318",
   appId: "1:997135989318:web:9fb8fa19144e989517a847",
   measurementId: "G-7QC801DREV",
   };

   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();

   export default db;

Deploying a react app on firebase:

1.  run "firebase init" in the react app.
2.  If not logged in, try logging in with the respective google account.
3.  Select "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys"
4.  Select option "Use an existing project"
5.  Then select the repo that needs to be deployed.
6.  Type "build" when it prompts you to select a build folder.
7.  Here's what it would look like:
    ? What do you want to use as your public directory? build
    ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
    ? Set up automatic builds and deploys with GitHub? No
8.  Do "npm run build" to create a build.
    Here's what you'll see:
    $ npm run build
    npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

    > twitter-clone@0.1.0 build
    > react-scripts build

    Creating an optimized production build...
    Compiled successfully.

    File sizes after gzip:

    198.3 kB build\static\js\main.8246b39a.js
    1.79 kB build\static\js\787.e8607b80.chunk.js
    1.12 kB build\static\css\main.3e25c136.css

    The project was built assuming it is hosted at /.
    You can control this with the homepage field in your package.json.

    The build folder is ready to be deployed.
    You may serve it with a static server:

    npm install -g serve
    serve -s build

    Find out more about deployment here:

    https://cra.link/deployment

9.  So the build is ready, all that needs to be done is to deploy it.
10. To deploy build run "firebase deploy" and here's what you'll see.
    $ firebase deploy

        === Deploying to 'twitter-clone-e9b7e'...

        i deploying hosting
        i hosting[twitter-clone-e9b7e]: beginning deploy...
        i hosting[twitter-clone-e9b7e]: found 14 files in build

        - hosting[twitter-clone-e9b7e]: file upload complete
          i hosting[twitter-clone-e9b7e]: finalizing version...
        - hosting[twitter-clone-e9b7e]: version finalized
          i hosting[twitter-clone-e9b7e]: releasing new version...
        - hosting[twitter-clone-e9b7e]: release complete

        - Deploy complete!

        Project Console: https://console.firebase.google.com/project/twitter-clone-e9b7e/overview
        Hosting URL: https://twitter-clone-e9b7e.web.app

    Deployment complete!
