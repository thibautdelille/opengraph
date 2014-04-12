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