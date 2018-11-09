<template>
  <div>page1
    <el-date-picker
      v-model="value1"
      type="datetime"
      :placeholder="$t('message.datePlaceholder')">
    </el-date-picker>
  </div>
</template>
<script>

export default {
  data () {
    return {
      value1: ''
    }
  }
}
</script>
