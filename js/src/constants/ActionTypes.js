/**
 * Created by jiangyukun on 2016/12/1.
 */

// error
export const ADD_ERROR = 'ADD_ERROR'
export const DELETE_ERROR = 'DELETE_ERROR'

//通用
export const INIT_USERNAME = 'INIT_USERNAME'
export const FETCH_HOSPITAL_LIST = 'FETCH_HOSPITAL_LIST'
export const UPDATE_REMARK = 'UPDATE_REMARK'
export const FETCH_POSITION_LIST = 'FETCH_POSITION_LIST'
export const FETCH_DEPARTMENT_LIST = 'FETCH_DEPARTMENT_LIST'

//节点审核
export const FETCH_PATIENT_LIST = 'FETCH_PATIENT_LIST'
export const FETCH_PATIENT_INFO = 'FETCH_PATIENT_INFO'
export const UPDATE_AUDITING_STATE = 'UPDATE_AUDITING_STATE'
export const UPDATE_PATIENT_INFO = 'UPDATE_PATIENT_INFO'
export const UPDATE_VISIT_CARD = 'UPDATE_VISIT_CARD'
export const UPDATE_NODE_AUDITING_REMARK = 'UPDATE_NODE_AUDITING_REMARK'
export const UPDATE_IS_COMPLETE_VISIT = 'UPDATE_IS_COMPLETE_VISIT'

//病人编辑
export const FETCH_PATIENT_PAGINATE_LIST = 'FETCH_PATIENT_PAGINATE_LIST'

//医生审核
export const FETCH_DOCTOR_PAGINATE_LIST = 'FETCH_DOCTOR_PAGINATE_LIST'
export const UPDATE_DOCTOR_AUDITING_STATE = 'UPDATE_DOCTOR_AUDITING_STATE'
export const UPDATE_DOCTOR_INFO = 'UPDATE_DOCTOR_INFO'
export const ADD_NEW_DOCTOR = 'ADD_NEW_DOCTOR'

// 化验单
export const FETCH_LABORATORY_SHEET_LIST = 'FETCH_LABORATORY_SHEET_LIST'
export const FETCH_PICTURE_URL_LIST = 'FETCH_PICTURE_URL_LIST'
export const MARK_SHEET_ITEM = 'MARK_SHEET_ITEM'
export const EDIT_LABORATORY_SHEET_REMARK = 'EDIT_LABORATORY_SHEET_REMARK'
export const CLEAR_LABORATORY_SHEET_REMARK = 'CLEAR_LABORATORY_SHEET_REMARK'

// 医院管理
export const FETCH_HOSPITAL_MANAGE_LIST = 'FETCH_HOSPITAL_MANAGE_LIST'
export const FETCH_PROVINCE_LIST = 'FETCH_PROVINCE_LIST'
export const FETCH_CITY_LIST = 'FETCH_CITY_LIST'
export const ADD_HOSPITAL = 'ADD_HOSPITAL'
export const FETCH_HOSPITAL_INFO = 'FETCH_HOSPITAL_INFO'
export const UPDATE_HOSPITAL_INFO = 'UPDATE_HOSPITAL_INFO'
export const FETCH_CITY_MAX_SERIAL_NUMBER = 'FETCH_CITY_MAX_SERIAL_NUMBER'

// App更新
export const FETCH_APP_UPDATE_LIST = 'FETCH_APP_UPDATE_LIST'

//病人评分统计
export const FETCH_PATIENT_SITUATION_LIST = 'FETCH_PATIENT_SITUATION_LIST'

// 中心验单情况表
export const FETCH_HOSPITAL_ASSAY_REPORT_PAGINATE_LIST = 'FETCH_HOSPITAL_ASSAY_REPORT_PAGINATE_LIST'
export const FETCH_HISTORY_ASSAY_REPORT_LIST = 'FETCH_HISTORY_ASSAY_REPORT_LIST'

