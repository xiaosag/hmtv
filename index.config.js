// 迷你引擎配置（构建时生成，可读）
module.exports = {
  brand: "迷你猫源",
  port: 8888,
  sites: [
    {
      "key": "nodejs_douban_hot",
      "name": "🔥热门·推荐",
      "type": 3,
      "api": "/spider/douban_hot/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_baseset",
      "name": "⚙配置·中枢",
      "type": 3,
      "api": "/spider/baseset/3",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_wanou_pan",
      "name": "🧸玩偶·4K",
      "type": 3,
      "api": "/spider/wanou_pan/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_muou_share",
      "name": "🎭木偶·4K",
      "type": 3,
      "api": "/spider/muou_share/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_duoduo_pan",
      "name": "☁️多多·4K",
      "type": 3,
      "api": "/spider/duoduo_pan/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_shandian_tv",
      "name": "⚡闪电·4K",
      "type": 3,
      "api": "/spider/shandian_tv/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_pomo_pan",
      "name": "💿原盘·4K",
      "type": 3,
      "api": "/spider/pomo_pan/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_huajuan_pan",
      "name": "🥐花卷·4K",
      "type": 3,
      "api": "/spider/huajuan_pan/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_pianku_pan",
      "name": "🧩片库·4K",
      "type": 3,
      "api": "/spider/pianku_pan/3",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_hongguo_node",
      "name": "🍎红果 - 短剧",
      "type": 3,
      "api": "/spider/hongguo_node/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_xingya_short",
      "name": "🌱星芽 - 短剧",
      "type": 3,
      "api": "/spider/xingya_short/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_huangguo_ai_local",
      "name": "🍊黄果 - 短剧",
      "type": 3,
      "api": "/spider/huangguo_ai_local/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "adult": true
    },
    {
      "key": "nodejs_duanju_bashi",
      "name": "🎬短剧 - 巴士",
      "type": 3,
      "api": "/spider/duanju_bashi/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_duanju_daquan",
      "name": "🎬短剧 - 大全",
      "type": 3,
      "api": "/spider/duanju_daquan/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_hema_duanju",
      "name": "🦛河马 - 短剧",
      "type": 3,
      "api": "/spider/hema_duanju/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_hongdou_duanju",
      "name": "🫘红豆 - 短剧",
      "type": 3,
      "api": "/spider/hongdou_duanju/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_asmrba",
      "name": "🎧ASMR 吧 - 助眠",
      "type": 3,
      "api": "/spider/asmrba/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_xingmeng_asmr",
      "name": "✨星梦 ASMR-S",
      "type": 3,
      "api": "/spider/xingmeng_asmr/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_ximalaya",
      "name": "🏔喜马拉雅-听书",
      "type": 3,
      "api": "/spider/ximalaya/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_yueting",
      "name": "🎧悦听 - 听书",
      "type": 3,
      "api": "/spider/yueting/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_tiantian_4k",
      "name": "☀️天天 - 4K",
      "type": 3,
      "api": "/spider/tiantian_4k/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_yidong_4k",
      "name": "♨️移动 - 4K",
      "type": 3,
      "api": "/spider/yidong_4k/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_fengye4k",
      "name": "🍁枫叶 - 4K",
      "type": 3,
      "api": "/spider/fengye4k/3",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_juxiafan_4k",
      "name": "🍚剧饭 - 4K",
      "type": 3,
      "api": "/spider/juxiafan_4k/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_tencent_video",
      "name": "🐧腾讯- 4K",
      "type": 3,
      "api": "/spider/tencent_video/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_gulu_4k",
      "name": "💧咕噜 - 4K",
      "type": 3,
      "api": "/spider/gulu_4k/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_juzi_4k",
      "name": "🧃橘汁 - 4K",
      "type": 3,
      "api": "/spider/juzi_4k/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_hqvod4k",
      "name": "📺点播 - 4K",
      "type": 3,
      "api": "/spider/hqvod4k/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_guazi",
      "name": "🌰瓜子 - 2K",
      "type": 3,
      "api": "/spider/guazi/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_youtube_video",
      "name": "▶️YouTube",
      "type": 3,
      "api": "/spider/youtube_video/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_netflix_cat",
      "name": "🌐飞猫- 极速",
      "type": 3,
      "api": "/spider/netflix_cat/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_xiaoyouzi",
      "name": "🍊柚子 - 极速",
      "type": 3,
      "api": "/spider/xiaoyouzi/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_zhuijudaren",
      "name": "🏆达人 - 极速",
      "type": 3,
      "api": "/spider/zhuijudaren/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_duse91",
      "name": "🐍毒蛇- 极速",
      "type": 3,
      "api": "/spider/duse91/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_fenzhu",
      "name": "🐷猪猪侠 - 极速",
      "type": 3,
      "api": "/spider/fenzhu/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_mengtaiqi",
      "name": "🐺灰太狼 - 极速",
      "type": 3,
      "api": "/spider/mengtaiqi/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_nivod_fast",
      "name": "📹泥视频 - 极速",
      "type": 3,
      "api": "/spider/nivod_fast/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_duboku",
      "name": "📺独播库 - 极速",
      "type": 3,
      "api": "/spider/duboku/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 1
    },
    {
      "key": "nodejs_duoduo_tv",
      "name": "📺多多影视 - 极速",
      "type": 3,
      "api": "/spider/duoduo_tv/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_chabeihu",
      "name": "🦊茶杯狐 - 极速",
      "type": 3,
      "api": "/spider/chabeihu/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_dshixiong_tv",
      "name": "🚀师兄 - 极速",
      "type": 3,
      "api": "/spider/dshixiong_tv/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_zhenpin_video",
      "name": "💎臻品 - 极速",
      "type": 3,
      "api": "/spider/zhenpin_video/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_wencaiyingshi",
      "name": "📖文才 - 极速",
      "type": 3,
      "api": "/spider/wencaiyingshi/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_jisu_zhuiju",
      "name": "📺追剧 - 极速",
      "type": 3,
      "api": "/spider/jisu_zhuiju/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_jianpian",
      "name": "📽荐片- 极速",
      "type": 3,
      "api": "/spider/jianpian/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_rebo_fast",
      "name": "🔥热播 - 极速",
      "type": 3,
      "api": "/spider/rebo_fast/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_linglingqi",
      "name": "🕵️凌凌漆 - 极速",
      "type": 3,
      "api": "/spider/linglingqi/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "nodejs_kanju_ai",
      "name": "🤖看剧 AI - 极速",
      "type": 3,
      "api": "/spider/kanju_ai/3",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0
    },
    {
      "key": "nodejs_hudie_yingyuan",
      "name": "🦋蝴蝶 - 影院",
      "type": 3,
      "api": "/spider/hudie_yingyuan/3",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 0,
      "adult": true
    },
    {
      "key": "nodejs_xin6v",
      "name": "🧲磁力- 极速",
      "type": 3,
      "api": "/spider/xin6v/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    },
    {
      "key": "nodejs_dongman_bashi_fast",
      "name": "🚌巴士-动漫",
      "type": 3,
      "api": "/spider/dongman_bashi_fast/3",
      "searchable": 1,
      "quickSearch": 0,
      "filterable": 0
    }
  ],
};

globalThis.__MINI_CONFIG__ = module.exports;
