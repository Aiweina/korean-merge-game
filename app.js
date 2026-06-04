const order = {
  character: "Jumbo",
  request: "晨光咖啡店的新人教育訓練：先認識韓文 40 音。",
  target: "ㅏ",
  dialogue: "처음에는 한 글자씩 연습해요.",
  learning: "ㅏ 的發音接近中文的「啊」。",
  hint: "找看起來像直線右邊有一小橫的母音：ㅏ。"
};

let lessons = [
  { target: "ㅏ", sound: "아", english: "a", spirit: "朝光阿", image: "./assets/spirits/01-314f.webp?v=10", title: "基本母音音靈", memory: "嘴巴自然打開，像看見清晨第一道光。", meaning: "ㅏ 是第一位醒來的音靈。它把花園的門推開，說：先把聲音放輕鬆。", hint: "嘴巴自然打開，像看見清晨第一道光。" },
  { target: "ㅑ", sound: "야", english: "ya", spirit: "招手雅", image: "./assets/spirits/02-3151.webp?v=10", title: "基本母音音靈", memory: "在 a 前面加一點 y 的滑音，像遠遠喊朋友。", meaning: "ㅑ 喜歡站在路口招手。它的聲音比 ㅏ 多一個小小的起步。", hint: "在 a 前面加一點 y 的滑音，像遠遠喊朋友。" },
  { target: "ㅓ", sound: "어", english: "eo", spirit: "回聲歐", image: "./assets/spirits/03-3153.webp?v=10", title: "基本母音音靈", memory: "聲音往內收，像在山洞裡聽見回音。", meaning: "ㅓ 住在花園深處。它不急著往外跑，而是把聲音收進胸口。", hint: "聲音往內收，像在山洞裡聽見回音。" },
  { target: "ㅕ", sound: "여", english: "yeo", spirit: "引路悠", image: "./assets/spirits/04-3155.webp?v=10", title: "基本母音音靈", memory: "在 eo 前滑進 y，像轉彎進入小徑。", meaning: "ㅕ 會替迷路的人點燈。它把 ㅓ 的回音加上一個柔軟的開頭。", hint: "在 eo 前滑進 y，像轉彎進入小徑。" },
  { target: "ㅗ", sound: "오", english: "o", spirit: "高塔喔", image: "./assets/spirits/05-3157.webp?v=10", title: "基本母音音靈", memory: "嘴唇微圓，聲音往上抬。", meaning: "ㅗ 守著一座小高塔。它一出聲，天空就亮一格。", hint: "嘴唇微圓，聲音往上抬。" },
  { target: "ㅛ", sound: "요", english: "yo", spirit: "小帽悠", image: "./assets/spirits/06-315b.webp?v=10", title: "基本母音音靈", memory: "yo 像先跳一下再往上抬。", meaning: "ㅛ 是 ㅗ 的孩子氣版本，總是戴著小帽子在花叢裡跳。", hint: "yo 像先跳一下再往上抬。" },
  { target: "ㅜ", sound: "우", english: "u", spirit: "水滴嗚", image: "./assets/spirits/07-315c.webp?v=10", title: "基本母音音靈", memory: "嘴唇微圓，聲音往下流。", meaning: "ㅜ 掌管池塘。它的聲音低低落下，讓乾掉的土重新變軟。", hint: "嘴唇微圓，聲音往下流。" },
  { target: "ㅠ", sound: "유", english: "yu", spirit: "雨線優", image: "./assets/spirits/08-3160.webp?v=10", title: "基本母音音靈", memory: "yu 像細雨落下前先滑過一點 y。", meaning: "ㅠ 帶來溫柔的雨。它讓 ㅜ 的水滴多了一條細細的起跑線。", hint: "yu 像細雨落下前先滑過一點 y。" },
  { target: "ㅡ", sound: "으", english: "eu", spirit: "地平恩", image: "./assets/spirits/09-3161.webp?v=10", title: "基本母音音靈", memory: "嘴巴放平，聲音穩穩地貼著地面。", meaning: "ㅡ 是花園的地平線。它不張揚，卻讓所有聲音有地方站。", hint: "嘴巴放平，聲音穩穩地貼著地面。" },
  { target: "ㅣ", sound: "이", english: "i", spirit: "直光伊", image: "./assets/spirits/10-3163.webp?v=10", title: "基本母音音靈", memory: "嘴角輕輕拉開，聲音細而亮。", meaning: "ㅣ 像一束直直的光。它一出現，圖鑑上的線條都變清楚。", hint: "嘴角輕輕拉開，聲音細而亮。" },
  { target: "ㅐ", sound: "애", english: "ae", spirit: "琥珀愛", image: "./assets/spirits/11-3150.webp?v=10", title: "複合母音音靈", memory: "ae 像明亮的 e/a 之間。", meaning: "ㅐ 收藏琥珀色的聲音。它讓花園的光變得更清澈。", hint: "ae 像明亮的 e/a 之間。" },
  { target: "ㅒ", sound: "얘", english: "yae", spirit: "小葉耶", image: "./assets/spirits/12-3152.webp?v=10", title: "複合母音音靈", memory: "在 ae 前滑進 y。", meaning: "ㅒ 是會說悄悄話的音靈。它把 ㅐ 加上一個輕巧的開頭。", hint: "在 ae 前滑進 y。" },
  { target: "ㅔ", sound: "에", english: "e", spirit: "銀鈴欸", image: "./assets/spirits/13-3154.webp?v=10", title: "複合母音音靈", memory: "e 聲短而乾淨。", meaning: "ㅔ 掛著銀鈴。它的聲音像清楚的一點亮光。", hint: "e 聲短而乾淨。" },
  { target: "ㅖ", sound: "예", english: "ye", spirit: "禮貌耶", image: "./assets/spirits/14-3156.webp?v=10", title: "複合母音音靈", memory: "在 e 前加 y，像溫柔打招呼。", meaning: "ㅖ 很有禮貌。它出現時，花園入口會輕輕點頭。", hint: "在 e 前加 y，像溫柔打招呼。" },
  { target: "ㅘ", sound: "와", english: "wa", spirit: "橋上哇", image: "./assets/spirits/15-3158.webp?v=10", title: "複合母音音靈", memory: "ㅗ 和 ㅏ 合在一起，像 wa。", meaning: "ㅘ 是橋樑音靈。它把高塔的 ㅗ 和朝光的 ㅏ 接在一起。", hint: "ㅗ 和 ㅏ 合在一起，像 wa。" },
  { target: "ㅙ", sound: "왜", english: "wae", spirit: "問號歪", image: "./assets/spirits/16-3159.webp?v=10", title: "複合母音音靈", memory: "wae 像 wa 加明亮 e。", meaning: "ㅙ 喜歡問為什麼。它每問一次，地圖就多一個可探索的角落。", hint: "wae 像 wa 加明亮 e。" },
  { target: "ㅚ", sound: "외", english: "oe", spirit: "外光喂", image: "./assets/spirits/17-315a.webp?v=10", title: "複合母音音靈", memory: "oe 現代發音常接近 we。", meaning: "ㅚ 站在花園外圍，把遠處的光帶回來。", hint: "oe 現代發音常接近 we。" },
  { target: "ㅝ", sound: "워", english: "wo", spirit: "水窩沃", image: "./assets/spirits/18-315d.webp?v=15", title: "複合母音音靈", memory: "ㅜ 和 ㅓ 合在一起，像 wo。", meaning: "ㅝ 住在水窩旁。它把往下的水聲轉進深處回音。", hint: "ㅜ 和 ㅓ 合在一起，像 wo。" },
  { target: "ㅞ", sound: "웨", english: "we", spirit: "波紋威", image: "./assets/spirits/19-315e.webp?v=15", title: "複合母音音靈", memory: "we 像水面一圈圈擴散。", meaning: "ㅞ 會在池塘上畫波紋。它的聲音乾淨又有流動感。", hint: "we 像水面一圈圈擴散。" },
  { target: "ㅟ", sound: "위", english: "wi", spirit: "風尾微", image: "./assets/spirits/20-315f.webp?v=15", title: "複合母音音靈", memory: "wi 像 u 滑向 i。", meaning: "ㅟ 跟著風尾跑。它把水滴 ㅜ 拉成一條亮亮的線。", hint: "wi 像 u 滑向 i。" },
  { target: "ㅢ", sound: "의", english: "ui", spirit: "書頁義", image: "./assets/spirits/21-3162.webp?v=10", title: "複合母音音靈", memory: "ui 從 ㅡ 滑向 ㅣ。", meaning: "ㅢ 躲在舊書頁裡。它是比較特別的音，像一段被摺起來的路。", hint: "ui 從 ㅡ 滑向 ㅣ。" },
  { target: "ㄱ", sound: "가", english: "g/k", spirit: "鑰匙記憶", image: "./assets/spirits/22-3131.webp?v=1", title: "基本子音音靈", memory: "舌根輕碰後放開，像開門的一下。", meaning: "ㄱ 是守門音靈。它用短短的聲音打開第一道花園門。", hint: "舌根輕碰後放開，像開門的一下。" },
  { target: "ㄲ", sound: "까", english: "kk", spirit: "雙鑰匙", image: "./assets/spirits/23-3132.webp?v=1", title: "雙子音音靈", memory: "比 ㄱ 更緊，像把聲音先收住再放開。", meaning: "ㄲ 帶著兩把鑰匙。它不是更大聲，而是更緊、更集中。", hint: "比 ㄱ 更緊，像把聲音先收住再放開。" },
  { target: "ㄴ", sound: "나", english: "n", spirit: "小路尼", image: "./assets/spirits/24-3134.webp?v=1", title: "基本子音音靈", memory: "舌尖碰上方，聲音從鼻腔滑出。", meaning: "ㄴ 鋪出一條安靜小路。它說，慢慢走也能到下一個音。", hint: "舌尖碰上方，聲音從鼻腔滑出。" },
  { target: "ㄷ", sound: "다", english: "d/t", spirit: "石階達", image: "./assets/spirits/25-3137.webp?v=1", title: "基本子音音靈", memory: "舌尖輕敲上方，像踩上一階石階。", meaning: "ㄷ 收集石階。每一次 da，花園就多一個能站穩的地方。", hint: "舌尖輕敲上方，像踩上一階石階。" },
  { target: "ㄸ", sound: "따", english: "tt", spirit: "雙石階", image: "./assets/spirits/26-3138.webp?v=1", title: "雙子音音靈", memory: "比 ㄷ 更緊，舌尖先蓄力。", meaning: "ㄸ 會把石階敲出清脆聲。它的力量藏在出聲前一瞬間。", hint: "比 ㄷ 更緊，舌尖先蓄力。" },
  { target: "ㄹ", sound: "라", english: "r/l", spirit: "風帶拉", image: "./assets/spirits/27-3139.webp?v=1", title: "基本子音音靈", memory: "舌尖輕彈或貼近，聲音像飄帶。", meaning: "ㄹ 是會轉圈的音靈。它讓聲音從路面輕輕捲起來。", hint: "舌尖輕彈或貼近，聲音像飄帶。" },
  { target: "ㅁ", sound: "마", english: "m", spirit: "工匠姆", image: "./assets/spirits/28-3141.webp?v=1", title: "基本子音音靈", memory: "雙唇閉合再打開，聲音柔柔從鼻腔出來。", meaning: "ㅁ 是沉默工匠。閉上嘴的瞬間，它正在替聲音打磨形狀。", hint: "雙唇閉合再打開，聲音柔柔從鼻腔出來。" },
  { target: "ㅂ", sound: "바", english: "b/p", spirit: "風鈴波", image: "./assets/spirits/29-3142.webp?v=1", title: "基本子音音靈", memory: "雙唇合起再彈開，像輕敲風鈴。", meaning: "ㅂ 負責修風鈴。它的聲音有一點彈跳，聽起來很有精神。", hint: "雙唇合起再彈開，像輕敲風鈴。" },
  { target: "ㅃ", sound: "빠", english: "pp", spirit: "雙風鈴", image: "./assets/spirits/30-3143.webp?v=1", title: "雙子音音靈", memory: "比 ㅂ 更緊，雙唇蓄力再彈開。", meaning: "ㅃ 修的是雙層風鈴。聲音短、緊，像小小的爆發。", hint: "比 ㅂ 更緊，雙唇蓄力再彈開。" },
  { target: "ㅅ", sound: "사", english: "s", spirit: "細沙絲", image: "./assets/spirits/31-3145.webp?v=2", title: "基本子音音靈", memory: "氣流從齒間擦過，像沙子流動。", meaning: "ㅅ 帶來星砂。它走過的地方，沉默會被細細刷開。", hint: "氣流從齒間擦過，像沙子流動。" },
  { target: "ㅆ", sound: "싸", english: "ss", spirit: "雙星砂", image: "./assets/spirits/32-3146.webp?v=1", title: "雙子音音靈", memory: "比 ㅅ 更緊更集中。", meaning: "ㅆ 灑下更亮的星砂。它把氣流收成一條細細的線。", hint: "比 ㅅ 更緊更集中。" },
  { target: "ㅇ", sound: "아", english: "ng/silent", spirit: "透明圓", image: "./assets/spirits/33-3147.webp?v=1", title: "基本子音音靈", memory: "在字首常安靜，讓母音自己發光。", meaning: "ㅇ 是透明音靈。它常常不說話，卻替母音留出登場的位置。", hint: "在字首常安靜，讓母音自己發光。" },
  { target: "ㅈ", sound: "자", english: "j", spirit: "鈴匠吉", image: "./assets/spirits/34-3148.webp?v=1", title: "基本子音音靈", memory: "舌面靠近上方，聲音像短短的 j。", meaning: "ㅈ 喜歡修小鈴。它一敲，故事就往前跳一格。", hint: "舌面靠近上方，聲音像短短的 j。" },
  { target: "ㅉ", sound: "짜", english: "jj", spirit: "雙鈴匠", image: "./assets/spirits/35-3149.webp?v=1", title: "雙子音音靈", memory: "比 ㅈ 更緊，像短促的 jj。", meaning: "ㅉ 敲的是雙鈴。它讓故事的下一格跳得更明確。", hint: "比 ㅈ 更緊，像短促的 jj。" },
  { target: "ㅊ", sound: "차", english: "ch", spirit: "清風恰", image: "./assets/spirits/36-314a.webp?v=1", title: "基本子音音靈", memory: "比 ㅈ 多一口氣，像 ch。", meaning: "ㅊ 會把窗打開。它比 ㅈ 更有風，聲音帶著清亮的氣。", hint: "比 ㅈ 多一口氣，像 ch。" },
  { target: "ㅋ", sound: "카", english: "k", spirit: "石門卡", image: "./assets/spirits/37-314b.webp?v=3", title: "基本子音音靈", memory: "比 ㄱ 多一口氣，像 k。", meaning: "ㅋ 是重一點的門聲。它一出現，石門會乾脆地打開。", hint: "比 ㄱ 多一口氣，像 k。" },
  { target: "ㅌ", sound: "타", english: "t", spirit: "踏步塔", image: "./assets/spirits/38-314c.webp?v=4", title: "基本子音音靈", memory: "比 ㄷ 多一口氣，像 t。", meaning: "ㅌ 走路很俐落。它把 ㄷ 的石階踩得更清楚。", hint: "比 ㄷ 多一口氣，像 t。" },
  { target: "ㅍ", sound: "파", english: "p", spirit: "蒲公英帕", image: "./assets/spirits/39-314d.webp?v=1", title: "基本子音音靈", memory: "比 ㅂ 多一口氣，像 p。", meaning: "ㅍ 一吹就讓蒲公英飛起來。它的聲音帶著一陣小風。", hint: "比 ㅂ 多一口氣，像 p。" },
  { target: "ㅎ", sound: "하", english: "h", spirit: "呼吸哈", image: "./assets/spirits/40-314e.webp?v=1", title: "基本子音音靈", memory: "輕輕送氣，像對玻璃呵一口氣。", meaning: "ㅎ 是呼吸音靈。它提醒玩家，發音前先放鬆呼吸。", hint: "輕輕送氣，像對玻璃呵一口氣。" }
];

