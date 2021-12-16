import logoDark from "@/images/GHS.jpg";
import slideOneImage1 from "@/images/slider/slider-1.jpg";
import slideOneImage2 from "@/images/slider/slider-2.jpg";
import slideOneImage3 from "@/images/slider/slider-3.jpg";
import slideOneImage4 from "@/images/slider/slider-4.jpg";
import slideOneImage5 from "@/images/slider/slider-5.jpg";
import serviceImage1 from "@/images/services/service-1.jpg";
import serviceImage2 from "@/images/services/service-2.jpg";
import serviceImage3 from "@/images/services/service-3.jpg";
import serviceImage4 from "@/images/services/service-4.jpg";
import serviceImage5 from "@/images/services/service-5.jpg";
import serviceImage6 from "@/images/services/services-6.jpg";
import funfactShape from "@/images/shape/about-shape.png";
import galleryOne1 from "@/images/microscope-solid.svg";
import galleryOne2 from "@/images/heartbeat-solid.svg";
import galleryOne6 from "@/images/person-dots-from-line-solid.svg";
import galleryOne5 from "@/images/brain-solid.svg";
import galleryOne3 from "@/images/broken-bone.png";
import galleryOne4 from "@/images/family.png";
import testimonial1 from "@/images/comments-solid.svg";
import testimonial2 from "@/images/comments-solid.svg";
import testimonial3 from "@/images/comments-solid.svg";
import blog1 from "@/images/blog/blog-1.jpg";
import blog2 from "@/images/blog/blog-2.jpg";
import blog3 from "@/images/blog/blog-3.jpg";
import blog4 from "@/images/blog/blog-4.jpg";
import blog5 from "@/images/blog/blog-5.jpg";
import blog6 from "@/images/blog/blog-6.jpg";
import team1 from "@/images/team/team-1.jpg";
import team2 from "@/images/team/team-2.jpg";
import team3 from "@/images/team/team-3.jpg";
import team4 from "@/images/team/team-4.jpg";
import comment1 from "@/images/comment-1.jpg";
import comment2 from "@/images/comment-2.jpg";

export const Logo = {
  dark: logoDark,
};

export const NavLinksData = [
  {
    url: "/",
  },

  {
    name: "الرئيسية ",

    url: "/",
  },
  {
    name: "من نحن  ",

    url: "#about",
  },

  {
    name: "خدماتنا   ",
    url: "#services",
  },
  {
    name: "اتصل بنا     ",
    url: "#contact",
  },
];

export const TopbarInfos = [
  {
    icon: "icon-placeholder",
    tagLine: "",
    text: "Thurn-und-Taxis-Platz 1, 60313 Frankfurt am Main",
    url: "#",
  },
  {
    icon: "fa fa-whatsapp",
    tagLine: "اتصل الان",
    text: `49176223516071`,
    url: "https://web.whatsapp.com/send?phone=+4917622351607",
  },
];

export const SlideOneData = [
  {
    backgroundImage: slideOneImage1,
    title: `يعاني غالبية المرضى المتقدمين على العلاج في ألمانيا من صعوبة البحث عن أطباء أكفاء. 
    نحن نساعدك على اختيار الوجهة الصحيحة لتلقي العلاج ونقدم لكم خدمات طول مدة اقامتكم.
    `,
    text: "اختر أفضل شركة",
    button: "تواصل معنا",
    url: "/contact",
  },
  {
    backgroundImage: slideOneImage2,
    title:
      "نوفر لزبائننا أحسن الخدمات السياحية العلاجية بأرقى مراكز الإستشفاء بألمانيا",
    text: "",
    button: "تواصل معنا",
    url: "/contact",
  },
  // {
  //   backgroundImage: slideOneImage3,
  //   title: "Heating and Air Conditioning Specialist",
  //   text: "Choose the Best Company",
  //   button: "GET A FREE QUOTE",
  //   url: "/contact",
  // },
];

export const SlideTwoData = [
  {
    backgroundImage: slideOneImage4,
    title: "Heating and Air Conditioning Specialis",
    button: "الحصول على أسعار مجاني",
    url: "/contact",
  },
  {
    backgroundImage: slideOneImage5,
    title: "Keep your family happy this winter, and warm.",
    button: "الحصول على أسعار مجاني",
    url: "/contact",
  },
  {
    backgroundImage: slideOneImage4,
    title: "Heating and Air Conditioning Specialist",
    button: "الحصول على أسعار مجاني",
    url: "/contact",
  },
];

