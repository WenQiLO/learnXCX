Page({
  onShareAppMessage() {
    return {
      title: 'cover-view',
      path: 'page/component/pages/cover-view/cover-view'
    }
  },

  data: {
    showModalV: false,
    showModalCV: false,
    latitude: 23.099994,
    longitude: 113.324520,
  },
  toggleModalV() {
    const { showModalV } = this.data;
    this.setData({
      showModalV: !showModalV,
    });
  },
  toggleModalCV() {
    const { showModalCV } = this.data;
    this.setData({
      showModalCV: !showModalCV,
    });
  }
})
