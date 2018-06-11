import http from '../utils/http'

const url = 'https://www.easy-mock.com/mock/59bd0a76e0dc663341ac99f7/example/mock'

function getMenus (params) {
  return http.get(url)
}

export default {
  getMenus
}
