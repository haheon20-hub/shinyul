// ============================================================
//  이 파일만 고치면 사이트 내용이 바뀝니다.
//
//  글자 쓰는 법
//    한국어만:   "글자"
//    한/영 둘 다: { ko: "한글", en: "English" }
//    줄바꿈:     \n
//
//  작품 하나 = { ... } 한 덩어리. 복사해서 붙여넣고 내용만 바꾸면 추가됩니다.
//  id 는 주소에 쓰여요 (영문 소문자, 숫자, - 만). 작품마다 달라야 합니다.
//
//  media 에 넣을 수 있는 것
//    { type: "image",   src: "images/파일.jpg" }
//    { type: "vimeo",   id: "123456789" }
//    { type: "youtube", id: "abcDEF123" }
//    { type: "pdf",     src: "files/파일.pdf" }
//    { type: "audio",   src: "files/파일.mp3" }
//    { type: "embed",   url: "https://...", height: 166 }   (사운드클라우드 등)
//  어느 것이든 caption: "설명" 을 붙일 수 있어요.
// ============================================================

window.SITE = {
  name: "SHIN YUL",
  defaultLang: "ko",
  showLangToggle: false, // 영문이 준비되면 true 로 바꾸세요

  contact: [
    { text: "fireyoole@gmail.com", url: "mailto:fireyoole@gmail.com" },
    { text: "Instagram @yul_seen", url: "https://www.instagram.com/yul_seen/" }
  ],

  // ---------------- Films ----------------
  films: [
    {
      id: "a-pear-tree-in-the-star-village",
      title: "별나라 배나무",
      subtitle: "A Pear Tree in the Star Village",
      info: "감독 신율\n2025 · 35min · DCP · color · documentary\n4:3 (letterbox 16:9) · stereo",
      cover: "images/pear-main.jpg",
      sections: [
        { heading: "Synopsis",
          text: "우연은 찰나에 느닷없이 우리에게 닿고 기억으로 두터워진다. 아파트 길고양이 급식소에서 아기 고양이를 구조하게 된 ‘율’.\n아기 고양이가 버려진 정황을 쫓다 난생처음 아파트 울타리를 넘는다." },
        { heading: "Director’s Note",
          text: "한 공간에 있지만 울타리를 사이에 두고 서로 다른 두 세계가 있다.\n아파트에 사는 나는 아파트 구석에 위치한 길고양이 급식소와 매일 창문 너머로 보이는 배밭을 본다.\n구석에서 자리를 지키고 있는 존재들, 하지만 아무도 그들을 봐주지 않는다. 그럼에도 작은 생명들은 자라나고 기어이 서로 연결된다.\n같은 땅 위에서." },
        { heading: "Festivals / Awards",
          list: [
            "2026 제27회 대구단편영화제, 디프초이스",
            "2026 제19회 대구단편영화제, 초청 부문",
            "2026 서울국제환경영화제, 상영",
            "2026 제22회 인천여성영화제, 초청 상영",
            "2026 제6회 사람사는세상영화제, 경쟁부문",
            "2026 제2회 부산다큐필름페스티발, 단편경쟁부문",
            "2026 제7회 부산해운대국제동물영화제, 초청",
            "2026 제2회 아피국제동물영화제, 국내경쟁부문",
            "2026 제1회 김해동물영화제, 단편경쟁부문",
            "2025 전주국제영화제 한국단편경쟁, 심사위원 특별상",
            "2025 EBS 다큐멘터리 영화제, 단편화첩 선정",
            "2025 DMZ다큐멘터리영화제, 크리틱스 초이스 선정",
            "2025 마카오국제다큐멘터리영화제, 아시아 단편경쟁 부문",
            "2025 서울동물영화제, 단편경쟁부문",
            "2025 제3회 브라질 한국영화제, 비경쟁부문",
            "2025 제18회 헝가리 한국영화제, 초청",
            "2024 EBS 다큐멘터리 영화제, 영피치"
          ] }
      ],
      media: [
        { type: "image", src: "images/pear-2.jpg" },
        { type: "image", src: "images/pear-3.jpg" },
        { type: "image", src: "images/pear-4.jpg" }
      ]
    },
    {
      id: "do-you-have-a-pen",
      title: "Do You Have A Pen?",
      info: "감독 신율, Tsing-yu Tsai\n2023 · 16min · DCP · B&W/color · drama\n4:3 (letterbox 16:9) · stereo",
      cover: "images/pen-poster.jpg",
      sections: [
        { heading: "Synopsis",
          text: "프랑스 파리의 작은 미술관에 숨어 사는 ‘다인’. 이 도시에서 그녀는 집도 없이 홀로 산다. 외로움과 긴장감 속에서도 매일 꿋꿋이 자신만의 일상을 반복한다. 다인은 누군가에게 엽서를 보내려고 하지만 펜이 없다. 펜을 구하기 위해 미술관 관람객에게 묻기도 하고 관람객인 척 점원에게 빌려보지만 실패한다. 그러다 미술관 사진을 찍던 사진가에게 숨어 사는 걸 들키는데..." },
        { heading: "Director’s Note",
          text: "‘다인’은 평생의 소원을 이루기 위해 한국에서 파리로 왔지만, 기대했던 대로 일이 순조롭게 풀리지 않는다. 모든 것을 잃어버리고 짐과 엽서만 가득 담은 커다란 배낭 하나만 든 그녀는 떠돌이이다. 미술관에서 그녀는 누구와도 소통할 수 없는 외로운 일상을 보내고, 누군가에게 자신의 마음을 표현하기 위해 엽서를 쓴다. 하지만 어느 날 미술관 경비원을 피해 도망치다 펜을 잃어버린 후, 그녀의 고립감과 긴장감은 더욱 심해진다. 벗어나기 위해, 자신의 마음을 표현할 마지막 기회를 놓치지 않고 살기 위해, 다인은 펜을 찾아 나선다.\n\n그녀가 파리 미술관에 남긴 것은 있는 엽서이다.\n\n누군가 발견할까, 그녀의 미완성 엽서를.\n아무도 모르는, 본인조차 포기한 듯 보이는 삶 속에서, 희미하게 남은 의지를 담고 싶었다." }
      ],
      media: [
        { type: "image", src: "images/pen-1.jpg" }
      ]
    },
    {
      id: "a-pot-on-the-hill",
      title: "팟온더힐",
      subtitle: "A Pot On the Hill",
      info: "감독 신율, 이산하, Napat Unnanan, Prem Plittapotcram\n2026 · 27min · DCP · B&W/color · documentary\n4:3 (letterbox 16:9) · 5.1ch\nDMZ국제다큐멘터리영화제 아시아 공동제작 워크숍",
      cover: "images/pot-main.jpg",
      sections: [
        { heading: "Synopsis",
          text: "아시아에 사라지는 두 마을에 작은 기억들이 보여주는 도시의 생성과 소멸" }
      ],
      media: []
    }
  ],

  // ---------------- Photos (작업이 생기면 films 와 같은 모양으로 추가) ----------------
  photos: [],

  // ---------------- CV ----------------
  cv: [
    { heading: "전시",
      list: ["[단체전] École nationale supérieure des arts décoratifs, 〈Do You Have A Pen?〉 사진, 영상 전시, 2023"] },
    { heading: "출판",
      list: ["[저자] 〈PaTMI〉, 독립출판, 2019"] },
    { heading: "교육",
      list: ["한국예술종합학교 영상원 방송영상과 다큐멘터리 전공 예술전문사 과정, 2026",
             "한국예술종합학교 영상원 학사, 2025"] },
    { heading: "경력",
      list: ["벨기에한국문화원 영상제작 인턴, 2023"] }
  ]
};
