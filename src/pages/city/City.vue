<template>
  <div>
    <City-Header></City-Header>
    <City-Search></City-Search>
    <City-List :hot="hotcities" :cities="cities" :letter="letter"></City-List>
    <City-Alphabet :cities="cities" @change="handleLetterChange"></City-Alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  data () {
    return {
      hotcities: null,
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader, CitySearch, CityList, CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('http://101.37.204.199/api/cityData.php')
        .then(this.handleGetCItyInfoSucc)
    },
    handleGetCItyInfoSucc (res) {
      this.hotcities = res.data.data.hotcities
      this.cities = res.data.data.cities
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>

</style>
