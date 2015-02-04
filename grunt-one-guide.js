'use strict';

var OneGuide = require('one-guide');

module.exports = function () {
    var checkFlow = new OneGuide(this.options());
    var done = this.async();

    checkFlow.addPatternList(checkFlow.params.patterns).done(function () {
        process.stderr.write(checkFlow.toString());
        if (checkFlow.hasCriticalIssues()) {
            process.stderr.write('\n');
            done(false);
            return;
        }
        done(true);
    }, done);
};
