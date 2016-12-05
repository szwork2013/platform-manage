/**
 * Created by jiangyukun on 2016/11/29.
 */
function _unKnowData() {
    return '错误数据'
}

export function getVisitCardState(state) {
    if (!state) {
        return '未知'
    } else if (state == '1') {
        return '是'
    } else if (state == '2') {
        return '否'
    } else if (state == '3') {
        return '未知'
    }
    return _unKnowData()
}

export function getYesOrNoText(flag) {
    if (flag == 0) {
        return '否'
    }
    if (flag == 1) {
        return '是'
    }
    return _unKnowData()
}

export function isCompleteVisit(state) {
    if (state == '1') {
        return '是';
    } else if (state == '0') {
        return '否';
    } else if (state == '2') {
        return '未联系';
    }
}