export const FeatureOneData = [
  {
    icon: "icon-invoice",
    title:
      "عرض التقرير على أفضل الأطباء وتحديد خطة التشخيص والعلاج في أفضل المستشفيات الألمانية",
  },
 
  {
    icon: "icon-handshake",
    title: "تأمين الوثائق اللازمة لإصدار تأشيرة الدخول للمريض ومرافقيه    ",
  },
  {
    icon: "icon-clock",
    title: "الحجز في المستشفى أو الفندق أو الشقة على حسب رغباتكم ",
  },
  {
    icon: "icon-diploma",
    title: "ستقبال المريض ومرافقيه في المطار",
  },
  {
    icon: "icon-wallet",
    title:
      "متابعة ومراقبة حالة المريض وتطوراتها بالمستشفى أثناء وبعد العلاج    ",
  },
];

export const AboutOneData = {
  title:
    "تتكون شركتنا من فريق عمل ذو خبرة واسعة في جميع المجالات المتخصصة في الميدان الطبي حيث يجمع بين المعرفة العميقة بالعادات والثقافة العربية بالإضافة إلى الخبرة في مجال الخدمات الطبية وإدارة الأعمال.",
  tagLine: "من نحن",
  content:
    "بدأ خدماتنا إبتداء بعد إستلام التقارير الطبية الخاصة بالحالة المرضية والتي يفضل أن تكون باللغة الإنجليزية، بعد ذلك نشرع مباشرة بالترتيب والتنسيق الكاملين مع المستشفيات الألمانية",
  button: {
    url: "/about",
    label: "اقرأ المزيد    ",
  },
};

export const ServiceOneData = {
  title: "خدماتنا",
  posts: [
    {
      image: serviceImage3,

      title: "خدمات المرافقين ",

      button: {
        label: "اقرأ المزيد",
        url: "/service-details",
      },
    },

    {
      image: serviceImage2,

      title: "رعاية المرضى",

      button: {
        label: "اقرأ المزيد",
        url: "/service-details",
      },
    },
    {
      image: serviceImage1,
      title: " لنقل",
      button: {
        label: "اقرأ المزيد",
        url: "/service-details",
      },
    },

    {
      image: serviceImage4,

      title: "الإقامة",

      button: {
        label: "اقرأ المزيد",
        url: "/service-details",
      },
    },
    {
      image: serviceImage5,

      title: "التأشيرة",

      button: {
        label: "اقرأ المزيد",
        url: "/service-details",
      },
    },
    {
      image: serviceImage6,

      title: "الترجمة",

      button: {
        label: "اقرأ المزيد",
        url: "/service-details",
      },
    },
  ],
};

export const CallToActionOneData = {
  title:
    "  عند طلب العلاج في ألمانيا، فأنت تحتاج إلى المساعدة في أمور متعددة مثل النقل، الإقامة والترجمة. لا تردد في الاتصال بنا",
  button: {
    url: "/contact",
    label: "الحصول على أسعار مجاني",
  },
};

export const CallToActionTwoData = {
  left: {
    text: "Air Conditioning Services",
    title: "Cool it down",
  },
  right: {
    text: "Heating Services",
    title: "Heat it up",
  },
};

export const FunfactOneData = {
  shapeImage: funfactShape,
  title: "Numbers Speakers.",
  posts: [
    {
      count: 8870,
      text: "Air Conditioning Repairs and Install",
    },
    {
      count: 4760,
      text: "Air Conditioning Repairs and Install",
    },
    {
      count: 9032,
      text: "Air Conditioning Repairs and Install",
    },
  ],
};

export const GalleryOneData = [
  {
    title: "علاج السرطان",
    image: galleryOne1,
    url: "#",
  },
  {
    title: "جراحات القلب",
    image: galleryOne2,
    url: "#",
  },
  {
    title: "جراحة العظام",
    image: galleryOne3,
    url: "#",
  },
  {
    title: "لاج العقم",
    image: galleryOne4,
    url: "#",
  },
  {
    title: "الأمراض العصبية",
    image: galleryOne5,
    url: "#",
  },
  {
    title: "طب إعادة التأهيل",
    image: galleryOne6,
    url: "#",
  },
];