const basicVowelTargets = new Set(["ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ"]);
const compoundVowelTargets = new Set(["ㅐ", "ㅒ", "ㅔ", "ㅖ", "ㅘ", "ㅙ", "ㅚ", "ㅝ", "ㅞ", "ㅟ", "ㅢ"]);
const doubleConsonantTargets = new Set(["ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ"]);
let activeChapterIndex = 0;
let lessonIndex = 0;
let prologueIndex = 0;

const pronunciationMap = {
  "ㅏ": "아",
  "ㅑ": "야",
  "ㅓ": "어",
  "ㅕ": "여",
  "ㅗ": "오",
  "ㅛ": "요",
  "ㅜ": "우",
  "ㅠ": "유",
  "ㅡ": "으",
  "ㅣ": "이",
  "ㅐ": "애",
  "ㅒ": "얘",
  "ㅔ": "에",
  "ㅖ": "예",
  "ㅘ": "와",
  "ㅙ": "왜",
  "ㅚ": "외",
  "ㅝ": "워",
  "ㅞ": "웨",
  "ㅟ": "위",
  "ㅢ": "의",
  "ㄱ": "가",
  "ㄲ": "까",
  "ㄴ": "나",
  "ㄷ": "다",
  "ㄸ": "따",
  "ㄹ": "라",
  "ㅁ": "마",
  "ㅂ": "바",
  "ㅃ": "빠",
  "ㅅ": "사",
  "ㅆ": "싸",
  "ㅇ": "아",
  "ㅈ": "자",
  "ㅉ": "짜",
  "ㅊ": "차",
  "ㅋ": "카",
  "ㅌ": "타",
  "ㅍ": "파",
  "ㅎ": "하"
};

