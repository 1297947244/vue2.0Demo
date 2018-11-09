<template>
  <div class="head">
    <h3>Bernie 基础架构</h3>
    <div class="user">
      <div class="language" @click="switchLanguage">{{lang === 'zh' ? 'English' : '中文'}}</div>
      <span class="avatar-img" :style="{ backgroundImage: 'url(' + avatar_url + ')' }"></span>
      熊超</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      avatar_url: 'https://avatars2.githubusercontent.com/u/18436456?s=40&v=4'
    }
  },

  computed: {
    ...mapState('common', ['lang'])
  },

  methods: {
    ...mapMutations('common', ['switchLang']),
    switchLanguage () {
      let lang = ''
      if (this.lang === 'en') {
        lang = 'zh'
      } else {
        lang = 'en'
      }
      this.switchLang(lang)
    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  h3 {
    display: inline-block;
    margin: 0;
  }
  .user {
    float: right;
    margin-right: 20px;
  }
  .language {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  .avatar-img {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 10px;
    vertical-align: middle;
    background: center no-repeat;
    background-size: cover;
    background-color: #D8D8D8;
  }
}

</style>
