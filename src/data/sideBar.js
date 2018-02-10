export const sideBarMenu = [
  {name: '社区人房概况', href: 'community-survey'},
  {
    name: '门禁在线管理', children: [
      {name: "开门记录", href: 'entrance-record'},
      {name: "门禁在线", href: 'entrance-online'}
    ]
  },
  {
    name: '视频监控管理', children: [
      {name: "门禁抓拍", href: 'monitor-arrest'},
      {name: "布控规则管理", href: 'monitor-control-rules'},
      {name: "人脸预警管理", href: 'monitor-face-warning'},
      {name: "人脸识别比对源管理", href: 'monitor-face-recognize'},
      {name: "人脸聚类", href: 'monitor-face-cluster'},
      {name: "尾随及可疑人员预警", href: 'monitor-sus-person'},
      {name: "门禁视频调阅", href: 'monitor-video'}
    ]
  },
  {name: '人房信息查询', href: 'hr-info-query'},
  {name: '居民列表', href: 'resident'},
  {
    name: '通知公告', children: [
      {name: "门禁通知公告", href: 'announce-entrance'},
      {name: "APP通知公告", href: 'announce-app'}
    ]
  },
  {
    name: '人房预警处置', children: [
      {name: "人员预警列表", href: 'beware-person'},
      {name: "人员预警处理历史", href: 'beware-float-population'},
      {name: "房屋预警列表", href: 'beware-room'},
      {name: "房屋预警处理历史", href: 'beware-room-history'},
      {name: "预警规则设置", href: 'beware-rules'}
    ]
  },
  {
    name: '社区管理', children: [
      {name: "人员统计报表", href: 'community-statistics'},
      {name: "出租屋流动人口核实", href: 'community-person-history'}
    ]
  },
  {
    name: '权限管理', children: [
      {name: "角色列表", href: 'auth-role'},
      {name: "用户列表", href: 'auth-user'}
    ]
  },
  {name: '警情处置规范', href: 'situation-standard'},
  {
    name: '布控告警', children: [
      {name: "黑名单管理", href: 'blacklist-manage'},
      {name: "黑名单预警", href: 'blacklist-beware'}
    ]
  },
  {name: '数据看板首页', href: 'data-board'},
]
