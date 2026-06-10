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

const section12Lessons = [
  { target: "가", sound: "가", english: "ga", spirit: "開門加", image: "./assets/spirits/ch2-ga.webp?v=3", title: "1-2 音節卡", memory: "ㄱ 加上 ㅏ，像把第一扇門打開。", meaning: "加是第一章第二節的第一杯咖啡，短短一聲把子音和母音接起來。", hint: "ㄱ + ㅏ = 가", category: "basicVowel" },
  { target: "나", sound: "나", english: "na", spirit: "小路拿", image: "./assets/spirits/ch2-na.webp?v=3", title: "1-2 音節卡", memory: "ㄴ 加上 ㅏ，舌尖輕碰後走出小路。", meaning: "拿負責把客人帶到座位，聲音柔和但很清楚。", hint: "ㄴ + ㅏ = 나", category: "basicVowel" },
  { target: "다", sound: "다", english: "da", spirit: "石階達", image: "./assets/spirits/ch2-da.webp?v=3", title: "1-2 音節卡", memory: "ㄷ 加上 ㅏ，像腳步踏上石階。", meaning: "達會把訂單一步一步送到櫃台。", hint: "ㄷ + ㅏ = 다", category: "basicVowel" },
  { target: "라", sound: "라", english: "ra/la", spirit: "風帶拉", image: "./assets/spirits/ch2-ra.webp?v=3", title: "1-2 音節卡", memory: "ㄹ 加上 ㅏ，聲音像飄帶輕輕轉彎。", meaning: "拉在咖啡香裡繞圈，提醒你韓文音節會連起來。", hint: "ㄹ + ㅏ = 라", category: "basicVowel" },
  { target: "마", sound: "마", english: "ma", spirit: "工匠媽", image: "./assets/spirits/ch2-ma.webp?v=3", title: "1-2 音節卡", memory: "ㅁ 加上 ㅏ，雙唇合起再打開。", meaning: "媽會把聲音磨得圓圓的，像熱牛奶泡泡。", hint: "ㅁ + ㅏ = 마", category: "basicVowel" },
  { target: "바", sound: "바", english: "ba/pa", spirit: "風鈴吧", image: "./assets/spirits/ch2-ba.webp?v=3", title: "1-2 音節卡", memory: "ㅂ 加上 ㅏ，雙唇輕輕彈開。", meaning: "吧是櫃台旁的小風鈴，提醒你出聲要有彈性。", hint: "ㅂ + ㅏ = 바", category: "compoundVowel" },
  { target: "사", sound: "사", english: "sa", spirit: "細沙撒", image: "./assets/spirits/ch2-sa.webp?v=3", title: "1-2 音節卡", memory: "ㅅ 加上 ㅏ，氣流像細沙滑過。", meaning: "撒會替咖啡撒上糖粉，聲音細細的。", hint: "ㅅ + ㅏ = 사", category: "compoundVowel" },
  { target: "아", sound: "아", english: "a", spirit: "透明阿", image: "./assets/spirits/ch2-a.webp?v=3", title: "1-2 音節卡", memory: "ㅇ 在開頭安靜，讓 ㅏ 自己發光。", meaning: "阿是透明圓端出的第一杯清晨水。", hint: "ㅇ + ㅏ = 아", category: "compoundVowel" },
  { target: "자", sound: "자", english: "ja", spirit: "鈴匠札", image: "./assets/spirits/ch2-ja.webp?v=3", title: "1-2 音節卡", memory: "ㅈ 加上 ㅏ，像短短的 j 音。", meaning: "札會把客人的名字寫在杯套上。", hint: "ㅈ + ㅏ = 자", category: "basicConsonant" },
  { target: "차", sound: "차", english: "cha", spirit: "清風茶", image: "./assets/spirits/ch2-cha.webp?v=3", title: "1-2 音節卡", memory: "ㅊ 加上 ㅏ，比 ㅈ 多一口氣。", meaning: "茶把窗戶打開，聲音帶著清楚的風。", hint: "ㅊ + ㅏ = 차", category: "basicConsonant" },
  { target: "카", sound: "카", english: "ka", spirit: "石門卡", image: "./assets/spirits/ch2-ka.webp?v=3", title: "1-2 音節卡", memory: "ㅋ 加上 ㅏ，比 ㄱ 多一口氣，像推開厚重石門。", meaning: "卡會用清楚的送氣聲推開咖啡館外的石門。", hint: "ㅋ + ㅏ = 카", category: "basicConsonant" },
  { target: "타", sound: "타", english: "ta", spirit: "踏步塔", image: "./assets/spirits/ch2-ta.webp?v=3", title: "1-2 音節卡", memory: "ㅌ 加上 ㅏ，比 ㄷ 多一口氣，腳步更俐落。", meaning: "塔沿著送餐路線踏出清楚又有風的步伐。", hint: "ㅌ + ㅏ = 타", category: "basicConsonant" },
  { target: "파", sound: "파", english: "pa", spirit: "蒲公英帕", image: "./assets/spirits/ch2-pa.webp?v=3", title: "1-2 音節卡", memory: "ㅍ 加上 ㅏ，比 ㅂ 多一口氣，像吹飛蒲公英。", meaning: "帕吹起一陣小風，讓花園裡的蒲公英一起旅行。", hint: "ㅍ + ㅏ = 파", category: "basicConsonant" },
  { target: "하", sound: "하", english: "ha", spirit: "呼吸哈", image: "./assets/spirits/ch2-ha.webp?v=3", title: "1-2 音節卡", memory: "ㅎ 加上 ㅏ，像對玻璃輕輕呵氣後張口說 아。", meaning: "哈在清晨玻璃上留下柔軟霧氣，提醒你放鬆呼吸。", hint: "ㅎ + ㅏ = 하", category: "basicConsonant" }
];

const section12Prologue = [
  {
    speaker: "旁白",
    image: "./assets/1-02-1.webp",
    text: "第一天的 40 音訓練完成後，天使惡魔館的櫃台亮起第二盞燈。"
  },
  {
    speaker: "陽",
    image: "./assets/1-02-2.webp",
    text: "新的訓練開始囉。今天不是只認單一字母，要把子音和母音合成一個音節。"
  },
  {
    speaker: "Jumbo",
    image: "./assets/1-02-3.webp",
    text: "汪！(先從最常見的 ㅏ 系列開始：가、나、다、라、마。)"
  },
  {
    speaker: "你",
    image: "./assets/1-02-4.webp",
    text: "原來韓文跟羅馬拼音一樣。"
  },
  {
    speaker: "陽",
    image: "./assets/1-02-5.webp",
    text: "沒錯。先完成 1-2 訓練，再試著通過音節測驗吧。",
    choices: [
      { text: "開始吧~", feedback: "Jumbo把 1-2 音節卡推到你面前。" },
      { text: "我想先觀察", feedback: "陽：別看了，直接開始啦！" }
    ]
  }
];

