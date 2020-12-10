//index.js
const app = getApp()

Page({
  data: {
    x: 0,
    y: 0,
    scale: 2,
  },

  tap() {
    this.setData({
      x: 30,
      y: 30
    })
  },

  onChange(e) {
    console.log(e.detail)
  },

  onScale(e) {
    console.log(e.detail)
  }
})