module.exports = {
<<<<<<< HEAD
  title: `C-Design`,
  description: `Life is Č between B and D`,
  author: `C-Designer`,

  siteUrl: `https://c-designer.github.io`,
  ogImage: `/og-image.png`, // Path to your image you placed in the 'static' folder
  social: {
    github: `https://github.com/c-designer`,
    linkedIn: ``,
    email: `c.designer.dev@gmail.com`,
  },
=======
  title: `zoomkoding.com`,
  description: `줌코딩의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.zoomkoding.com`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
>>>>>>> 61db9faea2024b99d82914588c2dd97b776662b6
  comments: {
    utterances: {
      repo: `c-designer/c-designer.github.io`,
    },
  },
<<<<<<< HEAD
  ga: 'G-Q6WR98DY1X', // Google Analytics Tracking ID

  // metadata for bio
  bio: {
    language: `ko`, // 'en', 'ko'
    name: '김창동',
    description: ['있는 것들로 없는 것들을 만드는', '능동적으로 일하는', '실용적인 것을 만드는', '이상적인 균형을 추구하는'],
=======
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `정진혁`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'zoomkoding.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `zoomkoding@gmail.com`,
    },
>>>>>>> 61db9faea2024b99d82914588c2dd97b776662b6
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2020.12 ~ 2021.07',
        activity: 'Codestates AI Course',
        links: {
<<<<<<< HEAD
          post:'https://codestates.com/course/ai',
          googlePlay:'',
          appStore:'',
          demo:'',
          github:''
        }
=======
          post: '/codeforces-round-600',
        },
      },

      {
        date: '2019.12 ~ 2020.06',
        activity: '스타트업 인턴 진행 및 Picky 앱 개발',
        links: {
          post: '/start-up-app-development',
          googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
          appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
        },
      },

      {
        date: '2020.07 ~ 2020.08',
        activity: '2020 우아한테크캠프 참여',
        links: {
          post: '/woowa-tech-camp-final',
          github: 'https://github.com/woowa-techcamp-2020/bmart-6',
        },
      },

      {
        date: '2021.01 ~ 2021.02',
        activity: '대학시간(대학교 수강신청 보조 웹 앱) 개발 및 서비스',
        links: {
          post: '/college-timetable-development',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'https://www.timetable.college',
        },
      },
      {
        date: '2021.02 ~ 2021.03',
        activity: '개인 블로그 디자인 및 개발',
        links: {
          post: '/zoomkoding-gatsby-blog-introduction',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'https://gatsby-starter-zoomkoding.netlify.app',
        },
      },
      {
        date: '2021.03 ~ ',
        activity: '우아한 개발자🚀',
>>>>>>> 61db9faea2024b99d82914588c2dd97b776662b6
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
<<<<<<< HEAD
        title: '콘솔 게임 시장분석',
        description: '콘솔 게임 판매량 데이터셋을 분석하였습니다. 해당 시장을 이해하고 다음분기 게임 개발은 어떤 방향으로 진행하는것이 나을지 인사이트를 도출하였습니다.',
        techStack: ['Python', 'Data-Analysis'],
        thumbnailUrl: 'console-game.jpg',
        links:{
          post: 'https://www.kaggle.com/gregorut/videogamesales',
          github: 'https://github.com/C-Designer/Codestates_Section_Project/tree/main/Section1',
          demo: '',
          googlePlay: '',
          appStore: ''
        }
      },
      {
        title: '골격 구조에 따른 견관절 주요질환 예측모델 개발',
        description: '여러 유형의 견관절 심부구조를 파악하여 구조적 특성과 결함을 도출하였습니다. 해당 질환과 연관성을 찾아 예측해주는 모델을 개발하였습니다.',
        techStack: ['Python', 'Machine-Learning'],
        thumbnailUrl: 'scapula.jpeg',
        links:{
          post: 'https://www.kaggle.com/iham97/deepscapulassm?select=scapFeaturesUnif_3.csv',
          github: 'https://github.com/C-Designer/Codestates_Section_Project/blob/main/Section2/Section2_Project.ipynb'
        }
      },
      {
        title: '트레이너 & 회원 매칭 서비스',
        description: 'PT트레이너로 근무했던 헬스장에선 회원분들께 WPI라는 성향검사를 하였습니다. 회사내 쌓인 데이터를 통해 어떤 트레이너와 매칭율이 높을지 예측 및 추천해주는 웹서비스를 개발하였습니다. 이전 회사에 선물하고자 해당 프로젝트를 만들게 되었습니다.',
        techStack: ['Python', 'Flask', 'Sqlite3', 'Bootstrap'],
        thumbnailUrl: 'quaternary.jpg',
        links:{
          post: 'https://c-design.tistory.com/45?category=903742',
          github: 'https://github.com/C-Designer/Codestates_Section_Project/tree/main/Section3'
        }
      }
=======
        title: 'Picky(글로벌 스킨케어 제품 분석 모바일 앱) 개발',
        description:
          '구글 출신 분들이 창업한 스타트업에 인턴십을 하던 중 피버팅을 하게 되면서 저는 1인 개발자로 신규 사업에 참여하게 되었습니다. 5명의 경험이 많은 팀원들과 힘을 합쳐 Picky라는 앱을 개발하고 지속적으로 서비스를 확장해나갔습니다. 이 과정을 통해 실제 서비스의 시작과 성장하는 과정을 경험해볼 수 있었습니다.',
        techStack: ['flutter', 'nodejs'],
        thumbnailUrl: 'picky.jpeg',
        links: {
          post: '/start-up-app-development',
          googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
          appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
        },
      },
      {
        title: '개발 블로그 테마 개발',
        description:
          '간단한 테마를 활용하여 개발 블로그를 만들고 운영하다 보니 점점 블로그를 내가 원하는 형태로 만들고 싶게 되었습니다. 입사 전 시기를 활용해서 원하는 기능과 디자인이 있는 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'zoomkoding.png',
        links: {
          post: '/why-dev-blog',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'https://gatsby-starter-zoomkoding.netlify.app',
        },
      },
      {
        title: '2020 우아한테크캠프 참여',
        description:
          '스타트업에서 앱 개발을 하면서 좋은 개발에 대한 갈증이 매우 크던 중에 좋은 기회를 잡게 되어 참여하게 되었습니다. 2달 간 몰입해서 좋은 사람들과 웹 개발을 경험하며, 많이 배우고 성장할 수 있었던 시간이었습니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl: 'woowa-tech.png',
        links: {
          post: '/woowa-tech-camp-final',
          github: 'https://github.com/woowa-techcamp-2020/bmart-6',
        },
      },
      {
        title: '대학시간(대학교 수강신청 보조 웹 앱) 개발',
        description:
          '학생들이 예비 수강 신청 과정에서 겪게 되는 불편함을 개선할 수 있는 웹 서비스를 개발하였습니다. 첫 서비스를 진행한 2021년 1학기에만 전체 학생의 절반 가량이 서비스를 경험했고, 사용한 학생들로부터 고맙다는 이야기를 여러 경로로 전달 받게 되었습니다. 개발이 줄 수 있는 좋은 영향력를 많이 느꼈던 프로젝트였습니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl: 'timetable.png',
        links: {
          post: '/college-timetable-development',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'http://www.timetable.college',
        },
      },
>>>>>>> 61db9faea2024b99d82914588c2dd97b776662b6
    ],
  },
};
