import axios from 'axios'

const url = 'https://www.easy-mock.com/mock/59bd0a76e0dc663341ac99f7/example/mock'

function getMenus (params) {
  return axios.get(url)
    .then(function (response) {
      return Promise.resolve(response.data)
    })
    .catch(function (error) {
      return Promise.reject(error)
    })
}

export default {
  getMenus
}
