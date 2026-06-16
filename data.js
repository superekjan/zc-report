// 线性图标库（Heroicons 风格）
const icons = {
  wifi: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
  </svg>`,
  link: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
  </svg>`,
  chip: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
  </svg>`,
  server: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="4" width="20" height="6" rx="2"/>
    <rect x="2" y="14" width="20" height="6" rx="2"/>
    <circle cx="6" cy="7" r="1"/>
    <circle cx="6" cy="17" r="1"/>
  </svg>`,
  cable: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
  </svg>`,
  coverage: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
  </svg>`,
  router: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="14" width="20" height="6" rx="2"/>
    <circle cx="6" cy="17" r="1"/>
    <circle cx="10" cy="17" r="1"/>
    <path d="M8.111 9.404a5.5 5.5 0 017.778 0M12 13h.01"/>
  </svg>`,
  thermometer: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
  </svg>`,
  gauge: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>`,
  chartBar: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
  </svg>`,
  alert: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
  </svg>`,
  bolt: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>`,
  eye: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
  </svg>`,
  check: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>`,
  arrowLeft: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 19l-7-7 7-7"/>
  </svg>`,
  chevronRight: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 5l7 7-7 7"/>
  </svg>`,
  home: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
  </svg>`,
  documentText: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
  </svg>`,
  plus: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4v16m8-8H4"/>
  </svg>`,
  minus: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 12H4"/>
  </svg>`,
  signal: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 18h16M7 14h10M9 10h6M12 6h.01" stroke-linecap="round"/>
  </svg>`,
  exclamation: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"/>
  </svg>`,
  refresh: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
  </svg>`,
  shield: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
  </svg>`,
  users: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
  </svg>`,
  arrowTrendingUp: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
  </svg>`,
  mapPin: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
  </svg>`,
  cog: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>`,
  wrench: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 11-3-3l5.1-5.1m0 0L4.16 8.91a2.121 2.121 0 010-3l.71-.71a2.121 2.121 0 013 0l3.26 3.26m0 0l5.1-5.1a2.121 2.121 0 013 0l.71.71a2.121 2.121 0 010 3l-5.1 5.1m0 0l3.26 3.26a2.121 2.121 0 010 3l-.71.71a2.121 2.121 0 01-3 0l-3.26-3.26"/>
  </svg>`,
  phone: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
  </svg>`,
  swap: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/>
  </svg>`,
  lightBulb: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
  </svg>`,
  cube: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>
  </svg>`,
  handRaised: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.15m3.15-3.15v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075-5.4v3.15m0 0a1.575 1.575 0 003.15 0V7.5m-3.15 3.15V15m3.15-7.5a1.575 1.575 0 013.15 0v6.675a6.325 6.325 0 01-6.325 6.325h-.35a6.325 6.325 0 01-6.325-6.325V9.725a1.575 1.575 0 013.15 0"/>
  </svg>`
};

function icon(name, cls = 'w-6 h-6') {
  const svg = icons[name] || icons.documentText;
  return `<span class="inline-flex items-center justify-center ${cls}">${svg.replace('<svg', '<svg class="w-full h-full"')}</span>`;
}

// 计算提升百分比
function calcImprovement(oldValue, newValue, direction = 'higher') {
  if (oldValue === 0) return 0;
  if (direction === 'lower') {
    return Math.round(((oldValue - newValue) / oldValue) * 100);
  }
  return Math.round(((newValue - oldValue) / oldValue) * 100);
}

