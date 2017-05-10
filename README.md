# ppeerit-react-tree

## Installation
use npm
```sh
$ npm install ppeerit-react-tree --save
```
## Import into your project
```js
// ES6
import Tree from 'ppeerit-react-tree';
```
## use
```js
<Tree
    data=[{...},{...}] // data source, it must be set
    defineKey="id" // the node's key of object default is `id`
    defineTitle="name" // the node's show text key of object, default is `name`
    defineChildren="children" // the node's children key of object. default is `children`
    handleSelect={(key, title) => {
        console.log(key)
        console.log(title)
    }}
    defineParentIcon='fa fa-user' // if node has children, show this icon class, you can use your project's icon class
    defineChildIcon='fa fa-user' //if node doesn't has children, balabla......
    defineIconColor='#09f' // the icon's color style
/>
```

more at next version......