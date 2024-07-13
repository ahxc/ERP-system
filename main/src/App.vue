<template>
  <el-config-provider :locale="locale">
    <el-container class="layout-container">
      <el-header class="header-container">
        <PageHeader />
      </el-header>
      <el-main class="content-container">
        <el-scrollbar height="100%" :always="false">
          <div id="subapp-container"></div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from './views/PageHeader/PageHeader.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

export default defineComponent({
  components: {
    PageHeader,
  },
  data() {
    return {
      locale: zhCn,
    }
  },
  created() {
  }
})
</script>

<style lang="less">
@import '@/assets/base.less';
</style>