const chapter2Prologue = [
  {
    speaker: "旁白",
    image: "./assets/store/2-0.webp",
    text: "離開天使惡魔館後，你沿著海邊小路來到陽介紹的打工地點：龜仙CU便利商店。店裡還空著，窗外的光把木地板照得亮亮的。"
  },
  {
    speaker: "店長",
    image: "./assets/store/2-1.webp",
    text: "你就是陽推薦來的工讀生？"
  },
  {
    speaker: "你",
    image: "./assets/store/2-2.webp",
    text: "你好，我是龍野翔。"
  },
  {
    speaker: "迷之聲",
    image: "./assets/store/2-3.webp",
    text: "哥哥，這位新的工讀生嗎？"
  },
  {
    speaker: "牧野紫",
    image: "./assets/store/2-4.webp",
    text: "你好，我是牧野紫，這是哥哥速水，我們一起努力吧！"
  },
  {
    speaker: "速水",
    image: "./assets/store/2-5.webp",
    text: "你身體不好，不要跑來這邊忙。"
  },
  {
    speaker: "龍野翔",
    image: "./assets/store/2-6.webp",
    text: "牧野紫，我會努力的~"
  },
  {
    speaker: "速水",
    image: "./assets/store/2-7.webp",
    text: "滾。",
    choices: [
      { text: "開店準備開工", feedback: "店長把鑰匙丟到你手上。" },
      { text: "再看一次店內", feedback: "你繞著空店走了一圈，確認地板和牆邊都可以規劃動線。" }
    ]
  }
];

const chapters = [
  {
    number: 1,
    sceneChapter: "Day 1",
    sceneTitle: "天使惡魔館咖啡新人訓練",
    sceneImage: "./assets/001.webp",
    sceneImageAlt: "天使惡魔館咖啡店外觀",
    prologueChapter: "第一天：報到",
    trainingIntro: "教育訓練開始。現在跟著Jumbo找出 ㅏ。",
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
    number: "1-2",
    sceneChapter: "第一章・1-2",
    sceneTitle: "音節咖啡實作",
    sceneImage: "./assets/1-02-3.webp?v=2",
    sceneImageAlt: "狗狗躺在發光魔法陣上的第一章第二節場景",
    prologueChapter: "第一章第二節：音節拼讀",
    trainingIntro: "第二節開始。先從 ㅏ 系列音節練習拼讀。",
    skippedIntro: "已跳過第二節劇情，進入音節訓練。",
    quizLabel: "音節拼讀測驗",
    quizTitle: "ㅏ 系列確認",
    quizConfirm: "第二節測驗囉?要確定呢~",
    quizImage: "./assets/quiz-dog-teacher.webp",
    passImage: "./assets/1O.webp",
    failImage: "./assets/1X.webp",
    materials: {
      basicVowel: "ㅏ 系列 5",
      compoundVowel: "常用音節 3",
      basicConsonant: "進階音節 6",
      doubleConsonant: ""
    },
    lessons: section12Lessons,
    prologue: section12Prologue
  },
  {
    number: 2,
    kind: "store",
    sceneChapter: "第二章",
    sceneTitle: "龜仙CU便利商店",
    sceneImage: "./assets/chapter-map-shops-portrait-v11.webp?v=1",
    sceneImageAlt: "龜仙CU便利商店章節地圖",
    prologueChapter: "第二章：開店準備",
    trainingIntro: "便利商店開張。先把家具放到棋盤上，再接待客人。",
    skippedIntro: "已進入龜仙CU便利商店經營。",
    quizLabel: "便利商店營業確認",
    quizTitle: "便利商店經營",
    quizConfirm: "要開始營業嗎？",
    quizImage: "./assets/quiz-dog-teacher.webp",
    passImage: "./assets/1O.webp",
    failImage: "./assets/1X.webp",
    materials: {
      basicVowel: "",
      compoundVowel: "",
      basicConsonant: "",
      doubleConsonant: ""
    },
    lessons: section12Lessons,
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
    built: index <= 1,
    chapterIndex: 0,
    ...(index === 0 ? {
      sceneTitle: "天使惡魔館新人訓練：韓文 40 音",
      quizLabel: "1-1 韓文 40 音測驗",
      quizTitle: "40 音確認",
      quizConfirm: "要開始 1-1 韓文 40 音測驗嗎？",
      trainingIntro: "1-1 教育訓練開始。先認識完整的韓文 40 音。",
      skippedIntro: "已跳過劇情，進入 1-1 韓文 40 音訓練。"
    } : {}),
    ...(index === 1 ? {
      chapterIndex: 1
    } : {})
  }))
};

const feedbackText = document.querySelector("#feedbackText");
const basicVowelGrid = document.querySelector("#basicVowelGrid");
const compoundVowelGrid = document.querySelector("#compoundVowelGrid");
const basicConsonantGrid = document.querySelector("#basicConsonantGrid");
const doubleConsonantGrid = document.querySelector("#doubleConsonantGrid");
const sceneChapter = document.querySelector("#sceneChapter");
const sceneTitle = document.querySelector("#sceneTitle");
const sceneImage = document.querySelector("#sceneImage");
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
const skipChapterOneBtn = document.querySelector("#skipChapterOneBtn");
const subchapterMapScreen = document.querySelector("#subchapterMapScreen");
const subchapterMapGrid = document.querySelector("#subchapterMapGrid");
const subchapterMapStatus = document.querySelector("#subchapterMapStatus");
const backToChapterMapBtn = document.querySelector("#backToChapterMapBtn");
const aspirationPractice = document.querySelector("#aspirationPractice");
const newAspirationBtn = document.querySelector("#newAspirationBtn");
const aspirationSpeakBtn = document.querySelector("#aspirationSpeakBtn");
const aspirationOptions = document.querySelector("#aspirationOptions");
const aspirationStatus = document.querySelector("#aspirationStatus");
const storeContent = document.querySelector("#storeContent");
const storeBoard = document.querySelector("#storeBoard");
const storePalette = document.querySelector("#storePalette");
const storeMoneyText = document.querySelector("#storeMoneyText");
const storeRepText = document.querySelector("#storeRepText");
const storeDayText = document.querySelector("#storeDayText");
const storeOrderText = document.querySelector("#storeOrderText");
const storeStatusText = document.querySelector("#storeStatusText");
const storeServeBtn = document.querySelector("#storeServeBtn");
const storeBackMapBtn = document.querySelector("#storeBackMapBtn");
const storeReviewStoryBtn = document.querySelector("#storeReviewStoryBtn");
const storeEditLayoutBtn = document.querySelector("#storeEditLayoutBtn");
const storeSaveLayoutBtn = document.querySelector("#storeSaveLayoutBtn");
const storeDirectionControls = document.querySelector("#storeDirectionControls");
const storeOrderPanel = document.querySelector(".store-order-panel");
const storeManagerDialog = document.querySelector("#storeManagerDialog");
const storeManagerText = document.querySelector("#storeManagerText");
const storeManagerCloseBtn = document.querySelector("#storeManagerCloseBtn");
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
let selectedFurnitureId = "shelf";
let selectedDirection = "front";
let storeEditMode = false;
let storeState = null;
let storeCustomerStates = [];
let storeWalkTimer = null;
let storeClerkMotionTimer = null;
let activeStoreCustomerIndex = 0;
const storeLayoutVersion = 9;
const storeReputationGoal = 50;

