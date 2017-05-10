import React from 'react'
import PropTypes from 'prop-types'

import 'font-awesome/css/font-awesome.css'
import './styles/tree.less'

import Node from './components/node'

export default class Tree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedKey: null
        }
    }

    handleSelect = (e) => {
        let key = e.target.getAttribute('data-id')
        let title = e.target.getAttribute('data-title')
        this.setState({
            selectedKey: key
        })
        this.props.handleSelect(key, title)
    }

    // render component
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
            handleSelect: this.handleSelect,
            selectedKey: this.state.selectedKey
        }
        return (
            <div>
                <ul className="pr-tree-container">
                    {this.props.data.map((node, key) => {
                        return (<Node node={node} key={key} {...cloneProps}/>)
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
    defineKey: PropTypes.string,
    defineTitle: PropTypes.string,
    defineChildren: PropTypes.string,
    defineParentIcon: PropTypes.string,
    defineChildIcon: PropTypes.string,
    defineIconColor: PropTypes.string,
    onSelect: PropTypes.func
}
Tree.defaultProps = {
    data: [],
    defineKey: 'id',
    defineTitle: 'name',
    defineChildren: 'children',
    defineParentIcon: 'fa fa-folder',
    defineChildIcon: 'fa fa-file',
    defineIconColor: 'black'
}

