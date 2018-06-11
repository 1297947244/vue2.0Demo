import service from '../../../service/commonService'

function getMenus ({ commit }, params) {
  return service.getMenus(params).then(res => {
    let data = res.data.data.projects
    commit('setMenuArr', data)
    return data
  })
}

export default {
  getMenus
}
