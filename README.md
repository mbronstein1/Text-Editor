# Text-Editor-Challenge-19

## Description
This is the nineteenth challenge in the Northwestern Coding Bootcamp (Module 19). In this module, we learned about PWAs (Progressive Web Apps), which prepare an application to be used by users offline, whether through the browser or downloaded and viewed in a separate window. While given a large amount of starter code, we were expected to write the code to store data in the browser DB (indexedDB), create and activate Service Workers with the InjectManifest NPM package, and bundle everything using Webpack. The functioning application should allow the user to write and delete notes in this text editor, as well as install the application on the user's local machine.

Viewing the "Application" tab in the devTools inspector should present an active service worker, as well as any data that has been inputted by the user via IndexedDB -> jate -> jate-store.

The application can also successfully download to your local environment and will work without internet connection by clicking the "Install" button (because of the service worker, after initialization, the web version will also work without internet connection).

## Link to live page
[Live Link](https://enigmatic-meadow-56082.herokuapp.com/)

## Screenshot
![Webpage Screenshot](./assets/Screen%20Shot%202022-10-28%20at%203.20.33%20PM.png)
![Webpage Screenshot](./assets/Screen%20Shot%202022-10-28%20at%203.21.11%20PM.png)

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```