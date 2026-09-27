const fs = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, '../harpa_raw.json'), 'utf8'));

const cleanText = (str) => {
  if (!str) return '';
  return str
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\r/g, '')
    .trim();
};

const harpaList = [];

for (let i = 1; i <= 640; i++) {
  const item = raw[String(i)];
  if (!item) {
    console.warn('Missing hymn:', i);
    continue;
  }
  
  let rawTitle = item.hino || ('Hino ' + i);
  let cleanTitle = rawTitle.replace(/^\d+\s*[-–.]\s*/, '').trim();
  
  let coro = cleanText(item.coro || '');
  let versesObj = item.verses || {};
  let verseKeys = Object.keys(versesObj).sort((a,b) => Number(a) - Number(b));
  
  let lyrics = verseKeys.map(k => cleanText(versesObj[k])).filter(Boolean);
  
  harpaList.push({
    id: 'harpa-' + i,
    number: i,
    title: cleanTitle,
    author: 'Harpa Cristã',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº ' + i,
    biblicalTheme: 'Louvor Congregacional e Adoração',
    lyrics: lyrics,
    chorus: coro || undefined
  });
}

console.log('Successfully processed hymns:', harpaList.length);
console.log('Sample hymn 1:', JSON.stringify(harpaList[0], null, 2).slice(0, 300));
console.log('Sample hymn 640:', JSON.stringify(harpaList[639], null, 2).slice(0, 300));

const targetPath = path.join(__dirname, '../src/data/harpa640.json');
fs.writeFileSync(targetPath, JSON.stringify(harpaList, null, 2), 'utf8');
console.log('harpa640.json written successfully. Size:', fs.statSync(targetPath).size);
