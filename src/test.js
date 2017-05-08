import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'

import Tree from './tree'
import data from '../tests/data.js'

ReactDOM.render(
    <Tree data={data}/>,
    document.getElementById('tree')
)