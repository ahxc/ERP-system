<template>
  <div class="nav-bar-container">
    <el-drawer v-model="store.state.drawer" destroy-on-close direction="ltr" size="240" :with-header="false">
      <el-page-header :icon="null" @back="onClickMenu" style="padding: 6px 20px;border-bottom: 1px solid #e7e7e8;">
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