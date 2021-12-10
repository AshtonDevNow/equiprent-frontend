// pages/products/products.js
Page({
  data: { 
  },

  onLoad: function (options) {
    const page = this
    const app = getApp()
    const globalData = getApp.globalData
    console.log(globalData)
    // this is the page in context of onLoad function
    page.setData(globalData)
    // gets page to populate data and rerender
  },

  // This takes user to the show page to view individual product
  onClick: function (e) {
    console.log(e.currentTarget.dataset)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      // interpolating js
      url: `/pages/show/show?id=${id}`,
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