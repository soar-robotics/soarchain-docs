# schain-docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn install
```
 
### Local Development

```
$ yarn start 
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Adding Markdown Document

Docusaurus supports dynamic routing that creates routes as folder structures. <br/>
In order to add a markdown document to Soar Documentation website. The steps are instructed below.

- First create a file inside docs folder named [yourmdname].md and that will be the url of your document. (dosc.soarchain.com/docs/yourmdname)

- Inside the document, you can define specific url or title for the document in the header of file. Format of configuration is shown below.

```
---
id: greeting
title: Hello
---
```
More information can be found on [Docusaurus Documentation](https://docusaurus.io/docs).


### Important

Important: Search only works for the statically built documentation (i.e., after you ran yarn start in your documentation folder).<br/>
Search does not work in development (i.e., when running yarn start). If you want to test search locally, first build the documentation with yarn build, and then serve it via yarn serve.
