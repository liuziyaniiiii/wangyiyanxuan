import ajax from 'ajax'
import axios from 'axios'
// 首页的数据
export function reqIndexList(){
    return axios.get('/api/getIndexData')
}

// 首页其他的数据
export function reqIndexOtherList(){
    return axios.get('/api/getIndexOtherData')
}

// 搜索页导航的数据
export function reqSearchList(){
    return axios.get('/api/getSearchData')
}

// 搜索页右侧的内容
export function reqCateLists(){
    return axios.get('/api/getCateListsData')
}
