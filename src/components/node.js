import React from 'react'
import classNames from 'classnames'

export default class Node extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    componentWillMount() {
        this.setState({
            isOpen: this.props.node.open ? true : false
        })
    }

    _handleClickOpenNode = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    handleSelect = (e) => {
        this.props.handleSelect(e)
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
            selectedKey: props.selectedKey
        }
        return (
            <li>
                {Number(props.node[props.defineKey]) === Number(props.selectedKey) ?
                    <div className="tree-wholerow"></div>
                    : null
                }
                <span className={classNames('pr-tree-node')}>
                    {props.node[props.defineChildren].length ?
                        <span className="pr-tree-expander" onClick={this._handleClickOpenNode}>
                            <i className={classNames('fa', {'fa-angle-right': !this.state.isOpen}, {'fa-angle-down': this.state.isOpen})}></i>
                        </span>
                    : <span className="pr-tree-none" onClick={this._handleClickOpenNode}/>}
                    <span className="pr-tree-icon" style={{color: props.defineIconColor}}>
                        {this.props.node.icon ?
                            <i className={this.props.node.icon}></i> :
                            this.props.node[this.props.defineChildren].length ?
                                <i className={props.defineParentIcon}></i> :
                                <i className={props.defineChildIcon}></i>
                        }
                    </span>
                    <a href="#" onClick={this.handleSelect} data-id={props.node[props.defineKey]} data-title={props.node[props.defineTitle]} className="pr-tree-name">{props.node[props.defineTitle]}</a>
                </span>
                {props.node[props.defineChildren].length ?
                    this.state.isOpen ?
                        <ul className="pr-tree-container">
                            {props.node[props.defineChildren].map((node, key) => {
                                return (<Node node={node} key={key} {...cloneProps}/>)
                            })}
                        </ul>
                        : null
                    : null}
            </li>
        )
    }
}