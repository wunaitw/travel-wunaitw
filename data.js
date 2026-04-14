/**
 * =============================================
 *  軟糖媽咪Ivy的旅遊筆記 — 票券資料檔  data.js
 *  網站：travel.wunaitw.com
 * =============================================
 *
 *  ★ 不用自己新增！直接告訴 Claude 你要加什麼票券，
 *    Claude 會自動去官網抓資料、更新這個檔案給你 ★
 *
 *  如果你要自己加，每筆格式如下：
 * ─────────────────────────────────────────────
 *  attraction   → 景點 / 票券主標題（★ 同景點不同平台請填相同名稱 ★）
 *  platform     → "Klook" 或 "KKday"
 *  name         → 票券在平台上的完整名稱
 *  country      → "台灣" "日本" "韓國" "泰國"
 *  city         → "台北" "高雄" "東京" "大阪" "全國" 等
 *  type         → "交通運輸" / "景點門票" / "一日遊" / "體驗活動"
 *  subtype      → 細項（見下方各 type 的選項）
 *                 交通運輸：台鐵 / 高鐵 / 新幹線 / 阪急 / JR Pass / 地鐵 / 機場接送
 *                 景點門票：遊樂園 / 博物館 / 水族館 / 展覽 / 自然景觀
 *                 一日遊　：近郊一日遊 / 城市導覽 / 包車
 *                 體驗活動：料理體驗 / 文化體驗 / 戶外活動 / 溫泉
 *  price        → 每人起售價（台幣，純數字）
 *  url_scrape   → 平台官方原始網址（Claude 爬價格用）
 *  url_affiliate → 聯盟行銷轉址連結（使用者點「立即預訂」按鈕用）
 *                  ※ 若尚未設定聯盟連結，填與 url_scrape 相同即可
 * ─────────────────────────────────────────────
 */

