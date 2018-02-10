<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html, body{
    height: 100%;
    background-color: #ececec;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .ant-menu-dark.ant-menu-inline .ant-menu-item, .ant-menu-dark.ant-menu-vertical .ant-menu-item{
    text-align: left !important;
  }
  .ant-menu-vertical .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title{
    text-align: left !important;
  }
  .ant-menu-dark .ant-menu-inline.ant-menu-sub{
    background-color: #06101F !important;
    color: #7f8ea7 !important;
  }
  .ant-tabs-bar{
    margin-bottom: -3px !important;
  }
  .ant-tabs:not(.ant-tabs-vertical) > .ant-tabs-content > .ant-tabs-tabpane{
    min-height: 500px !important;
    background: #ffffff !important;
    padding: 15px !important;
  }
  .ant-tabs:not(.ant-tabs-vertical) > .ant-tabs-content-animated{
     -webkit-transition: margin-left 0s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
     transition: margin-left 0s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
  }
  .ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab{
    -webkit-transition: margin-left 0s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
    transition: margin-left 0s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
    font-size: 12px;
  }
  form .has-feedback > .ant-select .ant-select-arrow, form .has-feedback > .ant-select .ant-select-selection__clear, form .has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-arrow, form .has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-selection__clear{
    right: 8px !important;
  }
</style>
