const info = JSON.parse(decodeURIComponent(location.search.slice(1)));
const hrefs = info.slice(1);

let iframesStr = '';
for (let href of hrefs) {
  const str = `<iframe src="${href}" frameborder="0"></iframe>`;
  iframesStr += str;
}
$('body').append($(iframesStr));

$('title').text(info[0]);