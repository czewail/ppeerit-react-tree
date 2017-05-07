import React from 'react'
import PropTypes from 'prop-types'

import 'font-awesome/css/font-awesome.css'
import './styles/tree.less'

import Node from './components/node'

export default class Tree extends React.Component {
    constructor(props){
        super(props)
    }
    // render component
    render() {
        return (
            <div>
                <ul className="pr-tree-container">
                    {this.props.data.map((node, index) => {
                        return (<Node node={node} key={index}/>)
                    })}
                </ul>
            </div>
        )
    }
}
Tree.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
}

