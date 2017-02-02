import handlebarsTest from './template.handlebars';

$(() => {
  // eslint-disable-next-line no-console
  console.log(handlebarsTest({
    test: 'HBS template',
  }));
});
