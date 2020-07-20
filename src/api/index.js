import ajax from 'ajax'
import axios from 'axios'
// 首页的数据
export function reqIndexList(){
    return axios.get('/api/getIndexData')
}


