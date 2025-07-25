import { bhutan, casinMenu, casino, casinoActiveTab, casinoTab, color, dice, digit, digitMenu, dragonvsTiger, homeActiveTab, homeTab, hot, inviteActiveTab, inviteTab, jdb, Jili, lottery1, meActiveTab, meTab, pg, quick3dMenu, quick3min, resultActiveTab, resultTab, rummy, scratch, scratchMenu, sevenUpAndDown, sportMenu, sports, teenPatti, threePatti } from "../../assets/assets";
import CasinoScreen from "../Screens/CasinoScreen";
import HomeScreen from "../Screens/HomeScreen";
import InviteScreen from "../Screens/InviteScreen";
import Profile from "../Screens/Profile";
import ResultScreen from "../Screens/ResultScreen";

export const HomeScreenFlatlist = [
    {id: 1, isSelected:true, image:casino},
    {id: 2, isSelected:false, image:lottery1},
    {id:3, isSelected:false, image:scratch},
    {id:4, isSelected:false, image:rummy},
    {id:5, isSelected:false, image:sports}
]

export const CasionHeadersList = [
    {id: 1, name:"Hot", image:hot},
    {id: 2, name:"PG", image:pg},
    {id:3, name:"JILI", image:Jili},
    {id:4, name:"JDB", image:jdb}
]

export const CasionGamesList = [
    {id: 1, name:"DragonvsTiger", image:dragonvsTiger},
    {id: 2, name:"Three patti", image:threePatti},
    {id:3, name:"Teenpatti", image:teenPatti},
    {id:4, name:"7 Up & Down", image:sevenUpAndDown}
]

export const lotteryGamesList = [
    {id: 1, name:"color", image:color},
    {id: 2, name:"dice", image:dice},
    {id:3, name:"3digit", image:digit}
]

 export const ThreeDigits = [
    {
      win_price: '10,000',
      price: '11.00',
      title: 'Quick 3D 1min',
      ends_On: "2025-07-03T18:42:27.123Z",
      bgImage:quick3min,
      gameTye:"Custom",
      id:"1minGame"
    },
       {
      win_price: '10,000',
      price: '11.00',
      title: 'Quick 3D 3min',
      ends_On: "2025-07-03T18:42:27.123Z",
      bgImage:quick3min,
       gameTye:"Custom",
      id:"3minGame"
    },
       {
      win_price: '10,000',
      price: '11.00',
      title: 'Quick 3D 5min',
      ends_On: "2025-07-03T18:42:27.123Z",
      bgImage:quick3min,
       gameTye:"Custom",
      id:"5minGame"
    },
    {
      win_price: '30,000',
      price: '11.00',
      title: 'Bhutan Jackpot',
      ends_On: "2025-07-03T18:42:27.123Z",
      bgImage:bhutan,
       gameTye:"RealGame",
      id:"real"
    },
    // {win_price: '25,000', price: '11.00', title: 'Skywin', ends_On: targetDate,  bgImage:skywin,
    //    gameTye:"RealGame",
    //   id:"real"},
    // {
    //   win_price: '30,000',
    //   price: '11.00',
    //   title: 'Chennai lottery',
    //   ends_On: targetDate,
    //   bgImage:chennaiLottery,
    //    gameTye:"RealGame",
    //   id:"real"
    // },
    // {
    //   win_price: '10,000',
    //   price: '11.00',
    //   title: 'Quick 3D 5min',
    //   ends_On: targetDate,
    //   bgImage:Quick3DImage,
    //    gameTye:"RealGame",
    //   id:"real"
    // },
    // {win_price: '15,000', price: '11.00', title: 'Lucwin', ends_On: targetDate,  bgImage:LucwinImage},
    // {
    //   win_price: '50,000',
    //   price: '11.00',
    //   title: 'Kubeer lottery',
    //   ends_On: targetDate,
    //   bgImage:KubberLotteryImage
    // },
    // {
    //   win_price: '15,000',
    //   price: '11.00',
    //   title: 'Dear lottery',
    //   ends_On: targetDate,
    //   bgImage:DearLotteryImage
    // },
    // {
    //   win_price: '15,000',
    //   price: '11.00',
    //   title: 'Kerala lottery',
    //   ends_On: targetDate,
    //   bgImage:KeralaLotteryImage
    // },
  ];

  export const MenuBarList = [
    {id: 1, name:"Quick 3D", image:quick3dMenu},
    {id: 2, name:"Official 3 Digits", image:digitMenu},
    {id:3, name:"Casino", image:casinMenu},
    {id:4, name:"Scratch", image:scratchMenu},
    {id:5, name:"Sport", image:sportMenu}
  ]

  export const tabScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    label: 'Home',
    focusedIcon: homeActiveTab,
    unfocusedIcon: homeTab,
  },
  {
    name: 'Casino',
    component: CasinoScreen,
    label: 'Casino',
    focusedIcon:casinoActiveTab,
    unfocusedIcon: casinoTab,
  },
   {
    name: 'Result',
    component: ResultScreen,
    label: 'Result',
    focusedIcon: resultActiveTab,
    unfocusedIcon: resultTab,
  },
  {
    name: 'Invite',
    component: InviteScreen,
    label: 'Invite',
    focusedIcon: inviteActiveTab,
    unfocusedIcon: inviteTab,
  },
   {
    name: 'Me',
    component: Profile,
    label: 'Me',
    focusedIcon: meActiveTab,
    unfocusedIcon: meTab,
  },
];

export const resultHeaderList = [
  {id: 1, name: '3Digits'},
  {id: 2, name: 'State Lottery'},
  {id: 3, name: 'Kerala'},
  {id: 4, name: 'Matka'},
  {id: 5, name: 'Quick 3 Digits'},
  {id: 6, name: 'Color'},
  {id: 7, name: 'Dice'},
]
export const resultFilterList = [
  {id: 1, name: 'All'},
  {id: 2, name: 'Dear Lottery'},
  {id: 3, name: 'Kerala Lottery'},
  {id: 4, name: 'LuckyDraw'},
  {id: 5, name: 'Quick 3 Digits'},
  {id: 6, name: 'Golden Treasure'},
  {id: 7, name: 'Dice'},
]