const storeDirections = [
  { id: "front", label: "正面" },
  { id: "right", label: "右面" },
  { id: "back", label: "背面" },
  { id: "left", label: "左面" }
];

const storeGridCols = 12;
const storeGridRows = 8;
const storeFloorCorners = {
  back: { left: 49.6, top: 24.2 },
  leftWall: { left: 4.2, top: 55.8 },
  rightWall: { left: 98.6, top: 56.4 }
};

const defaultStoreFixtures = [
  { id: "shelf", left: 26, top: 41, z: 64, direction: "front" },
  { id: "fridge", left: 39, top: 29, z: 58, direction: "front" },
  { id: "coffee", left: 64, top: 29, z: 66, direction: "front" },
  { id: "freezer", left: 74, top: 51, z: 86, direction: "front" },
  { id: "counter", left: 56, top: 79, z: 96, direction: "front" },
  { id: "table", left: 28, top: 77, z: 90, direction: "front" },
  { id: "magazine", left: 76, top: 83, z: 104, direction: "front" }
];

const aspirationPairs = [
  ["가", "카"],
  ["다", "타"],
  ["바", "파"],
  ["자", "차"]
];

const storeFurniture = [
  { id: "counter", name: "收銀櫃台", korean: "계산대", mark: "계", image: "./assets/store/generated/split-v6/furniture/counter-front.png?v=1", width: 90, cost: 40, max: 1 },
  { id: "shelf", name: "零食貨架", korean: "진열대", mark: "진", image: "./assets/store/generated/split-v6/furniture/shelf-front.png?v=1", width: 84, cost: 25 },
  { id: "fridge", name: "飲料冰箱", korean: "냉장고", mark: "냉", image: "./assets/store/generated/split-v6/furniture/fridge-front.png?v=1", width: 76, cost: 35 },
  { id: "freezer", name: "冷凍櫃", korean: "냉동고", mark: "동", image: "./assets/store/generated/split-v6/furniture/freezer-front.png?v=1", width: 96, cost: 45 },
  { id: "table", name: "試吃桌", korean: "시식대", mark: "식", image: "./assets/store/generated/split-v6/furniture/table-front.png?v=1", width: 72, cost: 30 },
  { id: "coffee", name: "咖啡台", korean: "커피", mark: "커", image: "./assets/store/generated/split-v6/furniture/coffee-front.png?v=1", width: 76, cost: 30 },
  { id: "magazine", name: "雜誌架", korean: "잡지", mark: "잡", image: "./assets/store/generated/split-v6/furniture/magazine-front.png?v=1", width: 64, cost: 22 }
];

const storeClerk = {
  image: "./assets/store/clerk-map-sprite.png?v=1",
  alt: "收銀店員"
};

let storeClerkPosition = null;

storeFurniture.forEach((furniture) => {
  furniture.images = Object.fromEntries(
    storeDirections.map((direction) => [
      direction.id,
      `./assets/store/generated/split-v6/furniture/${furniture.id}-${direction.id}.png?v=1`
    ])
  );
});

const storeCustomerTypes = [
  { name: "學生客人", image: "./assets/store/generated/split/customers/student.png", className: "customer-student" },
  { name: "上班族客人", image: "./assets/store/generated/split/customers/worker.png", className: "customer-worker" },
  { name: "旅客客人", image: "./assets/store/generated/split/customers/tourist.png", className: "customer-tourist" },
  { name: "長輩客人", image: "./assets/store/generated/split/customers/elder.png", className: "customer-elder" },
  { name: "小朋友客人", image: "./assets/store/generated/split/customers/child.png", className: "customer-child" },
  { name: "運動少年", image: "./assets/store/generated/split/customers/sporty.png", className: "customer-sporty" },
  { name: "時尚客人", image: "./assets/store/generated/split/customers/shopper.png", className: "customer-shopper" },
  { name: "外送客人", image: "./assets/store/generated/split/customers/delivery.png", className: "customer-delivery" },
  { name: "親子客人", image: "./assets/store/generated/split/customers/parent.png", className: "customer-parent" },
  { name: "深夜客人", image: "./assets/store/generated/split/customers/sleepy.png", className: "customer-sleepy" }
];

const storeCustomerSpots = [
  { left: 42, top: 58 },
  { left: 34, top: 60 },
  { left: 52, top: 62 },
  { left: 63, top: 61 },
  { left: 29, top: 66 },
  { left: 43, top: 70 },
  { left: 56, top: 70 },
  { left: 68, top: 71 }
];

const storeOrders = [
  { required: "shelf", word: "라면", chinese: "拉麵", reward: 28 },
  { required: "shelf", word: "컵라면", chinese: "杯麵", reward: 30 },
  { required: "shelf", word: "과자", chinese: "餅乾", reward: 24 },
  { required: "shelf", word: "초콜릿", chinese: "巧克力", reward: 26 },
  { required: "shelf", word: "사탕", chinese: "糖果", reward: 22 },
  { required: "shelf", word: "껌", chinese: "口香糖", reward: 20 },
  { required: "shelf", word: "시리얼", chinese: "穀片", reward: 32 },
  { required: "fridge", word: "우유", chinese: "牛奶", reward: 34 },
  { required: "fridge", word: "물", chinese: "水", reward: 18 },
  { required: "fridge", word: "주스", chinese: "果汁", reward: 28 },
  { required: "fridge", word: "콜라", chinese: "可樂", reward: 28 },
  { required: "fridge", word: "요구르트", chinese: "優格飲", reward: 30 },
  { required: "fridge", word: "두유", chinese: "豆漿", reward: 30 },
  { required: "fridge", word: "에너지드링크", chinese: "能量飲料", reward: 38 },
  { required: "freezer", word: "아이스크림", chinese: "冰淇淋", reward: 42 },
  { required: "freezer", word: "얼음", chinese: "冰塊", reward: 24 },
  { required: "freezer", word: "냉동만두", chinese: "冷凍水餃", reward: 44 },
  { required: "freezer", word: "냉동피자", chinese: "冷凍披薩", reward: 48 },
  { required: "freezer", word: "냉동볶음밥", chinese: "冷凍炒飯", reward: 46 },
  { required: "table", word: "김밥", chinese: "飯捲", reward: 32 },
  { required: "table", word: "도시락", chinese: "便當", reward: 46 },
  { required: "table", word: "샌드위치", chinese: "三明治", reward: 36 },
  { required: "table", word: "삼각김밥", chinese: "三角飯糰", reward: 34 },
  { required: "table", word: "핫도그", chinese: "熱狗", reward: 34 },
  { required: "coffee", word: "커피", chinese: "咖啡", reward: 36 },
  { required: "coffee", word: "라떼", chinese: "拿鐵", reward: 40 },
  { required: "coffee", word: "아메리카노", chinese: "美式咖啡", reward: 38 },
  { required: "magazine", word: "잡지", chinese: "雜誌", reward: 30 },
  { required: "magazine", word: "신문", chinese: "報紙", reward: 26 },
  { required: "counter", word: "봉투", chinese: "袋子", reward: 20 }
];