const englishSoundMap = {
  "ㅏ": "a",
  "ㅑ": "ya",
  "ㅓ": "eo",
  "ㅕ": "yeo",
  "ㅗ": "o",
  "ㅛ": "yo",
  "ㅜ": "u",
  "ㅠ": "yu",
  "ㅡ": "eu",
  "ㅣ": "i",
  "ㅐ": "ae",
  "ㅒ": "yae",
  "ㅔ": "e",
  "ㅖ": "ye",
  "ㅘ": "wa",
  "ㅙ": "wae",
  "ㅚ": "oe",
  "ㅝ": "wo",
  "ㅞ": "we",
  "ㅟ": "wi",
  "ㅢ": "ui",
  "ㄱ": "g/k",
  "ㄲ": "kk",
  "ㄴ": "n",
  "ㄷ": "d/t",
  "ㄸ": "tt",
  "ㄹ": "r/l",
  "ㅁ": "m",
  "ㅂ": "b/p",
  "ㅃ": "pp",
  "ㅅ": "s",
  "ㅆ": "ss",
  "ㅇ": "silent/ng",
  "ㅈ": "j",
  "ㅉ": "jj",
  "ㅊ": "ch",
  "ㅋ": "k",
  "ㅌ": "t",
  "ㅍ": "p",
  "ㅎ": "h"
};

let prologue = [
  {
    speaker: "旁白",
    image: "./assets/1-01.webp",
    text: "雨後聖魔幻境的街角，有一間只在清晨開門的咖啡店。今天，是你在「天使惡魔館」打工的第一天。"
  },
  {
    speaker: "陽",
    image: "./assets/1-02.webp",
    text: "Hi,你就是今天開始來幫忙的新同學嗎？但在正式上工前，要先完成新人教育訓練喔！"
  },
  {
    speaker: "你",
    image: "./assets/1-03.webp",
    text: "教育訓練是背菜單內容嗎？"
  },
  {
    speaker: "陽",
    image: "./assets/1-04.webp",
    text: "NO~NO~NO~我們的菜單、客人留言和收據都用韓文，所以你要先認識熟悉韓語基本 40 音。"
  },
  {
    speaker: "陽",
    image: "./assets/1-05.webp",
    text: "來，這是你的導師，Jumbo。",
    choices: [
      { text: "開始教育訓練", feedback: "Jumbo把第一張字卡推到你面前。" },
      { text: "我想先慢慢學", feedback: "Jumbo點點頭：汪(沒問題)。" }
    ]
  }
];

const chapter1Lessons = lessons;
const chapter1Prologue = prologue;

const chapter2Lessons = [
  { target: "가", sound: "가", english: "ga", spirit: "開門加", image: "./assets/spirits/ch2-ga.webp?v=3", title: "第二章音節卡", memory: "ㄱ 加上 ㅏ，像把第一扇門打開。", meaning: "加是第二章的第一杯咖啡，短短一聲把子音和母音接起來。", hint: "ㄱ + ㅏ = 가", category: "basicVowel" },
  { target: "나", sound: "나", english: "na", spirit: "小路拿", image: "./assets/spirits/ch2-na.webp?v=3", title: "第二章音節卡", memory: "ㄴ 加上 ㅏ，舌尖輕碰後走出小路。", meaning: "拿負責把客人帶到座位，聲音柔和但很清楚。", hint: "ㄴ + ㅏ = 나", category: "basicVowel" },
  { target: "다", sound: "다", english: "da", spirit: "石階達", image: "./assets/spirits/ch2-da.webp?v=3", title: "第二章音節卡", memory: "ㄷ 加上 ㅏ，像腳步踏上石階。", meaning: "達會把訂單一步一步送到櫃台。", hint: "ㄷ + ㅏ = 다", category: "basicVowel" },
  { target: "라", sound: "라", english: "ra/la", spirit: "風帶拉", image: "./assets/spirits/ch2-ra.webp?v=3", title: "第二章音節卡", memory: "ㄹ 加上 ㅏ，聲音像飄帶輕輕轉彎。", meaning: "拉在咖啡香裡繞圈，提醒你韓文音節會連起來。", hint: "ㄹ + ㅏ = 라", category: "basicVowel" },
  { target: "마", sound: "마", english: "ma", spirit: "工匠媽", image: "./assets/spirits/ch2-ma.webp?v=3", title: "第二章音節卡", memory: "ㅁ 加上 ㅏ，雙唇合起再打開。", meaning: "媽會把聲音磨得圓圓的，像熱牛奶泡泡。", hint: "ㅁ + ㅏ = 마", category: "basicVowel" },
  { target: "바", sound: "바", english: "ba/pa", spirit: "風鈴吧", image: "./assets/spirits/ch2-ba.webp?v=3", title: "第二章音節卡", memory: "ㅂ 加上 ㅏ，雙唇輕輕彈開。", meaning: "吧是櫃台旁的小風鈴，提醒你出聲要有彈性。", hint: "ㅂ + ㅏ = 바", category: "compoundVowel" },
  { target: "사", sound: "사", english: "sa", spirit: "細沙撒", image: "./assets/spirits/ch2-sa.webp?v=3", title: "第二章音節卡", memory: "ㅅ 加上 ㅏ，氣流像細沙滑過。", meaning: "撒會替咖啡撒上糖粉，聲音細細的。", hint: "ㅅ + ㅏ = 사", category: "compoundVowel" },
  { target: "아", sound: "아", english: "a", spirit: "透明阿", image: "./assets/spirits/ch2-a.webp?v=3", title: "第二章音節卡", memory: "ㅇ 在開頭安靜，讓 ㅏ 自己發光。", meaning: "阿是透明圓端出的第一杯清晨水。", hint: "ㅇ + ㅏ = 아", category: "compoundVowel" },
  { target: "자", sound: "자", english: "ja", spirit: "鈴匠札", image: "./assets/spirits/ch2-ja.webp?v=3", title: "第二章音節卡", memory: "ㅈ 加上 ㅏ，像短短的 j 音。", meaning: "札會把客人的名字寫在杯套上。", hint: "ㅈ + ㅏ = 자", category: "basicConsonant" },
  { target: "차", sound: "차", english: "cha", spirit: "清風茶", image: "./assets/spirits/ch2-cha.webp?v=3", title: "第二章音節卡", memory: "ㅊ 加上 ㅏ，比 ㅈ 多一口氣。", meaning: "茶把窗戶打開，聲音帶著清楚的風。", hint: "ㅊ + ㅏ = 차", category: "basicConsonant" },
  { target: "카", sound: "카", english: "ka", spirit: "石門卡", image: "./assets/spirits/ch2-ka.webp?v=3", title: "第二章音節卡", memory: "ㅋ 加上 ㅏ，比 ㄱ 多一口氣，像推開厚重石門。", meaning: "卡會用清楚的送氣聲推開咖啡館外的石門。", hint: "ㅋ + ㅏ = 카", category: "basicConsonant" },
  { target: "타", sound: "타", english: "ta", spirit: "踏步塔", image: "./assets/spirits/ch2-ta.webp?v=3", title: "第二章音節卡", memory: "ㅌ 加上 ㅏ，比 ㄷ 多一口氣，腳步更俐落。", meaning: "塔沿著送餐路線踏出清楚又有風的步伐。", hint: "ㅌ + ㅏ = 타", category: "basicConsonant" },
  { target: "파", sound: "파", english: "pa", spirit: "蒲公英帕", image: "./assets/spirits/ch2-pa.webp?v=3", title: "第二章音節卡", memory: "ㅍ 加上 ㅏ，比 ㅂ 多一口氣，像吹飛蒲公英。", meaning: "帕吹起一陣小風，讓花園裡的蒲公英一起旅行。", hint: "ㅍ + ㅏ = 파", category: "basicConsonant" },
  { target: "하", sound: "하", english: "ha", spirit: "呼吸哈", image: "./assets/spirits/ch2-ha.webp?v=3", title: "第二章音節卡", memory: "ㅎ 加上 ㅏ，像對玻璃輕輕呵氣後張口說 아。", meaning: "哈在清晨玻璃上留下柔軟霧氣，提醒你放鬆呼吸。", hint: "ㅎ + ㅏ = 하", category: "basicConsonant" }
];

