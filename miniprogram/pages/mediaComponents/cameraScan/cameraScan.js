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
      wx.showModal({
        title: '温馨提示',
        content: '确定跳转到此二维码对应的链接吗？',
        showCancel: true,//是否显示取消按钮
        cancelText:"否",//默认是“取消”
        confirmText:"是",//默认是“确定”
        success: function (res) {
          if (res.cancel) {
              //点击取消,默认隐藏弹框
              vm.setData({ scanFunctionIsuseable: true });
          } else {
              //点击确定
              vm.setData({ scanFunctionIsuseable: true });
          }
        },
        fail: function (res) { },//接口调用失败的回调函数
        complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）    
    });
  }
    // this.setData({
    //   showModal: true,
    // });
  },
  toggleModal() {
    this.setData({
      showModal: false,
    });
  }
})