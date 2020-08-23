const engineList = {
  basic: {
    Google: {
      href: 'http://www.Google.com',
      searchHref: 'https://www.google.com/search?q=$search',
    },
    百度: {
      href: 'http://www.baidu.com',
      searchHref: 'https://www.baidu.com/s?wd=$search',
    },
    知乎: {
      href: '',
      searchHref: 'https://www.zhihu.com/search?type=content&q=$search',
    },
    'Google Translate': {
      href: 'https://translate.google.com',
      searchHref: 'https://translate.google.com/#view=home&op=translate&sl=en&tl=zh-CN&text=$search',
    },
    搜狗翻译: {
      href: 'https://fanyi.sogou.com',
      searchHref: 'https://fanyi.sogou.com/#auto/zh-CHS/$search',
    },
    有道翻译: {
      href: 'http://dict.youdao.com/',
      searchHref: 'http://dict.youdao.com/w/eng/$search',
    },
    联合搜索: {
      href: 'https://www.gobaidugle.com/',
      searchHref: 'https://www.gobaidugle.com/search3?keyword=$search&num=20&one=baidu&two=google&three=sogou&four=so',
    },
    '聚合(搜狗,有道)': {
      isMulti: true,
      engines: [['basic', '搜狗翻译'], ['basic', '有道翻译'], ['basic', 'Google Translate']],
    },
  },
  academic: {
    CNKI: {
      href: 'http://scholar.cnki.net',
      searchHref: 'http://scholar.cnki.net/result.aspx?q=$search',
    },
    '51下论文-知网1': {
      href: 'http://www.51xialunwen.com/',
      searchHref: 'http://a.38zhubao.net:91/kns/brief/Default_Result.aspx?txt_1_sel=FT%24%25%3D%7C&txt_1_value1=$search&txt_1_special1=%25&txt_extension=&currentid=txt_1_value1&dbJson=coreJson&dbPrefix=SCDB&db_opt=CJFQ%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCJRF%2CCCJD&singleDB=SCDB&db_codes=CJFQ%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCJRF%2CCCJD&singleDBName=&againConfigJson=false&action=scdbsearch&ua=1.11',
    },
    '51下论文-万方': {
      href: 'http://www.51xialunwen.com/',
      searchHref: 'http://www.cquc.net:8088/S/Paper.aspx?q=$search',
    },
    百度学术: {
      href: 'http://xueshu.baidu.com/',
      searchHref: 'http://xueshu.baidu.com/s?wd=$search',
    },
    'WIKI(EN)': {
      href: 'https://www.wikipedia.org',
      searchHref: 'https://en.wikipedia.org/w/index.php?search=$search',
    },
    'WIKI(中)': {
      href: 'https://www.wikipedia.org',
      searchHref: 'https://zh.wikipedia.org/w/index.php?search=$search',
    },
    百度百科: {
      href: 'https://baike.baidu.com',
      searchHref: 'https://baike.baidu.com/item/$search',
    },
    '聚合(wiki,百度)': {
      isMulti: true,
      engines: [['academic', 'WIKI(EN)'], ['academic', 'WIKI(中)'], ['academic', '百度百科']],
    },
  },

  images: {
    百度图片: {
      href: 'https://image.baidu.com/',
      searchHref: 'https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=index&fr=&hs=0&xthttps=111111&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=$search&rsp=-1',
    },
    'Google Image': {
      href: 'https://www.google.com/search?q=art&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjSj4qX35ThAhXhG6YKHbtwDAEQ_AUIDigB&biw=1536&bih=722',
      searchHref: 'https://www.google.com/search?q=$search&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjSj4qX35ThAhXhG6YKHbtwDAEQ_AUIDigB&biw=1536&bih=722',
    },
    IconFont: {
      href: 'https://www.iconfont.cn',
      searchHref: 'https://www.iconfont.cn/search/index?q=$search',
    },
    爱给网: {
      href: 'http://www.aigei.com',
      searchHref: 'http://www.aigei.com/s?q=$search&type=2d',
    },
  },
  'passages, books': {
    豆瓣读书: {
      href: 'https://book.douban.com/',
      searchHref: 'https://book.douban.com/subject_search?search_text=$search',
    },
    goodreads: {
      href: 'https://www.goodreads.com/search',
      searchHref: 'https://www.goodreads.com/search?utf8=%E2%9C%93&q=$search',
    },
    公众号: {
      href: 'https://weixin.sogou.com/weixin',
      searchHref: 'https://weixin.sogou.com/weixin?type=2&query=$search&ie=utf8&s_from=input',
    },
    鸠摩搜索: {
      href: 'https://www.jiumodiary.com/',
      searchHref: 'https://www.jiumodiary.com/',
    },
    epubee: {
      href: 'http://cn.epubee.com/books/',
      searchHref: 'http://cn.epubee.com/books/?s=$search',
    },
  },
  programs: {
    github: {
      href: 'https://github.com/',
      searchHref: 'https://github.com/search?q=$search',
    },
    stackoverflow: {
      href: 'https://stackoverflow.com',
      searchHref: 'https://stackoverflow.com/search?q=$search',
    },
    阮一峰: {
      href: 'http://www.ruanyifeng.com/blog/',
      searchHref: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=$search%20site%3Awww.ruanyifeng.com',
    },
    码农翻身: {
      href: 'http://www.ruanyifeng.com/blog/',
      searchHref: 'https://weixin.sogou.com/weixin?type=2&s_from=input&query=$search+%E7%A0%81%E5%86%9C%E7%BF%BB%E8%BA%AB',
    },
  },
  others: {
    淘宝: {
      href: 'https://taobao.com',
      searchHref: 'https://s.taobao.com/search?q=$search',
    },
    汉典: {
      href: 'http://www.zdic.net',
      searchHref: 'https://www.zdic.net/hans/$search',
    },
    豆瓣电影: {
      href: 'https://movie.douban.com',
      searchHref: 'https://movie.douban.com/subject_search?search_text=$search',
    },
    网易云音乐: {
      href: 'https://music.163.com/#/search',
      searchHref: 'https://music.163.com/#/search/m/?s=$search',
    },
    youtube: {
      href: 'https://www.youtube.com',
      searchHref: 'https://www.youtube.com/results?search_query=$search',
    },
  },
};