function normalizePhrase(parts) {
  return parts.join("");
}

function currentChapter() {
  return chapters[activeChapterIndex];
}

function currentSubchapter() {
  if (!activeSubchapterId) {
    return null;
  }

  return Object.values(chapterSubchapters)
    .flat()
    .find((subchapter) => subchapter.id === activeSubchapterId) || null;
}

function currentSubchapterMapChapter() {
  const subchapter = currentSubchapter();
  return subchapter ? Number(subchapter.id.split("-")[0]) : currentChapter().number;
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

function defaultStoreState() {
  return {
    layoutVersion: storeLayoutVersion,
    fixtures: defaultStoreFixtures.map((fixture) => ({ ...fixture })),
    customers: [],
    money: 180,
    reputation: 0,
    day: 1,
    orderIndex: 0
  };
}

function loadStoreState() {
  try {
    const saved = JSON.parse(localStorage.getItem("koreanCafeStoreState") || "null");
    if (
      saved &&
      saved.layoutVersion === storeLayoutVersion &&
      Array.isArray(saved.fixtures) &&
      Number.isInteger(saved.money) &&
      Number.isInteger(saved.reputation) &&
      Number.isInteger(saved.day) &&
      Number.isInteger(saved.orderIndex)
    ) {
      storeState = saved;
      storeState.customers = Array.isArray(saved.customers) ? saved.customers : [];
      storeCustomerStates = storeState.customers
        .filter((customer) => customer && Number.isInteger(customer.spotIndex))
        .map((customer) => ({ ...customer }));
      return;
    }
  } catch {
    storeState = null;
  }

  storeState = defaultStoreState();
  storeCustomerStates = [];
}

function saveStoreState() {
  if (storeState) {
    storeState.customers = storeCustomerStates.map((customer) => ({ ...customer }));
  }
  localStorage.setItem("koreanCafeStoreState", JSON.stringify(storeState));
}

function placedFurnitureCount(furnitureId) {
  return storeState.fixtures.filter((item) => item.id === furnitureId).length;
}

function storeCellPosition(cell) {
  const x = cell % storeGridCols;
  const y = Math.floor(cell / storeGridCols);
  const u = storeGridCols <= 1 ? 0 : x / (storeGridCols - 1);
  const v = storeGridRows <= 1 ? 0 : y / (storeGridRows - 1);
  const origin = storeFloorCorners.back;
  const rightAxis = storeFloorCorners.rightWall;
  const leftAxis = storeFloorCorners.leftWall;

  return {
    left: origin.left + (rightAxis.left - origin.left) * u + (leftAxis.left - origin.left) * v,
    top: origin.top + (rightAxis.top - origin.top) * u + (leftAxis.top - origin.top) * v,
    z: 30 + y * storeGridCols + x
  };
}

function activeStoreFixture() {
  return storeState.fixtures.find((fixture) => fixture.id === selectedFurnitureId) || null;
}

function updateSelectedFixtureDirection() {
  const fixture = activeStoreFixture();
  if (fixture) {
    fixture.direction = selectedDirection;
  }
}

function randomStoreOrderIndex(excludeIndex = -1) {
  if (storeOrders.length <= 1) {
    return 0;
  }

  let nextIndex = Math.floor(Math.random() * storeOrders.length);
  if (nextIndex === excludeIndex) {
    nextIndex = (nextIndex + 1 + Math.floor(Math.random() * (storeOrders.length - 1))) % storeOrders.length;
  }
  return nextIndex;
}

function randomStoreCustomerTypeIndex(excludeIndex = -1) {
  if (storeCustomerTypes.length <= 1) {
    return 0;
  }

  let nextIndex = Math.floor(Math.random() * storeCustomerTypes.length);
  if (nextIndex === excludeIndex) {
    nextIndex = (nextIndex + 1 + Math.floor(Math.random() * (storeCustomerTypes.length - 1))) % storeCustomerTypes.length;
  }
  return nextIndex;
}

function currentStoreOrder(customerIndex = activeStoreCustomerIndex) {
  const customer = storeCustomerStates[customerIndex];
  if (customer && Number.isInteger(customer.orderIndex)) {
    return storeOrders[customer.orderIndex % storeOrders.length];
  }
  return storeOrders[(storeState.orderIndex + customerIndex) % storeOrders.length];
}

function randomStoreDirection(from, to) {
  if (!from || !to) {
    return "front";
  }

  const dx = to.left - from.left;
  const dy = to.top - from.top;
  if (Math.abs(dx) > Math.abs(dy)) {
    return dx >= 0 ? "right" : "left";
  }
  return dy >= 0 ? "front" : "back";
}

function storePointDistance(a, b) {
  const dx = a.left - b.left;
  const dy = (a.top - b.top) * 1.35;
  return Math.sqrt(dx * dx + dy * dy);
}

function storeCustomerAvoidancePoints() {
  const points = [];
  storeState.fixtures.forEach((fixture) => {
    const position = storeFixturePosition(fixture);
    const radiusByFurniture = {
      shelf: 8.5,
      fridge: 8,
      coffee: 8,
      freezer: 9.5,
      counter: 11,
      table: 8.5,
      magazine: 8
    };
    points.push({
      left: position.left,
      top: position.top,
      radius: radiusByFurniture[fixture.id] || 8
    });
  });

  points.push({ ...storeClerkHomePosition(), radius: 8 });
  storeFurniture.forEach((furniture) => {
    points.push({ ...storeClerkServicePosition(furniture.id), radius: 6.5 });
  });

  return points;
}

function isStoreCustomerSpotSafe(spotIndex, reservedSpots = new Set()) {
  if (reservedSpots.has(spotIndex)) {
    return false;
  }

  const spot = storeCustomerSpots[spotIndex];
  if (!spot) {
    return false;
  }

  for (const reservedSpotIndex of reservedSpots) {
    const reservedSpot = storeCustomerSpots[reservedSpotIndex];
    if (reservedSpot && storePointDistance(spot, reservedSpot) < 9.5) {
      return false;
    }
  }

  return storeCustomerAvoidancePoints().every((point) => storePointDistance(spot, point) >= point.radius);
}

function findOpenCustomerSpot(preferredIndex = 0, reservedSpots = new Set()) {
  for (let offset = 0; offset < storeCustomerSpots.length; offset += 1) {
    const spotIndex = (preferredIndex + offset) % storeCustomerSpots.length;
    if (isStoreCustomerSpotSafe(spotIndex, reservedSpots)) {
      return spotIndex;
    }
  }

  for (let offset = 0; offset < storeCustomerSpots.length; offset += 1) {
    const spotIndex = (preferredIndex + offset) % storeCustomerSpots.length;
    if (!reservedSpots.has(spotIndex)) {
      return spotIndex;
    }
  }

  return preferredIndex % storeCustomerSpots.length;
}

function ensureStoreCustomers() {
  const visibleCustomers = Math.min(1 + Math.floor(storeState.reputation / 2), storeCustomerSpots.length);
  const targetCustomers = Math.min(Math.max(visibleCustomers, storeCustomerStates.length), storeCustomerSpots.length);
  let changed = false;
  while (storeCustomerStates.length < targetCustomers) {
    const usedSpots = new Set(storeCustomerStates.map((customer) => customer.spotIndex));
    const spotIndex = findOpenCustomerSpot(storeCustomerStates.length, usedSpots);
    const spot = storeCustomerSpots[spotIndex];
    storeCustomerStates.push({
      spotIndex,
      typeIndex: randomStoreCustomerTypeIndex(),
      orderIndex: randomStoreOrderIndex(),
      left: spot.left,
      top: spot.top,
      direction: "front"
    });
    changed = true;
  }
  if (storeCustomerStates.length > storeCustomerSpots.length) {
    storeCustomerStates = storeCustomerStates.slice(0, storeCustomerSpots.length);
    changed = true;
  }
  storeCustomerStates.forEach((customer, index) => {
    if (!Number.isInteger(customer.typeIndex)) {
      customer.typeIndex = randomStoreCustomerTypeIndex(index > 0 ? storeCustomerStates[index - 1].typeIndex : -1);
      changed = true;
    }
    if (!Number.isInteger(customer.orderIndex)) {
      customer.orderIndex = randomStoreOrderIndex(index > 0 ? storeCustomerStates[index - 1].orderIndex : -1);
      changed = true;
    }
    if (!Number.isFinite(customer.left) || !Number.isFinite(customer.top)) {
      const spot = storeCustomerSpots[customer.spotIndex] || storeCustomerSpots[0];
      customer.left = spot.left;
      customer.top = spot.top;
      changed = true;
    }
  });
  const occupiedSpots = new Set();
  storeCustomerStates.forEach((customer, index) => {
    if (
      !Number.isInteger(customer.spotIndex) ||
      occupiedSpots.has(customer.spotIndex) ||
      !isStoreCustomerSpotSafe(customer.spotIndex, occupiedSpots)
    ) {
      const nextSpotIndex = findOpenCustomerSpot(index, occupiedSpots);
      const nextSpot = storeCustomerSpots[nextSpotIndex];
      customer.spotIndex = nextSpotIndex;
      customer.left = nextSpot.left;
      customer.top = nextSpot.top;
      changed = true;
    }
    const spot = storeCustomerSpots[customer.spotIndex] || storeCustomerSpots[0];
    if (customer.left !== spot.left || customer.top !== spot.top) {
      customer.left = spot.left;
      customer.top = spot.top;
      changed = true;
    }
    occupiedSpots.add(customer.spotIndex);
  });
  if (activeStoreCustomerIndex >= storeCustomerStates.length) {
    activeStoreCustomerIndex = 0;
  }
  if (changed) {
    saveStoreState();
  }
}

function moveStoreCustomers() {
  if (!document.body.classList.contains("store-active") || storeEditMode || storeState.fixtures.length === 0) {
    return;
  }

  ensureStoreCustomers();
  const reservedSpots = new Set(storeCustomerStates.map((customer) => customer.spotIndex));
  storeCustomerStates = storeCustomerStates.map((customer, index) => {
    if (index === activeStoreCustomerIndex) {
      return customer;
    }

    const currentSpot = storeCustomerSpots[customer.spotIndex] || storeCustomerSpots[0];
    reservedSpots.delete(customer.spotIndex);
    let nextIndex = Math.floor(Math.random() * storeCustomerSpots.length);
    if (nextIndex === customer.spotIndex || !isStoreCustomerSpotSafe(nextIndex, reservedSpots)) {
      nextIndex = findOpenCustomerSpot(nextIndex + 1 + index, reservedSpots);
    }
    reservedSpots.add(nextIndex);
    const nextSpot = storeCustomerSpots[nextIndex];
    return {
      ...customer,
      spotIndex: nextIndex,
      left: nextSpot.left,
      top: nextSpot.top,
      direction: randomStoreDirection(currentSpot, nextSpot)
    };
  });

  saveStoreState();
  renderStoreBoard();
}

function startStoreCustomerWalk() {
  stopStoreCustomerWalk();
  if (storeEditMode || storeState.fixtures.length === 0) {
    return;
  }

  ensureStoreCustomers();
  storeWalkTimer = window.setInterval(moveStoreCustomers, 2800);
}

function stopStoreCustomerWalk() {
  if (storeWalkTimer) {
    window.clearInterval(storeWalkTimer);
    storeWalkTimer = null;
  }
}

function renderStoreStats() {
  storeMoneyText.textContent = `金幣 ${storeState.money}`;
  storeRepText.textContent = `評價 ${storeState.reputation}`;
  storeDayText.textContent = `Day ${storeState.day}`;
}

function renderStoreDirectionControls() {
  storeDirectionControls.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.direction === selectedDirection);
  });
}

