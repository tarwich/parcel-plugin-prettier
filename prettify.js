const { format } = require('prettier');
const { readFileSync, writeFileSync } = require('fs');
const { parse } = require('path');

const prettifyFile = filepath => {
  const code = readFileSync(filepath).toString();

  // Skip any unrecognized files
  if (!/(tsx?|jsx?|css|scss)$/.test(parse(filepath).ext)) return;

  const newCode = format(code, {
    filepath,
    singleQuote: true,
    trailingComma: 'es5',
  });

  if (newCode !== code) writeFileSync(filepath, newCode);
};

module.exports = {
  prettifyFile
};
