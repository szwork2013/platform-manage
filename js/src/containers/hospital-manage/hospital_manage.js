/**
 * Created by jiangyukun on 2016/12/1.
 */
import {fromJS} from 'immutable'
import * as types from '../../constants/ActionTypes'
import * as phase from '../../constants/PhaseConstant'

const defaultValue = {total: 0, list: []}

export function hospitalManageList(state = defaultValue, action) {
  const iState = fromJS(state)

  return nextState()

  function nextState() {
    let nextIState = iState

    switch (action.type) {
      case types.FETCH_HOSPITAL_MANAGE_LIST + phase.SUCCESS:
        nextIState = fetchHospitalManageListSuccess()
        break

      case types.UPDATE_HOSPITAL_INFO + phase.SUCCESS:
        nextIState = updateHospitalInfoSuccess();
        break

      default:
        break
    }
    if (nextIState == iState) {
      return state
    }
    return nextIState.toJS()
  }

  // --------------------------------------

  function fetchHospitalManageListSuccess() {
    let {totalCount, list} = action
    return iState.set('total', totalCount).set('list', list || [])
  }

  function updateHospitalInfoSuccess() {
    let {newHospitalInfo} = action
    const {
      id,
      hospital_Name,
      province,
      city,
      hospitalSerialNumber,
      cityCode,
      hospital_In_Project,
      backend_Manager,
      operation_Manager
    } = newHospitalInfo

    return _updateList(iState, id, hospital => hospital.set('hospital_Name', hospital_Name)
      .set('province', province)
      .set('city', city)
      .set('hospitalSerialNumber', hospitalSerialNumber)
      .set('cityCode', cityCode)
      .set('hospital_In_Project', hospital_In_Project)
      .set('backend_Manager', backend_Manager)
      .set('operation_Manager', operation_Manager)
    )
  }

  // ---------------------------

  function _updateList(curIState, id, callback) {
    const list = curIState.get('list')
    const match = list.find(hospital => hospital.get('id') == id)
    return curIState.update('list', list => list.update(list.indexOf(match), hospital => callback(hospital)))
  }
}
