'use strict';

var assert = require('assert');

function spyTask(options, done) {
    return {
        async: function () {
            return done;
        },
        options: function () {
            return options;
        }
    };
}

describe('grunt-one-guide', function () {
    var gog = require('../grunt-one-guide');

    it('Should be done of no critical issues found', function (done) {
        var task = spyTask({
            root: process.cwd(),
            patterns: ['text/fixtures/valid.js']
        }, function (res) {
            assert.ok(res);
            done();
        });
        gog.call(task);
    });

    it('Should not be done if critical issues found', function (done) {
        var task = spyTask({
            root: process.cwd(),
            patterns: ['test/fixtures/invalid.js']
        }, function (res) {
            process.stderr.write = w;
            assert.ok(!res);
            data = data.join('');
            assert.ok(/\/invalid\.js/.test(data));
            done();
        });
        var data = [];
        var w = process.stderr.write;
        process.stderr.write = function (s) {
            data[data.length] = String(s);
            return w.apply(this, arguments);
        };
        gog.call(task);
    });
});
