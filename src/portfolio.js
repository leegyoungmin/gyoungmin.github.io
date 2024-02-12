/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "이경민",
  title: "iOS 개발자, 이경민입니다.",
  subTitle: emoji(
    "Swift / UIKit / SwiftUI 및 다양한 라이브러리를 활용하여 멋진 iOS 앱을 개발하고 있습니다. 🚀\n“코드는 하나의 글이다.” 라는 신념으로 주석이 필요 없는 코드를 작성하려고 합니다. 원하는 결과를 눈으로 확인하기 위해서 많은 삽질과 끈기도 가지고 있습니다."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/leegyoungmin",
  gmail: "dlrudals8899@gmail.com",
  tistory: "https://devmin97.tistory.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "iOS 개발을 마스터하고 싶은 개발자",
  skills: [
    emoji("⚡ iOS 개발을 수행할 수 있으며, 함수형 프로그래밍과 객체 지향에 대해서 이해하고 있습니다."),
    emoji("⚡ UIKit을 통해서 복잡한 UI를 작성할 수 있습니다. 선언형 UI에 대해서 이해하고 있으며, SwiftUI로 UI를 작성할 수 있습니다."),
    emoji("⚡ 알고리즘 문제를 해결할 수 있으며, 통계 및 데이터 전처리를 위한 라이브러리를 활용할 수 있습니다."),
    emoji("⚡ 소스코드 버전 관리 및 협업을 수행할 수 있으며, Github-Actions의 기초를 알고 있습니다.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "호서대학교",
      logo: require("./assets/images/hoseo.png"),
      subHeader: "통계학 학사 졸업",
      duration: "2016년 3월 - 2022년 2월",
      desc: "통계학을 활용한 데이터 분석 및 데이터 전처리를 학습하였습니다.",
      descBullets: [
        "통계학에 대한 학문적 학습을 수행하였습니다.",
        "Python을 활용하여 데이터 마이닝, 머신러닝에 대해서 학습하였습니다."
      ]
    },
    {
      schoolName: "iOS 부트 캠프",
      logo: require("./assets/images/apple.png"),
      subHeader: "",
      duration: "2022년 8월 - 2023년 2월",
      desc: "8개 팀 프로젝트 수행 및 피드백 수행",
      descBullets: [
        "Swift 언어에 대한 이해도를 향상시킬 수 있었습니다.",
        "팀원과의 의사소통의 중요성을 알고, 코드리뷰의 중요성을 알게 되었습니다.",
        "Computer Science 관련된 내용을 학습할 수 있었습니다."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "출시 프로젝트",
  projects: [
    {
      image: require("./assets/images/igo_icon.webp"),
      projectName: "아이고머니",
      projectDesc: "무지출 챌린지 금액 대결 플랫폼",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/potenday-project/IgoMoney_iOS"
        },
        {
          name: "AppStore",
          url: "https://apps.apple.com/kr/app/igomoney/id6467229873"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ff_icon.webp"),
      projectName: "팬팔",
      projectDesc: "직업군 베테랑의 관심사를 공유하는 앱",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/leegyoungmin/FanFollow-Personal/wiki"
        },
        {
          name: "AppStore",
          url: "https://apps.apple.com/app/%ED%8C%AC%ED%8C%94/id6450774849"
        },
      ]
    },
    {
      image: require("./assets/images/moda_icon.webp"),
      projectName: "모다",
      projectDesc: "오전일기 작성 모바일 앱",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/leegyoungmin/MODA"
        },
        {
          name: "AppStore",
          url: "https://apps.apple.com/kr/app/moda-%EC%95%84%EC%B9%A8%EC%97%90-%EC%93%B0%EB%8A%94-%EC%9D%BC%EA%B8%B0/id6450464553"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "수상 내역 및 자격증",
  achievementsCards: [
    {
      title: "창업 경진 대회 장려상 수상",
      subtitle: "교내 창업 경진 대회에서 앱개발을 활용하여 장려상을 수상하였습니다.",
      image: require("./assets/images/cert.jpg"),
      imageAlt: "",
      footerLink: [
        {
          name: "2021년 9월 수상"
        },
        {
          name: "오른쪽 아래 3번째"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "“남들에게 쉽게 설명할 수 있어야지 진짜 아는 것이다.” 라는 신념아래에서 꾸준히 기술 블로그를 운영하고 있습니다.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://devmin97.tistory.com/entry/Swift-Concurrency-2-Behind-Scene",
      title: "Swift Concurrency Behinde Scene",
      description: "Swift Concurreny 내부에서 동작하는 방식을 학습한 내용"
    },
    {
      url: "https://devmin97.tistory.com/entry/TCA-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EC%9A%94%EC%B2%AD%ED%95%98%EA%B8%B0",
      title: "TCA에서 네트워크를 수행하는 방법",
      description: "TCA 라이브러리에서 네트워크를 수행하는 방법을 학습하고 공유"
    },
    {
      url: "https://devmin97.tistory.com/entry/iOS-%EC%83%81%EB%8B%A8-%ED%83%AD%EB%B0%94-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0",
      title: "상단 탭바 구성하기",
      description: "프로젝트 수행하면서 만나게 된 복잡한 UI를 구성하는 방법을 공유"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"",
  number: "+82 010-8899-2306",
  email_address: "cow970814@kakao.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
