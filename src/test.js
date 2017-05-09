import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'

import Tree from './tree'
import data from '../tests/data.js'

ReactDOM.render(
    <Tree
        data={data.lists}
        handleSelect={(e) => {
            console.log(e.target.getAttribute('data-title'))
            console.log(e.target.getAttribute('data-id'))
        }}
        defineParentIcon='fa fa-home'
        defineChildIcon='fa fa-lock'
        defineIconColor='#09f'
    />,
    document.getElementById('tree')
)