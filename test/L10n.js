var locale,
	L10n	= require('../'),
	assert	= require('assert'),
	vows	= require('vows');

vows.describe('L10n').addBatch({
	'Create a new Instance with default Language "span"': {
		topic: function () {
			locale = new L10n('spa');
			return locale.get();
		},
		'Default Language should be "spa"': function (result) {
			assert.equal(result, 'spa');
		}
	},
	'Change default Language to "eng"': {
		topic: function () {
			locale.set('eng');
			return locale.get();
		},
		'New Language should be "eng"': function (result) {
			assert.equal(result, 'eng');
		}
	},
	'Map "fre"': {
		topic: function () {
			return locale.map('fre');
		},
		'Should be "fr"': function (result) {
			assert.equal(result, 'fr');
		}
	}
}).export(module);