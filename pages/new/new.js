// pages/new/new.js
Page({
  data: {
  },

  // sendDataToBack(e){
  //   console.log(e)
  //   const name = e.detail.value.name
  //   const description = e.detail.value.description
  //   const category = e.detail.value.category
  //   // const product = {name: name, description: description, category: category}
  //   const product = {name, description, category}

  //   wx.request({
  //     url: `${getApp().globalData.baseUrl}/products`,
  //     method: 'POST',
  //     data: {product}
  //     // way to push a post to the stories array in globalData
  //   })


  // }

  bindSubmit: function (e) {
    const page = this
    const formData = e.detail.value
    console.log("form data", formData)
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
      method: "POST",
      data: {
        product: formData,
      },
      success(res) {
        console.log("server response", res.data)
        page.setData(res.data)
      }
    })
    // app.globalData.products.push(product)
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