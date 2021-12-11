// pages/index/index.js
Page({

  // swiper
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500, 
    item: "blah"
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
// end swiper code 




  onLoad: function (options) {
    // this below refers to the object that makes the function. In this case it is the page that triggers the onLoad call. Best to define at beginning of function.
    const page = this
    const app = getApp()
    const globalData = app.globalData
    page.setData(globalData)
  },

  onClick: function (e) {
    console.log(e.currentTarget.dataset)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
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