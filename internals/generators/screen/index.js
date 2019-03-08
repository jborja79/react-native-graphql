/**
 * Screen Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected container',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Home',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value) ? 'An screen with this name already exists' : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../../src/screens/Screen{{properCase name}}.js',
        templateFile: './screen/templates/screen.js.hbs',
        abortOnFail: true,
      },
      /* {
        type: 'add',
        path: '../../app/components/{{properCase name}}/tests/index.test.js',
        templateFile: './component/tests.js.hbs',
        abortOnFail: true,
      }, */
    ];
    return actions;
  },
};
