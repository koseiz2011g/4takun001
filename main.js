const categories = {
  tense: {
    title: "🔔 時制",
    questions: [
      {
  sentence: "She <span class='highlight'>plays tennis</span> every day.",
  choices: ["テニスをしていた", "テニスをする", "テニスをする予定だ", "テニスをした"],
  correct: 1,
  explanation: "▶「plays」 は現在形で、習慣的に行われる動作を表します。▶ 彼女は/テニスをします/毎日",
  youtube: "https://www.youtube.com/embed/=XXXX"
},
{
  sentence: "She <span class='highlight'>played tennis</span> yesterday.",
  choices: ["テニスをする", "テニスをしている", "テニスをした", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶「played」 は過去形で、過去の出来事を表します。▶ 彼女は/テニスをしました/昨日"
},
{
  sentence: "She <span class='highlight'>is playing tennis</span> now.",
  choices: ["テニスをした", "テニスをしている", "テニスをする", "テニスをする予定だ"],
  correct: 1,
  explanation: "▶「is playing」は現在進行形で、今、行われている動作の継続を表します。▶ 彼女は/テニスをしています/今"
},
{
  sentence: "She <span class='highlight'>was playing tennis</span> then.",
  choices: ["テニスをしている", "テニスをした", "テニスをしていた", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶「was playing」は過去進行形で、過去のある時点での動作の継続を表します。▶ 彼女は/テニスをしていました/そのとき"
},
{
  sentence: "I <span class='highlight'>will play tennis</span> tomorrow.",
  choices: ["テニスをした", "テニスをしている", "テニスをするつもりだ", "テニスをしていた"],
  correct: 2,
  explanation: "▶「will play」は未来を表し、「～するつもりだ」「～するだろう」という意味になります。▶ 私は/テニスをするつもりです/明日"
},
{
  sentence: "She <span class='highlight'>is going to play tennis</span> next week.",
  choices: ["テニスをした", "テニスをする予定だ", "テニスをしている", "テニスをしていた"],
  correct: 1,
  explanation: "▶「is going to play」 は、be going to 動詞の原形の形で、すでに決まっている未来の予定を表します。▶ 彼女は/テニスをする予定です/来週"
},
{
  sentence: "She <span class='highlight'>has played tennis</span> for ten years.",
  choices: ["テニスをした", "テニスをしていた", "テニスをしている", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶「has played」は現在完了形で、過去から現在まで続いている状態や経験を表します。▶ 彼女は/ずっとテニスをしている/10年間"
},
{
  sentence: "They <span class='highlight'>have been playing tennis</span> for two hours.",
  choices: ["テニスをした", "テニスをする", "テニスをずっとし続けている", "テニスをする予定だ"],
  correct: 2,
  explanation: "▶「have been playing」は現在完了進行形で、動作が過去から現在まで継続していることを表します。▶ 彼らは/ずっとテニスをしています/2時間"
}




    ]
  },

  pronoun: {
    title: "🔔 代名詞01",
    questions: [
      {
  sentence: "Jim showed <span class='highlight'>me</span> his pictures.",
  choices: ["私に", "私は", "私の", "私を"],
  correct: 0,
  explanation: "▶SVOO第4文型で、Sが人にものをVする、という意味になります。「me」は1人称単数・目的格の人称代名詞で、「私に」という意味で使われています。▶ ジムは/見せた/私に/彼の写真を",
  youtube: "https://www.youtube.com/embed/=XXXX"
},
{
  sentence: "This classroom is <span class='highlight'>ours</span>.",
  choices: ["私たちの", "私たちのもの", "私たちは", "私たちに"],
  correct: 1,
  explanation: "▶「ours」は1人称複数・所有代名詞で、「私たちのもの」という意味で使われています。▶ その教室＝私たちのもの"
},
{
  sentence: "<span class='highlight'>I</span> enjoyed playing tennis.",
  choices: ["私は", "私に", "私を", "私の"],
  correct: 0,
  explanation: "▶「I」は1人称単数・主格の人称代名詞で、「私は」という意味で使われています。主格とは主語になる形のことを言います。▶ 私は/楽しんだ/テニスをすることを"
},
{
  sentence: "She teaches <span class='highlight'>us</span> English.",
  choices: ["私たちに", "私たちを", "私たちは", "私たちの"],
  correct: 0,
  explanation: "▶SVOO第4文型で、Sが人にものをVする、という意味になります。「us」は1人称複数・目的格の人称代名詞で、「私たちに」という意味で使われています。▶ 彼女は/教える/私たちに/英語を"
},
{
  sentence: "The blue notebook is <span class='highlight'>mine</span>, not yours.",
  choices: ["私のもの", "私の", "私は", "私に"],
  correct: 0,
  explanation: "▶「mine」は1人称単数・所有代名詞で、「私のもの」という意味で使われています。▶ その青いノート＝私のもの、あなたのものではない"
},
{
  sentence: "<span class='highlight'>We</span> are high school students.",
  choices: ["私たちを", "私たちの", "私たちは", "私たちに"],
  correct: 2,
  explanation: "▶「we」は1人称複数・主格の人称代名詞で、「私たちは」という意味で使われています。▶ 私たち＝高校生。"
},
{
  sentence: "I finished writing <span class='highlight'>my</span> report about my work experience.",
  choices: ["私の", "私は", "私に", "私を"],
  correct: 0,
  explanation: "▶「my」は1人称単数・所有格の人称代名詞で、「私の」という意味で使われています。▶ 私は/終えた/書くことを/私のレポートを/職場体験についての"
},
{
  sentence: "Please help <span class='highlight'>us</span>.",
  choices: ["私たちを", "私たちに", "私たちは", "私たちの"],
  correct: 0,
  explanation: "▶「us」は1人称複数・目的格の人称代名詞で、「私たちを」という意味で使われています。▶ 助けてください/私たちを。"
}



    ]
  },
  

pronoun2: {
    title: "🔔 代名詞02",
    questions: [
      {
  sentence: "The red bag is <span class='highlight'>ours</span>, not theirs.",
  choices: ["私たちのもの", "私たちは", "私たちに", "私たちの"],
  correct: 0,
  explanation: "▶「ours」 は1人称複数・所有代名詞で、「私たちのもの」という意味で使われています。▶ その赤いかばんは／私たちのものです／彼らのものではありません"
},
{
  sentence: "<span class='highlight'>He</span> likes dogs.",
  choices: ["彼女は", "彼らの", "彼は", "彼に"],
  correct: 2,
  explanation: "▶「He」 は3人称単数・主格の人称代名詞で、「彼は」という意味で使われています。▶ 彼は／好んでいる／犬を"
},
{
  sentence: "<span class='highlight'>She</span> has a red bag.",
  choices: ["彼女は", "彼に", "彼は", "彼女の"],
  correct: 0,
  explanation: "▶「She」 は3人称単数・主格の人称代名詞で、「彼女は」という意味で使われています。▶ 彼女は／持っています／赤いかばんを"
},
{
  sentence: "<span class='highlight'>It</span> is very big.",
  choices: ["それを", "それは", "それに", "それの"],
  correct: 1,
  explanation: "▶「It」 は3人称単数・主格の人称代名詞で、「それは」という意味で使われています。▶ それは／とても／大きい"
},
{
  sentence: "The red bag is ours, not <span class='highlight'>theirs</span>.",
  choices: ["彼らに", "彼のもの", "彼女を", "彼らのもの"],
  correct: 3,
  explanation: "▶「theirs」 は3人称複数・所有代名詞で、「彼らのもの」という意味で使われています。▶ その赤いかばんは／私たちのものです／彼らのものではありません"
},
{
  sentence: "<span class='highlight'>Their</span> house is near the park.",
  choices: ["彼らの", "彼女の", "彼らのもの", "彼に"],
  correct: 0,
  explanation: "▶「Their」 は3人称複数・所有格の人称代名詞で、「彼らの」という意味で使われています。▶ 彼らの家は／あります／公園の近くに"
},
{
  sentence: "The book is <span class='highlight'>his</span>.",
  choices: ["彼らのもの", "彼女に", "彼のもの", "彼女の"],
  correct: 2,
  explanation: "▶「his」 は3人称単数・所有代名詞で、「彼のもの」という意味で使われています。▶ その本＝彼のもの"
},
{
  sentence: "The pencil is <span class='highlight'>hers</span>.",
  choices: ["彼女を", "彼の", "彼に", "彼女のもの"],
  correct: 3,
  explanation: "▶「hers」 は3人称単数・所有代名詞で、「彼女のもの」という意味で使われています。▶ そのえんぴつ＝彼女のもの"
}    


    ]
  },

pronoun3: {
    title: "🔔 代名詞03",
    questions: [
      {
  sentence: "The dog follows <span class='highlight'>them</span>.",
  choices: ["彼らを", "彼女を", "それを", "彼を"],
  correct: 0,
  explanation: "▶「them」 は3人称複数・目的格の人称代名詞で、「彼らを」という意味で使われています。▶ その犬は／追いかけます／彼らを"
},
{
  sentence: "<span class='highlight'>His</span> bike is new.",
  choices: ["彼女の", "彼の", "彼らの", "それの"],
  correct: 1,
  explanation: "▶「His」 は3人称単数・所有格の人称代名詞で、「彼の」という意味で使われています。▶ 彼の自転車は／新しい"
},
{
  sentence: "<span class='highlight'>Its</span> tail is long.",
  choices: ["それは", "それを", "それの", "それに"],
  correct: 2,
  explanation: "▶「Its」 は3人称単数・所有格の人称代名詞で、「それの」という意味で使われています。▶ それのしっぽは／長い"
},
{
  sentence: "<span class='highlight'>They</span> play soccer after school.",
  choices: ["彼女は", "彼は", "彼らに", "彼らは"],
  correct: 3,
  explanation: "▶「They」 は3人称複数・主格の人称代名詞で、「彼らは」という意味で使われています。▶ 彼らは／します／サッカーを／放課後に"
},
{
  sentence: "The teacher helps <span class='highlight'>him</span>.",
  choices: ["彼を", "彼女を", "彼の", "彼が"],
  correct: 0,
  explanation: "▶「him」 は3人称単数・目的格の人称代名詞で、「彼を」という意味で使われています。▶ 先生は／手伝います／彼を"
},
{
  sentence: "Ken knows <span class='highlight'>her</span>.",
  choices: ["彼を", "彼女を", "それを", "彼女の"],
  correct: 1,
  explanation: "▶「her」 は3人称単数・目的格の人称代名詞で、「彼女を」という意味で使われています。▶ ケンは／知っています／彼女を"
},
{
  sentence: "The country is famous for <span class='highlight'>its</span> beautiful lakes.",
  choices: ["それは", "それを", "それの", "それに"],
  correct: 2,
  explanation: "▶「its」 は3人称単数・所有格の人称代名詞で、「それの」という意味で使われています。▶ その国は／有名です／それの美しい湖で"
},
{
  sentence: "<span class='highlight'>Her</span> dress is blue.",
  choices: ["彼女を", "彼の", "彼女は", "彼女の"],
  correct: 3,
  explanation: "▶「Her」 は3人称単数・所有格の人称代名詞で、「彼女の」という意味で使われています。▶ 彼女のドレスは／青い"
}



]
  },


  wh: {
    title: "🔔 疑問詞",
    questions: [
      {
  sentence: "<span class='highlight'>Who</span> is your best friend?",
  choices: ["だれ", "どこに", "いつ", "何を"],
  correct: 0,
  explanation: "▶「Who」 は「だれ」という意味の疑問代名詞で、補語をたずねています。▶ だれ／あなたのいちばんの友だちは"
},
{
  sentence: "<span class='highlight'>What</span> do you like?",
  choices: ["だれを", "どこに", "いつ", "何を"],
  correct: 3,
  explanation: "▶「What」 は「何」という意味の疑問代名詞で、目的語をたずねています。▶ 何を／あなたは／好んでいますか"
},
{
  sentence: "<span class='highlight'>Where</span> do you live?",
  choices: ["だれが", "どこに", "いつ", "何を"],
  correct: 1,
  explanation: "▶「Where」 は「どこに」という意味の疑問副詞で、場所をたずねています。▶ どこに／あなたは／住んでいますか"
},
{
  sentence: "<span class='highlight'>When</span> do you go to school?",
  choices: ["だれを", "どこに", "いつ", "何を"],
  correct: 2,
  explanation: "▶「When」 は「いつ」という意味の疑問副詞で、時をたずねています。▶ いつ／あなたは／行きますか／学校へ"
},
{
  sentence: "<span class='highlight'>What time</span> do you get up?",
  choices: ["何時に", "だれ", "どこに", "いつ"],
  correct: 0,
  explanation: "▶「What time」 は「何時に」という意味の疑問副詞で、時刻をたずねています。▶ 何時に／あなたは／起きますか"
},
{
  sentence: "<span class='highlight'>How</span> do you go to school?",
  choices: ["だれ", "どこに", "いつ", "どうやって"],
  correct: 3,
  explanation: "▶「How」 は「どうやって」という意味の疑問副詞で、方法をたずねています。▶ どうやって／あなたは／行きますか／学校へ"
},
{
  sentence: "<span class='highlight'>How old</span> are you?",
  choices: ["だれ", "どこに", "何歳", "いつ"],
  correct: 2,
  explanation: "▶「How old」 は「どのくらい年寄りか」という意味の疑問表現で、年齢をたずねています。▶ 何歳ですか／あなたは"
},
{
  sentence: "<span class='highlight'>Which color</span> do you like?",
  choices: ["だれの色を", "どこの色を", "いつの色を", "どの色を"],
  correct: 3,
  explanation: "▶「Which color」 で「どの色を」という意味です。▶ どの色を／あなたは／好んでいますか"
}

    ]
  },

  infinitive: {
    title: "🔔 不定詞01",
    questions: [
      {
  sentence: "I had no time <span class='highlight'>to do my homework</span>.",
  choices: ["宿題をするための", "宿題をすることを", "宿題をして", "宿題をするために"],
  correct: 0,
  explanation: "▶「to do my homework」は time を説明する形容詞的用法です。▶ 私は/持っていた/ゼロの時間を/宿題をするための"
},
{
  sentence: "He went to the park <span class='highlight'>to play tennis</span>.",
  choices: ["テニスをして", "テニスをするために", "テニスをすることを", "テニスをするための"],
  correct: 1,
  explanation: "▶「to play tennis」は目的を表す副詞的用法です。▶ 彼は/行きました/公園へ/テニスをするために"
},
{
  sentence: "I want <span class='highlight'>to visit</span> Australia.",
  choices: ["訪れて", "訪れるために", "訪れることを", "訪れるための"],
  correct: 2,
  explanation: "▶「to visit Australia」は want の目的語になる名詞的用法です。私は/望んでいる/訪れることを/オーストラリアを"
},
{
  sentence: "He has a dream <span class='highlight'>to be a singer</span>.",
  choices: ["歌手になるために", "歌手になるための", "歌手になることを", "歌手になるという"],
  correct: 3,
  explanation: "▶「to be a singer」 は dream の内容を説明する同格の不定詞です。▶ 彼は/持っている/一つの夢を/歌手になるという"
},
{
  sentence: "Aki got up early <span class='highlight'>to help his mother</span>.",
  choices: ["母を助けるために", "母を助けて", "母を助けることを", "母を助けるための"],
  correct: 0,
  explanation: "▶「to help his mother」は目的を表す副詞的用法です。▶ アキは/起きました/早く/手伝うために/お母さんを"
},
{
  sentence: "I am glad <span class='highlight'>to see you again</span>.",
  choices: ["またあなたに会うことを", "またあなたに会って", "またあなたに会うために", "またあなたに会うための"],
  correct: 1,
  explanation: "▶「to see you again」は glad という感情の原因を表しています。私は/うれしい/あなたに会って/また"
},
{
  sentence: "<span class='highlight'>To play tennis</span> is a lot of fun.",
  choices: ["テニスをすることは", "テニスをするために", "テニスをして", "テニスをするための"],
  correct: 0,
  explanation: "▶「to play tennis」は、不定詞が文の主語として使われる名詞的用法です。▶ テニスをすることは/とても楽しい"
},
{
  sentence: "I want something cold <span class='highlight'>to drink</span>.",
  choices: ["飲むことを", "飲んで", "飲むために", "飲むための"],
  correct: 3,
  explanation: "▶「to drink」は 「something cold」 を説明する形容詞的用法です。▶ 私は/望んでいる/冷たい何かを/飲むための"
}


    ]
  },
  
  infinitive2: {
    title: "🔔 不定詞02",
    questions: [
      {
  sentence: "She bought some eggs <span class='highlight'>to make a cake</span>.",
  choices: ["ケーキを作るために", "ケーキを作ることを", "ケーキを作って", "ケーキを作るべき"],
  correct: 0,
  explanation: "to make a cake は目的を表す副詞的用法です。",
  youtube: "https://www.youtube.com/embed/=XXXX"

},
{
  sentence: "My dream is <span class='highlight'>to be a tennis player</span>.",
  choices: ["テニス選手になるために", "テニス選手になるという", "テニス選手になること", "テニス選手になって"],
  correct: 2,
  explanation: "to be a tennis player は名詞的用法で、主語 my dream の補語になっています。"
},
{
  sentence: "She tried <span class='highlight'>to open the window</span>.",
  choices: ["窓を開けるために", "窓を開けて", "窓を開けることを", "窓を開けるべき"],
  correct: 2,
  explanation: "to open the window は tried の目的語になる名詞的用法です。"
},
{
  sentence: "I have one thing <span class='highlight'>to say about it</span>.",
  choices: ["それについて言うために", "それについて言って", "それについて言うことを", "それについて言うべき"],
  correct: 3,
  explanation: "to say about it は thing を説明する形容詞的用法です。"
},
{
  sentence: "I am sad <span class='highlight'>to hear that</span>.",
  choices: ["それを聞いて", "それを聞くことを", "それを聞くために", "それを聞くべき"],
  correct: 0,
  explanation: "to hear that は sad という感情の原因を表しています。"
},
{
  sentence: "We have a lot of homework <span class='highlight'>to do</span>.",
  choices: ["するために", "することを", "するべき", "するべきこと"],
  correct: 2,
  explanation: "to do は homework を説明する形容詞的用法で、「するべき宿題」という意味になります。"
},
{
  sentence: "<span class='highlight'>To become a pilot</span>, he studies English hard.",
  choices: ["パイロットになることを", "パイロットになるために", "パイロットになって", "パイロットになることは"],
  correct: 1,
  explanation: "文頭の不定詞は目的を表す副詞的用法です。"
},
{
  sentence: "You need <span class='highlight'>to get up early every morning</span>.",
  choices: ["毎朝早く起きるために", "毎朝早く起きて", "毎朝早く起きるべき", "毎朝早く起きることを"],
  correct: 3,
  explanation: "to get up early every morning は need の目的語になる名詞的用法です。"
}


    ]
  },
  


  relative: {
    title: "🔔 関係代名詞",
    questions: [
      {
        sentence: "This is the boy <span class='highlight'>who likes tennis</span>.",
        choices: ["テニスが好きな少年", "テニスをしている少年", "テニスをした少年", "テニスをする少年"],
        correct: 0,
        explanation: "who は先行詞 boy を説明しています。"
      }
    ]
  }
};


function startCategory(key) {
  console.log("startCategory:");

// ★ タイトルを消す
  document.getElementById("title").style.display = "none";

currentCategoryKey = key;

  questions = [...categories[key].questions];
  shuffle(questions);

  currentIndex = 0;
  score = 0;

  // ★ここを追加
  const rankEl = document.getElementById("rank");
  rankEl.style.display = "block";
  rankEl.textContent = "";

  menu.style.display = "none";
  quiz.style.display = "block";
  menuBtn.style.display = "none"; 

  showQuestion();
}


let questions = [];
let currentIndex = 0;
let score = 0;
let choiceButtons = [];
let answered = false;
let currentCategoryKey = "";
let categoryScores ={};
let clearedItems =
  JSON.parse(localStorage.getItem("clearedItems")) || {};


  
// ① getElementById（DOM取得）
const menu = document.getElementById("menu");
const quiz = document.getElementById("quiz");
const categoryListEl = document.getElementById("categoryList");
const menuBtn = document.getElementById("menuBtn");

const scoreEl = document.getElementById("score");
const explanationEl = document.getElementById("explanation");

const sentenceEl = document.getElementById("sentence");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");
const retryBtn = document.getElementById("retryBtn");



// 音
const correctSound = new Audio("correct.mp3");
const incorrectSound = new Audio("incorrect.mp3");

const perfectSound = new Audio("perfect.mp3");//追加したもの


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showMenu() {
  console.log("clearedItems:", clearedItems);
  console.log(
    "localStorage:",
    localStorage.getItem("clearedItems")
  );

  // タイトル表示
  document.getElementById("title").style.display = "block";

  menu.style.display = "block";
  quiz.style.display = "none";
  categoryListEl.innerHTML = "";

  for (const key in categories) {

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";
    wrapper.style.gap = "8px";

    let text = categories[key].title;

    if (categoryScores[key]) {
      const s = categoryScores[key];
      text += `（${s.score}/${s.total}）`;
    }

    // ⭐をここで追加（text確定前）
    if (clearedItems[key]) {
      text += " ⭐";
    }

    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = () => startCategory(key);

    wrapper.appendChild(btn);

    // ⭐がある場合だけ解除ボタン
    if (clearedItems[key]) {
      const clearBtn = document.createElement("button");
      clearBtn.textContent = "☆解除";
      clearBtn.style.fontSize = "12px";      
      clearBtn.onclick = () => clearStar(key);

      wrapper.appendChild(clearBtn);
    }

    categoryListEl.appendChild(wrapper);
  }
}




function clearStar(key) {
  // 確認（誤操作防止）
  if (!confirm("この単元の星を解除しますか？")) return;

  // 星データを削除
  delete clearedItems[key];

  // localStorage を更新
  localStorage.setItem(
    "clearedItems",
    JSON.stringify(clearedItems)
  );

  // メニュー再表示
  showMenu();
}





// 問題表示
function showQuestion() {

  sentenceEl.style.display = "block"; // ← ★必ず戻す
  
  document.getElementById("categoryScore").style.display = "none";
  document.getElementById("finishMessage").textContent = "";
   document.getElementById("quiz").style.display = "block"; // ← 追加

  resultEl.textContent = "";
  resultEl.className = "";

  // Perfectイラストを必ず非表示にする
const perfectImg = document.getElementById("perfectIllustration");
perfectImg.style.display = "none";

   // 解説エリアを再表示
  const explanationArea = document.getElementById("explanationWrap");
  explanationArea.style.display = "block";


  explanationEl.textContent = "";
  explanationEl.innerHTML = "";

  choicesEl.innerHTML = "";
  nextBtn.style.display = "none";
  retryBtn.style.display = "none";

  const youtubeArea = document.getElementById("youtubeArea");
  youtubeArea.style.display = "none";
  youtubeArea.innerHTML = "";
  youtubeBtn.style.display = "none";
 
  answered = false; // ← ★ここでリセット

  choiceButtons = [];

  // 進捗
  progressEl.textContent =
    `${currentIndex + 1} / ${questions.length} 問`;

  // スコア
  scoreEl.textContent = `スコア：${score}`;

  const q = questions[currentIndex];
  sentenceEl.innerHTML = q.sentence;

  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.onclick = () => checkAnswer(index);
    choicesEl.appendChild(button);
    choiceButtons.push(button);
  });

console.log("sentence:", sentenceEl.innerHTML);
console.log("quiz display:", document.getElementById("quiz").style.display);

}



function checkAnswer(selected) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex]; // ← ★最初に定義

  // 正解以外のボタンだけ disabled
  choiceButtons.forEach((btn, index) => {
    if (index !== q.correct) {
      btn.disabled = true;
    }
  });

  // 正解ボタンを強調
  choiceButtons[q.correct].classList.add("correct-btn");

  resultEl.classList.remove("correct", "incorrect");

  if (selected === q.correct) {
    resultEl.textContent = "正解！";
    resultEl.classList.add("correct");
    score++;
    scoreEl.textContent = `スコア：${score}`;
    correctSound.currentTime = 0;
    correctSound.play();
  } else {
    resultEl.textContent = "不正解…";
    resultEl.classList.add("incorrect");
    incorrectSound.currentTime = 0;
    incorrectSound.play();
  }

  
  explanationEl.textContent = q.explanation;

  let html = q.explanation;



