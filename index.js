const random = require('random-item'); 

module.exports = async function App(context) {
  if (context.event.text === '講笑話') {
    await context.sendText(
      random([
        '加油站最怕什麼樣的員工？油腔滑調的員工',
        '有一天，西瓜、榴槤、奇異果一起出去玩，結果榴槤不見了。因為榴槤忘返',
        '海記憶體知己，天涯若比鄰',
      ])
    );
  } else {
    await context.sendText(random(['你講什麼鬼話？', '乖，聊聊別的']));
  }
};


