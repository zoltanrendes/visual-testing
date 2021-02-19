# Cypress Demo wih Applitools

## Pre-requisites:

1. Install Node.js from [here](https://nodejs.org/en/)

## Add Applitools Eyes to an Existing Node.js Project

1. Set up environment variable `APPLITOOLS_API_KEY` with your own API key.
   - Login to Applitools > Click on the Person icon > My API Key
   - Linux/Mac: export APPLITOOLS_API_KEY=<your_key>
   - Windows: set APPLITOOLS_API_KEY=<your_key>
2. run `npm install @applitools/eyes-cypress --save-dev`
3. run `npx eyes-setup`
4. Update the tests with the Applitools functionality (You can get more info on the tutorial web page and NPM docs)
5. run the existing tests

## Cypress tutorial

Please see https://applitools.com/tutorials/cypress.html for all the details.

## NPM docs

The following NPM docs contains all the update information for this SDK
https://www.npmjs.com/package/@applitools/eyes-cypress#configure-plugin-and-commands
