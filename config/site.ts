export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vieko",
  description: "BUILDING THE FUTURE WITH VPH",
  purpose: "Elevating Architectural Innovation", //宗旨
  text1: "At VPH, we are committed to reshaping the future of construction with innovative, sustainable, and intelligent architectural technologies.",
  text2: "Our solutions enhance energy efficiency, safety, and design excellence while creating comfortable and modern living spaces. ",
  text3:"Whether it's structural integrity, smart home automation, or eco-friendly materials, VPH delivers cutting-edge solutions tailored to tomorrow's needs. ",
  navItems: [
    {
      name: "Our technology",
      href: "/",
    },
    {
      name: "Modals",
      href: "/modals",
      subMenu: [
        { name: "Custom Home", href: "/modals?type=custom" },
        { name: "Tiny House", href: "/modals?type=tiny" },
      ],
    },
    {
      name: "Showrooms",
      href: "/showrooms",
      subMenu: [
        { name: "City of Industry", href: "/showrooms" },
        { name: "Irvine", href: "/showrooms" },
      ],
    },
    {
      name: "Financing",
      href: "/financing",
    },
    {
      name: "Contacts",
      href: "/contact",
    },
  ],
  email: 'info@viekohomes.com',
  tel: '9499397715',
  address: '17091 Daimler St, Irvine CA 92614',

  list2:[
    {
        "title": "HVAC & Air Management",
        "img": "@/assets/1.png",
        "desc": [
            "components: Ecoflow batteries, solar tiles, Floor heating (Schluter DITRA-HEAT): Crack-resistant electric heating for tiles",
            "benefits: Constant temperature, humidity, oxygen, cleanliness, and silence"
        ]
    },
    {
        "title": "Energy & Storage",
        "img": "@/assets/1.png",
        "desc": [
            "components: Ecoflow batteries, solar tiles",
            "advantages: Off-grid energy storage for 24/7 power supply, Reduced electricity costs, government incentives (e.g., U.S. ITC tax credits)"
        ]
    },
    {
        "title": "Smart Home Integration",
        "img": "@/assets/1.png",
        "desc": [
            "components: Ecoflow batteries, solar tiles",
            "advantages: Off-grid energy storage for 24/7 power supply, Reduced electricity costs, government incentives (e.g., U.S. ITC tax credits)"
        ]
    },
    {
        "title": "Water Systems",
        "img": "@/assets/1.png",
        "desc": [
            "components: Ecoflow batteries, solar tiles, Floor heating (Schluter DITRA-HEAT): Crack-resistant electric heating for tiles",
            "benefits: Constant temperature, humidity, oxygen, cleanliness, and silence"
        ]
    }
]
,
  list1: [
    {
      title: "City of Industry",
      description: "It's the desert you've always dreamed of",
      imageUrl:
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
    {
      title: "Irvine",
      description:
        "Seriously, straight up, just blast off into outer space today",
      imageUrl:
        "https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
    },
  ],
};
