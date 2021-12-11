// pages/stories/stories.js
Page({
  // Page initial data
  data: {
  },

  onClick: function (e) {
    console.log(e.currentTarget.dataset)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },



  // Lifecycle function--Called when page load. Can use getApp in console as well. 
  onLoad: function (options) {
    // this below refers to the object that makes the function. In this case it is the page that triggers the onLoad call. Best to define at beginning of function.
    const page = this
    const app = getApp()
    const globalData = app.globalData
    page.setData(globalData)
  },




  // Lifecycle function--Called when page is initially rendered
  onReady: function () {
  },

  // Lifecycle function--Called when page show
  onShow: function () {
  },

  // Lifecycle function--Called when page hide
  onHide: function () {
  },

  // Lifecycle function--Called when page unload
  onUnload: function () {
  },

  // Page event handler function--Called when user drop down
  onPullDownRefresh: function () {
  },

  // Called when page reach bottom
  onReachBottom: function () {
  },

  // Called when user click on the top right corner to share
  onShareAppMessage: function () {
  }
})