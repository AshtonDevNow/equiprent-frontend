// pages/show/show.js
Page({
  data: {
  },

  


  onLoad: function (options) {
    const id = options.id
    const app = getApp()
    const globalData = app.globalData
    const products = globalData.products
    console.log("HELLO", products)
    let product = products.filter(product => product.id == id)
    console.log("HELLO", product)
    const page = this
    page.setData(product[0])
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