const tickets = [

  // ════════════════════════════════
  //  台灣・台北
  // ════════════════════════════════

  {
    attraction: "台北101觀景台",
    platform: "Klook",
    name: "台北101觀景台 89F 入場券",
    country: "台灣",
    city: "台北",
    type: "景點門票",
    subtype: "展覽",
    price: 600,
    url_scrape: "https://www.klook.com/zh-TW/activity/1659-taipei-101-taipei/",
    url_affiliate: "https://www.klook.com/zh-TW/activity/1659-taipei-101-taipei/"
  },

  {
    attraction: "國立故宮博物院",
    platform: "KKday",
    name: "國立故宮博物院 電子門票",
    country: "台灣",
    city: "台北",
    type: "景點門票",
    subtype: "博物館",
    price: 120,
    url_scrape: "https://www.kkday.com/zh-tw/product/101875",
    url_affiliate: "https://www.kkday.com/zh-tw/product/101875"
  },

  {
    attraction: "北台灣包車一日遊",
    platform: "KKday",
    name: "北台灣包車一日遊｜十分、九份、野柳、猴硐自選",
    country: "台灣",
    city: "台北",
    type: "一日遊",
    subtype: "近郊一日遊",
    price: 3200,
    url_scrape: "https://www.kkday.com/zh-tw/product/11679",
    url_affiliate: "https://www.kkday.com/zh-tw/product/11679"
  },

  // ════════════════════════════════
  //  台灣・高雄
  // ════════════════════════════════

  {
    attraction: "高雄包車一日遊",
    platform: "KKday",
    name: "台灣各地賓士9人座包車｜高雄出發一日遊",
    country: "台灣",
    city: "高雄",
    type: "一日遊",
    subtype: "包車",
    price: 4500,
    url_scrape: "https://www.kkday.com/zh-tw/product/142529",
    url_affiliate: "https://www.kkday.com/zh-tw/product/142529"
  },

  // ════════════════════════════════
  //  台灣・全台
  // ════════════════════════════════

  {
    attraction: "台灣高鐵周遊券",
    platform: "KKday",
    name: "台灣高鐵周遊券 2日／3日無限次搭乘（外國人適用）",
    country: "台灣",
    city: "全台",
    type: "交通運輸",
    subtype: "高鐵",
    price: 1500,
    url_scrape: "https://www.kkday.com/zh-tw/product/2700",
    url_affiliate: "https://www.kkday.com/zh-tw/product/2700"
  },

  // ════════════════════════════════
  //  日本・東京
  // ════════════════════════════════

  {
    attraction: "東京迪士尼樂園 / 迪士尼海洋",
    platform: "Klook",
    name: "東京迪士尼樂園／迪士尼海洋 1日電子門票",
    country: "日本",
    city: "東京",
    type: "景點門票",
    subtype: "遊樂園",
    price: 2600,
    url_scrape: "https://www.klook.com/zh-TW/activity/695-tokyo-disney-resort-1-day-pass-tokyo/",
    url_affiliate: "https://www.klook.com/zh-TW/activity/695-tokyo-disney-resort-1-day-pass-tokyo/"
  },

  {
    attraction: "東京迪士尼樂園 / 迪士尼海洋",
    platform: "KKday",
    name: "東京迪士尼樂園 & 迪士尼海洋 1日電子門票",
    country: "日本",
    city: "東京",
    type: "景點門票",
    subtype: "遊樂園",
    price: 2600,         // ← 請至官網確認最新起售價格
    url_scrape: "https://www.kkday.com/zh-tw/product/19252-tokyo-disney-resort-disneyland-disneysea",
    url_affiliate: "https://www.kkday.com/zh-tw/product/19252-tokyo-disney-resort-disneyland-disneysea"
  },

  {
    attraction: "東京晴空塔",
    platform: "Klook",
    name: "東京晴空塔 天望台入場券",
    country: "日本",
    city: "東京",
    type: "景點門票",
    subtype: "展覽",
    price: 680,
    url_scrape: "https://www.klook.com/zh-TW/activity/41352-tokyo-skytree/",
    url_affiliate: "https://www.klook.com/zh-TW/activity/41352-tokyo-skytree/"
  },

  {
    attraction: "teamLab Planets 東京豐洲",
    platform: "KKday",
    name: "東京豐洲 teamLab Planets 數位藝術館門票",
    country: "日本",
    city: "東京",
    type: "景點門票",
    subtype: "展覽",
    price: 1050,
    url_scrape: "https://www.kkday.com/zh-tw/product/22396-japan-teamlab-planets-tokyo-ticket",
    url_affiliate: "https://www.kkday.com/zh-tw/product/22396-japan-teamlab-planets-tokyo-ticket"
  },

  // ════════════════════════════════
  //  日本・大阪
  // ════════════════════════════════

  {
    attraction: "大阪環球影城 USJ",
    platform: "Klook",
    name: "大阪環球影城 USJ 官方授權電子入場券",
    country: "日本",
    city: "大阪",
    type: "景點門票",
    subtype: "遊樂園",
    price: 1950,
    url_scrape: "https://www.klook.com/zh-TW/activity/46604-universal-studios-japan-e-ticket-osaka-qr-code-direct-entry/",
    url_affiliate: "https://www.klook.com/zh-TW/activity/46604-universal-studios-japan-e-ticket-osaka-qr-code-direct-entry/"
  },

  {
    attraction: "大阪周遊卡",
    platform: "Klook",
    name: "大阪周遊卡 Osaka Amazing Pass（1日／2日）",
    country: "日本",
    city: "大阪",
    type: "交通運輸",
    subtype: "地鐵",
    price: 1050,
    url_scrape: "https://www.klook.com/zh-TW/activity/82312-amazing-pass-osaka/",
    url_affiliate: "https://www.klook.com/zh-TW/activity/82312-amazing-pass-osaka/"
  },

  // ════════════════════════════════
  //  日本・京都
  // ════════════════════════════════

  {
    attraction: "京都一日遊（嵐山・金閣寺・清水寺）",
    platform: "KKday",
    name: "京都一日遊｜嵐山・金閣寺・清水寺・伏見稻荷大社（大阪出發）",
    country: "日本",
    city: "京都",
    type: "一日遊",
    subtype: "近郊一日遊",
    price: 2800,
    url_scrape: "https://www.kkday.com/zh-tw/product/39456",
    url_affiliate: "https://www.kkday.com/zh-tw/product/39456"
  },

  {
    attraction: "京都江戶茶室茶道體驗",
    platform: "KKday",
    name: "日本京都 江戶茶室正統茶道體驗",
    country: "日本",
    city: "京都",
    type: "體驗活動",
    subtype: "文化體驗",
    price: 1200,
    url_scrape: "https://www.kkday.com/zh-tw/product/36881",
    url_affiliate: "https://www.kkday.com/zh-tw/product/36881"
  },

  // ════════════════════════════════
  //  日本・箱根 / 富士山
  // ════════════════════════════════

  {
    attraction: "富士箱根周遊券",
    platform: "KKday",
    name: "富士箱根周遊券 3日券（含新宿出發）",
    country: "日本",
    city: "箱根",
    type: "交通運輸",
    subtype: "新幹線",
    price: 2100,
    url_scrape: "https://www.kkday.com/zh-tw/product/133992-fuji-hakone-3-day-travel-pass-tokyo",
    url_affiliate: "https://www.kkday.com/zh-tw/product/133992-fuji-hakone-3-day-travel-pass-tokyo"
  },

  {
    attraction: "富士急樂園",
    platform: "KKday",
    name: "富士急樂園一日通票＋新宿來回巴士接送套票",
    country: "日本",
    city: "富士山",
    type: "景點門票",
    subtype: "遊樂園",
    price: 1680,
    url_scrape: "https://www.kkday.com/zh-tw/product/104303",
    url_affiliate: "https://www.kkday.com/zh-tw/product/104303"
  },

  // ════════════════════════════════
  //  日本・全國
  // ════════════════════════════════

  {
    attraction: "日本 JR Pass 全國版",
    platform: "Klook",
    name: "日本 JR Pass 全國版 7天無限搭乘券",
    country: "日本",
    city: "全國",
    type: "交通運輸",
    subtype: "JR Pass",
    price: 15800,
    url_scrape: "https://www.klook.com/zh-TW/activity/1420-7-day-whole-japan-rail-pass-jr-pass/",
    url_affiliate: "https://www.klook.com/zh-TW/activity/1420-7-day-whole-japan-rail-pass-jr-pass/"
  },

  // ════════════════════════════════
  //  ↓↓↓ 叫 Claude 幫你加票券 ↓↓↓
  //  告訴 Claude：「幫我加 XX 的 XX 票券」
  //  Claude 會去官網找資料，自動更新這裡
  // ════════════════════════════════

];  // ← 這個括號不要動！