const chapter2Prologue = [
  {
    speaker: "旁白",
    image: "./assets/1-01.webp",
    text: "第一天的 40 音訓練完成後，天使惡魔館的櫃台亮起第二盞燈。"
  },
  {
    speaker: "陽",
    image: "./assets/1-04.webp",
    text: "第二章開始囉。這次不是只認單一字母，要把子音和母音合成一個音節。"
  },
  {
    speaker: "Jumbo",
    image: "./assets/1-05.webp",
    text: "汪！先從最常見的 ㅏ 系列開始：가、나、다、라、마。"
  },
  {
    speaker: "你",
    image: "./assets/1-03.webp",
    text: "原來韓文像拼積木一樣，子音和母音可以合在同一格。"
  },
  {
    speaker: "陽",
    image: "./assets/1-02.webp",
    text: "沒錯。先完成第二章訓練，再試著通過音節測驗吧。",
    choices: [
      { text: "開始第二章", feedback: "Jumbo把第二章音節卡推到你面前。" },
      { text: "我想先觀察", feedback: "智允笑著說：可以，先看每張卡怎麼拼。" }
    ]
  }
];

const chapters = [
  {
    number: 1,
    sceneChapter: "Chapter 1",
    sceneTitle: "晨光咖啡新人訓練",
    prologueChapter: "Chapter 1：第一天上工",
    trainingIntro: "教育訓練開始。現在跟著智允找出 ㅏ。",
    skippedIntro: "已跳過劇情，進入新人教育訓練。",
    quizLabel: "新人教育訓練測驗",
    quizTitle: "40 音確認",
    quizConfirm: "測驗囉?要確定呢~",
    quizImage: "./assets/quiz-dog-teacher.webp",
    passImage: "./assets/1O.webp",
    failImage: "./assets/1X.webp",
    materials: {
      basicVowel: "基本母音 10",
      compoundVowel: "複合母音 11",
      basicConsonant: "基本子音 14",
      doubleConsonant: "雙子音 5"
    },
    lessons: chapter1Lessons,
    prologue: chapter1Prologue
  },
  {
    number: 2,
    sceneChapter: "Chapter 2",
    sceneTitle: "音節咖啡實作",
    prologueChapter: "Chapter 2：音節拼讀",
    trainingIntro: "第二章開始。先從 ㅏ 系列音節練習拼讀。",
    skippedIntro: "已跳過第二章劇情，進入音節訓練。",
    quizLabel: "音節拼讀測驗",
    quizTitle: "ㅏ 系列確認",
    quizConfirm: "第二章測驗囉?要確定呢~",
    quizImage: "./assets/quiz-dog-teacher.webp",
    passImage: "./assets/1O.webp",
    failImage: "./assets/1X.webp",
    materials: {
      basicVowel: "ㅏ 系列 5",
      compoundVowel: "常用音節 3",
      basicConsonant: "進階音節 6",
      doubleConsonant: ""
    },
    lessons: chapter2Lessons,
    prologue: chapter2Prologue
  }
];

const chapterLocations = [
  "天使惡魔館",
  "龜仙CU便利商店",
  "牛牛飯店",
  "狗餐廳",
  "貓服飾店",
  "蜈蚣精的鞋店",
  "狐彩妝店",
  "熊熊天使塔",
  "貂樂園",
  "豬機場"
];

const chapterSubchapters = {
  1: Array.from({ length: 10 }, (_, index) => ({
    id: `1-${index + 1}`,
    label: `1-${index + 1}`,
    built: index === 0,
    chapterIndex: 0
  }))
};

const feedbackText = document.querySelector("#feedbackText");
const basicVowelGrid = document.querySelector("#basicVowelGrid");
const compoundVowelGrid = document.querySelector("#compoundVowelGrid");
const basicConsonantGrid = document.querySelector("#basicConsonantGrid");
const doubleConsonantGrid = document.querySelector("#doubleConsonantGrid");
const sceneChapter = document.querySelector("#sceneChapter");
const sceneTitle = document.querySelector("#sceneTitle");
const basicVowelTitle = document.querySelector("#basicVowelTitle");
const compoundVowelTitle = document.querySelector("#compoundVowelTitle");
const basicConsonantTitle = document.querySelector("#basicConsonantTitle");
const doubleConsonantTitle = document.querySelector("#doubleConsonantTitle");
const prologueSpeaker = document.querySelector("#prologueSpeaker");
const prologueText = document.querySelector("#prologueText");
const prologueChapter = document.querySelector("#prologueChapter");
const prologueSkipBtn = document.querySelector("#prologueSkipBtn");
const prologueChoiceRow = document.querySelector("#prologueChoiceRow");
const prologuePanel = document.querySelector("#prologuePanel");
const reviewStoryBtn = document.querySelector("#reviewStoryBtn");
const returnToSubchapterMapBtn = document.querySelector("#returnToSubchapterMapBtn");
const readyQuizBtn = document.querySelector("#readyQuizBtn");
const pronunciationQuizBtn = document.querySelector("#pronunciationQuizBtn");
const confirmOverlay = document.querySelector("#confirmOverlay");
const confirmQuizBtn = document.querySelector("#confirmQuizBtn");
const cancelQuizBtn = document.querySelector("#cancelQuizBtn");
const quizPrompt = document.querySelector("#quizPrompt");
const quizBoardQuestion = document.querySelector("#quizBoardQuestion");
const quizImage = document.querySelector("#quizImage");
const quizLabel = document.querySelector("#quizLabel");
const quizTitle = document.querySelector("#quizTitle");
const quizOptions = document.querySelector("#quizOptions");
const quizStatus = document.querySelector("#quizStatus");
const quizProgressBar = document.querySelector("#quizProgressBar");
const quizCorrectText = document.querySelector("#quizCorrectText");
const quizWrongText = document.querySelector("#quizWrongText");
const quizSpeakBtn = document.querySelector("#quizSpeakBtn");
const quizVoicePanel = document.querySelector(".quiz-voice-panel");
const quizMicBtn = document.querySelector("#quizMicBtn");
const quizVoiceStatus = document.querySelector("#quizVoiceStatus");
const answerFlash = document.querySelector("#answerFlash");
const quizResultPanel = document.querySelector("#quizResultPanel");
const quizResultText = document.querySelector("#quizResultText");
const quizResultActions = document.querySelector("#quizResultActions");
const confirmText = document.querySelector("#confirmText");
const chapterMapOverlay = document.querySelector("#chapterMapOverlay");
const chapterMapGrid = document.querySelector("#chapterMapGrid");
const chapterMapStatus = document.querySelector("#chapterMapStatus");
const closeChapterMapBtn = document.querySelector("#closeChapterMapBtn");
const subchapterMapScreen = document.querySelector("#subchapterMapScreen");
const subchapterMapGrid = document.querySelector("#subchapterMapGrid");
const subchapterMapStatus = document.querySelector("#subchapterMapStatus");
const backToChapterMapBtn = document.querySelector("#backToChapterMapBtn");
const chapter2Practice = document.querySelector("#chapter2Practice");
const mergeSyllableBtn = document.querySelector("#mergeSyllableBtn");
const syllableFormula = document.querySelector("#syllableFormula");
const builderConsonant = document.querySelector("#builderConsonant");
const builderResult = document.querySelector("#builderResult");
const builderMemory = document.querySelector("#builderMemory");
const newAspirationBtn = document.querySelector("#newAspirationBtn");
const aspirationSpeakBtn = document.querySelector("#aspirationSpeakBtn");
const aspirationOptions = document.querySelector("#aspirationOptions");
const aspirationStatus = document.querySelector("#aspirationStatus");
let activeUtterance = null;
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizWrong = 0;
let quizAnswerHandler = null;
let speechRecognition = null;
let speechRecognitionSupported = false;
let speechRecognitionUnavailableMessage = "此瀏覽器不支援語音辨識，請使用選項作答。";
let isListeningForQuiz = false;
let completedChapters = new Set();
let completedSubchapters = new Set();
let completedPronunciationSubchapters = new Set();
let viewedStories = new Set();
let activeSubchapterId = "";
let pendingQuizType = "basic";
let activeQuizType = "basic";
let aspirationAnswer = null;

