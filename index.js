// vars
const multiUrl = './multi.html';
let curSelectedEngineEl = null;

// build engines dom
let engineDomStr = '';
let engineDom;
const engineContainer = $('#engine-container');
let i = 1;
for (let groupName in engineList) {
  engineDomStr += `<ul class="engine-group"> <div class="engine-group-name">${groupName}</div>`
  let j = 1;
  for (let engineName in engineList[groupName]) {
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
  engineDomStr += '</ul>'
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
for (let engineEl of engineEls) {
  engineEl.addEventListener('click', e => {
    let path = e.currentTarget.getAttribute('data-path').split('---');
    let engine = engineList[path[0]][path[1]];
    setSelectedEngine(engineEls, $(e.currentTarget))
    const searchText = searchInputEl.val();
    titleEl.text(`搜索: ${searchText}`);
    if (!searchText) { // open website
      let href = engine.href;
      if (href) window.open(href, '_blank');
    } else {  // seach
      if (!engine.isMulti) { // single search
        let href = engine.searchHref.replace('$search', searchText);
        window.open(href, '_blank');
      } else { // multiple search
        const query = [path[1]];
        for (let enPath of engine.engines) {
          let en = engineList[enPath[0]][enPath[1]];
          query.push(en.searchHref.replace('$search', searchText));
        }
        query[0] += ': ' + searchText;
        window.open(`${multiUrl}?${encodeURIComponent(JSON.stringify(query))}`, '_blank');
      }
    }
  })
}

// bind Enter search event
searchInputEl.on('keydown', e => {
  // 阻止回车. 因为回车用于搜索功能了, 如果想要输入回车, 需要输入shift + 回车
  if (!e.shiftKey && e.keyCode === 13) {
    e.preventDefault();
  }
  setTimeout(() => {
    // 在文本开始选择引擎
    const searchText = searchInputEl.val();
    let matchRes1 = searchText.match(/^\s[0-9]{2}\s/);
    if (matchRes1 && matchRes1.length > 0) {
      let engineId = matchRes1[0].trim();
      for (let groupName in engineList) {
        for (let engineName in engineList[groupName]) {
          if (engineList[groupName][engineName].id === engineId) {
            setSelectedEngine(engineEls, $(`[data-engine-id="${engineId}"]`))
            searchInputEl.val('');
          }
        }
      }
    }
    // 在文本末尾选择引擎(并直接触发搜索)
    let matchRes2 = searchText.match(/(.+)(\s[0-9]{2}\s)$/)
    if (matchRes2 && matchRes2.length > 0) {
      let engineId = matchRes2[2].trim();
      for (let groupName in engineList) {
        for (let engineName in engineList[groupName]) {
          if (engineList[groupName][engineName].id === engineId) {
            let oldInputVal = searchInputEl.val();
            searchInputEl.val(oldInputVal.slice(0, oldInputVal.length - Number(matchRes2[2].length)));
            setSelectedEngine(engineEls, $(`[data-engine-id="${engineId}"]`));
            curSelectedEngineEl.trigger('click');
          }
        }
      }
    }
    // 搜索
    if (!e.shiftKey && e.keyCode === 13 && searchText) {
      curSelectedEngineEl.trigger('click');
    }
  }, 0);
});

// functoin: clear input area
$('#clear-input-area').on('click', e => {
  searchInputEl.val('');
  searchInputEl.focus();
});

// functoin: auto focus input 
$(() => {
  $('#input-area').focus();
})

// functoin: set selected engine
function setSelectedEngine (engineEls, selectedEngineEl) {
  for (let engine of engineEls) {
    engine.classList.remove('selected');
  }
  selectedEngineEl.addClass('selected');
  curEngineName.text(selectedEngineEl.text());
  curSelectedEngineEl = selectedEngineEl;
}