import React from 'react'
import PropTypes from 'prop-types'

import './styles/tree.less'

export default class Tree extends React.Component {
    constructor(props){
        super(props)
    }
    // render node
    _renderNode(node, index) {
        console.log(node)
        return (
            <li key={index}>
                <div>
                    <span>{node.name}</span>
                </div>
            </li>
        )
    }
    // render component
    render() {
        return (
            <div>
                <ul className="pr-tree-container">
                    {this.props.data.map((node, index) => {
                        return this._renderNode(node, index)
                    })}
                </ul>
            </div>
        )
    }
}
Tree.PropTypes = {
    data: PropTypes.object,
}