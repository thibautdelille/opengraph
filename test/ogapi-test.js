/* OGApi test suite */

var vows = require('vows'),
    assert = require('assert'),
    ogapi = require('../ogapi');

vows.describe('Test an url').addBatch({
    'when the entry is a url': {
        topic: ogapi.testUrl('http://www.google.com'),

        'we get true': function (topic) {
            assert.equal (topic, true);
        }
    },
    'when the entry is a number': {
        topic: ogapi.testUrl(1),

        'we get false': function (topic) {
            assert.equal (topic, false);
        }
    },
    'when the entry is a string': {
        topic: ogapi.testUrl('test'),

        'we get false': function (topic) {
            assert.equal (topic, false);
        }
    }
}).run();
vows.describe('Test the url opening').addBatch({
    'when I send a url': {
        topic: function() {
            ogapi.openUrl('http://www.google.com', this.callback);
        },
        'we get an String ': function (dom, err) {
            //assert.isNull   (err);        // We have no error
            assert.isString (dom);       // We have a stat object
        }
    }
});

vows.describe('Test the parsing').addBatch({
    'when I send a head dom': {
        topic: function() {
            ogapi.parseDom('<head></head>', this.callback);
        },
        'we get a null object': function (json, err) {
            //assert.isNull   (err);        // We have no error
            assert.isNull (json);       // We have a stat object
        }
    },
    'when I send a head with meta dom': {
        topic: function() {
            ogapi.parseDom('<head><meta property="title" content="test"></meta></head>', this.callback);
        },
        'we get the title set to test': function (json, err) {
            //assert.isNull   (err);        // We have no error
            assert.equal (json.title, 'test');       // We have a stat object
        }
    },
    'when I send an empty dom': {
        topic: function() {
            ogapi.parseDom('', this.callback);
        },
        'we get a null object': function (json, err) {
            //assert.isNull   (err);        // We have no error
            assert.isNull(json);       // We have a stat object
        }
    },
    'when I send a string': {
        topic: function() {
            ogapi.parseDom('test', this.callback);
        },
        'we get a null object': function (json, err) {
            assert.isNull(json);       // We have a stat object
        }
    }
}).run();