function renderStorePalette() {
  storePalette.innerHTML = "";

  storeFurniture.forEach((furniture) => {
    const fixture = storeState.fixtures.find((item) => item.id === furniture.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "store-furniture-btn";
    if (furniture.id === selectedFurnitureId) {
      button.classList.add("is-selected");
    }
    button.innerHTML = `
        <span class="store-furniture-icon"><img src="${furniture.image}" alt=""></span>
        <span>
          <span class="store-furniture-name">${furniture.name} ${furniture.korean}</span>
        <span class="store-furniture-cost">${
          storeEditMode
            ? fixture ? "已放置，可移動" : "尚未放置"
            : fixture ? `面向：${storeDirections.find((direction) => direction.id === fixture.direction)?.label || "正面"}` : "尚未放置"
        }</span>
      </span>
    `;
    button.addEventListener("click", () => {
      selectedFurnitureId = furniture.id;
      selectedDirection = fixture?.direction || selectedDirection;
      storeStatusText.textContent = storeEditMode
        ? `已選擇 ${furniture.name}。選面向後點地板放置。`
        : `${furniture.name} 已固定在店裡。`;
      renderStoreGame();
    });
    storePalette.appendChild(button);
  });
}

function renderStoreBoard() {
  storeBoard.innerHTML = "";
  storeBoard.classList.toggle("is-editing", storeEditMode);
  storeBoard.classList.toggle("has-baked-furniture", !storeEditMode);

  if (storeEditMode) {
    for (let cell = 0; cell < storeGridCols * storeGridRows; cell += 1) {
      const position = storeCellPosition(cell);
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "store-placement-cell";
      tile.style.left = `${position.left}%`;
      tile.style.top = `${position.top}%`;
      tile.style.zIndex = `${position.z - 10}`;
      tile.setAttribute("aria-label", "可放置位置");
      tile.addEventListener("click", () => placeSelectedFurniture(cell));
      storeBoard.appendChild(tile);
    }
  }

  storeState.fixtures.forEach((fixture) => {
    const furniture = storeFurniture.find((item) => item.id === fixture.id);
    const position = Number.isFinite(fixture.left) && Number.isFinite(fixture.top)
      ? { left: fixture.left, top: fixture.top, z: fixture.z || 60 }
      : storeCellPosition(fixture.cell);
    const fixtureDirection = fixture.direction || "front";
    const fixtureImage = furniture.images?.[fixtureDirection] || furniture.image;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `store-fixture item-${fixture.id} direction-${fixtureDirection}`;
    if (fixture.id === selectedFurnitureId && storeEditMode) {
      button.classList.add("is-selected");
    }
    button.style.left = `${position.left}%`;
    button.style.top = `${position.top}%`;
    button.style.zIndex = `${position.z + 20}`;
    button.style.setProperty("--fixture-width", `${furniture.width || 82}px`);
    button.setAttribute("aria-label", `${furniture.name} ${furniture.korean}`);

    button.innerHTML = `
      <img class="store-object store-object-${furniture.id}" src="${fixtureImage}" alt="">
    `;

    button.addEventListener("click", () => handleStoreFixtureClick(furniture.id));
    storeBoard.appendChild(button);
  });

  if (!storeEditMode && storeState.fixtures.length > 0) {
    renderStoreClerk();
    renderStoreCustomers();
  }
}

function renderStoreClerk() {
  const counter = storeState.fixtures.find((fixture) => fixture.id === "counter");
  if (!counter) {
    return;
  }

  if (!storeClerkPosition) {
    storeClerkPosition = storeClerkHomePosition();
  }

  const position = storeClerkPosition;
  const clerk = document.createElement("div");
  clerk.className = "store-clerk";
  clerk.style.left = `${position.left}%`;
  clerk.style.top = `${position.top}%`;
  clerk.style.zIndex = `${position.z}`;
  clerk.innerHTML = `<img src="${storeClerk.image}" alt="${storeClerk.alt}">`;
  storeBoard.appendChild(clerk);
}

function storeFixturePosition(fixture) {
  return Number.isFinite(fixture.left) && Number.isFinite(fixture.top)
    ? { left: fixture.left, top: fixture.top, z: fixture.z || 60 }
    : storeCellPosition(fixture.cell);
}

function storeClerkHomePosition() {
  const counter = storeState.fixtures.find((fixture) => fixture.id === "counter");
  if (!counter) {
    return { left: 59.5, top: 65.5, z: 114 };
  }
  const position = storeFixturePosition(counter);
  return {
    left: position.left + 3.5,
    top: position.top - 13.5,
    z: position.z + 18
  };
}

function storeClerkServicePosition(furnitureId) {
  const fixture = storeState.fixtures.find((item) => item.id === furnitureId);
  if (!fixture) {
    return storeClerkHomePosition();
  }
  const position = storeFixturePosition(fixture);
  const offsets = {
    shelf: { left: 4.5, top: 4.5 },
    fridge: { left: 4, top: 5 },
    coffee: { left: -4, top: 5 },
    freezer: { left: -5, top: 5 },
    table: { left: 3.5, top: 3 },
    magazine: { left: -4, top: 2 },
    counter: { left: 3.5, top: -13.5 }
  };
  const offset = offsets[furnitureId] || { left: 0, top: 4 };
  return {
    left: position.left + offset.left,
    top: position.top + offset.top,
    z: position.z + 22
  };
}

function renderStoreCustomers() {
  ensureStoreCustomers();

  storeCustomerStates.forEach((customer, index) => {
    const order = currentStoreOrder(index);
    const customerType = storeCustomerTypes[customer.typeIndex % storeCustomerTypes.length];
    const person = document.createElement("div");
    person.className = `store-customer ${customerType.className} direction-${customer.direction || "front"}`;
    if (index === activeStoreCustomerIndex) {
      person.classList.add("is-active");
    }
    person.style.left = `${customer.left}%`;
    person.style.top = `${customer.top}%`;
    person.style.zIndex = `${80 + index}`;
    person.setAttribute("role", "button");
    person.setAttribute("tabindex", "0");
    person.setAttribute("aria-label", `選擇${customerType.name}，需求 ${order.word}`);
    person.innerHTML = `
      <img src="${customerType.image}" alt="">
    `;

    const bubble = document.createElement("button");
    bubble.type = "button";
    bubble.className = "store-speech";
    bubble.textContent = index === activeStoreCustomerIndex ? "!" : "";
    bubble.setAttribute("aria-label", `選擇並播放 ${order.word} 的發音`);
    bubble.addEventListener("click", (event) => {
      event.stopPropagation();
      selectStoreCustomer(index, true);
    });
    person.appendChild(bubble);

    person.addEventListener("click", () => selectStoreCustomer(index, true));
    person.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectStoreCustomer(index, true);
      }
    });

    storeBoard.appendChild(person);
  });
}

