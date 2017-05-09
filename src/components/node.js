import React from 'react'
import classNames from 'classnames'

export default class Node extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            node: null,
            isOpen: false
        }
    }

    componentWillMount() {
        this.setState({
            node: this.props.node,
            isOpen: this.props.node.open ? true : false
        })
    }

    _handleClickOpenNode = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const props = this.props
        const cloneProps = {
            root: this,
            defineKey: props.defineKey,
            defineTitle: props.defineTitle,
            defineChildren: props.defineChildren,
            defineParentIcon: props.defineParentIcon,
            defineChildIcon: props.defineChildIcon,
            defineIconColor: props.defineIconColor,
            handleSelect: props.handleSelect,
        }
        return (
            <li>
                <span className="pr-tree-node">
                    {this.state.node[this.props.defineChildren] ?
                        <span className="pr-tree-expander" onClick={this._handleClickOpenNode}>
                            <i className={classNames('fa', {'fa-angle-right': !this.state.isOpen}, {'fa-angle-down': this.state.isOpen})}></i>
                        </span>
                    : <span className="pr-tree-none" onClick={this._handleClickOpenNode}/>}
                    <span className="pr-tree-icon" style={{color: props.defineIconColor}}>
                        {this.state.node.icon ?
                            <i className={this.state.node.icon}></i> :
                            this.state.node[this.props.defineChildren] ?
                                <i className={props.defineParentIcon}></i> :
                                <i className={props.defineChildIcon}></i>
                        }
                    </span>
                    <a href="#" onClick={props.handleSelect} data-id={this.state.node[this.props.defineKey]} data-title={this.state.node[this.props.defineTitle]} className="pr-tree-name">{this.state.node[this.props.defineTitle]}</a>
                </span>
                {this.state.node[this.props.defineChildren] ?
                    this.state.isOpen ?
                        <ul className="pr-tree-container">
                            {this.state.node[this.props.defineChildren].map((node, key) => {
                                return <Node node={node} key={key} {...cloneProps}/>
                            })}
                        </ul>
                        : null
                    : null}
            </li>
        )
    }
}