// 短信管理
export const FETCH_SMS_PAGINATE_LIST = 'FETCH_SMS_PAGINATE_LIST'
export const FETCH_BACKEND_MEMBER_LIST = 'FETCH_BACKEND_MEMBER_LIST'
export const FETCH_USER_TYPE_AND_NAME = 'FETCH_USER_TYPE_AND_NAME'
export const FETCH_ALL_SMS_TEMPLATE = 'FETCH_ALL_SMS_TEMPLATE'
export const ADD_SMS_TEMPLATE = 'ADD_SMS_TEMPLATE'
export const CLEAR_ADD_SMS_TEMPLATE_SUCCESS = 'CLEAR_ADD_SMS_TEMPLATE_SUCCESS'
export const CLEAR_SEND_SMS_SUCCESS = 'CLEAR_SEND_SMS_SUCCESS'
export const SEND_SMS_MESSAGE = 'SEND_SMS_MESSAGE'

// 医生门诊时间
export const FETCH_OUT_PATIENT_TIME_PAGINATE_LIST = 'FETCH_OUT_PATIENT_TIME_PAGINATE_LIST'
export const FETCH_DOCTOR_DATE_DETAIL = 'FETCH_DOCTOR_DATE_DETAIL'
export const UPDATE_OUT_PATIENT_REMARK = 'UPDATE_OUT_PATIENT_REMARK'
export const RESET_OUT_PATIENT_REMARK = 'RESET_OUT_PATIENT_REMARK'

// 服药记录
export const FETCH_TAKE_MEDICINE_RECORD_PAGINATE_LIST = 'FETCH_TAKE_MEDICINE_RECORD_PAGINATE_LIST'
export const UPDATE_TAKE_MEDICINE_RECORD_REMARK = 'UPDATE_TAKE_MEDICINE_RECORD_REMARK'
export const CLEAR_TAKE_MEDICINE_RECORD_REMARK_UPDATED = 'CLEAR_TAKE_MEDICINE_RECORD_REMARK_UPDATED'

// 医生综合评分
export const FETCH_DOCTOR_COMPREHENSIVE_SCORE_PAGINATE_LIST = 'FETCH_DOCTOR_COMPREHENSIVE_SCORE_PAGINATE_LIST'
export const UPDATE_DOCTOR_COMPREHENSIVE_SCORE_REMARK = 'UPDATE_DOCTOR_COMPREHENSIVE_SCORE_REMARK'
export const CLEAR_DOCTOR_COMPREHENSIVE_SCORE_REMARK = 'CLEAR_DOCTOR_COMPREHENSIVE_SCORE_REMARK'
export const FETCH_DOCTOR_STATISTICS_LIST = 'FETCH_DOCTOR_STATISTICS_LIST'

// 待办工作跟踪
export const FETCH_TODO_WORK_PAGINATE_LIST = 'FETCH_TODO_WORK_PAGINATE_LIST'
export const UPDATE_TODO_WORK_REMARK = 'UPDATE_TODO_WORK_REMARK'
export const CLEAR_UPDATE_TODO_WORK_REMARK = 'CLEAR_UPDATE_TODO_WORK_REMARK'

// 入组情况
export const enrollment = {
  FETCH_LIST: 'ENROLLMENT__FETCH_LIST'
}

// 在线医生评分
export const onlineDoctor = {
  FETCH_LIST: 'ONLINE_DOCTOR__FETCH_LIST',
  FETCH_STATISTICS_INFO: 'ONLINE_DOCTOR__FETCH_STATISTICS_INFO',
  UPDATE_REMARK: 'ONLINE_DOCTOR__UPDATE_REMARK',
  UPDATE_IS_STATISTICS: 'ONLINE_DOCTOR__UPDATE_IS_STATISTICS',
  CLEAR_REMARK: 'ONLINE_DOCTOR__CLEAR_REMARK',
  CLEAR_STATISTICS_UPDATED: 'ONLINE_DOCTOR__CLEAR_STATISTICS_UPDATED'
}

// 历史记录
export const historyMessage = {
  FETCH_SINGLE_HISTORY_MESSAGE_LIST: 'FETCH_SINGLE_HISTORY_MESSAGE_LIST',
  FETCH_GROUP_HISTORY_MESSAGE_LIST: 'FETCH_GROUP_HISTORY_MESSAGE_LIST',
  FETCH_HUANXIN_GROUP_LIST: 'FETCH_HUANXIN_GROUP_LIST',
  FETCH_HISTORY_EXCEL_LIST: 'FETCH_HISTORY_EXCEL_LIST'
}

// 智能分析系统
export const smartAnalytic = {
  FETCH_LIST: 'FETCH_SMART_ANALYTIC_LIST',

}