function selectStoreCustomer(customerIndex, shouldSpeak = false) {
  ensureStoreCustomers();
  activeStoreCustomerIndex = Math.min(customerIndex, storeCustomerStates.length - 1);
  const order = currentStoreOrder();
  if (shouldSpeak) {
    speakKorean(order.word);
  }
  storeStatusText.textContent = "需求小牌已更新。點選對應家具完成訂單。";
  renderStoreGame();
}

function renderStoreOrder() {
  const order = currentStoreOrder();
  storeOrderPanel.hidden = storeEditMode || storeState.fixtures.length === 0;
  storeOrderText.innerHTML = storeState.reputation >= storeReputationGoal
    ? "第二章完成。可以回世界地圖，或繼續服務客人。"
    : `
      <span class="store-demand-card">
        <span class="store-demand-label">第 ${activeStoreCustomerIndex + 1} 位客人需求</span>
        <span class="store-demand-word">${order.word}</span>
      </span>
    `;
  storeServeBtn.hidden = true;
}

function renderStoreGame() {
  renderStoreStats();
  renderStoreDirectionControls();
  storeEditLayoutBtn.hidden = true;
  storeSaveLayoutBtn.hidden = true;
  storeDirectionControls.hidden = true;
  storePalette.hidden = true;
  renderStorePalette();
  renderStoreBoard();
  renderStoreOrder();
}

function clearStoreClerkMotion() {
  if (storeClerkMotionTimer) {
    window.clearTimeout(storeClerkMotionTimer);
    storeClerkMotionTimer = null;
  }
}

function moveStoreClerkTo(position) {
  storeClerkPosition = position;
  const clerk = storeBoard.querySelector(".store-clerk");
  if (!clerk) {
    renderStoreBoard();
    return;
  }
  clerk.style.left = `${position.left}%`;
  clerk.style.top = `${position.top}%`;
  clerk.style.zIndex = `${position.z}`;
}

