/**
 * Created by jiangyu2016 on 16/10/15.
 */

import React from 'react'
import {Route} from 'react-router'

import App from '../containers/App'
import NodeAuditing from '../containers/pages/node-auditing/NodeAuditing'
import HospitalManage from '../containers/pages/hospital-manage/HospitalManage'
import PatientSituationStatistics from '../containers/pages/statistics/patient-situation/PatientSituationStatistics'

export default (
    <Route path="platform">
        <Route path="inline" component={App}>
            <Route path="node-auditing" component={NodeAuditing}/>
            <Route path="hospital-manage" component={HospitalManage}/>
            <Route path="patient-situation-statistics" component={PatientSituationStatistics}/>
        </Route>
    </Route>
)
