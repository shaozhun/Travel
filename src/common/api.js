let url = {
  indexSwiperData: '/indexSwiperData.php',
  indexIconData: '/indexIconData.php',
  indexHotData: '/indexHotData.php',
  indexWeekendData: '/indexWeekendData.php'
}

// 开发环境和生产环境的切换
let host = 'http://phpapi.soaz.xyz/qunar'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
