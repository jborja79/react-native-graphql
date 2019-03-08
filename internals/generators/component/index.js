/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['Stateless Function', 'React Component'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantStyles',
      default: true,
      message: 'Do you want to add styles?',
    },
  ],
  actions: data => {
    // Generate index.js and index.tests.js
    let componentTemplate;

    switch (data.type) {
      case 'React Component': {
        componentTemplate = './component/templates/reactComponent.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './component/templates/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/templates/stateless.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../src/components/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      /* {
        type: 'add',
        path: '../../app/components/{{properCase name}}/tests/index.test.js',
        templateFile: './component/tests.js.hbs',
        abortOnFail: true,
      }, */
    ];

    // If they want a styles file
    if (data.wantStyles) {
      actions.push({
        type: 'add',
        path: '../../src/components/{{properCase name}}/styles.js',
        templateFile: './component/templates/styles.js.hbs',
        abortOnFail: true,
      });
    }
    return actions;
  },
};
