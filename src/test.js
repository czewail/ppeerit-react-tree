import React from 'react'
import ReactDOM from 'react-dom'

import Tree from './tree'
import data from '../tests/data.js'

ReactDOM.render(
    <Tree
        data={data.lists}
        handleSelect={(key, title) => {
            console.log(key)
            console.log(title)
            alert('you selected node: key = ' + key + ', title = ' + title)
        }}
        defineParentIcon='fa fa-user'
        defineChildIcon='fa fa-user'
        defineIconColor='#09f'
    />,
    document.getElementById('tree')
)