function returnStoreClerkHome(delay = 760) {
  clearStoreClerkMotion();
  storeClerkMotionTimer = window.setTimeout(() => {
    storeClerkMotionTimer = null;
    if (!document.body.classList.contains("store-active") || storeEditMode) {
      return;
    }
    moveStoreClerkTo(storeClerkHomePosition());
  }, delay);
}

function visitStoreFurniture(furnitureId, afterArrive) {
  clearStoreClerkMotion();
  moveStoreClerkTo(storeClerkServicePosition(furnitureId));
  storeClerkMotionTimer = window.setTimeout(() => {
    storeClerkMotionTimer = null;
    afterArrive();
    returnStoreClerkHome();
  }, 650);
}

function handleStoreFixtureClick(furnitureId) {
  const furniture = storeFurniture.find((item) => item.id === furnitureId);
  selectedFurnitureId = furnitureId;
  const fixture = activeStoreFixture();
  selectedDirection = fixture?.direction || selectedDirection;

  if (storeEditMode) {
    updateSelectedFixtureDirection();
    storeStatusText.textContent = `已選擇 ${furniture?.name || "家具"}。可切換面向，或點地板移動位置。`;
    renderStoreGame();
    return;
  }

  visitStoreFurniture(furnitureId, () => handleStoreOrderFurnitureClick(furnitureId));
}

function placeSelectedFurniture(cell) {
  if (!storeEditMode) {
    return;
  }

  const furniture = storeFurniture.find((item) => item.id === selectedFurnitureId);
  if (!furniture) {
    return;
  }

  let fixture = activeStoreFixture();
  if (!fixture) {
    fixture = { id: selectedFurnitureId, cell, direction: selectedDirection };
    storeState.fixtures.push(fixture);
  }

  fixture.cell = cell;
  fixture.direction = selectedDirection;
  storeStatusText.textContent = `${furniture.name} 已移到新位置，面向：${storeDirections.find((direction) => direction.id === selectedDirection)?.label || "正面"}。`;
  renderStoreGame();
}

function enterStoreLayoutEdit() {
  storeEditMode = false;
  storeStatusText.textContent = "店內家具已固定配置，直接服務客人就可以。";
  renderStoreGame();
}

function saveStoreLayout() {
  storeEditMode = false;
  storeSaveLayoutBtn.hidden = true;
  storeDirectionControls.hidden = true;
  storeServeBtn.disabled = false;
  saveStoreState();
  storeStatusText.textContent = "店內家具已固定配置。";
  renderStoreGame();
  startStoreCustomerWalk();
}

function setStoreDirection(directionId) {
  selectedDirection = directionId;
  updateSelectedFixtureDirection();
  const furniture = storeFurniture.find((item) => item.id === selectedFurnitureId);
  storeStatusText.textContent = `${furniture?.name || "家具"} 面向改成：${storeDirections.find((direction) => direction.id === directionId)?.label || "正面"}。`;
  renderStoreGame();
}

function showStoreManagerDialog(message) {
  storeManagerText.textContent = message;
  storeManagerDialog.hidden = false;
}

function closeStoreManagerDialog() {
  storeManagerDialog.hidden = true;
}

function completeStoreOrder(order) {
  closeStoreManagerDialog();
  const shouldCompleteChapter = storeState.reputation < storeReputationGoal;
  storeState.money += order.reward;
  storeState.reputation += 1;
  storeState.day += 1;
  storeState.orderIndex += 1;

  if (shouldCompleteChapter && storeState.reputation >= storeReputationGoal) {
    completeChapter(2);
    storeStatusText.textContent = "第二章完成！龜仙CU便利商店已經能穩定營業。";
  } else {
    storeStatusText.textContent = `完成 ${order.word}（${order.chinese}）訂單，收入金幣 ${order.reward}。`;
  }

  const servedCustomer = storeCustomerStates[activeStoreCustomerIndex];
  if (servedCustomer) {
    servedCustomer.orderIndex = randomStoreOrderIndex(servedCustomer.orderIndex);
    servedCustomer.typeIndex = randomStoreCustomerTypeIndex(servedCustomer.typeIndex);
  }
  activeStoreCustomerIndex = 0;
  saveStoreState();
  renderStoreGame();
  startStoreCustomerWalk();
}

function handleStoreOrderFurnitureClick(furnitureId) {
  const order = currentStoreOrder();
  const furniture = storeFurniture.find((item) => item.id === furnitureId);

  if (furnitureId !== order.required) {
    showStoreManagerDialog(`你在幹嗎？客人要的是 ${order.word}（${order.chinese}）。`);
    storeStatusText.textContent = `${furniture?.name || "這裡"} 不是客人要的東西。再看一次韓文泡泡。`;
    return;
  }

  completeStoreOrder(order);
}

function serveStoreCustomer() {
  const furnitureId = currentStoreOrder().required;
  visitStoreFurniture(furnitureId, () => handleStoreOrderFurnitureClick(furnitureId));
}

