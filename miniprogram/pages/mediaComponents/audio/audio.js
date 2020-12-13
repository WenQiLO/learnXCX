Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
		poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607858729150&di=72b55960cb2c24eb52b9484afa91dbf4&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-d1e123cfdcdfd4019be4fd680c1f054d_b.jpg',
		name: '喜帖街',
    author: '谢安琪',
		src: 'https://smp.med.gzhc365.com/views/p90/xtj.mp3',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }
})