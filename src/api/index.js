import ajax from 'ajax'
import axios from 'axios'
// 首页的数据
export function reqIndexList(){
    return axios.get('/api/getIndexData')
}

// 搜索页的数据
export function reqSearchList(){
    return axios.get('/api/getSearchData')
}
