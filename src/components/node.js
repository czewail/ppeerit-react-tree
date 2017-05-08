import React from 'react'
import classNames from 'classnames'

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
            node: this.props.node
        })
    }
    _handleClickOpenNode = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <li>
                <span className="pr-tree-node">
                    {this.state.node.children ?
                        <span className="pr-tree-expander" onClick={this._handleClickOpenNode}>
                            <i className={classNames('fa', {'fa-angle-right': !this.state.isOpen},{'fa-angle-down': this.state.isOpen})}></i>
                        </span>

                        :
                        <span className="pr-tree-none" onClick={this._handleClickOpenNode}/>
                    }

                    <span className="pr-tree-icon">
                        <i className="fa fa-home"></i>
                    </span>
                    <a href="#" className="pr-tree-name">{this.state.node.name}</a>
                </span>
                {this.state.node.children ?
                    this.state.isOpen ?
                        <ul className="pr-tree-container">
                            {this.state.node.children.map((node, key) => {
                                return <Node node={node} key={key}/>
                            })}
                        </ul>
                        : null
                    : null
                }
            </li>
        )
    }
}