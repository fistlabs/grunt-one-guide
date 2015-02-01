'use strict';

var OneGuide = require('one-guide');

var _ = require('lodash-node');
var adapters = require('one-guide/lib/adapters');

module.exports = function () {
    var checkFlow = new OneGuide(_.extend({}, this.options(), {
        adapters: adapters
    }));
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