const youtubeBtn  = document.getElementById("youtubeBtn");
const youtubeArea = document.getElementById("youtubeArea");

// いったん必ずリセット
youtubeBtn.style.display = "none";
youtubeArea.style.display = "none";
youtubeArea.innerHTML = "";

if (q.youtube) {
  youtubeBtn.style.display = "inline-block";

  youtubeBtn.onclick = () => {
    youtubeArea.innerHTML = `
      <iframe
        width="100%" height="315"
        src="${q.youtube}"
        frameborder="0"
        allowfullscreen>
      </iframe>
    `;
    youtubeArea.style.display = "block";
  };

} else {
  youtubeArea.style.display = "none";
}


explanationEl.innerHTML = html;

// 解説文を取得
let explanationText = q.explanation;

// 「。」のあとで改行
explanationText = explanationText.replace(/。/g, "。<br>");

// 表示
explanationEl.innerHTML = explanationText;





  nextBtn.style.display = "block";
}



// 次へ
nextBtn.onclick = () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    progressEl.textContent = "全問終了です。";

    sentenceEl.style.display = "none";

const finishEl = document.getElementById("finishMessage");
finishEl.textContent = "お疲れさまでした";
finishEl.style.display = "block";


// 解説エリアを非表示
const explanationWrap = document.getElementById("explanationWrap");
explanationWrap.style.display = "none";

    
    choicesEl.innerHTML = "";

    //章ごとのスコアを保存
    categoryScores[currentCategoryKey] = {
      score: score,
      total: questions.length
    };

    console.log(categoryScores); // ← 追加

    explanationEl.textContent = "";
    resultEl.textContent = "";

    const youtubeArea = document.getElementById("youtubeArea");
  youtubeArea.style.display = "none";
  youtubeArea.innerHTML = "";
  youtubeBtn.style.display = "none";

    scoreEl.innerHTML =
      `最終スコア<br><span class="final-score">${score} / ${questions.length}</span>`


    nextBtn.style.display = "none";
    retryBtn.style.display = "block";
    menuBtn.style.display = "block";

    // ★ ランク表示ここから
    const rankEl = document.getElementById("rank");
    const perfectImg = document.getElementById("perfectIllustration");

