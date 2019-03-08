/**
 * Container Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected container',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of container',
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
      name: 'wantStore',
      default: true,
      message: 'Do you want to add local store for this container?',
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
        componentTemplate = './container/templates/reactComponent.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './container/templates/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './container/templates/stateless.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/containers/{{properCase name}}/actions.js',
        templateFile: './container/templates/actions.js.hbs',
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
    if (data.wantStore) {
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/store.js',
        templateFile: './container/templates/store.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want a styles file
    if (data.wantStyles) {
      actions.push({
        type: 'add',
        path: '../../src/containers/{{properCase name}}/styles.js',
        templateFile: './component/templates/styles.js.hbs',
        abortOnFail: true,
      });
    }
    return actions;
  },
};
