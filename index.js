// vars
const multiUrl = './multi.html';
let curSelectedEngineEl = null;

// build engines dom
let engineDomStr = '';
let engineDom;
const engineContainer = $('#engine-container');
let i = 1;
for (const groupName in engineList) {
  engineDomStr += `<ul class="engine-group"> <div class="engine-group-name">${groupName}</div>`;
  let j = 1;
  for (const engineName in engineList[groupName]) {
    engineList[groupName][engineName].id = String(i) + j;
    const engine = engineList[groupName][engineName];
    engineDomStr += `<li class="engine"
      data-path="${groupName}---${engineName}"
      data-engine-id="${engine.id}"
      >
      ${engine.id}. 
      <img class="engine-icon" src="./imgs/${engine.isMulti ? 'multi' : engineName}.png">
      <span class="engine-name">${engineName}</span>
    </li>`;
    j++;
  }
  i++;
  engineDomStr += '</ul>';
}
engineDom = $(engineDomStr);
engineContainer.append(engineDom);

// prepare DOMs
const titleEl = $('title');
const engineEls = $('.engine');
const searchInputEl = $('#input-area');
const curEngineName = $('#cur-engine-name');
setSelectedEngine(engineEls, $(engineEls[0]));

// bind click search event
for (const engineEl of engineEls) {
  engineEl.addEventListener('click', (e) => {
    const path = e.currentTarget.getAttribute('data-path').split('---');
    const engine = engineList[path[0]][path[1]];
    setSelectedEngine(engineEls, $(e.currentTarget));
    const searchText = searchInputEl.val();
    titleEl.text(`搜索 ${searchText}`);
    if (!searchText) { // open website
      const { href } = engine;
      if (href) window.open(href, '_blank');
    } else { // seach
      if (!engine.isMulti) { // single search
        const href = engine.searchHref.replace('$search', searchText);
        window.open(href, '_blank');
      } else { // multiple search
        const query = [path[1]];
        for (const enPath of engine.engines) {
          const en = engineList[enPath[0]][enPath[1]];
          query.push(en.searchHref.replace('$search', searchText));
        }
        query[0] += `: ${searchText}`;
        window.open(`${multiUrl}?${encodeURIComponent(JSON.stringify(query))}`, '_blank');
      }
    }
  });
}