export const TestimonialOneData = {
  title: "تعليقات الزبناء",
  posts: [
    {
      image: testimonial1,
      content: `السلام عليكم
        نشكركم على خدماتكم المميزة ونتمنى لكم مزيدا من النجاح وتحياتي لكم`,
      name: "Della Barnett",
      designation: "CEO",
    },
    {
      image: testimonial2,
      content: `السلام عليكم
      ما شاء الله تبارك على الاستاذ سعد تعاملت معه في وقت العلاج وبعد العلاج وإلى الآن
      متواصل معاه مهتم جدا بالمريض وهمته عالية. الله يوفقه ويشفي جميع المرضى
      `,
      name: "Max Dunn",
      designation: "Developer",
    },

    {
      image: testimonial1,
      content: `شركة خدمات طبية تستحق الثقة بارك الله فيكم على حسن استقبالكم في فرانكفورت وخدماتكم المميزة `,
      name: "Della Barnett",
      designation: "CEO",
    },
    {
      image: testimonial2,
      content: `الصراحة أنا تعاملت مع أخي الأستاذ سعد. كان يترجم ويعطي من قلبه ويسأل الدكتور أسئلة ماطرت في بالك. شكرا جزيلا على تعبك معنا`,
      name: "Max Dunn",
      designation: "Developer",
    },
    {
      image: testimonial3,
      content: `الله يعطيكم العافية وجهودكم دايم طيب. شفت شغلكم من حوالي 8 سنوات وبكل صراحة شغلكم جبار وخدماتكم روعة`,
      name: "Alberta Potter",
      designation: "Director",
    },
  ],
};

export const FooterBottomData = {
  social: [
    {
      icon: "fa fa-twitter",
      url: "#",
    },
    {
      icon: "fa fa-facebook-f",
      url: "#",
    },
  ],
};

export const FooterInfo = [
  {
    icon: "icon-placeholder",
    tagLine: "",
    text: " Thurn-und-Taxis-Platz 1, 60313 Frankfurt am Main",
    url: "#",
  },
  {
    icon: "icon-contact",
    tagLine: "Email",
    text: "sh@germanhealthservices.com",
    url: "mailto:sh@germanhealthservices.com",
  },
];

export const FooterWidgets = {
  about: {
    // title: "About Loazzne",
    // text: "At Lennom, We don’t just provide resi-dential and commercial heating and air conditioning services; we make people’s lives easier. Better.",
    tagLine: "Get a Quote",
    phone: "666 888 000",
  },
  linkOne: {
    title: "Quick Links",
    menu: [
      {
        lable: "Services",
        url: "#",
      },
      {
        lable: "Request Appointment",
        url: "#",
      },
      {
        lable: "Site Map",
        url: "#",
      },
      {
        lable: "About Us",
        url: "#",
      },
    ],
  },
  linkTwo: {
    menu: [
      {
        lable: "Careers",
        url: "#",
      },
      {
        lable: "Privacy Policy",
        url: "#",
      },
      {
        lable: "Change Location",
        url: "#",
      },
      {
        lable: "Expert Tips",
        url: "#",
      },
      {
        lable: "Terms & Conditions",
        url: "#",
      },
    ],
  },
};

export const BlogOneData = {
  title: "Our latest news",
  posts: [
    {
      image: blog1,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "How does a ductless heat pump work?",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
    },
    {
      image: blog2,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Simple hack to improve A/C efficiency",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
    },
    {
      image: blog3,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Preparing your home before vacation",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
    },
  ],
};

export const BlogTwoData = {
  posts: [
    {
      image: blog1,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "How does a ductless heat pump work?",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
    },
    {
      image: blog2,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Simple hack to improve A/C efficiency",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
    },
    {
      image: blog3,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Preparing your home before vacation",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
    },
    {
      image: blog4,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Heating and cooling safety issues",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
    },
    {
      image: blog5,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Don’t neglect your outdoor unit",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
    },
    {
      image: blog6,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Have your system professionally inspected",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
    },
  ],
};

export const VideoOneData = {
  title: "Watch how we work",
  id: "8DP4NgupAhI",
};

export const AboutTwoData = {
  caption: " 20 <span>years experience</span> ",
  blockTitle: {
    title:
      "We are trusted source of ac and heating maintenance repairs company",
    tagline: "Why choose us",
  },
  lists: [
    {
      text: " Unmatched performance, satisfaction service guarantees",
    },
    {
      text: " Home protection through our shoe covers and mats",
    },
    {
      text: " Upfront, flat rate pricing—no overtime charges",
    },
    {
      text: " 24 / 7 availability for all emergency services",
    },
    {
      text: " Fixed right promise—done right or it’s free",
    },
    {
      text: " Clear communication and updates on service arrival",
    },
  ],
  offer: {
    tagline: "10% off",
    text: "on our all services for senior citizens.",
  },
};

