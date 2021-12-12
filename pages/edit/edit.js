// pages/edit/edit.js
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

  bindSubmit: function (e) {
    const page = this
    console.log(e)
    const product = e.detail.value
    const app = getApp()
    const products = app.globalData.products
    // Put data back into global data
    const index = products.findIndex(r => r.id == page.data.id)

    app.globalData.products[index] = product

    wx.reLaunch({
      url: '/pages/products/products',
    })
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