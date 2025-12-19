const menuData = [
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake001.jpg",
    en: "ORIGINAL BROWN RICE BAKE",
    ko: "오리지날 현미베이크",
    desc: "바삭하고 고소함이 일품인 맛닭꼬의 대표 메뉴",
    price: 9000,
    category: "Bake",
    badge: "NEW"
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake002.jpg",
    en: "GARLIC BROWN RICE BAKE",
    ko: "갈릭 현미베이크",
    desc: "달콤한 갈릭소스와 현미 베이크의 고소함이 어우러진 메뉴",
    price: 11000,
    category: "Bake",
    badge: "HOT"
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake003.jpg",
    en: "GANGJEONG BROWN RICE BAKE",
    ko: "강정 현미베이크",
    desc: "강정소스의 깊은 맛이 치킨 속살까지 느껴지는 메뉴",
    price: 10000,
    category: "Bake",
    badge: ""
  },
  {
    id: 4,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake004.jpg",
    en: "HOTSAUCE BROWN RICE BAKE",
    ko: "핫소스 현미베이크",
    desc: "화끈한 매운맛 하지만 당기는 매운맛",
    price: 10000,
    category: "Bake",
    badge: ""
  },
  {
    id: 5,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake005.jpg",
    en: "CHILI BROWN RICE BAKE",
    ko: "칠리 현미베이크",
    desc: "새콤 달콤한 칠리소스의 풍미가 입안 가득 확 감겨드는 메뉴",
    price: 10000,
    category: "Bake",
    badge: ""
  },
  {
    id: 6,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake006.jpg",
    en: "TRIPLE BROWN RICE BAKE",
    ko: "트리플 현미베이크",
    desc: "3가지 소스와 치킨의 환상 조합이 입안에서 팡팡 터지는 색다른 맛",
    price: 10000,
    category: "Bake",
    badge: ""
  },
  {
    id: 7,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake007.jpg",
    en: "SWEET GARLIC BROWN RICE BAKE",
    ko: "마늘아 현미베이크",
    desc: "맛과 건강을 동시에 잡은 스위트한 마늘 치킨 메뉴",
    price: 10000,
    category: "Bake",
    badge: ""
  },
  {
    id: 8,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake008.jpg",
    en: "GANGJEONG BROWN RICE BAKE",
    ko: "고추강정 현미베이크",
    desc: "고추의 매콤한 풍미와 조청의 깊은맛이 어우러진 새로운 메뉴",
    price: 10000,
    category: "Bake",
    badge: ""
  },
  {
    id: 9,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake009.jpg",
    en: "SZECHUAN BROWN RICE BAKE",
    ko: "사천 현미베이크",
    desc: "중국 사천지방의 매운맛이 침샘을 자극하여 입안을 황홀하게 하는 메뉴",
    price: 10000,
    category: "Bake",
    badge: ""
  },
  {
    id: 10,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake010.jpg",
    en: "GREEN ONION BROWN RICE BAKE",
    ko: "파파닭 현미베이크",
    desc: "파의 후레쉬한 풍미가 현미베이크의 맛을 한층 더 살려 주는 메뉴",
    price: 10000,
    category: "Bake",
    badge: "HOT"
  },
  {
    id: 17,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast001.jpg",
    en: "ORIGINAL ROAST CHICKEN",
    ko: "오리지날 로스트",
    desc: "은은한 훈제향과 단백한 육질이 촉촉하고 부드러운 메뉴",
    price: 10000,
    category: "Roast",
    badge: "HOT"
  },
  {
    id: 18,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast002.jpg",
    en: "BARBECUE ROAST CHICKEN",
    ko: "바베큐 로스트",
    desc: "바비큐의 깊고 매운맛을 단계별로 느껴볼 수 있는 메뉴 ( 매운맛 1~4단계 중 택일)",
    price: 10000,
    category: "Roast",
    badge: "NEW"
  },
  {
    id: 19,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast003.jpg",
    en: "TERI GARLIC ROAST CHICKEN",
    ko: "데리갈릭 로스트",
    desc: "짭쪼름한 간장소스가 입맛을 확 당기게 하는 메뉴",
    price: 10000,
    category: "Roast",
    badge: ""
  },
  {
    id: 20,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast004.jpg",
    en: "CHEESE CHLLI ROAST CHICKEN",
    ko: "치즈칠리 로스트",
    desc: "새콤 달콤한 맛과 담백한 치즈가 어울리는 메뉴 ( 순한맛, 매운맛 중 택일)",
    price: 10000,
    category: "Roast",
    badge: "NEW"
  },
  {
    id: 21,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast005.jpg",
    en: "KKANPUNGGI ROAST CHICKEN",
    ko: "깐풍기 로스트",
    desc: "매콤한 중화풍의 소스가 입안의 침샘을 맛있게 자극하는 메뉴",
    price: 10000,
    category: "Roast",
    badge: "HOT"
  },
  {
    id: 22,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast006.jpg",
    en: "DOUBANJANG ROAST CHICKEN",
    ko: "두반장 로스트",
    desc: "중국식의 두반장소스와 태국고추가 찰떡궁합인 치킨메뉴",
    price: 10000,
    category: "Roast",
    badge: "HOT"
  },
  {
    id: 23,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast007.jpg",
    en: "GALBI ROAST",
    ko: "갈비 로스트",
    desc: "숯불 갈비맛 그대로 새로운 녀석이 왔다",
    price: 10000,
    category: "Roast",
    badge: ""
  },
  {
    id: 24,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast008.jpg",
    en: "SUTBUL ROAST CHICKEN",
    ko: "숯불 로스트",
    desc: "숯불의 향과 땡초의 화끈한 매운맛이 입맛을 자극하는 중독성 있는 새로운 메뉴",
    price: 10000,
    category: "Roast",
    badge: "HOT"
  },
  {
    id: 25,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast009.jpg",
    en: "GREEN ONION ROAST CHICKEN",
    ko: "로스트 순살 파닭",
    desc: "오븐에 구워 육즙이 살아 있는 구이와 파의 신선한 풍미가 어우러져 개운한 치킨 메뉴",
    price: 10000,
    category: "Roast",
    badge: ""
  },
  {
    id: 26,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast010.jpg",
    en: "FRESH CHEESE FONDUE CHICKEN",
    ko: "치즈 순살 퐁닭",
    desc: "치즈의 고소함, 요거트의 상큼함, 두반장의 매콤함까지 3박자가 어우러진 야심적인 맛닭꼬 신메뉴",
    price: 10000,
    category: "Roast",
    badge: ""
  },
  {
    id: 30,
    img: process.env.PUBLIC_URL + "/img/img_menu_fried001.jpg",
    en: "SOY FRIED CHICKEN",
    ko: "간장맛닭 후라이드",
    desc: "바삭, 단짠, 고소함의 3박자가 완벽한 맛닭꼬의 대표 후라이드 치킨",
    price: 13000,
    category: "Fried",
    badge: ""
  },
  {
    id: 31,
    img: process.env.PUBLIC_URL + "/img/img_menu_fried002.jpg",
    en: "GARLIC FRIED CHICKEN",
    ko: "마늘맛닭 후라이드",
    desc: "스위트한 마늘의 깊은 풍미를 느껴보세요",
    price: 13000,
    category: "Fried",
    badge: "NEW"
  },
  {
    id: 32,
    img: process.env.PUBLIC_URL + "/img/img_menu_fried003.jpg",
    en: "LEMON GREEN ONION FRIED CHICKEN",
    ko: "레몬파닭 후라이드",
    desc: "레몬의 상큼함과 후레쉬한 파의조화!",
    price: 13000,
    category: "Fried",
    badge: ""
  },
  {
    id: 33,
    img: process.env.PUBLIC_URL + "/img/img_menu_fried004.jpg",
    en: "PEPPER FRIED CHICKEN",
    ko: "고추맛닭 후라이드",
    desc: "고추의 매콤한 풍미가 물씬 누구나 좋아할 수 밖에 없는 매력직인 맛",
    price: 13000,
    category: "Fried",
    badge: "HOT"
  },
  {
    id: 34,
    img: process.env.PUBLIC_URL + "/img/img_menu_fried005.jpg",
    en: "ONION FRIED CHICKEN",
    ko: "어니언맛닭 후라이드",
    desc: "어니언과 요거트의 조화! 누구도 거부할 수 없는 향긋하고 후레쉬한 풍미가 매력적인 메뉴",
    price: 13000,
    category: "Fried",
    badge: ""
  },
  {
    id: 35,
    img: process.env.PUBLIC_URL + "/img/img_menu_side001.jpg",
    en: "A SEASONED RICE CAKE",
    ko: "국물떡볶이",
    desc: "학교 앞에서 먹었던 추억의 맛~~ 아~ 그립다",
    price: 7000,
    category: "Side",
    badge: ""
  },
  {
    id: 36,
    img: process.env.PUBLIC_URL + "/img/img_menu_side002.jpg",
    en: "ROSE RICE CAKE",
    ko: "로제떡볶이",
    desc: "크리미한 소스와 고소한 치즈의 풍미가 솔솔~ 맛닭꼬가 만들면 다릅니다",
    price: 7000,
    category: "Side",
    badge: "NEW"
  },
  {
    id: 37,
    img: process.env.PUBLIC_URL + "/img/img_menu_side003.jpg",
    en: "OVEN CHICKEN FEET",
    ko: "오븐닭발",
    desc: "오븐 요리의 강자 !  맛닭꼬만의 야심작 !  탱글탱글하고 쫀득한 맛을 제대로 살린 국내최초 오븐닭발",
    price: 7000,
    category: "Side",
    badge: ""
  },
  {
    id: 38,
    img: process.env.PUBLIC_URL + "/img/img_menu_side004.jpg",
    en: "OVEN CHICKEN GIZZARD",
    ko: "오븐똥집",
    desc: "쫄깃쫄깃한 닭똥집을 오븐에 구워 풍성한 야채와 특제 소스로 볶아내 맛을 더한 메뉴",
    price: 7000,
    category: "Side",
    badge: ""
  },
  {
    id: 39,
    img: process.env.PUBLIC_URL + "/img/img_menu_side005.jpg",
    en: "OVEN CHICKEN CARTILAGE",
    ko: "오븐닭오돌뼈",
    desc: "닭오돌뼈의 식감이 오도독~~맛도 한가득 재미도 한가득",
    price: 7000,
    category: "Side",
    badge: "HOT"
  },
];

export default menuData;