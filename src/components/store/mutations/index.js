function setMenuArr (state, data) {
  state.menuArr = data
}

function switchLang (state, lang) {
  state.lang = lang
  window.app.$i18n.locale = lang
}

export default {
  setMenuArr,
  switchLang
}
