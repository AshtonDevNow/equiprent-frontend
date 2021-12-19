// pages/show/show.js
Page({
  data: {
  },

  goToEditPage: function (e) {
    console.log(e.currentTarget.dataset)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`,
    })
  },
  
  onClick: function (e) {
    console.log(e.currentTarget.dataset)
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`,
    })
  },

  onReady: function () {
  },


  onLoad: function (options) {
    const page = this
    const product_id = options.id
    const auth = wx.getStorageSync('auth')
    const header = {
      'X-User-Email': auth.email,
      'X-User-Token': auth.token
    }
    console.log("This is the header", header)
    wx.request({
      url: `${getApp().globalData.baseUrl}/products/${product_id}`,
      header, 
      success(res) {
        page.setData({ product: res.data.product })
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