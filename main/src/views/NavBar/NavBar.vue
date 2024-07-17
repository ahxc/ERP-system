<template>
  <el-drawer class="drawer" v-model="store.state.drawer" destroy-on-close direction="ltr" size="240"
    :with-header="false">
    <el-page-header class="el-page-header" :icon="null" @back="onClickMenu">
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
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-drawer>
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