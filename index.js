const engineList = {
  basic: [
    {
      name: '百度',
      href: 'http://www.baidu.com',
      searchHref: 'https://www.baidu.com/s?wd=$search',
      isIframe: true,
    }, {
      name: 'Google',
      href: 'http://www.Google.com',
      searchHref: 'https://www.google.com/search?q=$search',
    }, {
      name: '知乎',
      href: 'https://www.zhihu.com',
      searchHref: 'https://www.zhihu.com/search?type=content&q=$search',
    }
  ],
  images: [
    {
      name: '百度图片',
      href: 'https://image.baidu.com/',
      searchHref: 'https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=index&fr=&hs=0&xthttps=111111&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=$search&rsp=-1',
      isIframe: true,
    }, {
      name: 'Google Image',
      href: 'https://www.google.com/search?q=art&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjSj4qX35ThAhXhG6YKHbtwDAEQ_AUIDigB&biw=1536&bih=722',
      searchHref: 'https://www.google.com/search?q=$search&newwindow=1&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjSj4qX35ThAhXhG6YKHbtwDAEQ_AUIDigB&biw=1536&bih=722',
    }, {
      name: 'IconFont',
      href: 'https://www.iconfont.cn',
      searchHref: 'https://www.iconfont.cn/search/index?q=$search',
    }
  ],
  wikis: [
    {
      name: 'WIKI(EN)',
      href: 'https://www.wikipedia.org',
      searchHref: 'https://en.wikipedia.org/w/index.php?search=$search',
      isIframe: true,
    },{
      name: 'WIKI(中)',
      href: 'https://www.wikipedia.org',
      searchHref: 'https://zh.wikipedia.org/w/index.php?search=$search',
      isIframe: true,
    }, {
      name: '百度百科',
      href: 'https://baike.baidu.com',
      searchHref: 'https://baike.baidu.com/item/$search',
      isIframe: true,
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
    }
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
    }
  ],
  others: [
    {
      name: 'Google Translate',
      href: 'https://translate.google.com',
      searchHref: 'https://translate.google.com/#view=home&op=translate&sl=en&tl=zh-CN&text=$search',
    }, {
      name: '公众号',
      href: 'https://weixin.sogou.com/weixin',
      searchHref: 'https://weixin.sogou.com/weixin?type=2&query=$search&ie=utf8&s_from=input',
      isIframe: true,
    }, {
      name: '汉典',
      href: 'http://www.zdic.net',
      searchHref: 'http://www.zdic.net/sousuo/?q=$search',
      isIframe: true,
    }, {
      name: '淘宝',
      href: 'https://s.taobao.com',
      searchHref: 'https://s.taobao.com/search?q=$search',
      isIframe: true,
    }, {
      name: '豆瓣电影',
      href: 'https://movie.douban.com',
      searchHref: 'https://movie.douban.com/subject_search?search_text=$search',
    }
  ]
};

// build engines dom
let engineDomStr = '';
let engineDom;
const engineContainer = $('#engine-container');
let i = 1;
for (let groupName in engineList) {
  engineDomStr += `<ul class="engine-group"> <span class="engine-group-name">${groupName}<span>`
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

// bind click search event
const title = $('title');
const engines = $('.engine');
const iframe = $('#search-content iframe');
for (let engine of engines) {
  engine.addEventListener('click', e => {
    for (let engine of engines) {
      engine.classList.remove('selected');
    }
    e.currentTarget.classList.add('selected');
    selectedEngine = e.currentTarget;
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

// set default search engine
let selectedEngine = $(engines[0]);
selectedEngine.addClass('selected');

// bind Enter search event
const searchInput = $('#search-bar input');
searchInput.on('keydown', e => {
  setTimeout(() => {
    const searchText = searchInput.val();
    let matchRes1 = searchText.match(/^\s[0-9]{2}\s/); // 在文本开始选择引擎
    if (matchRes1 && matchRes1.length > 0) {
      for (let engine of engines) {
        engine.classList.remove('selected');
        if (engine.getAttribute('data-engine-id') === matchRes1[0].trim()) {
          engine.classList.add('selected');
          selectedEngine = engine;
          searchInput.val('');
        }
      }
    }

    let matchRes2 = searchText.match(/(.+)(\s[0-9]{2}\s)$/) // 在文本末尾选择引擎
    if (matchRes2 && matchRes2.length > 0) {
      console.log(matchRes2[2].length);
      for (let engine of engines) {
        engine.classList.remove('selected');
        if (engine.getAttribute('data-engine-id') === matchRes2[2].trim()) {
          engine.classList.add('selected');
          selectedEngine = engine;
          let oldInputVal = searchInput.val();
          searchInput.val(oldInputVal.slice(0, oldInputVal.length - Number(matchRes2[2].length)));
          $(selectedEngine).trigger('click');
        }
      }
    }

    if (e.keyCode === 13 && searchText) {
      $(selectedEngine).trigger('click');
    }
  }, 0);
})

// auto focus input 
$(() => {
  $('#search-bar input').focus();
})
