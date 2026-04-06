/**
 * =============================================
 *  軟糖媽咪Ivy的旅遊筆記 — 票券資料檔  data.js
 *  網站：travel.wunaitw.com
 * =============================================
 *
 *  新增票券步驟：
 *  1. 用文字編輯器開啟此檔案
 *  2. 在 tickets 陣列裡新增一筆（參考下方範本）
 *  3. 存檔後上傳到 Netlify（同時上傳 data.js 和 index.html）
 *
 *  每筆票券欄位說明：
 * ─────────────────────────────────────────────
 *  platform  → 平台："Klook" 或 "KKday"（大小寫要一樣）
 *  name      → 票券完整名稱（從官網複製）
 *  country   → 國家，例如 "日本" "韓國" "泰國"
 *  region    → 地區，例如 "東京" "大阪" "首爾"
 *  type      → 票券類型，只能填以下四種之一：
 *              "交通運輸" / "景點門票" / "一日遊" / "體驗活動"
 *  price     → 每人起售價（台幣，純數字，不含逗號）
 *  url       → 票券直接購買連結（從官網複製）
 * ─────────────────────────────────────────────
 */

const tickets = [

  // ════════════════════════════════
  //  日本・東京
  // ════════════════════════════════

  {
    platform: "Klook",
    name: "東京迪士尼樂園／迪士尼海洋 1日電子門票",
    country: "日本",
    region: "東京",
    type: "景點門票",
    price: 2600,
    url: "https://www.klook.com/zh-TW/activity/695-tokyo-disney-resort-1-day-pass-tokyo/"
  },

  {
    platform: "Klook",
    name: "東京晴空塔 天望台入場券",
    country: "日本",
    region: "東京",
    type: "景點門票",
    price: 680,
    url: "https://www.klook.com/zh-TW/activity/41352-tokyo-skytree/"
  },

  {
    platform: "KKday",
    name: "東京豐洲 teamLab Planets 數位藝術館門票",
    country: "日本",
    region: "東京",
    type: "景點門票",
    price: 1050,
    url: "https://www.kkday.com/zh-tw/product/22396-japan-teamlab-planets-tokyo-ticket"
  },

  // ════════════════════════════════
  //  日本・大阪
  // ════════════════════════════════

  {
    platform: "Klook",
    name: "大阪環球影城 USJ 官方授權電子入場券",
    country: "日本",
    region: "大阪",
    type: "景點門票",
    price: 1950,
    url: "https://www.klook.com/zh-TW/activity/46604-universal-studios-japan-e-ticket-osaka-qr-code-direct-entry/"
  },

  {
    platform: "Klook",
    name: "大阪周遊卡 Osaka Amazing Pass（1日／2日）",
    country: "日本",
    region: "大阪",
    type: "交通運輸",
    price: 1050,
    url: "https://www.klook.com/zh-TW/activity/82312-amazing-pass-osaka/"
  },

  // ════════════════════════════════
  //  日本・京都
  // ════════════════════════════════

  {
    platform: "KKday",
    name: "京都一日遊｜嵐山・金閣寺・清水寺・伏見稻荷大社（大阪出發）",
    country: "日本",
    region: "京都",
    type: "一日遊",
    price: 2800,
    url: "https://www.kkday.com/zh-tw/product/39456"
  },

  {
    platform: "KKday",
    name: "日本京都 江戶茶室正統茶道體驗",
    country: "日本",
    region: "京都",
    type: "體驗活動",
    price: 1200,
    url: "https://www.kkday.com/zh-tw/product/36881"
  },

  // ════════════════════════════════
  //  日本・箱根 / 富士山
  // ════════════════════════════════

  {
    platform: "KKday",
    name: "富士箱根周遊券 3日券（含新宿出發）",
    country: "日本",
    region: "箱根",
    type: "交通運輸",
    price: 2100,
    url: "https://www.kkday.com/zh-tw/product/133992-fuji-hakone-3-day-travel-pass-tokyo"
  },

  {
    platform: "KKday",
    name: "富士急樂園一日通票＋新宿來回巴士接送套票",
    country: "日本",
    region: "富士山",
    type: "景點門票",
    price: 1680,
    url: "https://www.kkday.com/zh-tw/product/104303"
  },

  // ════════════════════════════════
  //  日本・全國
  // ════════════════════════════════

  {
    platform: "Klook",
    name: "日本 JR Pass 全國版 7天無限搭乘券",
    country: "日本",
    region: "全國",
    type: "交通運輸",
    price: 15800,
    url: "https://www.klook.com/zh-TW/activity/1420-7-day-whole-japan-rail-pass-jr-pass/"
  },

  // ════════════════════════════════
  //  ↓↓↓ 新增票券貼在這裡 ↓↓↓
  //
  //  複製下方範本，填好後貼在上面：
  //
  // {
  //   platform: "Klook",               ← Klook 或 KKday
  //   name: "票券完整名稱",             ← 從官網複製
  //   country: "日本",                  ← 國家
  //   region: "東京",                   ← 地區
  //   type: "景點門票",                 ← 四種類型之一（見上方說明）
  //   price: 1500,                      ← 台幣起售價（純數字）
  //   url: "https://..."               ← 從官網複製的購買連結
  // },
  //
  // ════════════════════════════════

];  // ← 這個括號不要動！
