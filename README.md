opengraph
=========

REST API to retrieve all open graph data include in a website.

Every website should follow the [opengraph protocol](http://ogp.me/). Facebook use it to generate its links. opengraph API allow you to retrieve the og parameters from any url.

I'm going to start with the Basic Metadata
- all  
http://api.opengraph.io/all?url='http://www.thibautdelille.com'  
```json
{
    title:'Thibaut Delille',
    description: 'Interactive Developer',
    image:'http://www.thibautdelille.com/og.png',
    url:'http://www.thibautdelille.com'
}
```
- title  
http://api.opengraph.io/title?url='http://www.thibautdelille.com'
```json
{
    title:'Thibaut Delille'
}
```
- description  
http://api.opengraph.io/description?url='http://www.thibautdelille.com'
```json
{
    description: 'Interactive Developer'
}
```
- image  
http://api.opengraph.io/image?url='http://www.thibautdelille.com'
```json
http://www.thibautdelille.com/og.png
```
- url  
http://api.opengraph.io/url?url='http://www.thibautdelille.com'
```json
{
    url:'http://www.thibautdelille.com'
}
```
