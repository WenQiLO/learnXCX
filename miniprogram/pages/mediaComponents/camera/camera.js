Page({
  data: {
    startLoading: false,
    startText: '开始录像',
    direction: 'back',
  },
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  startRecord() {
    this.ctx.startRecord({
      success: (res) => {
        this.setData({
          startLoading: true,
          startText: '录像中...'
        });
      }
    })
  },
  changeDirection() {
    const { direction = 'back' } = this.data;
    this.setData({
      direction: direction === 'back' ? 'front' : 'back',
    });
  },
  stopRecord() {
    this.ctx.stopRecord({
      success: (res) => {
        console.log('src: ', res.tempThumbPath);
        console.log('videoSrc: ', res.tempVideoPath);
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath,
          startLoading: false,
          startText: '开始录像'
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }
})