function startStorePrologue(chapter) {
  stopStoreCustomerWalk();
  clearStoreClerkMotion();
  activeSubchapterId = "";
  activeChapterIndex = chapters.indexOf(chapter);
  prologue = chapter.prologue;
  prologueIndex = 0;
  prologueChapter.textContent = chapter.prologueChapter;
  document.body.classList.add("prologue-active");
  document.body.classList.remove("map-active", "submap-active", "quiz-active", "store-active");
  chapterMapOverlay.classList.remove("is-visible");
  updatePrologue();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function enterStoreGameplay(chapter) {
  activeSubchapterId = "";
  activeChapterIndex = chapters.indexOf(chapter);
  loadStoreState();
  clearStoreClerkMotion();
  storeClerkPosition = null;
  storeEditMode = false;
  storeState.fixtures = defaultStoreFixtures.map((fixture) => ({ ...fixture }));
  storeEditLayoutBtn.hidden = true;
  storeSaveLayoutBtn.hidden = true;
  storeDirectionControls.hidden = true;
  storeServeBtn.hidden = true;
  document.body.classList.add("store-active");
  document.body.classList.remove("map-active", "submap-active", "quiz-active", "prologue-active");
  chapterMapOverlay.classList.remove("is-visible");
  quizResultPanel.classList.remove("is-visible");
  closeQuizConfirm();
  closeStoreManagerDialog();
  renderStoreGame();
  startStoreCustomerWalk();
  storeStatusText.textContent = storeState.reputation >= storeReputationGoal
    ? "第二章已完成。可以回世界地圖，或繼續服務客人。"
    : "店內家具已固定配置。點選客人後，再點店內對應家具完成訂單。";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openStoreChapter(chapter) {
  activeSubchapterId = "";
  activeChapterIndex = chapters.indexOf(chapter);

  if (!viewedStories.has(`chapter-${chapter.number}`)) {
    startStorePrologue(chapter);
    return;
  }

  enterStoreGameplay(chapter);
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
  if (completedChapters.has(chapterNumber)) {
    return true;
  }

  const subchapters = chapterSubchapters[chapterNumber];

  if (!subchapters) {
    return false;
  }

  return subchapters.every((subchapter) => completedSubchapters.has(subchapter.id));
}

function skipChapterOneTraining() {
  if (isChapterComplete(1)) {
    return;
  }

  const builtSubchapters = (chapterSubchapters[1] || []).filter((subchapter) => subchapter.built);
  builtSubchapters.forEach((subchapter) => {
    completedSubchapters.add(subchapter.id);
    viewedStories.add(subchapter.id);
  });
  completedChapters.add(1);
  viewedStories.add("chapter-1");
  saveProgress();
  activeSubchapterId = "";
  feedbackText.textContent = "已使用熟手通行證，第二章路線開放。第一章仍可回來複習。";
  renderChapterMap();
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
  stopStoreCustomerWalk();
  clearStoreClerkMotion();
  renderChapterMap();
  document.body.classList.add("map-active");
  document.body.classList.remove("quiz-active", "prologue-active", "store-active");
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
        if (chapter.kind === "store") {
          openStoreChapter(chapter);
        } else if (chapterSubchapters[chapter.number]) {
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

  if (skipChapterOneBtn) {
    skipChapterOneBtn.hidden = isChapterComplete(1);
  }
}

function setCategoryVisibility(titleElement, gridElement, label) {
  titleElement.textContent = label;
  titleElement.hidden = !label;
  gridElement.hidden = !label;
}

function applyChapter(index, showPrologue = true, updateUrl = true) {
  activeChapterIndex = Math.max(0, Math.min(index, chapters.length - 1));
  const chapter = currentChapter();
  const subchapter = currentSubchapter();

  lessons = subchapter?.lessonTargets
    ? chapter.lessons.filter((lesson) => subchapter.lessonTargets.includes(lesson.target))
    : chapter.lessons;
  prologue = subchapter?.prologue || chapter.prologue;
  lessonIndex = 0;
  prologueIndex = 0;
  quizQuestions = [];
  quizIndex = 0;
  quizScore = 0;
  quizWrong = 0;

  sceneChapter.textContent = chapter.sceneChapter;
  sceneTitle.textContent = subchapter?.sceneTitle || chapter.sceneTitle;
  sceneImage.src = subchapter?.sceneImage || chapter.sceneImage;
  sceneImage.alt = subchapter?.sceneImageAlt || chapter.sceneImageAlt;
  prologueChapter.textContent = subchapter?.prologueChapter || chapter.prologueChapter;
  quizLabel.textContent = subchapter?.quizLabel || chapter.quizLabel;
  quizTitle.textContent = subchapter?.quizTitle || chapter.quizTitle;
  confirmText.textContent = subchapter?.quizConfirm || chapter.quizConfirm;
  quizImage.src = chapter.quizImage;
  quizImage.alt = "狗狗老師在黑板前出題";

  const materials = subchapter?.materials || chapter.materials;
  setCategoryVisibility(basicVowelTitle, basicVowelGrid, materials.basicVowel);
  setCategoryVisibility(compoundVowelTitle, compoundVowelGrid, materials.compoundVowel);
  setCategoryVisibility(basicConsonantTitle, basicConsonantGrid, materials.basicConsonant);
  setCategoryVisibility(doubleConsonantTitle, doubleConsonantGrid, materials.doubleConsonant);
  aspirationPractice.hidden = activeSubchapterId !== "1-2";
  document.body.classList.remove("quiz-active");
  document.body.classList.remove("map-active");
  document.body.classList.remove("submap-active");
  document.body.classList.remove("store-active");
  quizResultPanel.classList.remove("is-visible");
  closeQuizConfirm();
  buildMaterials();
  updateView();
  if (activeSubchapterId === "1-2") {
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
  const isCharacterArt = /\.png(?:\?|$)/i.test(scene.image);
  prologuePanel.classList.toggle("is-character-art", isCharacterArt);
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
  if (currentChapter().kind === "store") {
    enterStoreGameplay(currentChapter());
    return;
  }
  feedbackText.textContent = currentSubchapter()?.trainingIntro || currentChapter().trainingIntro;
  speakKorean(lessons[lessonIndex].sound);
}

function skipPrologue() {
  markCurrentStoryViewed();
  document.body.classList.remove("prologue-active");
  if (currentChapter().kind === "store") {
    enterStoreGameplay(currentChapter());
    return;
  }
  feedbackText.textContent = currentSubchapter()?.skippedIntro || currentChapter().skippedIntro;
  updateView();
}

function reviewStory() {
  prologue = currentChapter().prologue;
  prologueIndex = 0;
  prologueChapter.textContent = currentChapter().prologueChapter;
  document.body.classList.remove("quiz-active", "map-active", "submap-active", "store-active");
  document.body.classList.add("prologue-active");
  updatePrologue();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openQuizConfirm(quizType) {
  pendingQuizType = quizType;
  confirmText.textContent = quizType === "pronunciation"
    ? "要開始選做的發音測驗嗎？需要使用麥克風。"
    : currentSubchapter()?.quizConfirm || "要開始基礎測驗嗎？通過後就算完成這一節。";
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
      const mapChapterNumber = currentSubchapterMapChapter();
      if (isChapterComplete(mapChapterNumber)) {
        completeChapter(mapChapterNumber);
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
      openSubchapterMap(currentSubchapterMapChapter());
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
  const chapterNumber = currentSubchapterMapChapter();

  if (chapterSubchapters[chapterNumber]) {
    openSubchapterMap(chapterNumber);
  } else {
    openChapterMap();
  }
});
confirmQuizBtn.addEventListener("click", enterQuiz);
cancelQuizBtn.addEventListener("click", closeQuizConfirm);
closeChapterMapBtn.addEventListener("click", closeChapterMap);
skipChapterOneBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  skipChapterOneTraining();
});
chapterMapOverlay.addEventListener("click", (event) => {
  if (!document.body.classList.contains("map-active") && event.target === chapterMapOverlay) {
    closeChapterMap();
  }
});
backToChapterMapBtn.addEventListener("click", () => {
  closeSubchapterMap();
  openChapterMap();
});
storeServeBtn.addEventListener("click", serveStoreCustomer);
storeManagerCloseBtn.addEventListener("click", closeStoreManagerDialog);
storeManagerDialog.addEventListener("click", (event) => {
  if (event.target === storeManagerDialog) {
    closeStoreManagerDialog();
  }
});
storeBackMapBtn.addEventListener("click", openChapterMap);
storeReviewStoryBtn.addEventListener("click", reviewStory);
storeEditLayoutBtn.addEventListener("click", enterStoreLayoutEdit);
storeSaveLayoutBtn.addEventListener("click", saveStoreLayout);
storeDirectionControls.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => setStoreDirection(button.dataset.direction));
});
quizSpeakBtn.addEventListener("click", () => {
  if (quizQuestions[quizIndex]) {
    speakKorean(quizQuestions[quizIndex].sound);
  }
});
quizMicBtn.addEventListener("click", startQuizListening);
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
  localStorage.removeItem("koreanCafeStoreState");
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
