const { format } = require('prettier');
const { readFileSync, writeFileSync } = require('fs');

const prettifyFile = filepath => {
  const code = readFileSync(filepath).toString();
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