// いったん非表示（重要）
perfectImg.style.display = "none";
    //初期化
    rankEl.textContent = "";
    rankEl.classList.remove("perfect", "excellent", "good", "tryagain");
    rankEl.style.display = "block";
    //正答率
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    //ランク判定
    if (percentage === 100) {
      rankEl.textContent = "Perfect!";
      rankEl.classList.add("perfect");
      

      // ★ Perfect のときだけ表示
  perfectImg.style.display = "block";
  perfectSound.currentTime = 0;  //追加したもの
  perfectSound.play(); //追加したもの

    } else if (percentage >= 90) {
      rankEl.textContent = "Excellent!";
      rankEl.classList.add("excellent");
    } else if (percentage >= 60) {
      rankEl.textContent = "Good!";
      rankEl.classList.add("good");
    } else {
      rankEl.textContent = "Try again!";
      rankEl.classList.add("tryagain");
    }
   
    // ★ 章スコア表示用要素を作成
     const categoryScoreEl = document.getElementById("categoryScore");
     const data = categoryScores[currentCategoryKey];

    categoryScoreEl.style.display = "block";  
    categoryScoreEl.style.fontSize = "18px";
    categoryScoreEl.style.marginTop = "12px";  

   
    

    console.log("rank:", rankEl.textContent, rankEl.className);

  if (score === questions.length) {
  clearedItems[currentCategoryKey] = true;
  localStorage.setItem(
    "clearedItems",
    JSON.stringify(clearedItems)
  );
  }  
  }
};

retryBtn.onclick = () => {
  // 状態を初期化
  currentIndex = 0;
  score = 0;

  document.getElementById("rank").textContent = "";
  document.getElementById("categoryScore").style.display = "none";

  // ボタン表示を戻す
  retryBtn.style.display = "none";
  menuBtn.style.display = "none";   // ← ★これを追加
  nextBtn.style.display = "block";  // ← 念のため（おすすめ）

  shuffle(questions);

  // 最初の表示
  showQuestion();
};


menuBtn.onclick = () => {
  menuBtn.style.display = "none";

  document.getElementById("rank").style.display = "none";
  document.getElementById("categoryScore").style.display = "none";

  showMenu();
};





// 最初の表示
showMenu();


