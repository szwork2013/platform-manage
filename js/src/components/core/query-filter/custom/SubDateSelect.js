/**
 * Created by jiangyukun on 2016/11/27.
 */
import React, {Component, PropTypes} from 'react'
import DatePicker from 'antd/lib/date-picker'
import classnames  from 'classnames'

class SubDateSelect extends Component {
    constructor(props, context) {
        super(props)
        this.startValue = null
        this.endValue = null
        this.state = {active: false}
        context.addSubItem(this)
    }

    onStartDateChange(moment) {
        this.startValue = moment
        this.switchToSelectState()
    }

    onEndDateChange(moment) {
        this.endValue = moment
        this.switchToSelectState()
    }

    switchToSelectState() {
        if (!this.startValue && !this.endValue) {
            return
        }
        let errorTip = ''
        let text = ''
        let startText = this.startValue && this.startValue.format('YYYY-MM-DD')
        let endText = this.endValue && this.endValue.format('YYYY-MM-DD')

        if (!startText) {
            text = endText + ' 之前'
        } else if (!endText) {
            text = startText + ' 之后'
        } else {
            text = startText + ' 到 ' + endText
            if (startText > endText) {
                errorTip = '开始时间不能大于结束时间！'
            }
        }
        this.setState({selected: true})
        this.context.selectSubItem(text, {startValue: startText, endValue: endText}, text, errorTip
        )
    }

    onChange(typeItem) {
        if (typeItem.value) {
            this.setState({active: true})
        } else {
            this.setState({active: false})
        }
        this.startValue = null
        this.endValue = null
    }

    reset() {
        this.startValue = null
        this.endValue = null
        this.setState({active: false})
    }

    render() {
        return (
            <div className={classnames('custom-item-wrap', {'hidden': !this.state.active})}>

                <DatePicker inputPrefixCls="my-input"
                            placeholder="开始时间"
                            size="small"
                            format="YYYY-MM-DD"
                            value={this.startValue}
                            onChange={e => this.onStartDateChange(e)}/>

                -

                <DatePicker inputPrefixCls="my-input"
                            placeholder="结束时间"
                            size="small"
                            format="YYYY-MM-DD"
                            value={this.endValue}
                            onChange={e => this.onEndDateChange(e)}/>
            </div>
        )
    }
}

SubDateSelect.contextTypes = {
    selectSubItem: PropTypes.func,
    addSubItem: PropTypes.func
}

export default SubDateSelect