// 报告数据
const reports = [
  {
    id: 'router-old',
    title: '老旧路由器性能报告',
    subtitle: '路由器使用超过 5 年，性能明显不足',
    tags: ['老旧路由器'],
    severity: 'high',
    icon: 'router',
    overview: [
      { label: '宽带速率', value: '500M' },
      { label: '路由器年限', value: '5年+' },
      { label: '接入设备', value: '5台+' }
    ],
    detectedProblem: '检测到您的路由器已运行超过 5 年，仅支持 Wi-Fi 4（802.11n），最大协商速率只有 150 Mbps，且 2.4 GHz 频段拥挤严重。设备在多终端同时使用时经常出现卡顿、掉线。',
    impact: '看高清视频会缓冲、玩游戏延迟高、手机/平板/智能家居一多就频繁掉线。全屋同时上网体验差，严重时网页都打不开。',
    comparison: {
      title: '旧路由器性能对比',
      metrics: [
        { label: '无线速率', oldValue: 150, newValue: 3000, unit: 'Mbps' },
        { label: '稳定带机量', oldValue: 6, newValue: 60, unit: '台' },
        { label: '游戏延迟', oldValue: 120, newValue: 25, unit: 'ms', direction: 'lower' }
      ]
    },
    risks: [
      '网速体验差，视频经常缓冲',
      '频繁掉线/无法联网',
      'Wi-Fi 6/7 设备无法满速运行',
      '多设备同时用网严重卡顿',
      '设备发热严重，寿命缩短',
      '存在安全隐患，易被蹭网'
    ],
    benefits: {
      title: '升级 Wi-Fi 7 路由器的优势',
      items: [
        '速率提升约 20 倍，轻松跑满千兆宽带',
        '多设备并发能力提升 10 倍，全家同时用网不卡顿',
        '覆盖范围更广，穿墙能力更强',
        '发热更低、运行更稳定，寿命更长',
        '支持最新安全协议，防护能力更强'
      ]
    },
    recommendedActions: [
      '优先更换支持 Wi-Fi 6 或 Wi-Fi 7 的双频/三频路由器',
      '将路由器放置在房屋中心、开阔位置，远离金属和电器干扰',
      '为智能电视、游戏机优先连接 5 GHz 频段',
      '定期重启路由器，并更新官方固件'
    ],
    solution: {
      title: '路由器升级方案',
      subtitle: '三步解决老旧路由器性能瓶颈',
      steps: [
        {
          title: '选购新路由器',
          description: '优先选择支持 Wi-Fi 6 或 Wi-Fi 7 的双频/三频路由器。根据房屋面积选择：小户型选 AX3000，大户型或复式选 Mesh 套装。',
          tip: '认准“Wi-Fi 6/7”“千兆网口”“双频”字样',
          icon: 'router'
        },
        {
          title: '合理摆放位置',
          description: '将路由器放置在房屋中心、开阔位置，尽量高于地面 1 米以上，远离金属柜、微波炉、鱼缸等干扰源。',
          tip: '不要塞进弱电箱或电视柜深处',
          icon: 'mapPin'
        },
        {
          title: '优化连接设置',
          description: '手机、电脑、智能电视优先连接 5 GHz 频段；智能家居、摄像头连接 2.4 GHz 频段。开启自动信道，避免邻里干扰。',
          tip: '5GHz 速度快，2.4GHz 穿墙好',
          icon: 'wifi'
        }
      ]
    },
    ctaText: '查看智能组网方案',
    diagram: 'router'
  },
  {
    id: 'cable-wrong',
    title: '网线连接异常报告',
    subtitle: '网线插错端口，导致网速受限',
    tags: ['插错网线'],
    severity: 'medium',
    icon: 'link',
    overview: [
      { label: '宽带速率', value: '500M' },
      { label: '实际速率', value: '≤100M' },
      { label: '连接端口', value: '百兆口' }
    ],
    detectedProblem: '检测到光猫与路由器之间使用了百兆口连接，或电脑插在了光猫的 ITV/语音口上。虽然宽带是 300M/500M，但设备实际只能跑 100M 以内。',
    impact: '您办理的宽带套餐无法完全发挥，下载、上传速度被“卡脖子”。明明是 500M 宽带，测速却只有 90M 左右，相当于花了跑车的钱只开了自行车道。',
    comparison: {
      title: '端口速率对比',
      metrics: [
        { label: '最高速率', oldValue: 100, newValue: 1000, unit: 'Mbps' },
        { label: '下载 1GB 电影', oldValue: 82, newValue: 8, unit: '秒', direction: 'lower' }
      ]
    },
    risks: [
      '宽带速率无法跑满，资费浪费',
      '下载、上传速度被限制',
      '4K/8K 高清视频缓冲严重',
      '多设备同时用网容易卡顿',
      '网课、视频会议体验差'
    ],
    benefits: {
      title: '正确连接千兆口的优势',
      items: [
        '释放宽带全部潜能，速率提升 10 倍',
        '千兆内网传输，NAS/电脑互传更快',
        '高清视频、大型游戏流畅运行',
        '多设备同时用网不再拥堵'
      ]
    },
    recommendedActions: [
      '确认光猫和路由器的 LAN 口都插在标有"千兆/GE"的网口上',
      '检查网线是否为超五类（Cat5e）或六类（Cat6）及以上',
      '电脑测速时直接连接路由器千兆口，排除无线干扰',
      '如果不确定端口，可查看设备背面标识或联系运营商客服'
    ],
    solution: {
      title: '网线连接修正方案',
      subtitle: '三步修正端口连接，释放全部带宽',
      steps: [
        {
          title: '找到千兆口',
          description: '查看光猫背面或侧面，找到标有"千兆""GE""LAN1"的网口。通常 LAN1 为千兆口，ITV 口为百兆口。路由器的 WAN 口通常也是千兆口。',
          tip: '千兆口旁边会标注"GE"或"1000M"',
          icon: 'eye'
        },
        {
          title: '重新插线',
          description: '将光猫 LAN1（千兆口）的网线拔出，确认网线两端分别插入光猫千兆口和路由器 WAN 口。如果电脑直连光猫，也要插在千兆口上。',
          tip: '插紧后听到"咔"声说明到位',
          icon: 'swap'
        },
        {
          title: '验证测速',
          description: '重新插线后，用手机或电脑测速软件（如 SpeedTest）测速，确认速率接近宽带套餐标称值。500M 宽带应测到 450M 以上。',
          tip: '测速时关闭其他设备下载，结果更准',
          icon: 'gauge'
        }
      ]
    },
    ctaText: '查看网线连接方案',
    diagram: 'cable_wrong'
  },
  {
    id: 'cpu-temp',
    title: '路由器负载异常报告',
    subtitle: 'CPU 占用高 / 温度异常',
    tags: ['CPU/温度异常'],
    severity: 'high',
    icon: 'chip',
    overview: [
      { label: 'CPU 占用', value: '85%' },
      { label: '芯片温度', value: '78℃' },
      { label: '外壳温度', value: '52℃' }
    ],
    detectedProblem: '路由器 CPU 长期占用超过 80%，芯片温度达 78℃，外壳摸起来明显烫手。正常路由器芯片温度应在 50-65℃ 之间，外壳温度应在 35-45℃。当前已超出正常范围，常见原因是连接设备过多、后台插件/下载占用资源、散热孔被遮挡或放置在密闭空间。',
    impact: '芯片温度超过 70℃ 后，路由器会启动降频保护机制，Wi-Fi 速率可能从千兆跌至百兆。长期高温运行还会加速电容等元器件老化，缩短设备寿命。表现为游戏突然掉线、视频会议卡顿、智能家居响应慢，严重时路由器频繁自动重启。',
    comparison: {
      title: '异常值 vs 正常范围',
      metrics: [
        { label: 'CPU 占用', oldValue: 85, newValue: 30, unit: '%', direction: 'lower', normalRange: '20%-50%' },
        { label: '芯片温度', oldValue: 78, newValue: 58, unit: '℃', direction: 'lower', normalRange: '50-65℃' },
        { label: '外壳温度', oldValue: 52, newValue: 40, unit: '℃', direction: 'lower', normalRange: '35-45℃' }
      ]
    },
    risks: [
      '芯片过热触发降频，网速从千兆跌至百兆',
      '游戏过程中突然掉线、延迟飙升',
      '视频会议卡顿、语音断续',
      '智能家居设备频繁离线',
      '长期高温加速元器件老化，寿命缩短',
      '严重过热时路由器自动重启'
    ],
    benefits: {
      title: '降温后的优势',
      items: [
        'CPU 占用降至正常范围，运行更流畅',
        '芯片温度降低 20℃，远离降频阈值',
        '断流、重启次数大幅减少',
        '元器件寿命更长，设备更稳定'
      ]
    },
    recommendedActions: [
      '将路由器移出密闭空间，放在通风处，底部垫高 2-3 厘米',
      '减少同时在线设备，关闭不必要的下载和后台插件',
      '定期重启路由器（每周一次），并更新官方固件',
      '如果散热改善后芯片温度仍超 70℃，建议更换散热更好的新款路由器'
    ],
    solution: {
      title: '散热与负载优化方案',
      subtitle: '四步降温减压，让路由器稳定运行',
      steps: [
        {
          title: '改善散热环境',
          description: '将路由器从封闭空间（弱电箱、电视柜深处）移出，放在通风处。底部用瓶盖或支架垫高 2-3 厘米，让空气从底部流通。不要与光猫叠放，远离暖气、阳光直射。',
          tip: '底部垫高比侧面吹风扇更有效',
          icon: 'lightBulb'
        },
        {
          title: '减少设备负载',
          description: '断开不常用的设备连接，关闭路由器后台的下载任务、QoS 插件等。智能家居设备过多时，考虑用子路由分担连接。建议同时连接设备不超过 30 台。',
          tip: '设备越多，CPU 负载越高',
          icon: 'minus'
        },
        {
          title: '定期重启维护',
          description: '建议每周重启一次路由器，清理内存缓存。可在路由器管理页面设置"定时重启"，选在凌晨无人使用时自动执行。同时清理散热孔灰尘。',
          tip: '重启不是治本，但能缓解临时卡顿',
          icon: 'refresh'
        },
        {
          title: '考虑更换设备',
          description: '如果以上措施后芯片温度仍长期超过 70℃，说明路由器性能已跟不上需求。建议更换搭载更强处理器、散热设计更好的新款路由器（如 Wi-Fi 6/7 机型）。',
          tip: '新路由器散热设计更好，芯片温度普遍低 15-20℃',
          icon: 'router'
        }
      ]
    },
    ctaText: '查看散热优化方案',
    diagram: 'cpu_temp'
  },
  {
    id: 'ont-old',
    title: '光猫设备老化报告',
    subtitle: '光猫老旧，成为网速瓶颈',
    tags: ['老旧光猫'],
    severity: 'high',
    icon: 'server',
    overview: [
      { label: '光猫网口', value: '百兆' },
      { label: '转发延迟', value: '15ms' },
      { label: '发热情况', value: '高' }
    ],
    detectedProblem: '检测到光猫型号较旧，仅支持百兆网口或早期千兆光猫，转发性能不足。即使路由器和网线都正常，光猫也会把整体网速“压下来”。',
    impact: '光猫是家里网络的“大门”。光猫老旧就像家门口的小路太窄，宽带再快也跑不满。常见现象是白天正常、晚上高峰卡顿，且多设备同时用网时特别明显。',
    comparison: {
      title: '光猫转发性能对比',
      metrics: [
        { label: '网口速率', oldValue: 100, newValue: 1000, unit: 'Mbps' },
        { label: '转发延迟', oldValue: 15, newValue: 3, unit: 'ms', direction: 'lower' },
        { label: '发热量', oldValue: 80, newValue: 20, unit: '相对指数', direction: 'lower' }
      ]
    },
    risks: [
      '成为全屋网速瓶颈',
      '晚上高峰时段明显卡顿',
      '多设备同时用网延迟高',
      '光猫发热严重，稳定性差',
      '千兆宽带无法跑满'
    ],
    benefits: {
      title: '更换千兆光猫的优势',
      items: [
        '网口速率提升 10 倍，跑满千兆宽带',
        '转发延迟降低 80%，游戏/视频更流畅',
        '发热量大幅降低，运行更稳定',
        '支持更多设备同时在线'
      ]
    },
    recommendedActions: [
      '联系运营商申请更换支持千兆的新款光猫',
      '确认光猫 LAN1 口为千兆口，并正确连接路由器',
      '如果光猫自带 Wi-Fi，建议关闭它，使用独立路由器发射无线信号',
      '光猫和路由器分开放置，避免堆叠导致散热不良'
    ],
    solution: {
      title: '光猫升级方案',
      subtitle: '三步更换光猫，打通网络"大门"',
      steps: [
        {
          title: '联系运营商换新',
          description: '拨打运营商客服电话（电信 10000 / 联通 10010 / 移动 10086），说明"宽带升级千兆，需要更换千兆光猫"。通常可免费或低价更换。',
          tip: '提"千兆宽带"更容易获批换新',
          icon: 'phone'
        },
        {
          title: '关闭光猫 Wi-Fi',
          description: '新光猫安装后，进入管理页面关闭光猫自带的 Wi-Fi 功能。光猫 Wi-Fi 信号弱、带机量少，用独立路由器发射无线信号效果更好。',
          tip: '光猫只做"光信号转网线"，路由器负责"发 Wi-Fi"',
          icon: 'cog'
        },
        {
          title: '正确连接与摆放',
          description: '光猫 LAN1 口（千兆口）→ 网线 → 路由器 WAN 口。光猫和路由器分开放置，间隔 10 厘米以上，避免叠放导致互相加热。',
          tip: '光猫放弱电箱，路由器放客厅中心',
          icon: 'link'
        }
      ]
    },
    ctaText: '查看光猫升级方案',
    diagram: 'ont'
  },
  {
    id: 'cable-quality',
    title: '网线规格不足报告',
    subtitle: '网线老化或规格不足',
    tags: ['网线问题'],
    severity: 'medium',
    icon: 'cable',
    overview: [
      { label: '网线类型', value: '五类线' },
      { label: '最高速率', value: '100Mbps' },
      { label: '传输速度', value: '11MB/s' }
    ],
    detectedProblem: '检测到部分网线为五类线（Cat5）或水晶头氧化、线芯断裂。这类网线最高只能稳定跑 100 Mbps，无法满足 200M 以上宽带需求。',
    impact: '网线就像家里的“水管”，老化或太细会限制水流。结果是网速不达标、局域网传输慢、NAS/电脑互传文件只有十几兆每秒。',
    comparison: {
      title: '网线速率对比',
      metrics: [
        { label: '最高速率', oldValue: 100, newValue: 1000, unit: 'Mbps' },
        { label: '局域网传输', oldValue: 11, newValue: 110, unit: 'MB/s' },
        { label: '抗干扰能力', oldValue: 30, newValue: 90, unit: '分' }
      ]
    },
    risks: [
      '网速不达标，宽带性能浪费',
      '局域网传输速度慢',
      '抗干扰能力差，容易受电器影响',
      '网线老化可能导致断流',
      '水晶头氧化影响连接稳定性'
    ],
    benefits: {
      title: '更换超五类/六类线的优势',
      items: [
        '速率提升 10 倍，支持千兆宽带',
        '局域网传输速度提升约 10 倍',
        '抗干扰能力更强，传输更稳定',
        '线材寿命更长，减少维护成本'
      ]
    },
    recommendedActions: [
      '将主干网线更换为超五类（Cat5e）或六类（Cat6）',
      '检查水晶头是否松动、氧化，必要时重新打线',
      '超过 50 米的布线建议使用六类屏蔽线',
      '装修时预埋的网线可请专业人员测试，确认是否达标'
    ],
    solution: {
      title: '网线更换方案',
      subtitle: '三步升级网线，打通传输"水管"',
      steps: [
        {
          title: '识别网线规格',
          description: '查看网线外皮上的印刷文字：Cat5 = 五类线（最高 100M），Cat5e = 超五类（最高 1000M），Cat6 = 六类（更稳定千兆）。如果看不到标识，大概率是老旧五类线。',
          tip: 'Cat5e 和 Cat6 是目前主流选择',
          icon: 'eye'
        },
        {
          title: '更换主干网线',
          description: '优先更换"光猫→路由器"和"路由器→电脑/NAS"之间的网线。选择超五类或六类网线，长度按需购买（1-30 米常见规格都有）。',
          tip: '六类线有十字骨架，抗干扰更好',
          icon: 'cable'
        },
        {
          title: '检查水晶头',
          description: '水晶头（RJ45）氧化发绿、卡扣断裂都会导致接触不良。更换网线时一并换新水晶头，或直接购买成品网线（两端已打好水晶头）。',
          tip: '成品网线比自己打线更可靠',
          icon: 'wrench'
        }
      ]
    },
    ctaText: '查看网线更换方案',
    diagram: 'cable_quality'
  },
  {
    id: 'wifi-coverage',
    title: 'Wi-Fi 覆盖检测报告',
    subtitle: 'Wi-Fi 覆盖差，存在信号死角',
    tags: ['WiFi覆盖差'],
    severity: 'medium',
    icon: 'coverage',
    overview: [
      { label: '覆盖面积', value: '60㎡' },
      { label: '死角比例', value: '40%' },
      { label: '路由器数量', value: '1台' }
    ],
    detectedProblem: '检测到房屋部分区域（如主卧、卫生间、阳台）Wi-Fi 信号弱或完全没有覆盖。通常是因为路由器位置偏、墙体阻隔多、房屋面积大或只有单个路由器。',
    impact: '信号死角区域看视频卡顿、语音通话断续、智能家居设备离线。孩子在房间上网课、在阳台刷视频都会受影响。',
    comparison: {
      title: '覆盖效果对比',
      metrics: [
        { label: '覆盖面积', oldValue: 60, newValue: 150, unit: '㎡' },
        { label: '死角区域', oldValue: 40, newValue: 5, unit: '%', direction: 'lower' },
        { label: '漫游切换', oldValue: 2, newValue: 0, unit: '秒', direction: 'lower' }
      ]
    },
    risks: [
      '主卧、卫生间、阳台等区域信号弱',
      '视频通话经常断续',
      '智能家居设备频繁离线',
      '孩子在房间上网课卡顿',
      '大户型无法实现全屋覆盖'
    ],
    benefits: {
      title: 'Mesh 组网/AC+AP 的优势',
      items: [
        '覆盖面积提升约 2.5 倍，全屋无缝覆盖',
        '信号死角减少 87.5%',
        '设备在不同房间自动切换，无需手动重连',
        '大户型、复式、别墅也能稳定覆盖'
      ]
    },
    recommendedActions: [
      '将路由器移到房屋中心位置，避开柜子和金属门',
      '大户型选择 Mesh 路由器组网，2-3 个节点覆盖全屋',
      '复式/别墅可考虑 AC+AP 方案，每个房间一个面板',
      '智能家居设备尽量连接 2.4 GHz 频段，保证穿墙能力'
    ],
    solution: {
      title: '全屋覆盖方案',
      subtitle: '三步消除信号死角，全屋 Wi-Fi 无缝覆盖',
      steps: [
        {
          title: '优化路由器位置',
          description: '将路由器移到房屋中心位置，放在高于地面 1 米的桌面或柜子上。远离承重墙、金属门、鱼缸、微波炉等信号杀手。天线竖直向上，不要折叠。',
          tip: '路由器越高、越居中，覆盖越好',
          icon: 'mapPin'
        },
        {
          title: '选择组网方案',
          description: '80㎡ 以下：单路由器即可。80-120㎡：双路由 Mesh 组网。120㎡ 以上或复式：三路由 Mesh 或 AC+AP 方案。Mesh 安装简单，AC+AP 需要预埋网线但更美观。',
          tip: 'Mesh 即插即用，AC+AP 需要装修配合',
          icon: 'cube'
        },
        {
          title: '合理分配频段',
          description: '手机、电脑、电视连 5 GHz 频段（速度快、延迟低）。智能家居、摄像头连 2.4 GHz 频段（穿墙好、覆盖远）。Mesh 组网后设备会自动切换到信号最好的节点。',
          tip: '5GHz 看视频打游戏，2.4GHz 连智能家居',
          icon: 'wifi'
        }
      ]
    },
    ctaText: '查看全屋覆盖方案',
    diagram: 'wifi'
  }
];

