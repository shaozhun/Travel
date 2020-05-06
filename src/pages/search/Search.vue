<template>
  <div>
    <Search-Header></Search-Header>
    <Search-List></Search-List>
  </div>
</template>
<script>
import SearchHeader from './components/Header'
import SearchList from './components/List'
export default {
  name: 'Search',
  data () {
    return {
    }
  },
  components: {
    SearchHeader, SearchList
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped></style>
