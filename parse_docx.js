const fs = require('fs');
const zlib = require('zlib');

function readDocx(filePath) {
  const buf = fs.readFileSync(filePath);
  let pos = 0;
  let documentXml = null;

  while (pos < buf.length - 4) {
    if (buf.readUInt32LE(pos) === 0x04034b50) {
      // Local file header
      const compression = buf.readUInt16LE(pos + 8);
      const compressedSize = buf.readUInt32LE(pos + 18);
      const uncompressedSize = buf.readUInt32LE(pos + 22);
      const nameLen = buf.readUInt16LE(pos + 26);
      const extraLen = buf.readUInt16LE(pos + 28);
      const name = buf.toString('utf8', pos + 30, pos + 30 + nameLen);
      const dataStart = pos + 30 + nameLen + extraLen;
      const dataEnd = dataStart + compressedSize;

      if (name === 'word/document.xml') {
        const compressedData = buf.subarray(dataStart, dataEnd);
        if (compression === 8) {
          documentXml = zlib.inflateRawSync(compressedData).toString('utf8');
        } else if (compression === 0) {
          documentXml = compressedData.toString('utf8');
        }
        break;
      }
      pos = dataEnd;
    } else {
      pos++;
    }
  }

  if (!documentXml) {
    console.error('word/document.xml not found');
    return;
  }

  // Parse paragraphs and text
  // Each <w:p> is a paragraph, each <w:t> is text
  const paragraphs = [];
  const pRegex = /<w:p(?:\s|>)(.*?)<\/w:p>/gs;
  let pMatch;
  while ((pMatch = pRegex.exec(documentXml)) !== null) {
    const pContent = pMatch[1];
    const tRegex = /<w:t(?:\s[^>]*)?>(.*?)<\/w:t>/g;
    let tMatch;
    let pText = '';
    while ((tMatch = tRegex.exec(pContent)) !== null) {
      pText += tMatch[1];
    }
    if (pText.trim()) {
      paragraphs.push(pText.trim());
    }
  }

  // Also extract tables if needed (<w:tr>, <w:tc>)
  const output = paragraphs.join('\n');
  fs.writeFileSync('sarabjeet_data.txt', output, 'utf8');
  console.log('Extracted ' + paragraphs.length + ' paragraphs.');
}

readDocx('Sarabjeet_Singh_Biodata.docx');

