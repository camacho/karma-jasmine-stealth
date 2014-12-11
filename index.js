var framework, path, pattern;

path = require('path');

pattern = function(file) {
  return {
    pattern: file,
    included: true,
    served: true,
    watched: false
  };
};

framework = function(files) {
  return files.unshift(pattern(require.resolve('./vendor/jasmine-stealth')));
};

framework.$inject = ['config.files'];

module.exports = {
  'framework:jasmine-stealth': ['factory', framework]
};
