const engineList = {
  basic: [
    {
      name: 'Google',
      href: 'http://www.Google.com',
      searchHref: 'https://www.google.com/search?q=$search',
    },{
      name: '百度',
      href: 'http://www.baidu.com',
      searchHref: 'https://www.baidu.com/s?wd=$search',
      // isIframe: true,
    }, {
      name: '知乎',
      href: 'https://www.zhihu.com',
      searchHref: 'https://www.zhihu.com/search?type=content&q=$search',
    }, {
      name: '联合搜索',
      href: 'https://www.gobaidugle.com/',
      searchHref: 'https://www.gobaidugle.com/search3?keyword=$search&num=10&one=baidu&two=google&three=sogou&four=so',
    }, 
    {
      name: 'Google Translate',
      href: 'https://translate.google.com',
      searchHref: 'https://translate.google.com/#view=home&op=translate&sl=en&tl=zh-CN&text=$search',
    }, {
      name: '搜狗翻译',
      href: 'https://fanyi.sogou.com',
      searchHref: 'https://fanyi.sogou.com/#auto/zh-CHS/$search',
      // isIframe: true,
    }, {
      name: '有道词典',
      href: 'http://dict.youdao.com/',
      searchHref: 'http://dict.youdao.com/w/eng/$search',
      // isIframe: true,
    }
  ],
  academic: [
    {
      name: 'CNKI',
      href: 'http://scholar.cnki.net',
      searchHref: 'http://scholar.cnki.net/result.aspx?q=$search',
    }, {
      name: '51下论文-知网1',
      href: 'http://www.51xialunwen.com/',
      searchHref: 'http://a.38zhubao.net:91/kns/brief/Default_Result.aspx?txt_1_sel=FT%24%25%3D%7C&txt_1_value1=$search&txt_1_special1=%25&txt_extension=&currentid=txt_1_value1&dbJson=coreJson&dbPrefix=SCDB&db_opt=CJFQ%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCJRF%2CCCJD&singleDB=SCDB&db_codes=CJFQ%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCJRF%2CCCJD&singleDBName=&againConfigJson=false&action=scdbsearch&ua=1.11',
    }, {
      name: '51下论文-万方',
      href: 'http://www.51xialunwen.com/',
      searchHref: 'http://www.cquc.net:8088/S/Paper.aspx?q=$search',
    }, {
      name: '百度学术',
      href: 'http://xueshu.baidu.com/',
      searchHref: 'http://xueshu.baidu.com/s?wd=$search',
    },{
      name: 'WIKI(EN)',
      href: 'https://www.wikipedia.org',
      searchHref: 'https://en.wikipedia.org/w/index.php?search=$search',
      // isIframe: true,
    },{
      name: 'WIKI(中)',
      href: 'https://www.wikipedia.org',
      searchHref: 'https://zh.wikipedia.org/w/index.php?search=$search',
      // isIframe: true,
    }, {
      name: '百度百科',
      href: 'https://baike.baidu.com',
      searchHref: 'https://baike.baidu.com/item/$search',
      // isIframe: true,
    }
  ],
  images: [
    {
      name: '百度图片',
      href: 'https://image.baidu.com/',
      searchHref: 'https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=index&fr=&hs=0&xthttps=111111&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=$search&rsp=-1',
      // isIframe: true,
    }, {
      name: 'Google Image',
      href: 'https://www.google.com/search?q=art&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjSj4qX35ThAhXhG6YKHbtwDAEQ_AUIDigB&biw=1536&bih=722',
      searchHref: 'https://www.google.com/search?q=$search&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjSj4qX35ThAhXhG6YKHbtwDAEQ_AUIDigB&biw=1536&bih=722',
    }, {
      name: 'IconFont',
      href: 'https://www.iconfont.cn',
      searchHref: 'https://www.iconfont.cn/search/index?q=$search',
    }, {
      name: '爱给网',
      href: 'http://www.aigei.com',
      searchHref: 'http://www.aigei.com/s?q=$search&type=2d',
    }
  ],
  "passages, books": [
    {
      name: '豆瓣读书',
      href: 'https://book.douban.com/',
      searchHref: 'https://book.douban.com/subject_search?search_text=$search',
    },
    {
      name: 'goodreads',
      href: 'https://www.goodreads.com/search',
      searchHref: 'https://www.goodreads.com/search?utf8=%E2%9C%93&q=$search',
    },{
      name: '公众号',
      href: 'https://weixin.sogou.com/weixin',
      searchHref: 'https://weixin.sogou.com/weixin?type=2&query=$search&ie=utf8&s_from=input',
    }, {
      name: '鸠摩搜书',
      href: 'https://www.jiumodiary.com/',
      searchHref: 'https://www.jiumodiary.com/',
    }, {
      name: 'epubee',
      href: 'http://cn.epubee.com/books/',
      searchHref: 'http://cn.epubee.com/books/?s=$search',
    },
  ],
  program: [
    {
      name: 'github',
      href: 'https://github.com/',
      searchHref: 'https://github.com/search?q=$search',
    }, {
      name: 'stackoverflow',
      href: 'https://stackoverflow.com',
      searchHref: 'https://stackoverflow.com/search?q=$search',
    },{
      name: '阮一峰的网络日志',
      href: 'http://www.ruanyifeng.com/blog/',
      searchHref: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=$search%20site%3Awww.ruanyifeng.com',
    },{
      name: '码农翻身',
      href: 'http://www.ruanyifeng.com/blog/',
      searchHref: 'https://weixin.sogou.com/weixin?type=2&s_from=input&query=$search+%E7%A0%81%E5%86%9C%E7%BF%BB%E8%BA%AB',
    }
  ],
  others: [
    {
      name: '淘宝',
      href: 'https://s.taobao.com',
      searchHref: 'https://s.taobao.com/search?q=$search',
      // isIframe: true,
    },{
      name: '汉典',
      href: 'http://www.zdic.net',
      searchHref: 'http://www.zdic.net/sousuo/?q=$search',
      // isIframe: true,
    },{
      name: '豆瓣电影',
      href: 'https://movie.douban.com',
      searchHref: 'https://movie.douban.com/subject_search?search_text=$search',
    },{
      name: '网易云音乐',
      href: 'https://music.163.com/#/search',
      searchHref: 'https://music.163.com/#/search/m/?s=$search',
    }
    
  ]
};

