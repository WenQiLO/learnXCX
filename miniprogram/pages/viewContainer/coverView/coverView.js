//index.js
const app = getApp()

Page({
  data: {
    showModal: false,
  },

  onLoad: function() {
    
  },
  toggleModal() {
    const { showModal } = this.data;
    this.setData({
      showModal: !showModal,
    });
  }
})
