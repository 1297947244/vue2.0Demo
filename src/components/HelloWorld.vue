<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span class="icon icon-qq"></span>
    <span class="icon icon-wechat"></span>
    <span class="icon icon-home"></span>
    <span class="icon icon-mobile"></span>
    <span class="icon icon-connection"></span>
    <h2>本次 demo 主要目标</h2>
    <ul class="todo-list">
      <li>
        1.引入 IcoMoon 字体图标
      </li>
      <li>
        2.Webpack 抽离文件，样式、Vendor.js
      </li>
      <li>
        3.引入 Vuex
      </li>
      <li>
        4.引入 Element UI
      </li>
      <li>
        5.封装 Axios request
      </li>
      <li>
        6.其他待补充
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.todo-list {
  width: 300px;
  margin: 0 auto;
  text-align: left;
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.icon {
  font-size: 48px;
}
</style>
