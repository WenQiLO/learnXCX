Page({
  data: {
    showModal: false,
    scanFunctionIsuseable: true,
  },
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  scanFinish(e) {
    const vm = this;
    if (this.data.scanFunctionIsuseable) {
      console.log('e', e.detail.result);
      this.setData({ scanFunctionIsuseable: false });
      this.setData({
        showModal: true,
      });
    }
  },
  toggleModal() {
    this.setData({
      showModal: false,
      scanFunctionIsuseable: true
    });
  }
})