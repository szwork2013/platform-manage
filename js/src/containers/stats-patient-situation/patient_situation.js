/**
 * Created by jiangyukun on 2016/12/8.
 */
import {fromJS} from 'immutable'
import * as types from '../../constants/ActionTypes'
import * as phase from '../../constants/PhaseConstant'

const defaultValue = {
  total: 0,
  list: [],
  loading: false,
  excelHistoryList: []
}

export function patientSituationList(state = defaultValue, action) {
  const iState = fromJS(state)
  return nextState()

  function nextState() {
    let nextIState = iState
    switch (action.type) {
      case types.FETCH_PATIENT_SITUATION_LIST + phase.START:
        nextIState = iState.set('loading', true)
        break

      case types.FETCH_PATIENT_SITUATION_LIST + phase.SUCCESS:
        nextIState = fetchListSuccess()
        break

      case types.FETCH_PATIENT_SITUATION_LIST + phase.FAILURE:
        nextIState = iState.set('loading', false)
        break

      case types.FETCH_PATIENT_SITUATION_EXCEL_HISTORY_LIST + phase.START:
        nextIState = iState.set('excelHistoryList', [])
        break

      case types.FETCH_PATIENT_SITUATION_EXCEL_HISTORY_LIST + phase.SUCCESS:
        nextIState = iState.set('excelHistoryList', action.list)
        break
    }
    if (nextIState == iState) {
      return state
    }
    return nextIState.toJS()
  }

//

  function fetchListSuccess() {
    let {total, list} = action
    return iState.set('total', total).set('list', list).set('loading', false)
  }
}
