import React from 'react'

export default class Node extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            node: null,
            key: null,
            isOpen: false
        }
    }
    componentWillMount() {
        this.setState({
            node: this.props.node,
            index: this.props.index
        })
    }
    _renderNode = (node, key) => {
        return (
            <li key={key}>
                <span className="pr-tree-node">
                    <span className="pr-tree-expander">
                        <i className="fa fa-angle-right"></i>
                    </span>
                    <span className="pr-tree-icon">
                        <i className="fa fa-home"></i>
                    </span>
                    <a href="#" className="pr-tree-name">{node.name}</a>
                </span>
                {node.children ?
                    <ul className="pr-tree-container">
                        {node.children.map((node, key) => {
                            return this._renderNode(node, key)
                        })}
                    </ul>
                    :
                    null
                }
            </li>
        )
    }
    render() {
        return (
            this._renderNode(this.state.node, this.state.index)
        )
    }
}