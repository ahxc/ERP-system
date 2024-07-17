<template>
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
    <template #extra>
      <el-space size="large">
        <el-dropdown @command="onChangeLanguages">
          <span style="display: flex;align-items: center;cursor: pointer;">
            {{ $t('header.languages') }}
            <el-icon color="#cccccc">
              <CaretBottom />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="(item, index) in store.state.languageList" :key="index" :command="item.code">
                <el-icon :style="{ opacity: item.code === store.state.locale ? 1 : 0 }" color="#cccccc">
                  <CaretRight />
                </el-icon>
                {{ item.label }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-space>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { mapMutations } from 'vuex';
import { i18n } from '@/main'

const store = useStore()
const { setState } = mapMutations(['setState'])

function onChangeLanguages(code = ''): void {
  store.commit('setState', { locale: code }) // 全局语言环境名称
  i18n.global.locale.value = code // 修改自定义文本语言环境
}

function onClickMenu() {
  store.commit('setState', { drawer: !store.state.drawer })
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>