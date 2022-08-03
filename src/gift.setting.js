export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '七夕节送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '今天是个特殊的日子哦！' },
    { key: 's', wording: '专属女神看过来！' },
    { key: 'd', wording: '往下看，礼物抽奖来喽！' },
  ],
  // 最终解释权归属人
  owner: 'KinXpeng',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 3000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  {
    key: 'q',
    name: 'Dior双飞套装',
    alias: 'Dior双飞',
    image: 'https://img1.baidu.com/it/u=3510706689,3471314307&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=696',
    description: '「经典迷人色彩，彰显奢华魅力」',
  },
  {
    key: 'w',
    name: '腾讯视频终身VIP',
    alias: 'VIP',
    image: 'https://img1.baidu.com/it/u=4193797346,3078437876&fm=253&fmt=auto&app=120&f=JPEG?w=369&h=239',
    description: '“为你承包一辈子的 VIP”',
  },
  {
    key: 'e',
    name: '兰蔻小黑瓶套装',
    alias: '小黑瓶套装',
    image: 'https://img1.baidu.com/it/u=3428286831,1453304487&fm=253&fmt=auto&app=138&f=JPG?w=678&h=496',
    description: '「强维稳，快修护」',
  },
  {
    key: 'r',
    name: '520红包',
    alias: '520',
    image: 'https://img2.baidu.com/it/u=3483742375,3662539921&fm=253&fmt=auto&app=138&f=JPEG?w=489&h=500',
    description: '“想给你唱一百首情歌”',
  },
  {
    key: 't',
    name: 'Dior星空套装',
    alias: 'Dior星空',
    image: 'https://img2.baidu.com/it/u=2634311509,357450563&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    description: '「百变唇妆，精美雕琢」',
  },
  {
    key: 'y',
    name: '1314红包',
    alias: '1314',
    image: 'https://img1.baidu.com/it/u=3162942004,1307296422&fm=253&fmt=auto&app=138&f=JPEG?w=494&h=877',
    description: '“从今往后，我都会在你旁边”',
  },
  {
    key: 'u',
    name: 'UR购物券：¥500',
    alias: 'UR',
    image: 'https://img0.baidu.com/it/u=2205874185,1662442378&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375',
    description: '“UR！买！”',
  },
  {
    key: 'i',
    name: 'Dyson美发套装',
    alias: '戴森',
    image: 'https://img2.baidu.com/it/u=3762767795,314955434&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=806',
    description: '「不同造型需求，全面满足」',
  },
];
