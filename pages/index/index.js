// pages/index/index.js
Page({

  // swiper
  onShareAppMessage() {
    // return {
    //   title: 'scroll-view',
    //   path: 'page/component/pages/scroll-view/scroll-view'
    // }
  },

  data: {
    toView: 'green'
  },

  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },
  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
// end scroll code 


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

  goToProductsPage: function (e) {
    console.log("clicked")
    wx.navigateTo({
      url: '/pages/products/products',
    })
  },


  goToProductsPage: function () {
    wx.navigateTo({
      url: '/pages/products/products',
    })
  },


  // goToMyListings: function () {
  //   wx.navigateTo({
  //     url: '/pages/my-listings/my-listings',
  //   })
  // },



  onReady: function () {
  },


  onShow: function () {
    const page = this
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


