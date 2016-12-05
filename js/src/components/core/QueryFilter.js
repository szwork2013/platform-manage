/**
 * Created by jiangyu2016 on 16/10/15.
 */
import React, {Component, cloneElement, PropTypes} from 'react'
import classnames from 'classnames'
import {merge} from  'lodash'

import FilterItem from './query-filter/FilterItem'

class QueryFilter extends Component {
    constructor() {
        super()
        this.removeFilterItem = this.removeFilterItem.bind(this)
        this.updateFilterItem = this.updateFilterItem.bind(this)
        this.searchKey = ''
        this.state = {more: false, filterConditions: []}
    }

    getFilterCondition() {
        return this.state.filterConditions
    }

    getSearchCondition() {
        return {searchKey: this.searchKey}
    }

    getAllConditions() {
        return merge({}, {filters: this.getFilterCondition()}, this.getSearchCondition())
    }

    searchKeyChange(e) {
        this.searchKey = e.target.value
    }

    toggleMoreState() {
        this.setState({more: !this.state.more})
    }

    updateFilterItem(newFilterCondition) {
        let match = this.state.filterConditions.find(condition => condition.typeCode == newFilterCondition.typeCode)
        if (match) {
            let index = this.state.filterConditions.indexOf(match)
            this.state.filterConditions[index] = newFilterCondition
        } else {
            this.state.filterConditions.push(newFilterCondition)
        }
        this.forceUpdate()
    }

    removeFilterItem(typeCode) {
        let newFilterCondition = this.state.filterConditions.filter(filterCondition => {
            if (filterCondition.typeCode == typeCode) {
                filterCondition.filterItem.reset()
            }
            return filterCondition.typeCode != typeCode
        })
        this.setState({filterConditions: newFilterCondition})
    }

    clearAllFilterCondition() {
        this.state.filterConditions.forEach(filterCondition => filterCondition.filterItem.reset())
        this.setState({filterConditions: []})
    }

    filter() {
        this.props.beginFilter()
    }

    getSearchToolbar() {
        return (
            <div className="group-input">
                <form>
                    <input type="text" placeholder="搜索关键词" onChange={e => this.searchKeyChange(e)}/>
                    <button className="icon-search-btn" onClick={e => this.filter()}></button>
                </form>
            </div>
        )
    }

    getChildContext() {
        return {
            removeFilterItem: this.removeFilterItem,
            updateFilterItem: this.updateFilterItem
        }
    }

    render() {
        let buttons = this.props.children.map(child => {
            if (child.type == 'button') {
                return child
            }
        })

        let filterItems = this.props.children.map((child, index) => {
            if (child.type == FilterItem) {
                return child
            }
        })

        let showSelectFilterItem = () => {
            let showErrorTipUI = filterCondition => {
                if (filterCondition.invalidate) {
                    return (
                        <i className="fa fa-warning filter-item-warning" title={filterCondition.errorTip}></i>
                    )
                }
                return null
            }

            return this.state.filterConditions.map((filterCondition, index) => {
                return (
                    <a key={index}
                       className={classnames('select-result select-result2 select-resultqage', {'invalidate': filterCondition.invalidate})}>
                        <span>{filterCondition.typeText}： {filterCondition.typeItem.text}</span>
                        {showErrorTipUI(filterCondition)}
                        <i className="icon-close" onClick={e => this.removeFilterItem(filterCondition.typeCode)}></i>
                    </a>
                )
            })
        }

        return (
            <div className={classnames('query-filter', this.props.className)}>
                <div className="group-tools">
                    <div className="filter-toolbar">
                        {buttons}
                    </div>
                    <div className="group-search">
                        {this.getSearchToolbar()}
                        <div className={classnames('group-select-btn', {'selected': this.state.more})}
                             onClick={e => this.toggleMoreState()}>
                            <a>
                                <span>更多筛选</span>
                                <i className="icon-arrow-blue"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className={classnames('child', 'group-select-more', {'hide': !this.state.more})}>
                            <div className="group-top">
                                <div></div>
                            </div>
                            {filterItems}

                            <div className="group-select-more-btm flex">
                                <div style={{width: '80px'}}>筛选条件:</div>
                                <div className="flex1 ">
                                    <div className="clearfix">
                                        {showSelectFilterItem()}
                                    </div>
                                </div>
                                <div className="select-result">
                                    <button
                                        className={classnames('clear', {'disabled': this.state.filterConditions.length == 0})}
                                        onClick={e => this.clearAllFilterCondition()}
                                        disabled={this.state.filterConditions.length == 0}>
                                        清除
                                    </button>
                                    <button className="submit" onClick={e => this.filter()}>确定</button>
                                </div>
                                <div className="clear disabled"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

QueryFilter.propTypes = {
    className: PropTypes.string,
    beginFilter: PropTypes.func
}

QueryFilter.childContextTypes = {
    removeFilterItem: PropTypes.func,
    updateFilterItem: PropTypes.func
}

export default QueryFilter