// app.js
App({
  onLaunch() {
    const app = this
      wx.login({
        success (res) {

          if (res.code) {
            wx.request({
              url: `${app.globalData.baseUrl}/login`,
              method: 'POST',
              data: {
                code: res.code
              }, 
              success(res){
                console.log(res.data)
                wx.setStorageSync('auth', res.data.auth)
              }
            })
          } else {
            console.log('Login failed! ' + res.errMsg)
          }
        }
      })
  },
  
  globalData: {
    baseUrl: 'http://localhost:3000/api/v1',
    // baseUrl: 'your production url'
  }
  // globalData: {
  //   products: [{
  //     "id": 1,
  //     "name": "Tandem Bicycle",
  //     "price": "10",
  //     "description": "Fun for couples!"
  //     },
  //     {
  //       "id": 2,
  //       "name": "Mountain Bike",
  //       "price": "17",
  //       "description": "Full suspension"
  //       }
  //   ]
  // }
})
