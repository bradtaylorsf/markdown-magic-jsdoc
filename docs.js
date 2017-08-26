/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const markdownMagic = require('markdown-magic'); // 'markdown-magic'
const JSDOC = require('./index.js');

const mmdConfig = {
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (JSDOC:files=../docs.js) --> */
    JSDOC,
  },
};

const markdownPath = path.join(__dirname, './', 'README.md');
markdownMagic(markdownPath, mmdConfig);
