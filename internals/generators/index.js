/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
const screenGenerator = require('./screen/index.js');

module.exports = plop => {
  plop.setGenerator('Component', componentGenerator);
  plop.setGenerator('Container', containerGenerator);
  plop.setGenerator('Screen', screenGenerator);
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(path.join(__dirname, `../../app/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      try {
        fs.accessSync(path.join(__dirname, `../../app/components/${comp}`), fs.F_OK);
        return `containers/${comp}`;
      } catch (e2) {
        return `screens/${comp}`;
      }
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
