// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

 
    wx.login({
      success: res => {
      }
    })
  },
  globalData: {
    products: [{
      "id": 1,
      "name": "bicycle1",
      "price": "10",
      "description": "janky but functional"
      },
      {
        "id": 2,
        "name": "bicycle1",
        "price": "10",
        "description": "janky but functional"
        }
    ]
  }
})
