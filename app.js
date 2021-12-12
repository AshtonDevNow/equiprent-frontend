// app.js
App({
  onLaunch() {
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {

        // url: `${app.globalData.baseUrl}/login`,
        // data: {
        //   code: res.code
        // }

      }
    })
  },

  globalData: {
    products: [{
      "id": 1,
      "name": "Tandem Bicycle",
      "price": "10",
      "description": "Fun for couples!"
      },
      {
        "id": 2,
        "name": "Mountain Bike",
        "price": "17",
        "description": "Full suspension"
        },
        {
          "id": 3,
          "name": "Road bike",
          "price": "30",
          "description": "Superfast"
          },
          {
            "id": 4,
            "name": "Unicycle",
            "price": "12",
            "description": "Good for clowning around"
            }
    ],
    stories: [{
      "id": 1,
      "name": 'Satanic migraine',
      "comment": "Hurt like hell. Return it? Are you insane? Did you hear nothing I said? Buy another one, Morty! Consume, Morty! Nobody's out there shopping with this fucking virus! Snuffles want to be understood. Snuffles need to be understood. Snuffles was my slave name. You can call me Snowball, because my fur is pretty and white. You ask alotta questions Morty, not very charismatic of you."
      },
      {
        "id": 2,
        "name": 'Hot dog fingers',
        "comment": 'Wurst pain of my life.'
        }
    ]
  }
})
