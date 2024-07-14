<template>
  <div class="page-header-container">
    <el-dropdown @command="onChangeLanguages">
      <span class="el-dropdown-link">
        {{ languages }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const languages = ref('选择语言')

function onChangeLanguages(params: any) {
  console.log(params)
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>