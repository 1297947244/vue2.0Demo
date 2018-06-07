<template>
  <div>
    <h3>VUEX DEMO</h3>
    <el-table
      :data="menuArr"
      border
      align="left"
      stripe
      style="width: 100%">
      <el-table-column
        prop="number"
        sortable
        label="编码">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="string"
        label="星级">
      </el-table-column>
      <el-table-column
        prop="url"
        label="URL">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址" />
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },

  computed: {
    ...mapState('common', ['menuArr'])
  },

  created () {
    this.getMenus()
  },

  methods: {
    ...mapActions('common', ['getMenus'])
  }
}

</script>
