opengraph
=========

REST API to retrieve all open graph data included in a website.

Every website should follow the [opengraph protocol](http://ogp.me/). Facebook use it to generate its links. opengraph API allow you to retrieve the og parameters from any url.

I'm going to start with the Basic Metadata
- all  
http://api.ogapi.me/all?url='http://www.thibautdelille.com'  
```json
{
    title:'Thibaut Delille',
    description: 'Interactive Developer',
    image:'http://www.thibautdelille.com/og.png',
    url:'http://www.thibautdelille.com'
}
```
- title  
http://api.ogapi.me/title?url='http://www.thibautdelille.com'
```json
{
    title:'Thibaut Delille'
}
```
- description  
http://api.ogapi.me/description?url='http://www.thibautdelille.com'
```json
{
    description: 'Interactive Developer'
}
```
- image  
http://api.ogapi.me/image?url='http://www.thibautdelille.com'
```json
http://www.thibautdelille.com/og.png
```
- url  
http://api.ogapi.me/url?url='http://www.thibautdelille.com'
```json
{
    url:'http://www.thibautdelille.com'
}
```
