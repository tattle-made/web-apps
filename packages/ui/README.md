# UI library for tattle components

## UI engineering notes
`npm run storybook` will start storybook in development mode

## Publishing to npm
in package.json, ensure that the entry point is set correctly
"main": "src/index.js"
then run npm run build:package
npm publish --access public