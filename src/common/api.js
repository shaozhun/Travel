let url = {
  bannerLists: '/bannerimg',
  productLists: '/productList',
  partnerList: '/partnerList',
  expertList: '/expertList',
  contactList: '/contactList',
  producDetailtList: '/producDetailtList'
}

// 开发环境和生产环境的切换
let host = 'http://http://phpapi.soaz.xyz/qunar'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
