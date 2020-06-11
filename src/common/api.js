let url = {
  indexSwiperData: '/indexSwiperData.php',
  indexIconData: '/indexIconData.php',
  indexHotData: 'indexHotData.php',
  indexWeekendData: '/indexWeekendData.php',
  detailById: '/detailById.php',
  detailswiperById: '/detailswiperById.php',
  indexLikeData: '/indexLikeData.php',
  welcome: '/welcome.php',
  indexOrder: '/indexOrder.php',
  cityData: '/cityData.php',
  weenkendTitle: '/weenendTitleByid.php',
  weekendDetailcs: '/weekendDetailcs.php',
  weekendDetailgz: '/weekendDetailgz.php'

}

// 开发环境和生产环境的切换
// let host = 'http://phpapi.soaz.xyz/qunar'
let host = process.env.API_ROOT

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
