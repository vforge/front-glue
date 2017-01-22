import handlebarsTest from "./template.handlebars";

$(() => {
  console.log(handlebarsTest({
    test: 'HBS template',
  }));
});
