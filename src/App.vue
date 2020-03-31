<template>
  <div id="app">
    <keep-alive exclude="Detail,Search,City">
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
