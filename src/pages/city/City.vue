<template>
  <div>
    <City-Header></City-Header>
    <City-Search :cities="cities"></City-Search>
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
import url from '../../common/api'
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
      axios.get(url.cityData)
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