// build engines dom
let engineDomStr = '';
let engineDom;
const engineContainer = $('#engine-container');
let i = 1;
for (let groupName in engineList) {
  engineDomStr += `<ul class="engine-group"> <div class="engine-group-name">${groupName}</div>`
  let j = 1;
  for (let engine of engineList[groupName]) {
    engineDomStr += `<li class="engine ${engine.isIframe ? 'is-frame' : ''}" data-href="${engine.href}" data-search-href="${engine.searchHref}" data-engine-id="${String(i) + j}" data-is-iframe="${engine.isIframe}">
      ${String(i) + j}. 
      <img class="engine-icon" src="./imgs/${engine.name}.png">
      <span class="engine-name">${engine.name}</span>
    </li>`;
    j++;
  }
  i++;
  engineDomStr += '</ul>'
}
engineDom = $(engineDomStr);
engineContainer.append(engineDom);

// prepare DOMs & variables
const title = $('title');
const engines = $('.engine');
const iframe = $('#search-content iframe');
const searchInput = $('#input-area');
let selectedEngine = $(engines[0]);
setSelectedEngine(engines, selectedEngine);

// bind click search event
for (let engine of engines) {
  engine.addEventListener('click', e => {
    selectedEngine = $(e.currentTarget);
    setSelectedEngine(engines, selectedEngine)
    iframe.attr('src', '');
    const isIframe = e.currentTarget.getAttribute('data-is-iframe');
    const searchText = searchInput.val();
    title.text(`${searchText}-${e.currentTarget.innerText}`);
    if (!searchText) { // open website
      let href = e.currentTarget.getAttribute('data-href');
      if (isIframe === 'true') {
        iframe.attr('src', href);
      } else {
        window.open(href, '_blank');
      }
    } else {  // seach
      let href = e.currentTarget.getAttribute('data-search-href').replace('$search', searchText);
      if (isIframe === 'true') {
        iframe.attr('src', href);
      } else {
        window.open(href, '_blank');
      }
    }
  })
}

// bind Enter search event
searchInput.on('keydown', e => {
  if (!e.shiftKey && e.keyCode === 13) {  // 阻止回车. 因为回车用于搜索功能了, 如果想要输入回车, 需要输入shift + 回车
    e.preventDefault();
  }
  setTimeout(() => {
    const searchText = searchInput.val();
    let matchRes1 = searchText.match(/^\s[0-9]{2}\s/); // 在文本开始选择引擎
    if (matchRes1 && matchRes1.length > 0) {
      for (let engine of engines) {
        if (engine.getAttribute('data-engine-id') === matchRes1[0].trim()) {
          selectedEngine = $(engine);
          setSelectedEngine(engines, selectedEngine);
          searchInput.val('');
        }
      }
    }

    let matchRes2 = searchText.match(/(.+)(\s[0-9]{2}\s)$/) // 在文本末尾选择引擎
    if (matchRes2 && matchRes2.length > 0) {
      for (let engine of engines) {
        if (engine.getAttribute('data-engine-id') === matchRes2[2].trim()) {
          selectedEngine = $(engine);
          setSelectedEngine(engines, selectedEngine);
          let oldInputVal = searchInput.val();
          searchInput.val(oldInputVal.slice(0, oldInputVal.length - Number(matchRes2[2].length)));
          selectedEngine.trigger('click');
        }
      }
    }

    if (!e.shiftKey && e.keyCode === 13 && searchText) {
      selectedEngine.trigger('click');
    }
  }, 0);
});

// clear input area
$('#clear-input-area').on('click', e => {
  searchInput.val('');
  searchInput.focus();
});

// auto focus input 
$(() => {
  $('#input-area').focus();
})

// functoin: set selected engine
function setSelectedEngine (engines, selectedEngine) {
  for (let engine of engines) {
    engine.classList.remove('selected');
  }
  selectedEngine.addClass('selected');
  const selectedEngineName = selectedEngine.text();
}