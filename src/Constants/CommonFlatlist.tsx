import { bhutan, casino, color, dice, digit, dragonvsTiger, hot, jdb, Jili, lottery1, pg, quick3min, rummy, scratch, sevenUpAndDown, sports, teenPatti, threePatti } from "../../assets/assets";

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