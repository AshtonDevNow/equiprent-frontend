// pages/new/new.js
Page({
  data: {
  },

  bindSubmit: function (e) {
    const page = this
    const app = getApp()
    // const product = e.detail.value
    const auth = wx.getStorageSync('auth')
    const header = {
      'X-User-Email': auth.email,
      'X-User-Token': auth.token
    }
    wx.request({
      url: `${getApp().globalData.baseUrl}/products`,
      header, 
      success(res) {
        console.log(res.data)
        page.setData(res.data)
      }
    })
    app.globalData.products.push(product)
    wx.reLaunch({
      url: '/pages/products/products',
    })
  },




  onLoad: function (options) {
  },

  onReady: function () {
  },

  onShow: function () {
  },
 
  onHide: function () {
  },
 
  onUnload: function () {
  },

  onPullDownRefresh: function () {
  },

  onReachBottom: function () {
  },

  onShareAppMessage: function () {
  }
})