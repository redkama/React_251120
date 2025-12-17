const menuData = [
  {
    id: 1,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake001.jpg",
    en: "ORIGINAL BROWN RICE BAKE",
    ko: "오리지날 현미베이크",
    desc: "바삭하고 고소함이 일품인 맛닭꼬의 대표 메뉴",
    price: 10000,
    category: "Bake"
  },
  {
    id: 2,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake002.jpg",
    en: "GARLIC BROWN RICE BAKE",
    ko: "갈릭 현미베이크",
    desc: "달콤한 갈릭소스와 현미 베이크의 고소함이 어우러진 메뉴",
    price: 10000,
    category: "Bake"
  },
  {
    id: 3,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake003.jpg",
    en: "GANGJEONG BROWN RICE BAKE",
    ko: "강정 현미베이크",
    desc: "강정소스의 깊은 맛이 치킨 속살까지 느껴지는 메뉴",
    price: 10000,
    category: "Bake"
  },
  {
    id: 4,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake004.jpg",
    en: "HOTSAUCE BROWN RICE BAKE",
    ko: "핫소스 현미베이크",
    desc: "화끈한 매운맛 하지만 당기는 매운맛",
    price: 10000,
    category: "Bake"
  },
  {
    id: 5,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake005.jpg",
    en: "CHILI BROWN RICE BAKE",
    ko: "칠리 현미베이크",
    desc: "새콤 달콤한 칠리소스의 풍미가 입안 가득 확 감겨드는 메뉴",
    price: 10000,
    category: "Bake"
  },
  {
    id: 6,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake006.jpg",
    en: "TRIPLE BROWN RICE BAKE",
    ko: "트리플 현미베이크",
    desc: "3가지 소스와 치킨의 환상 조합이 입안에서 팡팡 터지는 색다른 맛",
    price: 10000,
    category: "Bake"
  },
  {
    id: 7,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake007.jpg",
    en: "SWEET GARLIC BROWN RICE BAKE",
    ko: "마늘아 현미베이크",
    desc: "맛과 건강을 동시에 잡은 스위트한 마늘 치킨 메뉴",
    price: 10000,
    category: "Bake"
  },
  {
    id: 8,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake008.jpg",
    en: "HOT PEPPERS GANGJEONG BROWN RICE BAKE",
    ko: "고추강정 현미베이크",
    desc: "고추의 매콤한 풍미와 조청의 깊은맛이 어우러진 새로운 메뉴",
    price: 10000,
    category: "Bake"
  },
  {
    id: 9,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake009.jpg",
    en: "SZECHUAN BROWN RICE BAKE",
    ko: "사천 현미베이크",
    desc: "중국 사천지방의 매운맛이 침샘을 자극하여 입안을 황홀하게 하는 메뉴",
    price: 10000,
    category: "Bake"
  },
  {
    id: 10,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake010.jpg",
    en: "GREEN ONION &amp; BROWN RICE BAKE",
    ko: "파파닭 현미베이크",
    desc: "파의 후레쉬한 풍미가 현미베이크의 맛을 한층 더 살려 주는 메뉴",
    price: 10000,
    category: "Bake"
  },
  {
    id: 11,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake011.jpg",
    en: "MARA BROWN RICE BAKE",
    ko: "마라 현미베이크",
    desc: "진한 마라의 풍미가 드디어 현미베이크를 만났다! 책임질 수 없는 치명적인 마성의 맛",
    price: 10000,
    category: "Bake"
  },
  {
    id: 12,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake012.jpg",
    en: "CHEESE PPURICCO BROWN RICE BAKE",
    ko: "치즈 뿌리꼬 현미베이크",
    desc: "바삭한 현미베이크에 치즈의 풍미가 사르르~ 세상에 이런맛이~",
    price: 10000,
    category: "Bake"
  },
  {
    id: 13,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake013.jpg",
    en: "CURRY PPURICCO BROWN RICE BAKE",
    ko: "카레 뿌리꼬 현미베이크",
    desc: "고소한 현미베이크에 카레의 풍미가 물씬~ 너무 매력있어!",
    price: 10000,
    category: "Bake"
  },
  {
    id: 14,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake014.jpg",
    en: "TUNA BROWN RICE BAKE",
    ko: "참치 순살 현미베이크",
    desc: "바삭한 현미베이크와 고단백질 참치의 고소함 양파의 아삭하고 상큼한 향이 살아있는 이색적인 메뉴 ",
    price: 10000,
    category: "Bake"
  },
  {
    id: 15,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake015.jpg",
    en: "YURINGI BROWN RICE BAKE",
    ko: "유린기 순살 현미베이크",
    desc: "상큼하고 깔끔한 유린기 소스와 치킨이 어우러져 느끼함이 전혀없는 현미베이크 순살 전용 메뉴",
    price: 10000,
    category: "Bake"
  },
  {
    id: 16,
    img: process.env.PUBLIC_URL + "/img/img_menu_bake016.jpg",
    en: "WASABI BROWN RICE BAKE",
    ko: "와닭 순살 현미베이크",
    desc: "신선한 야채, 생와사비, 치킨의 삼박자가 어우러진 후레쉬한 환상의 하모니",
    price: 10000,
    category: "Bake"
  },
  {
    id: 17,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast001.jpg",
    en: "ORIGINAL ROAST CHICKEN",
    ko: "오리지날 로스트",
    desc: "은은한 훈제향과 단백한 육질이 촉촉하고 부드러운 메뉴",
    price: 10000,
    category: "Roast"
  },
  {
    id: 18,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast002.jpg",
    en: "BARBECUE ROAST CHICKEN",
    ko: "바베큐 로스트",
    desc: "바비큐의 깊고 매운맛을 단계별로 느껴볼 수 있는 메뉴 ( 매운맛 1~4단계 중 택일)",
    price: 10000,
    category: "Roast"
  },
  {
    id: 19,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast003.jpg",
    en: "TERI GARLIC ROAST CHICKEN",
    ko: "데리갈릭 로스트",
    desc: "짭쪼름한 간장소스가 입맛을 확 당기게 하는 메뉴",
    price: 10000,
    category: "Roast"
  },
  {
    id: 20,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast004.jpg",
    en: "CHEESE CHLLI ROAST CHICKEN",
    ko: "치즈칠리 로스트",
    desc: "새콤 달콤한 맛과 담백한 치즈가 어울리는 메뉴 ( 순한맛, 매운맛 중 택일)",
    price: 10000,
    category: "Roast"
  },
  {
    id: 21,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast005.jpg",
    en: "KKANPUNGGI ROAST CHICKEN",
    ko: "깐풍기 로스트",
    desc: "매콤한 중화풍의 소스가 입안의 침샘을 맛있게 자극하는 메뉴",
    price: 10000,
    category: "Roast"
  },
  {
    id: 22,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast006.jpg",
    en: "DOUBANJANG ROAST CHICKEN",
    ko: "두반장 로스트",
    desc: "중국식의 두반장소스와 태국고추가 찰떡궁합인 치킨메뉴",
    price: 10000,
    category: "Roast"
  },
  {
    id: 23,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast007.jpg",
    en: "GALBI ROAST",
    ko: "갈비 로스트",
    desc: "숯불 갈비맛 그대로 새로운 녀석이 왔다",
    price: 10000,
    category: "Roast"
  },
  {
    id: 24,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast008.jpg",
    en: "SUTBUL ROAST CHICKEN",
    ko: "숯불 로스트",
    desc: "숯불의 향과 땡초의 화끈한 매운맛이 입맛을 자극하는 중독성 있는 새로운 메뉴",
    price: 10000,
    category: "Roast"
  },
  {
    id: 25,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast009.jpg",
    en: "GREEN ONION ROAST CHICKEN",
    ko: "로스트 순살 파닭",
    desc: "오븐에 구워 육즙이 살아 있는 구이와 파의 신선한 풍미가 어우러져 개운한 치킨 메뉴",
    price: 10000,
    category: "Roast"
  },
  {
    id: 26,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast010.jpg",
    en: "FRESH CHEESE FONDUE CHICKEN",
    ko: "치즈 순살 퐁닭",
    desc: "치즈의 고소함, 요거트의 상큼함, 두반장의 매콤함까지 3박자가 어우러져 미각을 즐겁게 하는 야심적인 맛닭꼬 신메뉴",
    price: 10000,
    category: "Roast"
  },
  {
    id: 27,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast011.jpg",
    en: "WASABI ROAST",
    ko: "와닭 순살 로스트",
    desc: "신선한 야채, 생와사비, 치킨의 삼박자가 어우러진 후레쉬한 환상의 하모니",
    price: 10000,
    category: "Roast"
  },
  {
    id: 28,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast012.jpg",
    en: "STEAK ROAST",
    ko: "스테이크 순살 로스트",
    desc: "아메리칸 스타일! 달짝하게 호불호 없는 중독적인 맛!",
    price: 10000,
    category: "Roast"
  },
  {
    id: 29,
    img: process.env.PUBLIC_URL + "/img/img_menu_roast013.jpg",
    en: "SRIRACHA ROAST",
    ko: "스리라차 순살 로스트",
    desc: "태국에서 느낄 수 있던 맛! 매콤하고 중독적인 감칠맛닭!",
    price: 10000,
    category: "Roast"
  }
];

export default menuData;