## How to Get Start with React App

### How to create React app
- npx create-react-app my-app

### How to Start React app 
#### Navigate to the created folder and start your application.
- npm start 
<hr>

## How to Upload React App to Github
### - Create a GitHub repository.
### - Add the GitHub repository to your local repository as a remote:
- git remote add origin https://github.com/<b>username/repository-name.git</b>

### - Push the local repository to GitHub
- git branch -M main
- git add .
- git commit -m "update build for gh-pages"
- git push --set-upstream origin main

## How to Deploy a React App with GitHub Pages
### - Install github pages in project dependency
- npm install gh-pages
### - Next, Go to your package.json file and add the homepage which will be the home URL of the app:
<pre>
"homepage": "https://github.com/<b>username/repository-name.git</b>",
"scripts": {
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build", 
 "start": "react-scripts start",
 "build": "react-scripts build",
 "test": "react-scripts test",
 "eject": "react-scripts eject"
 }
 </pre>
### - Now Run Deploy Command
- npm run deploy

## How to update React in GitHub pages
### - Update the changes
- npm run deploy
- git add .
- git commit -m "update build for gh-pages"
- git push -u origin master

