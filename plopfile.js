module.exports = function (plop) {
  plop.setGenerator("page", {
    description: "Creates a new page with its own styles and test files",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the page?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "pages/{{kebabCase name}}.js",
        templateFile: "plop/page/index.js.hbs",
      },
      {
        type: "add",
        path: "styles/pages/{{kebabCase name}}.module.css",
        templateFile: "plop/page/index.module.css.hbs",
      },
      {
        type: "add",
        path: "__tests__/pages/{{kebabCase name}}.test.js",
        templateFile: "plop/page/index.test.js.hbs",
      },
    ],
  });
};
