opengraph
=========

REST API to retrieve all open graph data included in a website.

Every website should follow the [opengraph protocol](http://ogp.me/). Facebook use it to generate its links. opengraph API allow you to retrieve the og parameters from any url.
## Installation
`npm install` to install the dependencies  
`npm start` to start the server on port 3000: http://localhost:3000/
`npm test` to run the tests (using http://vowsjs.org/)

## API
- /all?url=[url] 
```json
{
    title:'Thibaut Delille',
    description: 'Interactive Developer',
    image:'http://www.thibautdelille.com/og.png',
    url:'http://www.thibautdelille.com'
}
```
- /title?url=[url]  
```json
{
    title:'Thibaut Delille'
}
```
- /description?url=[url]  
```json
{
    description: 'Interactive Developer'
}
```
- /image?url=[url]  
```json
http://www.thibautdelille.com/og.png
```
- /url?url=[url]   
```json
{
    url:'http://www.thibautdelille.com'
}
```
