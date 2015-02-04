grunt-one-guide [![Build Status](https://travis-ci.org/fistlabs/grunt-one-guide.svg)](https://travis-ci.org/fistlabs/grunt-one-guide)
=========

[Grunt](http://gruntjs.com/) plugin for [one-guide](https://www.npmjs.com/package/one-guide)

##Usage:

```js
grunt.registerTask('lint', 'Lint\'N\'Style JavaScript', require('grunt-one-guide'));
    
grunt.initConfig({
    lint: {
        options: {
            root: process.cwd(),
            patterns: ['lib/**/*.js', 'test/**/*.js'],
            excludes: ['test/fixtures/**'],
            config: 'yandex-node'
        }
    }
});
```

---------
LICENSE [MIT](LICENSE)