// bind Enter search event
searchInputEl.on('keydown', (e) => {
  // 阻止回车. 因为回车用于搜索功能了, 如果想要输入回车, 需要输入shift + 回车
  if (!e.shiftKey && e.keyCode === 13) {
    e.preventDefault();
  }
  setTimeout(() => {
    // // 在文本开始选择引擎
    const searchText = searchInputEl.val();
    // const matchRes1 = searchText.match(/^\s[0-9]{2}\s/);
    // if (matchRes1 && matchRes1.length > 0) {
    //   const engineId = matchRes1[0].trim();
    //   for (const groupName in engineList) {
    //     for (const engineName in engineList[groupName]) {
    //       if (engineList[groupName][engineName].id === engineId) {
    //         setSelectedEngine(engineEls, $(`[data-engine-id="${engineId}"]`));
    //         searchInputEl.val('');
    //       }
    //     }
    //   }
    // }
    // // 在文本末尾选择引擎(并直接触发搜索)
    // const matchRes2 = searchText.match(/(.+)(\s[0-9]{2}\s)$/);
    // if (matchRes2 && matchRes2.length > 0) {
    //   const engineId = matchRes2[2].trim();
    //   for (const groupName in engineList) {
    //     for (const engineName in engineList[groupName]) {
    //       if (engineList[groupName][engineName].id === engineId) {
    //         const oldInputVal = searchInputEl.val();
    //         searchInputEl.val(oldInputVal.slice(0, oldInputVal.length - Number(matchRes2[2].length)));
    //         setSelectedEngine(engineEls, $(`[data-engine-id="${engineId}"]`));
    //         curSelectedEngineEl.trigger('click');
    //       }
    //     }
    //   }
    // }
    // 搜索
    if (!e.shiftKey && e.keyCode === 13 && searchText) {
      // 搜索git
      let realSearchText;
      if (searchText.startsWith('git|')) {
        // git atlassian
        realSearchText = `${searchText.replace('git|', '')} site:https://www.atlassian.com/git/tutorials`;
        window.open(`https://www.google.com.hk/search?newwindow=1&c2coff=1&safe=strict&ei=zjrSXr-IILGCr7wP3sWGoAE&q=${encodeURIComponent(realSearchText)}&oq=${encodeURIComponent(realSearchText)}&gs_lcp=CgZwc3ktYWIQAzoECAAQQzoCCAA6BggAEAoQQzoFCCEQoAFQ1SJYhVJg1VVoBHAAeACAAdgBiAHQDpIBBjYuMTAuMZgBAKABAaABAqoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi_p8fOtdvpAhUxwYsBHd6iARQQ4dUDCAw&uact=5`, '_blank');

        // stackoverflow
        realSearchText = `${searchText.replace('git|', '')} site:https://stackoverflow.com/`;
        realSearchText = `git ${realSearchText}`;
        window.open(`https://www.google.com.hk/search?newwindow=1&c2coff=1&safe=strict&ei=zjrSXr-IILGCr7wP3sWGoAE&q=${encodeURIComponent(realSearchText)}&oq=${encodeURIComponent(realSearchText)}&gs_lcp=CgZwc3ktYWIQAzoECAAQQzoCCAA6BggAEAoQQzoFCCEQoAFQ1SJYhVJg1VVoBHAAeACAAdgBiAHQDpIBBjYuMTAuMZgBAKABAaABAqoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi_p8fOtdvpAhUxwYsBHd6iARQQ4dUDCAw&uact=5`, '_blank');

        // git官网
        realSearchText = `${searchText.replace('git|', '')} site:https://git-scm.com/`;
        window.open(`https://www.google.com.hk/search?newwindow=1&c2coff=1&safe=strict&ei=zjrSXr-IILGCr7wP3sWGoAE&q=${encodeURIComponent(realSearchText)}&oq=${encodeURIComponent(realSearchText)}&gs_lcp=CgZwc3ktYWIQAzoECAAQQzoCCAA6BggAEAoQQzoFCCEQoAFQ1SJYhVJg1VVoBHAAeACAAdgBiAHQDpIBBjYuMTAuMZgBAKABAaABAqoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi_p8fOtdvpAhUxwYsBHd6iARQQ4dUDCAw&uact=5`, '_blank');
      } else if (searchText.startsWith('vue|')) {
        // 掘金
        realSearchText = `${searchText.replace('vue|', '')} site:https://stackoverflow.com/`;
        realSearchText = `vue ${realSearchText}`;
        window.open(`https://www.google.com.hk/search?newwindow=1&c2coff=1&safe=strict&ei=zjrSXr-IILGCr7wP3sWGoAE&q=${encodeURIComponent(realSearchText)}&oq=${encodeURIComponent(realSearchText)}&gs_lcp=CgZwc3ktYWIQAzoECAAQQzoCCAA6BggAEAoQQzoFCCEQoAFQ1SJYhVJg1VVoBHAAeACAAdgBiAHQDpIBBjYuMTAuMZgBAKABAaABAqoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi_p8fOtdvpAhUxwYsBHd6iARQQ4dUDCAw&uact=5`, '_blank');
        // stackoverflow
        realSearchText = `${searchText.replace('vue|', '')} site:https://stackoverflow.com/`;
        realSearchText = `vue ${realSearchText}`;
        window.open(`https://www.google.com.hk/search?newwindow=1&c2coff=1&safe=strict&ei=zjrSXr-IILGCr7wP3sWGoAE&q=${encodeURIComponent(realSearchText)}&oq=${encodeURIComponent(realSearchText)}&gs_lcp=CgZwc3ktYWIQAzoECAAQQzoCCAA6BggAEAoQQzoFCCEQoAFQ1SJYhVJg1VVoBHAAeACAAdgBiAHQDpIBBjYuMTAuMZgBAKABAaABAqoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi_p8fOtdvpAhUxwYsBHd6iARQQ4dUDCAw&uact=5`, '_blank');
        // vue-router
        realSearchText = `${searchText.replace('vue|', '')} site:https://router.vuejs.org/zh/`;
        window.open(`https://www.google.com.hk/search?newwindow=1&c2coff=1&safe=strict&ei=zjrSXr-IILGCr7wP3sWGoAE&q=${encodeURIComponent(realSearchText)}&oq=${encodeURIComponent(realSearchText)}&gs_lcp=CgZwc3ktYWIQAzoECAAQQzoCCAA6BggAEAoQQzoFCCEQoAFQ1SJYhVJg1VVoBHAAeACAAdgBiAHQDpIBBjYuMTAuMZgBAKABAaABAqoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi_p8fOtdvpAhUxwYsBHd6iARQQ4dUDCAw&uact=5`, '_blank');
        // vuex
        realSearchText = `${searchText.replace('vue|', '')} site:https://vuex.vuejs.org/zh/`;
        window.open(`https://www.google.com.hk/search?newwindow=1&c2coff=1&safe=strict&ei=zjrSXr-IILGCr7wP3sWGoAE&q=${encodeURIComponent(realSearchText)}&oq=${encodeURIComponent(realSearchText)}&gs_lcp=CgZwc3ktYWIQAzoECAAQQzoCCAA6BggAEAoQQzoFCCEQoAFQ1SJYhVJg1VVoBHAAeACAAdgBiAHQDpIBBjYuMTAuMZgBAKABAaABAqoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi_p8fOtdvpAhUxwYsBHd6iARQQ4dUDCAw&uact=5`, '_blank');

        // vue官网
        realSearchText = `${searchText.replace('vue|', '')} site:https://cn.vuejs.org/`;
        window.open(`https://www.google.com.hk/search?newwindow=1&c2coff=1&safe=strict&ei=zjrSXr-IILGCr7wP3sWGoAE&q=${encodeURIComponent(realSearchText)}&oq=${encodeURIComponent(realSearchText)}&gs_lcp=CgZwc3ktYWIQAzoECAAQQzoCCAA6BggAEAoQQzoFCCEQoAFQ1SJYhVJg1VVoBHAAeACAAdgBiAHQDpIBBjYuMTAuMZgBAKABAaABAqoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwi_p8fOtdvpAhUxwYsBHd6iARQQ4dUDCAw&uact=5`, '_blank');
      } else {
        curSelectedEngineEl.trigger('click');
      }
    }
  }, 0);
});

// functoin: clear input area
$('#clear-input-area').on('click', (e) => {
  searchInputEl.val('');
  searchInputEl.focus();
});

// functoin: auto focus input
$(() => {
  $('#input-area').focus();
});

// functoin: set selected engine
function setSelectedEngine(engineEls, selectedEngineEl) {
  for (const engine of engineEls) {
    engine.classList.remove('selected');
  }
  selectedEngineEl.addClass('selected');
  curEngineName.text(selectedEngineEl.text());
  curSelectedEngineEl = selectedEngineEl;
}
