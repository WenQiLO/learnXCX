const texts = [
  '我以为要是唱的用心良苦',
  '你总会对我多点在乎',
  '我以为虽然爱情已成往事',
  '千言万语 说出来可以互相安抚',
  '期待你感动，真实的我们难相处',
  '写词的让我 唱出你要的幸福',
  '谁曾经感动，分手的关头才懂得',
  '离开排行榜更铭心刻骨',
  '我已经相信有些人我永远不必等',
  '所以我明白在灯火栏珊处 为什麽会哭',
  '你不会相信，嫁给我明天有多幸福',
  '只想你明白，我心甘情愿爱爱爱爱到要吐',
  '那是醉生梦死才能熬成的苦',
  '爱如潮水，我忘了我是谁',
  '......'
];
let extraLine = [];

Page({
  data: {
    text: '',
  },
  autoAdd() {
    const timer = setInterval(() => {
      extraLine.push(texts[extraLine.length % texts.length]);
      this.setData({ text: extraLine.join('\n') });
      if (extraLine.length === texts.length) {
        clearInterval(timer);
      }
    }, 500);    
  },
  onLoad() {
    this.autoAdd();
  }
})