const chapter2Consonants = {
  "가": "ㄱ", "나": "ㄴ", "다": "ㄷ", "라": "ㄹ", "마": "ㅁ", "바": "ㅂ", "사": "ㅅ",
  "아": "ㅇ", "자": "ㅈ", "차": "ㅊ", "카": "ㅋ", "타": "ㅌ", "파": "ㅍ", "하": "ㅎ"
};

const aspirationPairs = [
  ["가", "카"],
  ["다", "타"],
  ["바", "파"],
  ["자", "차"]
];

function normalizePhrase(parts) {
  return parts.join("");
}

function currentChapter() {
  return chapters[activeChapterIndex];
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("koreanCafeCompletedChapters") || "[]");
    completedChapters = new Set(saved.filter((chapterNumber) => Number.isInteger(chapterNumber)));
  } catch {
    completedChapters = new Set();
  }

  try {
    const savedSubchapters = JSON.parse(localStorage.getItem("koreanCafeCompletedSubchapters") || "[]");
    completedSubchapters = new Set(savedSubchapters.filter((subchapterId) => typeof subchapterId === "string"));
  } catch {
    completedSubchapters = new Set();
  }

  try {
    const savedPronunciation = JSON.parse(localStorage.getItem("koreanCafeCompletedPronunciationSubchapters") || "[]");
    completedPronunciationSubchapters = new Set(savedPronunciation.filter((subchapterId) => typeof subchapterId === "string"));
  } catch {
    completedPronunciationSubchapters = new Set();
  }

  try {
    const savedStories = JSON.parse(localStorage.getItem("koreanCafeViewedStories") || "[]");
    viewedStories = new Set(savedStories.filter((storyId) => typeof storyId === "string"));
  } catch {
    viewedStories = new Set();
  }
}

function saveProgress() {
  localStorage.setItem("koreanCafeCompletedChapters", JSON.stringify([...completedChapters]));
  localStorage.setItem("koreanCafeCompletedSubchapters", JSON.stringify([...completedSubchapters]));
  localStorage.setItem("koreanCafeCompletedPronunciationSubchapters", JSON.stringify([...completedPronunciationSubchapters]));
  localStorage.setItem("koreanCafeViewedStories", JSON.stringify([...viewedStories]));
}

function currentStoryId() {
  return activeSubchapterId || `chapter-${currentChapter().number}`;
}

function markCurrentStoryViewed() {
  viewedStories.add(currentStoryId());
  saveProgress();
}

function completeChapter(chapterNumber) {
  completedChapters.add(chapterNumber);
  saveProgress();
}

function completeSubchapter(subchapterId) {
  completedSubchapters.add(subchapterId);
  saveProgress();
}

function completePronunciationSubchapter(subchapterId) {
  completedPronunciationSubchapters.add(subchapterId);
  saveProgress();
}

function isChapterComplete(chapterNumber) {
  const subchapters = chapterSubchapters[chapterNumber];

  if (!subchapters) {
    return completedChapters.has(chapterNumber);
  }

  return subchapters.every((subchapter) => completedSubchapters.has(subchapter.id));
}

function highestUnlockedChapter() {
  let unlocked = 1;

  for (let chapterNumber = 1; chapterNumber <= 10; chapterNumber += 1) {
    if (isChapterComplete(chapterNumber)) {
      unlocked = Math.min(10, chapterNumber + 1);
    }
  }

  return unlocked;
}

