<template>
  <!-- ! 外层设置一个套壳用来scoped，因为el组件直接作为root，不会生成scoped的hash（原因未知）原生dom会生成。 -->
  <!-- ! 而打包后，el组件上的自定义类在css文件会加上hash（见下一行），所以和实际dom el不匹配。 -->
  <!-- 编译后css文件：.drawer[data-v-30084855] .el-drawer__body -->
  <!-- 实际dom：.drawer .el-drawer__body -->
  <div class="nav-bar-container">
    <el-drawer v-model="store.state.drawer" destroy-on-close direction="ltr" size="240" :with-header="false">
      <el-page-header class="common-page-header" :icon="null" @back="onClickMenu">
        <template #title>
          <el-icon size="18">
            <Menu />
          </el-icon>
        </template>
        <!-- 标题 -->
        <template #content>
          <div style="cursor: pointer;">
            {{ $t('header.title') }}
          </div>
        </template>
      </el-page-header>
      <el-scrollbar class="el-scrollbar" :always="false">
        <el-menu default-active="2">
          <el-menu-item index="w">
            <span>Navigator Two</span>
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()

function onClickMenu() {
  store.commit('setState', { drawer: !store.state.drawer })
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>