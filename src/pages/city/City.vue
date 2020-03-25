<template>
  <div>
    <City-Header></City-Header>
    <City-Search></City-Search>
    <City-List></City-List>
    <City-Alphabet></City-Alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader, CitySearch, CityList, CityAlphabet
  }
}
</script>
<style lang="stylus" scoped>

</style>