// 严重等级配置
const severityConfig = {
  high: { text: '严重', class: 'bg-rose-50 text-rose-600 border-rose-100', dot: 'bg-rose-500' },
  medium: { text: '中等', class: 'bg-amber-50 text-amber-600 border-amber-100', dot: 'bg-amber-500' },
  low: { text: '轻微', class: 'bg-emerald-50 text-emerald-600 border-emerald-100', dot: 'bg-emerald-500' }
};

function severityClass(s) {
  return severityConfig[s]?.class || severityConfig.medium.class;
}

function severityText(s) {
  return severityConfig[s]?.text || severityConfig.medium.text;
}

function severityDot(s) {
  return severityConfig[s]?.dot || severityConfig.medium.dot;
}

// 辅助函数：渲染示意图
function renderDiagram(type, r) {
  switch (type) {
    case 'wifi':
      return `
        <div class="w-full h-full flex flex-col items-center justify-center">
          <!-- 信号热力图示意 -->
          <div class="relative w-56 h-32 mb-3 rounded-lg overflow-hidden border border-slate-200">
            <!-- 房屋底色 -->
            <div class="absolute inset-0 bg-slate-50"></div>
            <!-- 信号强区域（路由器附近） -->
            <div class="absolute top-0 left-0 w-24 h-16 bg-emerald-200/70 rounded-br-[40px]"></div>
            <div class="absolute top-1 left-1 w-16 h-10 bg-emerald-300/60 rounded-br-[30px]"></div>
            <!-- 信号中等区域 -->
            <div class="absolute top-0 left-20 w-20 h-20 bg-amber-200/50"></div>
            <div class="absolute top-14 left-0 w-20 h-18 bg-amber-200/40"></div>
            <!-- 信号弱/死角区域 -->
            <div class="absolute top-0 right-0 w-16 h-16 bg-rose-200/50"></div>
            <div class="absolute bottom-0 right-0 w-20 h-16 bg-rose-200/60"></div>
            <div class="absolute bottom-0 left-8 w-20 h-16 bg-amber-100/40"></div>
            <!-- 承重墙 -->
            <div class="absolute top-0 left-1/2 w-0.5 h-full bg-slate-400/80"></div>
            <div class="absolute top-1/2 left-0 w-full h-0.5 bg-slate-400/80"></div>
            <!-- 房间标签 -->
            <div class="absolute top-1.5 left-1.5 text-[7px] text-emerald-700 font-medium bg-white/60 px-1 rounded">客厅</div>
            <div class="absolute top-1.5 right-1.5 text-[7px] text-rose-600 font-medium bg-white/60 px-1 rounded">主卧</div>
            <div class="absolute bottom-1.5 left-1.5 text-[7px] text-amber-700 font-medium bg-white/60 px-1 rounded">厨房</div>
            <div class="absolute bottom-1.5 right-1.5 text-[7px] text-rose-600 font-medium bg-white/60 px-1 rounded">卫生间</div>
            <!-- 路由器位置 -->
            <div class="absolute top-5 left-5 flex flex-col items-center z-10">
              <div class="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shadow-sm">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0"/></svg>
              </div>
              <span class="text-[7px] text-blue-700 font-bold mt-0.5 bg-white/70 px-0.5 rounded">路由器</span>
            </div>
          </div>
          <!-- 图例 -->
          <div class="flex items-center gap-3 text-[9px] mb-1">
            <span class="flex items-center gap-1"><span class="w-3 h-2 rounded-sm bg-emerald-300"></span>信号强</span>
            <span class="flex items-center gap-1"><span class="w-3 h-2 rounded-sm bg-amber-200"></span>信号弱</span>
            <span class="flex items-center gap-1"><span class="w-3 h-2 rounded-sm bg-rose-200"></span>死角</span>
          </div>
          <p class="text-[10px] text-slate-400">单路由器无法覆盖全屋，承重墙阻隔信号</p>
        </div>`;
    case 'cable_wrong':
      return `
        <div class="w-full h-full flex flex-col items-center justify-center">
          <!-- 光猫到路由器的连接示意 -->
          <div class="flex items-center gap-3 mb-4">
            <!-- 光猫 -->
            <div class="flex flex-col items-center gap-1">
              <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                ${icon('server', 'w-7 h-7 text-blue-500')}
              </div>
              <span class="text-[10px] text-slate-500">光猫</span>
            </div>
            <!-- 连接线 -->
            <div class="flex flex-col items-center gap-1 flex-1 min-w-[60px]">
              <div class="flex items-center gap-1 w-full">
                <span class="text-[9px] text-rose-500 font-medium whitespace-nowrap">百兆口</span>
                <div class="flex-1 h-1 bg-rose-300 rounded-full relative">
                  <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                    <svg class="w-3 h-3 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-1 w-full">
                <span class="text-[9px] text-emerald-500 font-medium whitespace-nowrap">千兆口</span>
                <div class="flex-1 h-1.5 bg-emerald-400 rounded-full"></div>
              </div>
            </div>
            <!-- 路由器 -->
            <div class="flex flex-col items-center gap-1">
              <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                ${icon('router', 'w-7 h-7 text-blue-500')}
              </div>
              <span class="text-[10px] text-slate-500">路由器</span>
            </div>
          </div>
          <div class="flex items-center gap-4 text-[10px]">
            <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-rose-400"></span>当前：百兆口 100M</span>
            <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-400"></span>应插：千兆口 1000M</span>
          </div>
        </div>`;
    case 'cpu_temp':
      return `
        <div class="w-full h-full flex flex-col items-center justify-center">
          <!-- 降温方法示意图 -->
          <div class="grid grid-cols-2 gap-3 w-full max-w-[260px] mb-3">
            <!-- 错误：密闭空间 -->
            <div class="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-rose-50 border border-rose-100">
              <div class="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path d="M3.75 2.25h16.5v12.75a4.5 4.5 0 01-4.5 4.5H8.25a4.5 4.5 0 01-4.5-4.5V2.25z"/><path d="M6.75 2.25v-1.5M17.25 2.25v-1.5M12 15v-3"/></svg>
              </div>
              <span class="text-[9px] text-rose-600 font-medium text-center leading-tight">不要塞进弱电箱/电视柜</span>
              <svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </div>
            <!-- 正确：通风位置 -->
            <div class="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
              <div class="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
              </div>
              <span class="text-[9px] text-emerald-600 font-medium text-center leading-tight">放在通风开阔位置</span>
              <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
            </div>
            <!-- 错误：叠放设备 -->
            <div class="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-rose-50 border border-rose-100">
              <div class="w-9 h-9 rounded-lg bg-rose-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><rect x="2" y="4" width="20" height="6" rx="2"/><rect x="2" y="14" width="20" height="6" rx="2"/><circle cx="6" cy="7" r="1"/><circle cx="6" cy="17" r="1"/></svg>
              </div>
              <span class="text-[9px] text-rose-600 font-medium text-center leading-tight">不要与光猫叠放</span>
              <svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </div>
            <!-- 正确：底部垫高 -->
            <div class="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
              <div class="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0"/></svg>
              </div>
              <span class="text-[9px] text-emerald-600 font-medium text-center leading-tight">底部垫高 2-3cm 通风</span>
              <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
            </div>
          </div>
          <div class="flex items-center gap-3 text-[10px]">
            <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-rose-400"></span>错误做法</span>
            <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-400"></span>正确做法</span>
          </div>
        </div>`;
    case 'router':
      return `
        <div class="w-full h-full flex flex-col items-center justify-center">
          <!-- 新旧路由器对比 -->
          <div class="flex items-end gap-6 mb-3">
            <!-- 旧路由器 -->
            <div class="flex flex-col items-center gap-2">
              <div class="w-16 h-10 rounded-lg bg-slate-200 flex items-center justify-center border border-slate-300">
                ${icon('router', 'w-6 h-6 text-slate-400')}
              </div>
              <div class="flex flex-col items-center gap-0.5">
                <span class="text-[10px] text-slate-500 font-medium">Wi-Fi 4</span>
                <span class="text-[9px] text-rose-400">150 Mbps</span>
              </div>
              <div class="w-12 h-1 bg-rose-300 rounded-full"></div>
            </div>
            <!-- 箭头 -->
            <div class="flex flex-col items-center justify-end pb-6">
              <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <!-- 新路由器 -->
            <div class="flex flex-col items-center gap-2">
              <div class="w-16 h-10 rounded-lg bg-blue-500 flex items-center justify-center shadow-md shadow-blue-200">
                ${icon('router', 'w-6 h-6 text-white')}
              </div>
              <div class="flex flex-col items-center gap-0.5">
                <span class="text-[10px] text-blue-600 font-medium">Wi-Fi 7</span>
                <span class="text-[9px] text-emerald-500">3000 Mbps</span>
              </div>
              <div class="w-12 h-1 bg-emerald-400 rounded-full"></div>
            </div>
          </div>
          <p class="text-xs text-slate-400">升级路由器，速率提升 20 倍</p>
        </div>`;
    case 'ont':
      return `
        <div class="w-full h-full flex flex-col items-center justify-center">
          <!-- 网络链路瓶颈示意 -->
          <div class="flex flex-col items-center gap-2 mb-3">
            <!-- 互联网 -->
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50">
              <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5"><path d="M12 21a9 9 0 100-18 9 9 0 000 18z"/><path d="M3.6 9h16.8M3.6 15h16.8"/></svg>
              <span class="text-[10px] text-blue-600 font-medium">互联网 1000M</span>
            </div>
            <!-- 宽带管道 -->
            <div class="w-4 h-4 bg-blue-300 rounded-sm"></div>
            <div class="w-6 h-4 bg-blue-400 rounded-sm"></div>
            <!-- 光猫瓶颈 -->
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200">
              ${icon('server', 'w-4 h-4 text-rose-500')}
              <span class="text-[10px] text-rose-600 font-medium">光猫 百兆口</span>
              <svg class="w-3 h-3 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </div>
            <!-- 窄管道 -->
            <div class="w-3 h-4 bg-rose-300 rounded-sm"></div>
            <div class="w-2 h-4 bg-rose-200 rounded-sm"></div>
            <!-- 路由器 -->
            <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50">
              ${icon('router', 'w-4 h-4 text-slate-500')}
              <span class="text-[10px] text-slate-500">路由器</span>
            </div>
          </div>
          <p class="text-xs text-slate-400">光猫百兆口是全屋网速瓶颈</p>
        </div>`;
    case 'cable_quality':
      return `
        <div class="w-full h-full flex flex-col items-center justify-center">
          <!-- 网线规格对比 -->
          <div class="flex items-end gap-5 mb-3">
            <!-- Cat5 -->
            <div class="flex flex-col items-center gap-1.5">
              <div class="w-10 rounded-t-lg bg-gradient-to-t from-rose-300 to-rose-200 flex items-end justify-center pb-1" style="height: 40px">
                <span class="text-[8px] text-white font-medium">Cat5</span>
              </div>
              <span class="text-[9px] text-rose-400 font-medium">100M</span>
              <div class="flex gap-0.5">
                <div class="w-0.5 h-3 bg-rose-200 rounded-full"></div>
                <div class="w-0.5 h-3 bg-rose-200 rounded-full"></div>
                <div class="w-0.5 h-3 bg-rose-200 rounded-full"></div>
                <div class="w-0.5 h-3 bg-rose-200 rounded-full"></div>
              </div>
            </div>
            <!-- Cat5e -->
            <div class="flex flex-col items-center gap-1.5">
              <div class="w-10 rounded-t-lg bg-gradient-to-t from-blue-400 to-blue-300 flex items-end justify-center pb-1" style="height: 75px">
                <span class="text-[8px] text-white font-medium">Cat5e</span>
              </div>
              <span class="text-[9px] text-blue-500 font-medium">1000M</span>
              <div class="flex gap-0.5">
                <div class="w-0.5 h-3 bg-blue-300 rounded-full"></div>
                <div class="w-0.5 h-3 bg-blue-300 rounded-full"></div>
                <div class="w-0.5 h-3 bg-blue-300 rounded-full"></div>
                <div class="w-0.5 h-3 bg-blue-300 rounded-full"></div>
                <div class="w-0.5 h-3 bg-blue-300 rounded-full"></div>
              </div>
            </div>
            <!-- Cat6 -->
            <div class="flex flex-col items-center gap-1.5">
              <div class="w-10 rounded-t-lg bg-gradient-to-t from-emerald-500 to-emerald-400 flex items-end justify-center pb-1" style="height: 100px">
                <span class="text-[8px] text-white font-medium">Cat6</span>
              </div>
              <span class="text-[9px] text-emerald-500 font-medium">1000M+</span>
              <div class="flex gap-0.5">
                <div class="w-0.5 h-3 bg-emerald-300 rounded-full"></div>
                <div class="w-0.5 h-3 bg-emerald-300 rounded-full"></div>
                <div class="w-0.5 h-3 bg-emerald-300 rounded-full"></div>
                <div class="w-0.5 h-3 bg-emerald-300 rounded-full"></div>
                <div class="w-0.5 h-3 bg-emerald-300 rounded-full"></div>
                <div class="w-0.5 h-3 bg-emerald-300 rounded-full"></div>
              </div>
            </div>
          </div>
          <p class="text-xs text-slate-400">网线规格决定速率上限，线芯越多越快</p>
        </div>`;
    default:
      return '';
  }
}
