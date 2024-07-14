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
    <NavBar />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from './views/PageHeader/PageHeader.vue'
import NavBar from './views/NavBar/NavBar.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const languageDic: any = {
  zhCn,
  en,
}

export default defineComponent({
  name: 'App',
  components: {
    PageHeader, NavBar
  },
  data() {
    return {
      locale: zhCn, // element组件语言
    }
  },
  watch: {
    '$store.state.locale': function (newValue = 'zhCn'): void {
      this.locale = languageDic[newValue]
    }
  }
})
</script>

<style lang="less">
@import '@/assets/base.less';
</style>
