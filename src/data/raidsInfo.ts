export interface GateData {
  gold: number[];
  boxCost: number[];
  itemLevels: number[];
  gateRewards?: number[][];
  honorShards?: number[];
  boxHonorShards?: number[];
  chaosStones?: number[];
  destructionStones?: number[];
  boxDestructionStones?: number[];
  clearMedal?: number[];
}

export interface Raid {
  path: string;
  label: string;
  imgSrc: string;
  gateData: GateData;
  gateRewardImgSrc?: string[][];
  gateRewardImgToolTip?: string[][];
}

const raidsInfo: Raid[] = [
  {
    path: '/raids/oreha',
    label: 'Oreha',
    imgSrc: 'https://i.imgur.com/WcAVFsZ.png',
    gateData: {
      gold: [200, 300],
      boxCost: [100, 150],
      itemLevels: [1340],
      honorShards: [200, 300],
      boxHonorShards: [400, 600],
      destructionStones: [75, 100],
      boxDestructionStones: [48, 72],
    },
  },
  {
    path: '/raids/oreha-hard',
    label: 'Oreha',
    imgSrc: 'https://i.imgur.com/WcAVFsZ.png',
    gateData: {
      gold: [300, 400],
      boxCost: [100, 150],
      itemLevels: [1370],
      honorShards: [300, 400],
      boxHonorShards: [600, 800],
      destructionStones: [100, 150],
      boxDestructionStones: [60, 90],
    },
  },
  {
    path: '/raids/argos',
    label: 'Argos',
    imgSrc: 'https://i.imgur.com/8sBbqnQ.png',
    gateData: {
      gold: [150, 150, 200],
      boxCost: [50, 75, 75],
      itemLevels: [1370],
      honorShards: [300, 300, 400],
      boxHonorShards: [520, 680, 720],
      destructionStones: [100, 100, 150],
      boxDestructionStones: [60, 90, 120],
    },
  },
  {
    path: '/raids/valtan-solo',
    label: 'Valtan',
    imgSrc: 'https://i.imgur.com/ApCDeQb.png',
    gateRewardImgSrc: [['https://i.imgur.com/VCqULik.png', 'https://i.imgur.com/CloDByc.png']],
    gateRewardImgToolTip: [['Demon Beast Bone', 'Demon Beast Tendon']],
    gateData: {
      gold: [240, 360],
      boxCost: [75, 100],
      itemLevels: [1415],
      gateRewards: [
        [1, 3],
        [2, 3],
      ],
      honorShards: [600, 900],
      boxHonorShards: [600, 900],
      chaosStones: [0, 1],
      destructionStones: [200, 240],
      boxDestructionStones: [280, 360],
      clearMedal: [50, 70],
    },
  },
  {
    path: '/raids/valtan',
    label: 'Valtan',
    imgSrc: 'https://i.imgur.com/ApCDeQb.png',
    gateRewardImgSrc: [['https://i.imgur.com/VCqULik.png', 'https://i.imgur.com/CloDByc.png']],
    gateRewardImgToolTip: [['Demon Beast Bone', 'Demon Beast Tendon']],
    gateData: {
      gold: [300, 450],
      boxCost: [180, 255],
      itemLevels: [1415],
      gateRewards: [
        [1, 3],
        [2, 3],
      ],
      honorShards: [400, 600],
      boxHonorShards: [400, 700],
      chaosStones: [0, 1],
      destructionStones: [150, 200],
      boxDestructionStones: [240, 300],
      clearMedal: [50, 70],
    },
  },
  {
    path: '/raids/valtan-hard',
    label: 'Valtan',
    imgSrc: 'https://i.imgur.com/ApCDeQb.png',
    gateRewardImgSrc: [['https://i.imgur.com/VCqULik.png']],
    gateRewardImgToolTip: [['Demon Beast Bone']],
    gateData: {
      gold: [400, 700],
      boxCost: [255, 380],
      itemLevels: [1445],
      gateRewards: [[3], [3]],
      honorShards: [500, 700],
      boxHonorShards: [1000, 1300],
      chaosStones: [0, 1],
      destructionStones: [200, 240],
      boxDestructionStones: [360, 480],
      clearMedal: [50, 70],
    },
  },
  {
    path: '/raids/vykas-solo',
    label: 'Vykas',
    imgSrc: 'https://i.imgur.com/5VoXEOB.png',
    gateRewardImgSrc: [['https://i.imgur.com/uzmLA6L.png', 'https://i.imgur.com/YhGuP3L.png']],
    gateRewardImgToolTip: [['Covetous Fang', 'Covetous Wing']],
    gateData: {
      gold: [280, 520],
      boxCost: [100, 150],
      itemLevels: [1430],
      gateRewards: [
        [2, 1],
        [4, 2],
      ],
      honorShards: [700, 1100],
      boxHonorShards: [800, 1200],
      chaosStones: [0, 1],
      destructionStones: [240, 280],
      boxDestructionStones: [340, 420],
      clearMedal: [60, 100],
    },
  },
  {
    path: '/raids/vykas',
    label: 'Vykas',
    imgSrc: 'https://i.imgur.com/5VoXEOB.png',
    gateRewardImgSrc: [['https://i.imgur.com/uzmLA6L.png', 'https://i.imgur.com/YhGuP3L.png']],
    gateRewardImgToolTip: [['Covetous Fang', 'Covetous Wing']],
    gateData: {
      gold: [350, 650],
      boxCost: [175, 290],
      itemLevels: [1430],
      gateRewards: [
        [2, 1],
        [4, 2],
      ],
      honorShards: [500, 700],
      boxHonorShards: [700, 1000],
      chaosStones: [0, 1],
      destructionStones: [150, 200],
      boxDestructionStones: [300, 360],
      clearMedal: [60, 100],
    },
  },
  {
    path: '/raids/vykas-hard',
    label: 'Vykas',
    imgSrc: 'https://i.imgur.com/5VoXEOB.png',
    gateRewardImgSrc: [['https://i.imgur.com/YhGuP3L.png']],
    gateRewardImgToolTip: [['Covetous Wing']],
    gateData: {
      gold: [500, 1000],
      boxCost: [280, 435],
      itemLevels: [1460],
      gateRewards: [[3], [3]],
      honorShards: [600, 900],
      boxHonorShards: [1600, 2000],
      chaosStones: [0, 1],
      destructionStones: [240, 280],
      boxDestructionStones: [450, 520],
      clearMedal: [60, 100],
    },
  },
  {
    path: '/raids/clown-solo',
    label: 'Clown',
    imgSrc: 'https://i.imgur.com/hOOSdDm.png',
    gateRewardImgSrc: [['https://i.imgur.com/XoYiAKo.png']],
    gateRewardImgToolTip: [['Mayhem Horn']],
    gateData: {
      gold: [320, 480, 800],
      boxCost: [100, 150, 200],
      itemLevels: [1475],
      gateRewards: [[1], [2], [2]],
      honorShards: [1000, 1000, 1000],
      boxHonorShards: [2200, 2200, 2600],
      chaosStones: [0, 0, 1],
      destructionStones: [240, 240, 280],
      boxDestructionStones: [360, 480, 600],
      clearMedal: [60, 90, 150],
    },
  },
  {
    path: '/raids/clown',
    label: 'Clown',
    imgSrc: 'https://i.imgur.com/hOOSdDm.png',
    gateRewardImgSrc: [['https://i.imgur.com/XoYiAKo.png']],
    gateRewardImgToolTip: [['Mayhem Horn']],
    gateData: {
      gold: [400, 600, 1000],
      boxCost: [200, 335, 470],
      itemLevels: [1475],
      gateRewards: [[1], [2], [2]],
      honorShards: [800, 800, 800],
      boxHonorShards: [1300, 1300, 1600],
      chaosStones: [0, 0, 1],
      destructionStones: [200, 200, 280],
      boxDestructionStones: [300, 420, 540],
      clearMedal: [60, 90, 150],
    },
  },
  {
    path: '/raids/brelshaza-solo',
    label: 'Brelshaza',
    imgSrc: 'https://i.imgur.com/bL9k49k.png',
    gateRewardImgSrc: [['https://i.imgur.com/3poB3IP.png']],
    gateRewardImgToolTip: [['Phantom Intention']],
    gateData: {
      gold: [800, 800, 800, 1280],
      boxCost: [100, 150, 200, 375],
      itemLevels: [1490, 1490, 1500, 1520],
      gateRewards: [[4], [4], [5], [7]],
      honorShards: [1100, 1300, 1600, 3000],
      boxHonorShards: [3000, 3000, 4000, 7000],
      chaosStones: [0, 0, 1, 3],
      destructionStones: [120, 120, 140, 420],
      boxDestructionStones: [120, 180, 300, 600],
      clearMedal: [150, 150, 150, 250],
    },
  },
  {
    path: '/raids/brelshaza',
    label: 'Brelshaza',
    imgSrc: 'https://i.imgur.com/bL9k49k.png',
    gateRewardImgSrc: [['https://i.imgur.com/3poB3IP.png']],
    gateRewardImgToolTip: [['Phantom Intention']],
    gateData: {
      gold: [1000, 1000, 1000, 1600],
      boxCost: [250, 300, 400, 600],
      itemLevels: [1490, 1490, 1500, 1520],
      gateRewards: [[4], [4], [5], [7]],
      honorShards: [1000, 1200, 1500, 3000],
      boxHonorShards: [2100, 2700, 3400, 7000],
      chaosStones: [0, 0, 1, 3],
      destructionStones: [100, 100, 120, 400],
      boxDestructionStones: [120, 180, 300, 600],
      clearMedal: [150, 150, 150, 250],
    },
  },
  {
    path: '/raids/brelshaza-hard',
    label: 'Brelshaza',
    imgSrc: 'https://i.imgur.com/bL9k49k.png',
    gateRewardImgSrc: [['https://i.imgur.com/3poB3IP.png']],
    gateRewardImgToolTip: [['Phantom Intention']],
    gateData: {
      gold: [1200, 1200, 1200, 2000],
      boxCost: [400, 400, 500, 800],
      itemLevels: [1540, 1540, 1550, 1560],
      gateRewards: [[6], [6], [7], [10]],
      honorShards: [2500, 2500, 3000, 6000],
      boxHonorShards: [3000, 4000, 5200, 10000],
      chaosStones: [0, 0, 2, 5],
      destructionStones: [280, 320, 400, 800],
      boxDestructionStones: [260, 420, 640, 1000],
      clearMedal: [150, 150, 150, 250],
    },
  },
  {
    path: '/raids/kayangel-solo',
    label: 'Kayangel',
    imgSrc: 'https://i.imgur.com/2P9urFh.png',
    gateRewardImgSrc: [['https://i.imgur.com/RTrjfkO.png', 'https://i.imgur.com/Cx0nbdR.png']],
    gateRewardImgToolTip: [["Light's Trial", 'Empyrean of Contemplation']],
    gateData: {
      gold: [640, 960, 1280],
      boxCost: [200, 225, 300],
      itemLevels: [1540],
      gateRewards: [[11], [12, 1], [17, 2]],
      honorShards: [2100, 2500, 4100],
      boxHonorShards: [3500, 3500, 5500],
      chaosStones: [0, 0, 4],
      destructionStones: [260, 300, 400],
      boxDestructionStones: [220, 280, 340],
      clearMedal: [100, 150, 200],
    },
  },
  {
    path: '/raids/kayangel',
    label: 'Kayangel',
    imgSrc: 'https://i.imgur.com/2P9urFh.png',
    gateRewardImgSrc: [['https://i.imgur.com/RTrjfkO.png', 'https://i.imgur.com/Cx0nbdR.png']],
    gateRewardImgToolTip: [["Light's Trial", 'Empyrean of Contemplation']],
    gateData: {
      gold: [800, 1200, 1600],
      boxCost: [300, 400, 500],
      itemLevels: [1540],
      gateRewards: [[11], [12, 1], [17, 2]],
      honorShards: [2000, 2500, 4000],
      boxHonorShards: [1000, 1500, 2000],
      chaosStones: [0, 0, 4],
      destructionStones: [240, 280, 360],
      boxDestructionStones: [180, 220, 300],
      clearMedal: [100, 150, 200],
    },
  },
  {
    path: '/raids/kayangel-hard',
    label: 'Kayangel',
    imgSrc: 'https://i.imgur.com/2P9urFh.png',
    gateRewardImgSrc: [['https://i.imgur.com/RTrjfkO.png', 'https://i.imgur.com/Cx0nbdR.png']],
    gateRewardImgToolTip: [["Light's Trial", 'Empyrean of Contemplation']],
    gateData: {
      gold: [1000, 1600, 2200],
      boxCost: [350, 500, 700],
      itemLevels: [1580],
      gateRewards: [
        [14, 1],
        [16, 1],
        [20, 3],
      ],
      honorShards: [2500, 3500, 5000],
      boxHonorShards: [1500, 2000, 2500],
      chaosStones: [0, 0, 3],
      destructionStones: [80, 120, 150],
      boxDestructionStones: [70, 90, 120],
      clearMedal: [100, 150, 200],
    },
  },
  {
    path: '/raids/akkan-solo',
    label: 'Akkan',
    imgSrc: 'https://i.imgur.com/W4ekupW.png',
    gateRewardImgSrc: [['https://i.imgur.com/UnGFUC6.png']],
    gateRewardImgToolTip: [['Eye of Decay']],
    gateData: {
      gold: [800, 1440, 2080],
      boxCost: [225, 275, 375],
      itemLevels: [1580],
      gateRewards: [[3], [3], [5]],
      honorShards: [2700, 2700, 4200],
      boxHonorShards: [4500, 4500, 5000],
      chaosStones: [0, 0, 3],
      destructionStones: [140, 180, 260],
      boxDestructionStones: [160, 180, 260],
      clearMedal: [150, 200, 400],
    },
  },
  {
    path: '/raids/akkan',
    label: 'Akkan',
    imgSrc: 'https://i.imgur.com/W4ekupW.png',
    gateRewardImgSrc: [['https://i.imgur.com/UnGFUC6.png']],
    gateRewardImgToolTip: [['Eye of Decay']],
    gateData: {
      gold: [1000, 1800, 2600],
      boxCost: [450, 550, 750],
      itemLevels: [1580],
      gateRewards: [[3], [3], [5]],
      honorShards: [1600, 1600, 2400],
      boxHonorShards: [3000, 3000, 4200],
      chaosStones: [0, 0, 3],
      destructionStones: [120, 160, 240],
      boxDestructionStones: [120, 160, 240],
      clearMedal: [150, 200, 400],
    },
  },
  {
    path: '/raids/akkan-hard',
    label: 'Akkan',
    imgSrc: 'https://i.imgur.com/W4ekupW.png',
    gateRewardImgSrc: [['https://i.imgur.com/UnGFUC6.png']],
    gateRewardImgToolTip: [['Eye of Decay']],
    gateData: {
      gold: [1500, 2500, 3500],
      boxCost: [600, 700, 950],
      itemLevels: [1600],
      gateRewards: [[7], [7], [8]],
      honorShards: [2400, 2400, 4000],
      boxHonorShards: [4000, 4000, 5500],
      chaosStones: [0, 0, 3],
      destructionStones: [180, 200, 320],
      boxDestructionStones: [200, 240, 360],
      clearMedal: [150, 200, 400],
    },
  },
  {
    path: '/raids/voldis-solo',
    label: 'Voldis',
    imgSrc: 'https://i.imgur.com/sSdCEIA.png',
    gateRewardImgSrc: [['https://i.imgur.com/LAzTJgP.png', 'https://i.imgur.com/d5VKKW1.png']],
    gateRewardImgToolTip: [['Clear Energy of Wisdom', ' Clear Elixir of Wisdom']],
    gateData: {
      gold: [1200, 1600, 2400],
      boxCost: [250, 350, 550],
      itemLevels: [1600],
      gateRewards: [[4], [4], [8, 2]],
      honorShards: [3000, 3000, 4500],
      boxHonorShards: [4500, 4500, 7500],
      chaosStones: [0, 0, 3],
      destructionStones: [200, 200, 260],
      boxDestructionStones: [180, 200, 280],
      clearMedal: [200, 250, 450],
    },
  },
  {
    path: '/raids/voldis',
    label: 'Voldis',
    imgSrc: 'https://i.imgur.com/sSdCEIA.png',
    gateRewardImgSrc: [['https://i.imgur.com/LAzTJgP.png', 'https://i.imgur.com/d5VKKW1.png']],
    gateRewardImgToolTip: [['Clear Energy of Wisdom', ' Clear Elixir of Wisdom']],
    gateData: {
      gold: [1500, 2000, 3000],
      boxCost: [500, 550, 900],
      itemLevels: [1600],
      gateRewards: [[4], [4], [8, 2]],
      honorShards: [1500, 1500, 2000],
      boxHonorShards: [3000, 3000, 4500],
      chaosStones: [0, 1, 2],
      destructionStones: [80, 80, 100],
      boxDestructionStones: [100, 100, 200],
      clearMedal: [200, 250, 450],
    },
  },
  {
    path: '/raids/voldis-hard',
    label: 'Voldis',
    imgSrc: 'https://i.imgur.com/sSdCEIA.png',
    gateRewardImgSrc: [['https://i.imgur.com/XYyJ9aG.png', 'https://i.imgur.com/dS0ZviV.png']],
    gateRewardImgToolTip: [['Splendid Energy of Wisdom', 'Splendid Elixir of Wisdom']],
    gateData: {
      gold: [3000, 4000, 3500],
      boxCost: [750, 900, 1350],
      itemLevels: [1620],
      gateRewards: [[4], [4], [8, 2]],
      honorShards: [1800, 1800, 2400],
      boxHonorShards: [4000, 4000, 5500],
      chaosStones: [0, 1, 2],
      destructionStones: [100, 100, 120],
      boxDestructionStones: [150, 150, 300],
      clearMedal: [200, 250, 450],
    },
  },
  {
    path: '/raids/thaemine-solo',
    label: 'Thaemine',
    imgSrc: 'https://i.imgur.com/464OcZx.png',
    gateRewardImgSrc: [['https://i.imgur.com/sU7Fdcu.png', 'https://i.imgur.com/BSm95D5.png']],
    gateRewardImgToolTip: [['Dark Fire', 'Magical Spring Water']],
    gateData: {
      gold: [2300, 2700, 3800],
      boxCost: [670, 800, 1140],
      itemLevels: [1610],
      gateRewards: [
        [6, 2],
        [8, 3],
        [12, 4],
      ],
      honorShards: [3000, 3750, 4500],
      boxHonorShards: [3850, 4950, 6600],
      chaosStones: [0, 0, 5],
      destructionStones: [150, 180, 225],
      boxDestructionStones: [420, 495, 660],
      clearMedal: [250, 300, 500],
    },
  },
  {
    path: '/raids/thaemine',
    label: 'Thaemine',
    imgSrc: 'https://i.imgur.com/464OcZx.png',
    gateRewardImgSrc: [['https://i.imgur.com/sU7Fdcu.png', 'https://i.imgur.com/BSm95D5.png']],
    gateRewardImgToolTip: [['Dark Fire', 'Magical Spring Water']],
    gateData: {
      gold: [3500, 4000, 3500],
      boxCost: [1500, 1800, 2500],
      itemLevels: [1610],
      gateRewards: [
        [6, 2],
        [8, 3],
        [12, 4],
      ],
      honorShards: [2000, 2500, 3000],
      boxHonorShards: [3500, 4500, 6000],
      chaosStones: [0, 0, 5],
      destructionStones: [100, 120, 150],
      boxDestructionStones: [380, 450, 600],
      clearMedal: [250, 300, 500],
    },
  },
  {
    path: '/raids/thaemine-hard',
    label: 'Thaemine',
    imgSrc: 'https://i.imgur.com/464OcZx.png',
    gateRewardImgSrc: [['https://i.imgur.com/sU7Fdcu.png', 'https://i.imgur.com/BSm95D5.png']],
    gateRewardImgToolTip: [['Dark Fire', 'Magical Spring Water']],
    gateData: {
      gold: [5000, 6000, 7800, 9800],
      boxCost: [2000, 2400, 2800, 3600],
      itemLevels: [1630],
      gateRewards: [
        [12, 6],
        [16, 9],
        [24, 12],
        [24, 12],
      ],
      honorShards: [2400, 3000, 3600, 4500],
      boxHonorShards: [5000, 6000, 7500, 9000],
      chaosStones: [0, 0, 7, 10],
      destructionStones: [150, 200, 240, 300],
      boxDestructionStones: [500, 600, 700, 850],
      clearMedal: [250, 300, 500],
    },
  },
  {
    path: '/raids/echidna-solo',
    label: 'Echidna',
    imgSrc: 'https://i.imgur.com/tju1uI1.png',
    gateRewardImgSrc: [['https://i.imgur.com/paUGipq.png']],
    gateRewardImgToolTip: [['Scale of Agris']],
    gateData: {
      gold: [4800, 8000],
      boxCost: [1450, 2400],
      itemLevels: [1620],
      gateRewards: [[3], [6]],
      honorShards: [3600, 4500],
      boxHonorShards: [3630, 5500],
      chaosStones: [0, 4],
      destructionStones: [210, 300],
      boxDestructionStones: [440, 770],
      clearMedal: [400, 550],
    },
  },
  {
    path: '/raids/echidna',
    label: 'Echidna',
    imgSrc: 'https://i.imgur.com/tju1uI1.png',
    gateRewardImgSrc: [['https://i.imgur.com/paUGipq.png']],
    gateRewardImgToolTip: [['Scale of Agris']],
    gateData: {
      gold: [6000, 10000],
      boxCost: [2200, 3400],
      itemLevels: [1620],
      gateRewards: [[3], [6]],
      honorShards: [3600, 4200],
      boxHonorShards: [6500, 9500],
      chaosStones: [0, 4],
      destructionStones: [160, 220],
      boxDestructionStones: [450, 800],
      clearMedal: [400, 550],
    },
  },
  {
    path: '/raids/echidna-hard',
    label: 'Echidna',
    imgSrc: 'https://i.imgur.com/tju1uI1.png',
    gateRewardImgSrc: [['https://i.imgur.com/9O6FFL2.png']],
    gateRewardImgToolTip: [['Alcyone Eye']],
    gateData: {
      gold: [7000, 12500],
      boxCost: [2800, 4100],
      itemLevels: [1630],
      gateRewards: [[3], [6]],
      honorShards: [4000, 7800],
      boxHonorShards: [7500, 11000],
      chaosStones: [0, 7],
      destructionStones: [220, 280],
      boxDestructionStones: [650, 950],
      clearMedal: [400, 550],
    },
  },
  {
    path: '/raids/behemoth',
    label: 'Behemoth',
    imgSrc: 'https://i.imgur.com/h8qcYOy.png',
    gateRewardImgSrc: [['https://i.imgur.com/7e19M0E.png' , 'https://i.imgur.com/BSm95D5.png']],
    gateRewardImgToolTip: [['Behemoth Scale' , 'Magical Spring Water']],
    gateData: {
      gold: [6500, 11500],
      boxCost: [1800, 2700],
      itemLevels: [1620],
      gateRewards: [
        [10, 10],
        [20, 18],
      ],
      honorShards: [4000, 5400],
      boxHonorShards: [7500, 11000],
      chaosStones: [0, 10],
      destructionStones: [220, 280],
      boxDestructionStones: [650, 950],
    },
  },
  {
    path: '/raids/aegir',
    label: 'Aegir',
    imgSrc: 'https://i.imgur.com/VgFaAwm.png',
    gateRewardImgSrc: [['https://i.imgur.com/A6B4rIn.png']],
    gateRewardImgToolTip: [['Hellfire Keystone']],
    gateData: {
      gold: [7500, 16500],
      boxCost: [3200, 5300],
      itemLevels: [1660],
      gateRewards: [[4], [6]],
      honorShards: [3600, 4400],
      boxHonorShards: [6500, 9500],
      destructionStones: [480, 580],
      boxDestructionStones: [850, 1150],
    },
  },
  {
    path: '/raids/aegir-hard',
    label: 'Aegir',
    imgSrc: 'https://i.imgur.com/VgFaAwm.png',
    gateRewardImgSrc: [['https://i.imgur.com/A6B4rIn.png']],
    gateRewardImgToolTip: [['Hellfire Keystone']],
    gateData: {
      gold: [10000, 20000],
      boxCost: [4100, 6600],
      itemLevels: [1680],
      gateRewards: [[8], [12]],
      honorShards: [4200, 5400],
      boxHonorShards: [7500, 11000],
      destructionStones: [580, 660],
      boxDestructionStones: [700, 1000],
    },
  },
  {
    path: '/raids/brelshaza2',
    label: 'Brelshaza v2',
    imgSrc: 'https://i.imgur.com/bL9k49k.png',
    gateRewardImgSrc: [['https://i.imgur.com/3poB3IP.png']],
    gateRewardImgToolTip: [['Karma']],
    gateData: {
      gold: [9000, 18500],
      boxCost: [3800, 5600],
      itemLevels: [1670],
      gateRewards: [[4], [6]],
      honorShards: [4000, 4600],
      boxHonorShards: [7000, 10500],
      destructionStones: [540, 640],
      boxDestructionStones: [800, 1050],
    },
  },
  {
    path: '/raids/brelshaza2-hard',
    label: 'Brelshaza v2',
    imgSrc: 'https://i.imgur.com/bL9k49k.png',
    gateRewardImgSrc: [['https://i.imgur.com/3poB3IP.png']],
    gateRewardImgToolTip: [['Karma']],
    gateData: {
      gold: [11000, 23000],
      boxCost: [4500, 7200],
      itemLevels: [1690],
      gateRewards: [[8], [12]],
      honorShards: [4600, 6000],
      boxHonorShards: [8000, 14000],
      destructionStones: [640, 700],
      boxDestructionStones: [950, 1400],
    },
  },
];

export default raidsInfo;
