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

  // onLoad: function (options) {
  //   const id = options.id
  //   const app = getApp()
  //   const globalData = app.globalData
  //   const products = globalData.products
  //   console.log("HELLO", products)
  //   let product = products.filter(product => product.id == id)
  //   console.log("HELLO", product)
  //   const page = this
  //   page.setData(product[0])
  // },

  onReady: function () {
  },


  // This part not really working. Expect to show items
  onLoad: function () {
    const page = this
    const auth = wx.getStorageSync('auth')
    const header = {
      'X-User-Email': auth.email,
      'X-User-Token': auth.token
    }
    console.log("This is the header", header)
    wx.request({
      url: `${getApp().globalData.baseUrl}/products`,
      header, 
      success(res) {
        // console.log(res.data)
        page.setData({products:res.data.products})
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