function removeFirstCharacterIfSlash(str) {
  return str.charAt(0) === "/" ? str.substr(1) : str;
}
function addPageToPath(path) {
  return path.substr(0, 4) === "pages" ? path : `pages/${path}`;
}

module.exports = function (plop) {
  plop.setGenerator("page", {
    description: "Creates a new page with its own styles and test files",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the page?",
      },
      {
        type: "input",
        name: "path",
        message: "What is the path to the page?",
        default: `/pages`,
        filter: (val) => addPageToPath(removeFirstCharacterIfSlash(val)),
      },
    ],
    actions: [
      {
        type: "add",
        path: "./{{path}}/{{kebabCase name}}.js",
        templateFile: "plop/page/index.js.hbs",
      },
      {
        type: "add",
        path: "./styles/{{path}}/{{kebabCase name}}.module.css",
        templateFile: "plop/page/index.module.css.hbs",
      },
      {
        type: "add",
        path: "__tests__/{{path}}/{{kebabCase name}}.test.js",
        templateFile: "plop/page/index.test.js.hbs",
      },
    ],
  });
};