export const TeamOneData = {
  title: "Meet The Team",
  posts: [
    {
      image: team1,
      name: "Effie Green",
      designation: "Manager",
      social: [
        {
          icon: "fa-facebook",
          url: "#",
        },
        {
          icon: "fa-twitter",
          url: "#",
        },
        {
          icon: "fa-youtube-play",
          url: "#",
        },
      ],
    },
    {
      image: team2,
      name: "Catherine Lane",
      designation: "Worker",
      social: [
        {
          icon: "fa-facebook",
          url: "#",
        },
        {
          icon: "fa-twitter",
          url: "#",
        },
        {
          icon: "fa-youtube-play",
          url: "#",
        },
      ],
    },
    {
      image: team3,
      name: "Augusta Wells",
      designation: "Developer",
      social: [
        {
          icon: "fa-facebook",
          url: "#",
        },
        {
          icon: "fa-twitter",
          url: "#",
        },
        {
          icon: "fa-youtube-play",
          url: "#",
        },
      ],
    },
    {
      image: team4,
      name: "Kyle Fuller",
      designation: "Founder",
      social: [
        {
          icon: "fa-facebook",
          url: "#",
        },
        {
          icon: "fa-twitter",
          url: "#",
        },
        {
          icon: "fa-youtube-play",
          url: "#",
        },
      ],
    },
  ],
};

export const AboutThreeData = {
  blockTitle: {
    tagline: "Our success story",
    title: "Experience quality air conditioning service in broklyn new york",
  },
  summery:
    "There are many variations of passages of lorem ipsum available, but the majorify have suffered alteration in some form by injected humour, or randmised words which don't look even slightly believable.",
  button: {
    lable: "LEARN MORE",
    url: "/about",
  },
  box: [
    {
      icon: "icon-maintenance",
      title: "We make as cool again",
    },
    {
      icon: "icon-big-ac",
      title: "Keep your business cool",
    },
  ],
};

export const AboutFourData = {
  blockTitle: {
    title: "We are trusted by more than <span>8900</span> clients",
    text1:
      "Tincidunt elit magnis nulla facilisis sagittis is maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
    text2:
      "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many varia-tions of passages of available but the majarity have suffered.",
  },
};

export const BenefitOneData = {
  title: "Our benefits",
  posts: [
    {
      icon: "icon-big_clock",
      title: "Emergency Service",
      text: "There are many passages of lorem ipsum available but the majority have alteration.",
    },
    {
      icon: "icon-wallet",
      title: "No Upfront Payment",
      text: "There are many passages of lorem ipsum available but the majority have alteration.",
    },
    {
      icon: "icon-diploma",
      title: "Satisfaction Guarantee",
      text: "There are many passages of lorem ipsum available but the majority have alteration.",
    },
    {
      icon: "icon-mechanic",
      title: "8 Years Experience",
      text: "There are many passages of lorem ipsum available but the majority have alteration.",
    },
  ],
};

export const ServiceSidebarListData = [
  {
    icon: "icon-snow",
    title: "Cooling Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#",
      },
      {
        label: "Air Conditioner Repair",
        url: "#",
      },
      {
        label: "Air Conditioner Replacement",
        url: "#",
      },
      {
        label: "Ductless Split AC Systems",
        url: "#",
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#",
      },
    ],
  },
  {
    icon: "icon-fire",
    title: "Heating Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#",
      },
      {
        label: "Air Conditioner Repair",
        url: "#",
      },
      {
        label: "Air Conditioner Replacement",
        url: "#",
      },
      {
        label: "Ductless Split AC Systems",
        url: "#",
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#",
      },
    ],
  },
];

export const ServiceSidebarOtherData = [
  {
    icon: "icon-ac",
    title: "Other Services",
    content: {
      icon: "icon-support",
      title: "<span>Contact with us </span>666 888 000",
    },
  },
  {
    icon: "icon-building",
    title: "Commercial Services",
    content: {
      icon: "icon-building",
      title: "<span>Contact with us </span>666 888 000",
    },
  },
];

export const CommentPostData = [
  {
    name: "David Martin",
    image: comment1,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.",
  },
  {
    name: "Jessica Brown",
    image: comment2,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.",
  },
];
