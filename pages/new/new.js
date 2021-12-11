// pages/new/new.js
Page({
  data: {
  },


  bindSubmit: function (e) {
    const app = getApp()
    const page = this
    const product = e.detail.value
    console.log(product)
    // Now auto-increment to add id
    const products = app.globalData.products
    const next_id = products[products.length-1].id + 1
    product.id = next_id

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