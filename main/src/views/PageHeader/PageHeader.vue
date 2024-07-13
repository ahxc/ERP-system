<template>
  <!-- <el-page-header>
    <template #breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: './page-header.html' }">
          homepage
        </el-breadcrumb-item>
        <el-breadcrumb-item><a href="./page-header.html">route 1</a></el-breadcrumb-item>
        <el-breadcrumb-item>route 2</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
</el-page-header> -->
  <el-date-picker type="datetime" placeholder="Select date and time" />
</template>

<script lang="ts">
export default {
  name: 'PageHeader',
}
</script>

<style lang="less" scoped></style>