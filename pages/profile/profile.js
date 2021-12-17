// pages/profile/profile.js
Page({
  data: {
    sample_user: "Garfield"
  },


 goToUpdateProfile: function () {
    wx.navigateTo({
      url: '/pages/update-profile/update-profile',
    })
  },

  goToMyRentedProducts: function () {
    wx.navigateTo({
      url: '/pages/my-rented-products/my-rented-products',
    })
  },

  goToMyListings: function () {
    wx.navigateTo({
      url: '/pages/my-listings/my-listings',
    })
  },

  onReady: function () {
  },


  onLoad: function () {
    const page = this
    const auth = wx.getStorageSync('auth')
    const header = {
      'X-User-Email': auth.email,
      'X-User-Token': auth.token
    }
    console.log("This is the header", header)
    wx.request({
      url: `${getApp().globalData.baseUrl}/users`,
      header, 
      success(res) {
        console.log(res.data)
        page.setData({users:res.data.users})
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
  },
})