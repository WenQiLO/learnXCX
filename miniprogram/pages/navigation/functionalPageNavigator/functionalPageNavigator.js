//index.js
const app = getApp()

Page({
  data: {
    args: {
      withCredentials: true,
      lang: 'zh_CN'
    }
  },

  loginSuccess: function(e) {
    console.log(e.detail.code) // wx.login 的 code
    console.log(e.detail.userInfo) // wx.getUserInfo 的 userInfo
  },
  loginFail: function (res) {
    console.log(res);
  },
  
  onLoad: function() {
    
  },

})
