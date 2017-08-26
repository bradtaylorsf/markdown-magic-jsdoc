const jsdoc2md = require('jsdoc-to-markdown');

/**
 * Returns markdown documentation from jsdoc-annoted source code.
 *
 * @param files {object[]} - full path to the local javascript file that has the jsdoc comment
 * @param heading-depth {number} - The initial heading depth. For example, with a value of `2` the top-level markdown headings look like `"## The heading"`.
 * @param no-gfm {boolean} - By default, dmd generates github-flavoured markdown. Not all markdown parsers render gfm correctly. If your generated docs look incorrect on sites other than Github (e.g. npmjs.org) try enabling this option to disable Github-specific syntax.
 * @param separators {boolean} - Put `<hr>` breaks between identifiers. Improves readability on bulky docs.
 * @param module-index-format {string} - none, grouped, table, dl.
 * @param global-index-format {string} - none, grouped, table, dl.
 * @param param-list-format {string} - Two options to render parameter lists: 'list' or 'table' (default). Table format works well in most cases but switch to list if things begin to look crowded / squashed.
 * @param property-list-format {string} - list, table.
 * @param member-index-format {string} - grouped, list
*/

const defaults = {
  "files": false,
  "heading-depth": 2,
  "no-gfm": false,
  "seperators": false,
  "module-index-format": "table",
  "global-index-format": "dl",
  "param-list-format": "table",
  "property-list-format": "list",
  "member-index-format": "list"
}

const JSDOC = function (content, _options = {}, config) {
  const options = Object.assign({}, defaults, _options);

  const doc = jsdoc2md.renderSync(options);
  if (doc.length > 0) {
    return doc;
  }
  return `*THERE WAS AN ERROR PROCESSING ${files}*`;
}

module.exports = (obj) => JSDOC;