function openChapterMap() {
  renderChapterMap();
  document.body.classList.add("map-active");
  document.body.classList.remove("quiz-active", "prologue-active");
  chapterMapOverlay.classList.add("is-visible");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeChapterMap() {
  document.body.classList.remove("map-active");
  chapterMapOverlay.classList.remove("is-visible");
}

function openSubchapterMap(chapterNumber) {
  renderSubchapterMap(chapterNumber);
  document.body.classList.add("submap-active");
  document.body.classList.remove("map-active", "quiz-active", "prologue-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeSubchapterMap() {
  document.body.classList.remove("submap-active");
}

function renderSubchapterMap(chapterNumber) {
  const subchapters = chapterSubchapters[chapterNumber] || [];
  subchapterMapGrid.innerHTML = "";

  subchapters.forEach((subchapter, index) => {
    const previous = subchapters[index - 1];
    const isComplete = completedSubchapters.has(subchapter.id);
    const isUnlocked = index === 0 || Boolean(previous && completedSubchapters.has(previous.id));
    const button = document.createElement("button");
    button.type = "button";
    button.className = "subchapter-node";
    button.textContent = subchapter.label;
    button.title = `第 ${subchapter.label} 小節`;

    if (isComplete) {
      button.classList.add("is-complete");
      if (completedPronunciationSubchapters.has(subchapter.id)) {
        button.classList.add("is-pronunciation-complete");
        button.setAttribute("aria-label", `第 ${subchapter.label} 小節已完成，發音測驗也已通過`);
      } else {
        button.setAttribute("aria-label", `第 ${subchapter.label} 小節已完成`);
      }
    } else if (isUnlocked && subchapter.built) {
      button.classList.add("is-unlocked");
      button.setAttribute("aria-label", `第 ${subchapter.label} 小節可進入`);
    } else {
      button.classList.add("is-locked");
      button.disabled = true;
      button.setAttribute("aria-label", `第 ${subchapter.label} 小節尚未解鎖`);
      const lockImage = document.createElement("img");
      lockImage.src = "./assets/lock-icon.svg";
      lockImage.alt = "";
      button.appendChild(lockImage);
    }

    if (isUnlocked && subchapter.built) {
      button.addEventListener("click", () => {
        startSubchapter(subchapter);
      });
    }

    subchapterMapGrid.appendChild(button);
  });

  const completeCount = subchapters.filter((subchapter) => completedSubchapters.has(subchapter.id)).length;
  const nextPlayable = subchapters.find((subchapter, index) => {
    const previous = subchapters[index - 1];
    const isUnlocked = index === 0 || Boolean(previous && completedSubchapters.has(previous.id));
    return isUnlocked && subchapter.built && !completedSubchapters.has(subchapter.id);
  });
  const nextPlanned = subchapters.find((subchapter, index) => {
    const previous = subchapters[index - 1];
    const isUnlocked = index === 0 || Boolean(previous && completedSubchapters.has(previous.id));
    return isUnlocked && !subchapter.built;
  });
  const nextText = nextPlayable
    ? `目前可進入 ${nextPlayable.label}。`
    : nextPlanned
      ? `${nextPlanned.label} 尚未開放。`
      : "第一章已完成。";
  subchapterMapStatus.textContent = `第一章小地圖：已完成 ${completeCount} / ${subchapters.length}。${nextText}`;
}

function startSubchapter(subchapter) {
  activeSubchapterId = subchapter.id;
  closeSubchapterMap();
  const showPrologue = !viewedStories.has(subchapter.id);
  applyChapter(subchapter.chapterIndex, showPrologue);
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (!showPrologue) {
    feedbackText.textContent = "已看過劇情，直接進入訓練。";
  }
}

function renderChapterMap() {
  const unlocked = highestUnlockedChapter();
  chapterMapGrid.innerHTML = "";

  for (let chapterNumber = 1; chapterNumber <= 10; chapterNumber += 1) {
    const chapter = chapters.find((item) => item.number === chapterNumber);
    const locationName = chapterLocations[chapterNumber - 1];
    const isComplete = isChapterComplete(chapterNumber);
    const isUnlocked = chapterNumber <= unlocked;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chapter-node";
    button.textContent = chapterNumber;
    button.title = `${locationName}：第 ${chapterNumber} 章`;

    if (isComplete) {
      button.classList.add("is-complete");
      button.setAttribute("aria-label", `${locationName}，第 ${chapterNumber} 章已完成`);
    } else if (isUnlocked) {
      button.classList.add("is-unlocked");
      button.setAttribute("aria-label", `${locationName}，第 ${chapterNumber} 章可進入`);
    } else {
      button.classList.add("is-locked");
      button.disabled = true;
      button.setAttribute("aria-label", `${locationName}，第 ${chapterNumber} 章尚未解鎖`);
    }

    if (!chapter && isUnlocked) {
      button.disabled = true;
      button.classList.remove("is-unlocked");
      button.classList.add("is-locked");
      button.setAttribute("aria-label", `${locationName}，第 ${chapterNumber} 章尚未建置`);
    }

    if (chapter && isUnlocked) {
      button.addEventListener("click", () => {
        closeChapterMap();
        if (chapterSubchapters[chapter.number]) {
          openSubchapterMap(chapter.number);
        } else {
          activeSubchapterId = "";
          applyChapter(chapters.indexOf(chapter), true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }

    chapterMapGrid.appendChild(button);
  }

  const completedList = [...completedChapters].sort((a, b) => a - b);
  const completedText = completedList.length > 0 ? `已完成：第 ${completedList.join("、")} 章。` : "尚未完成任何章節。";
  const unlockedChapter = chapters.find((chapter) => chapter.number === unlocked);
  const unlockedText = unlockedChapter ? `目前可選擇第 ${unlocked} 章。` : `第 ${unlocked} 章尚未建置。`;
  chapterMapStatus.textContent = `${completedText}${unlockedText}`;
}

function setCategoryVisibility(titleElement, gridElement, label) {
  titleElement.textContent = label;
  titleElement.hidden = !label;
  gridElement.hidden = !label;
}

function applyChapter(index, showPrologue = true, updateUrl = true) {
  activeChapterIndex = Math.max(0, Math.min(index, chapters.length - 1));
  const chapter = currentChapter();

  lessons = chapter.lessons;
  prologue = chapter.prologue;
  lessonIndex = 0;
  prologueIndex = 0;
  quizQuestions = [];
  quizIndex = 0;
  quizScore = 0;
  quizWrong = 0;

  sceneChapter.textContent = chapter.sceneChapter;
  sceneTitle.textContent = chapter.sceneTitle;
  prologueChapter.textContent = chapter.prologueChapter;
  quizLabel.textContent = chapter.quizLabel;
  quizTitle.textContent = chapter.quizTitle;
  confirmText.textContent = chapter.quizConfirm;
  quizImage.src = chapter.quizImage;
  quizImage.alt = "狗狗老師在黑板前出題";

  setCategoryVisibility(basicVowelTitle, basicVowelGrid, chapter.materials.basicVowel);
  setCategoryVisibility(compoundVowelTitle, compoundVowelGrid, chapter.materials.compoundVowel);
  setCategoryVisibility(basicConsonantTitle, basicConsonantGrid, chapter.materials.basicConsonant);
  setCategoryVisibility(doubleConsonantTitle, doubleConsonantGrid, chapter.materials.doubleConsonant);
  chapter2Practice.hidden = chapter.number !== 2;

  document.body.classList.remove("quiz-active");
  document.body.classList.remove("map-active");
  document.body.classList.remove("submap-active");
  quizResultPanel.classList.remove("is-visible");
  closeQuizConfirm();
  buildMaterials();
  updateView();
  if (chapter.number === 2) {
    newAspirationQuestion();
  }

  if (showPrologue) {
    document.body.classList.add("prologue-active");
    updatePrologue();
  } else {
    document.body.classList.remove("prologue-active");
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("chapter", chapter.number);
    window.history.replaceState({}, "", url);
  }
}

function updateView() {
  const lesson = lessons[lessonIndex];

  document.querySelector("#targetText").textContent = lesson.target;
  document.querySelector("#pronounceText").textContent = `發音：${lesson.english}`;
  document.querySelector("#spiritImage").src = lesson.image;
  document.querySelector("#spiritImage").alt = `${lesson.spirit} 音靈圖片`;
  document.querySelector("#spiritName").textContent = lesson.spirit;
  document.querySelector("#spiritTitle").textContent = lesson.title;
  document.querySelector("#spiritMemory").textContent = lesson.memory;

  document.querySelectorAll(".material-btn").forEach((button) => {
    button.classList.toggle("selected", button.dataset.value === lesson.target);
  });

  updateSyllableBuilder(lesson);
}

function updateSyllableBuilder(lesson) {
  if (currentChapter().number !== 2) {
    return;
  }

  builderConsonant.textContent = chapter2Consonants[lesson.target] || "";
  builderResult.textContent = lesson.target;
  builderMemory.textContent = lesson.hint;
  syllableFormula.classList.remove("is-merging");
}

function mergeSelectedSyllable() {
  const lesson = lessons[lessonIndex];
  syllableFormula.classList.remove("is-merging");
  void syllableFormula.offsetWidth;
  syllableFormula.classList.add("is-merging");
  builderMemory.textContent = `${chapter2Consonants[lesson.target]} 和 ㅏ 合成 ${lesson.target}。${lesson.memory}`;
  speakKorean(lesson.sound);
}

function newAspirationQuestion() {
  const pair = aspirationPairs[Math.floor(Math.random() * aspirationPairs.length)];
  aspirationAnswer = pair[Math.floor(Math.random() * pair.length)];
  aspirationOptions.innerHTML = "";

  [...pair].sort(() => Math.random() - 0.5).forEach((target) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "aspiration-option";
    button.textContent = target;
    button.addEventListener("click", () => {
      const isCorrect = target === aspirationAnswer;
      button.classList.add(isCorrect ? "is-correct" : "is-wrong");
      aspirationStatus.textContent = isCorrect
        ? `答對了。${aspirationAnswer} 的發音是 ${lessons.find((lesson) => lesson.target === aspirationAnswer)?.english || aspirationAnswer}。`
        : `再聽一次：這題是 ${aspirationAnswer}。注意送氣量的差別。`;
      if (isCorrect) {
        speakKorean(aspirationAnswer);
      }
    });
    aspirationOptions.appendChild(button);
  });

  aspirationStatus.textContent = "播放聲音後，選出正確音節。";
}

function updatePrologue() {
  const scene = prologue[prologueIndex];
  document.querySelector("#prologueImage").src = scene.image;
  document.querySelector("#prologueImage").alt = `${scene.speaker} 劇情插圖`;
  prologueSpeaker.textContent = scene.speaker;
  prologueText.textContent = scene.text;
  prologueChoiceRow.innerHTML = "";
  prologuePanel.dataset.waitingChoice = scene.choices ? "true" : "false";

  if (scene.choices) {
    scene.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = choice.text;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        prologueText.textContent = choice.feedback;
        prologueChoiceRow.innerHTML = "";
        prologuePanel.dataset.waitingChoice = "false";
      });
      prologueChoiceRow.appendChild(button);
    });
  }

  prologueText.classList.remove("story-pop");
  requestAnimationFrame(() => prologueText.classList.add("story-pop"));
}

function nextPrologue() {
  if (prologuePanel.dataset.waitingChoice === "true") {
    return;
  }

  if (prologueIndex < prologue.length - 1) {
    prologueIndex += 1;
    updatePrologue();
    return;
  }

  markCurrentStoryViewed();
  document.body.classList.remove("prologue-active");
  feedbackText.textContent = currentChapter().trainingIntro;
  speakKorean(lessons[lessonIndex].sound);
}

function skipPrologue() {
  markCurrentStoryViewed();
  document.body.classList.remove("prologue-active");
  feedbackText.textContent = currentChapter().skippedIntro;
  updateView();
}

function reviewStory() {
  prologueIndex = 0;
  document.body.classList.remove("quiz-active", "map-active", "submap-active");
  document.body.classList.add("prologue-active");
  updatePrologue();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openQuizConfirm(quizType) {
  pendingQuizType = quizType;
  confirmText.textContent = quizType === "pronunciation"
    ? "要開始選做的發音測驗嗎？需要使用麥克風。"
    : "要開始基礎測驗嗎？通過後就算完成這一節。";
  confirmOverlay.classList.add("is-visible");
}

function closeQuizConfirm() {
  confirmOverlay.classList.remove("is-visible");
}

function makeQuizQuestions() {
  return lessons
    .map((lesson) => ({ lesson, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, 10)
    .map((item) => ({
      ...item.lesson,
      quizMode: activeQuizType === "pronunciation" ? "speaking" : "choice"
    }));
}

function makeOptions(correctLesson) {
  const options = [correctLesson];
  const pool = lessons.filter((lesson) => lesson.target !== correctLesson.target);

  while (options.length < 4 && pool.length > 0) {
    const index = Math.floor(Math.random() * pool.length);
    options.push(pool.splice(index, 1)[0]);
  }

  return options
    .map((lesson) => ({ lesson, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.lesson);
}

function enterQuiz() {
  activeQuizType = pendingQuizType;
  const chapter = currentChapter();
  closeQuizConfirm();
  document.body.classList.remove("prologue-active");
  document.body.classList.add("quiz-active");
  quizResultPanel.classList.remove("is-visible");
  quizQuestions = makeQuizQuestions();
  quizIndex = 0;
  quizScore = 0;
  quizWrong = 0;
  quizImage.src = chapter.quizImage;
  quizImage.alt = "狗狗老師在黑板前出題";
  quizLabel.textContent = activeQuizType === "pronunciation" ? "選做挑戰" : currentChapter().quizLabel;
  quizTitle.textContent = activeQuizType === "pronunciation" ? "發音測驗" : "基礎測驗";
  renderQuizQuestion();
}

function normalizeSpeechAnswer(text) {
  return text.normalize("NFC").replace(/[^\u3131-\u318E\uAC00-\uD7A3]/g, "");
}

function stopQuizListening() {
  if (speechRecognition && isListeningForQuiz) {
    speechRecognition.stop();
  }
}

function setQuizListeningState(isListening) {
  isListeningForQuiz = isListening;
  quizMicBtn.classList.toggle("is-listening", isListening);
  quizMicBtn.textContent = isListening ? "正在聽，請念出發音…" : "用麥克風回答";
}

function setupSpeechRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!window.isSecureContext) {
    speechRecognitionUnavailableMessage = "手機麥克風需要 HTTPS 網址，請改用安全連線後再試。";
    quizMicBtn.disabled = true;
    quizVoiceStatus.textContent = speechRecognitionUnavailableMessage;
    pronunciationQuizBtn.disabled = true;
    pronunciationQuizBtn.title = speechRecognitionUnavailableMessage;
    return;
  }

  if (!Recognition) {
    quizMicBtn.disabled = true;
    quizVoiceStatus.textContent = speechRecognitionUnavailableMessage;
    pronunciationQuizBtn.disabled = true;
    pronunciationQuizBtn.title = speechRecognitionUnavailableMessage;
    return;
  }

  speechRecognitionSupported = true;
  speechRecognition = new Recognition();
  speechRecognition.lang = "ko-KR";
  speechRecognition.continuous = false;
  speechRecognition.interimResults = false;
  speechRecognition.maxAlternatives = 5;

  speechRecognition.onstart = () => {
    setQuizListeningState(true);
    quizVoiceStatus.textContent = "正在聽，請清楚念出圖卡的韓文發音。";
  };

  speechRecognition.onresult = (event) => {
    const current = quizQuestions[quizIndex];
    if (!current || !quizAnswerHandler) {
      return;
    }

    const alternatives = Array.from(event.results[0]).map((result) => result.transcript);
    const expected = normalizeSpeechAnswer(current.sound);
    const matched = alternatives.some((text) => normalizeSpeechAnswer(text) === expected);
    const heard = alternatives[0] || "";
    quizVoiceStatus.textContent = matched
      ? `辨識到「${heard}」，發音正確！`
      : `辨識到「${heard || "無法辨識"}」，正確發音是「${current.sound}」。`;
    quizAnswerHandler(matched, null);
  };

  speechRecognition.onerror = (event) => {
    const messages = {
      "not-allowed": "未取得麥克風權限，請允許後再試。",
      "audio-capture": "找不到可使用的麥克風。",
      "no-speech": "沒有聽到聲音，請再試一次。",
      network: "語音辨識服務連線失敗，請稍後再試。"
    };
    quizVoiceStatus.textContent = messages[event.error] || "無法辨識，請再試一次或使用選項作答。";
  };

  speechRecognition.onend = () => {
    setQuizListeningState(false);
  };
}

function startQuizListening() {
  if (!speechRecognition || isListeningForQuiz || !quizQuestions[quizIndex]) {
    return;
  }

  window.speechSynthesis?.cancel();
  quizVoiceStatus.textContent = "正在啟動麥克風…";
  try {
    speechRecognition.start();
  } catch {
    quizVoiceStatus.textContent = "麥克風仍在使用中，請稍後再試。";
  }
}

function renderQuizQuestion() {
  stopQuizListening();
  quizAnswerHandler = null;

  if (quizIndex >= quizQuestions.length) {
    quizPrompt.textContent = "測驗完成";
    quizBoardQuestion.textContent = "";
    quizOptions.innerHTML = "";
    quizStatus.textContent = "";
    quizSpeakBtn.style.display = "none";
    quizVoicePanel.style.display = "none";
    quizMicBtn.style.display = "none";
    quizProgressBar.style.width = "100%";
    updateQuizScoreText();
    renderQuizResult();
    quizResultPanel.classList.add("is-visible");
    return;
  }

  const current = quizQuestions[quizIndex];
  const isSpeakingQuestion = current.quizMode === "speaking";
  const boardQuestion = isSpeakingQuestion ? current.target : current.english;
  quizBoardQuestion.textContent = boardQuestion;
  quizBoardQuestion.classList.toggle("is-long", boardQuestion.length > 4);
  quizBoardQuestion.classList.toggle("is-extra-long", boardQuestion.length > 7);
  quizSpeakBtn.style.display = isSpeakingQuestion ? "none" : "";
  quizVoicePanel.style.display = isSpeakingQuestion ? "" : "none";
  quizMicBtn.style.display = isSpeakingQuestion ? "" : "none";
  quizMicBtn.disabled = !speechRecognitionSupported;
  quizVoiceStatus.textContent = !speechRecognitionSupported
    ? speechRecognitionUnavailableMessage
    : "點擊麥克風，念出畫面上的韓文符號。";
  quizPrompt.textContent = isSpeakingQuestion
    ? "請念出黑板上的符號"
    : "請選出黑板英文發音對應的正確符號";
  quizStatus.textContent = `第 ${quizIndex + 1} 題 / ${quizQuestions.length} 題`;
  quizProgressBar.style.width = `${(quizIndex / quizQuestions.length) * 100}%`;
  updateQuizScoreText();
  quizOptions.innerHTML = "";
  quizOptions.style.display = isSpeakingQuestion ? "none" : "";

  let isReviewingWrongAnswer = false;
  const optionButtons = [];

  quizAnswerHandler = (isCorrect, selectedButton) => {
    if (isReviewingWrongAnswer) {
      if (isCorrect) {
        speakKorean(current.sound);
        quizIndex += 1;
        renderQuizQuestion();
      }
      return;
    }

    if (isCorrect) {
      quizScore += 1;
      updateQuizScoreText();
      speakKorean(current.sound);
      showAnswerFlash(true, () => {
        quizIndex += 1;
        renderQuizQuestion();
      });
    } else {
      quizWrong += 1;
      isReviewingWrongAnswer = true;
      if (isSpeakingQuestion && !selectedButton) {
        quizStatus.textContent = `發音還不正確，請再念一次「${current.target}」`;
        updateQuizScoreText();
        showAnswerFlash(false, () => {});
        return;
      }
      selectedButton?.classList.add("is-missed");
      optionButtons.forEach((optionButton) => {
        const isCorrectOption = optionButton.dataset.target === current.target;
        optionButton.disabled = !isCorrectOption;
        optionButton.classList.toggle("is-correction", isCorrectOption);
        if (isCorrectOption) {
          optionButton.setAttribute("aria-label", `${optionButton.textContent}，正確答案，點選進入下一題`);
        }
      });
      quizMicBtn.disabled = true;
      quizStatus.textContent = "答錯了，請點紅色正確答案繼續";
      updateQuizScoreText();
      speakKorean(current.sound);
      showAnswerFlash(false, () => {});
    }
  };

  makeOptions(current).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = option.target;
    button.dataset.target = option.target;
    button.addEventListener("click", () => {
      const isCorrect = option.target === current.target;
      quizAnswerHandler(isCorrect, button);
    });
    optionButtons.push(button);
    quizOptions.appendChild(button);
  });

  if (!isSpeakingQuestion) {
    setTimeout(() => speakKorean(current.sound), 180);
  }
}

function updateQuizScoreText() {
  quizCorrectText.textContent = `答對：${quizScore}`;
  quizWrongText.textContent = `答錯：${quizWrong}`;
}

function resultImageUrl(src) {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}result=${Date.now()}`;
}

function showAnswerFlash(isCorrect, onDone) {
  answerFlash.textContent = isCorrect ? "○" : "×";
  answerFlash.className = `answer-flash is-visible ${isCorrect ? "is-correct" : "is-wrong"}`;
  setTimeout(() => {
    answerFlash.className = "answer-flash";
    onDone();
  }, 560);
}

function backToTraining() {
  document.body.classList.remove("quiz-active");
  quizResultPanel.classList.remove("is-visible");
  feedbackText.textContent = "回到新人教育訓練，可以繼續複習音靈卡。";
  updateView();
}

function renderQuizResult() {
  quizResultActions.innerHTML = "";
  const chapter = currentChapter();

  if (quizWrong > 0) {
    quizImage.src = resultImageUrl(chapter.failImage);
    quizImage.alt = "測驗失敗，狗狗老師請玩家回去重練";
    quizResultText.textContent = activeQuizType === "pronunciation"
      ? `發音挑戰答對 ${quizScore} 題，答錯 ${quizWrong} 題。可以之後再回來挑戰。`
      : `你答對 ${quizScore} 題，答錯 ${quizWrong} 題。先回去重練一下吧。`;

    const reviewButton = document.createElement("button");
    reviewButton.type = "button";
    reviewButton.textContent = "回去重練";
    reviewButton.addEventListener("click", backToTraining);
    quizResultActions.appendChild(reviewButton);
    return;
  }

  quizImage.src = resultImageUrl(chapter.passImage);
  quizImage.alt = "測驗成功，狗狗老師宣布過關";
  quizResultText.textContent = activeQuizType === "pronunciation"
    ? `發音測驗全對！小節圖示獲得一圈發音光環。`
    : `基礎測驗全對！你已通過這一節。`;

  if (activeQuizType === "pronunciation") {
    if (activeSubchapterId) {
      completePronunciationSubchapter(activeSubchapterId);
    }
  } else {
    if (activeSubchapterId) {
      completeSubchapter(activeSubchapterId);
      if (isChapterComplete(chapter.number)) {
        completeChapter(chapter.number);
      }
    } else {
      completeChapter(chapter.number);
    }
  }

  if (activeSubchapterId) {
    const subchapterButton = document.createElement("button");
    subchapterButton.type = "button";
    subchapterButton.textContent = "回到第一章小地圖";
    subchapterButton.addEventListener("click", () => {
      openSubchapterMap(chapter.number);
    });
    quizResultActions.appendChild(subchapterButton);
  } else if (activeChapterIndex < chapters.length - 1) {
    const mapButton = document.createElement("button");
    mapButton.type = "button";
    mapButton.textContent = "開啟路線大地圖";
    mapButton.addEventListener("click", () => {
      openChapterMap();
    });
    quizResultActions.appendChild(mapButton);
  } else {
    const completeButton = document.createElement("button");
    completeButton.type = "button";
    completeButton.textContent = "查看路線大地圖";
    completeButton.addEventListener("click", openChapterMap);
    quizResultActions.appendChild(completeButton);
  }

  const practiceButton = document.createElement("button");
  practiceButton.type = "button";
  practiceButton.textContent = activeQuizType === "pronunciation" ? "再練習發音" : "過關，但我想再練練";
  practiceButton.addEventListener("click", backToTraining);
  quizResultActions.appendChild(practiceButton);

  if (activeQuizType === "basic" && speechRecognitionSupported) {
    const pronunciationButton = document.createElement("button");
    pronunciationButton.type = "button";
    pronunciationButton.textContent = "接著挑戰發音測驗";
    pronunciationButton.addEventListener("click", () => {
      pendingQuizType = "pronunciation";
      enterQuiz();
    });
    quizResultActions.appendChild(pronunciationButton);
  }
}

function speakKorean(text) {
  if (!("speechSynthesis" in window)) {
    feedbackText.textContent = "目前這個預覽瀏覽器不支援語音。請用 Chrome 或 Edge 開啟 http://127.0.0.1:8090/ 再試一次。";
    return;
  }

  window.speechSynthesis.cancel();
  activeUtterance = new SpeechSynthesisUtterance(text);
  activeUtterance.lang = "ko-KR";
  activeUtterance.rate = 0.86;
  activeUtterance.pitch = 1.04;

  const voices = window.speechSynthesis.getVoices();
  const koreanVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("ko"));
  if (koreanVoice) {
    activeUtterance.voice = koreanVoice;
  } else {
    feedbackText.textContent = "正在播放，但這台電腦可能沒有韓文語音，發音可能不標準。";
  }

  activeUtterance.onend = () => {
    activeUtterance = null;
  };

  window.speechSynthesis.speak(activeUtterance);
  feedbackText.textContent = `正在播放：${text}`;
}

function buildMaterials() {
  basicVowelGrid.innerHTML = "";
  compoundVowelGrid.innerHTML = "";
  basicConsonantGrid.innerHTML = "";
  doubleConsonantGrid.innerHTML = "";
  lessons.forEach((lesson, index) => {
    const category = getLessonCategory(lesson.target);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `material-btn ${category.cardClass}`;
    button.dataset.value = lesson.target;
    button.innerHTML = `
      <span class="material-letter">${lesson.target}</span>
      <span class="material-name">${lesson.spirit}</span>
      <span class="material-english">${lesson.sound} / ${lesson.english}</span>
    `;
    button.addEventListener("click", () => {
      lessonIndex = index;
      feedbackText.textContent = `${lesson.spirit}：${lesson.target}，發音 ${lesson.english}。`;
      updateView();
      speakKorean(lesson.sound);
    });
    category.grid.appendChild(button);
  });
}

function getLessonCategory(target) {
  const lesson = lessons.find((item) => item.target === target);

  if (lesson?.category === "basicVowel") {
    return { cardClass: "vowel-card", grid: basicVowelGrid };
  }

  if (lesson?.category === "compoundVowel") {
    return { cardClass: "compound-vowel-card", grid: compoundVowelGrid };
  }

  if (lesson?.category === "basicConsonant") {
    return { cardClass: "consonant-card", grid: basicConsonantGrid };
  }

  if (lesson?.category === "doubleConsonant") {
    return { cardClass: "double-consonant-card", grid: doubleConsonantGrid };
  }

  if (basicVowelTargets.has(target)) {
    return { cardClass: "vowel-card", grid: basicVowelGrid };
  }

  if (compoundVowelTargets.has(target)) {
    return { cardClass: "compound-vowel-card", grid: compoundVowelGrid };
  }

  if (doubleConsonantTargets.has(target)) {
    return { cardClass: "double-consonant-card", grid: doubleConsonantGrid };
  }

  return { cardClass: "consonant-card", grid: basicConsonantGrid };
}

prologuePanel.addEventListener("click", nextPrologue);
prologueSkipBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  skipPrologue();
});
readyQuizBtn.addEventListener("click", () => openQuizConfirm("basic"));
pronunciationQuizBtn.addEventListener("click", () => openQuizConfirm("pronunciation"));
reviewStoryBtn.addEventListener("click", reviewStory);
returnToSubchapterMapBtn.addEventListener("click", () => {
  const chapterNumber = currentChapter().number;

  if (chapterSubchapters[chapterNumber]) {
    openSubchapterMap(chapterNumber);
  } else {
    openChapterMap();
  }
});
confirmQuizBtn.addEventListener("click", enterQuiz);
cancelQuizBtn.addEventListener("click", closeQuizConfirm);
closeChapterMapBtn.addEventListener("click", closeChapterMap);
chapterMapOverlay.addEventListener("click", (event) => {
  if (!document.body.classList.contains("map-active") && event.target === chapterMapOverlay) {
    closeChapterMap();
  }
});
backToChapterMapBtn.addEventListener("click", () => {
  closeSubchapterMap();
  openChapterMap();
});
quizSpeakBtn.addEventListener("click", () => {
  if (quizQuestions[quizIndex]) {
    speakKorean(quizQuestions[quizIndex].sound);
  }
});
quizMicBtn.addEventListener("click", startQuizListening);
mergeSyllableBtn.addEventListener("click", mergeSelectedSyllable);
newAspirationBtn.addEventListener("click", newAspirationQuestion);
aspirationSpeakBtn.addEventListener("click", () => {
  if (aspirationAnswer) {
    speakKorean(aspirationAnswer);
    aspirationStatus.textContent = "聽聲音的送氣量，再選一個音節。";
  }
});
setupSpeechRecognition();

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
} else {
  feedbackText.textContent = "目前這個預覽瀏覽器不支援語音。請用 Chrome 或 Edge 開啟 http://127.0.0.1:8090/。";
}

const initialSearchParams = new URLSearchParams(window.location.search);

if (initialSearchParams.get("resetProgress") === "1") {
  localStorage.removeItem("koreanCafeCompletedChapters");
  localStorage.removeItem("koreanCafeCompletedSubchapters");
  localStorage.removeItem("koreanCafeCompletedPronunciationSubchapters");
  localStorage.removeItem("koreanCafeViewedStories");
  initialSearchParams.delete("resetProgress");
  const resetUrl = new URL(window.location.href);
  resetUrl.search = initialSearchParams.toString();
  window.history.replaceState({}, "", resetUrl);
}

loadProgress();
applyChapter(0, false, false);

if (initialSearchParams.has("chapter")) {
  initialSearchParams.delete("chapter");
  const mapUrl = new URL(window.location.href);
  mapUrl.search = initialSearchParams.toString();
  window.history.replaceState({}, "", mapUrl);
}

openChapterMap();
