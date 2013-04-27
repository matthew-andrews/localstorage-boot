/**
 * Responsible for keeping app resources
 * (Javascript and CSS) up to date.
 *
 * @author Matt Andrews <matt@mattandre.ws>
 * @copyright The Financial Times
 */

/**
 * External Deps
 */

reqwest = require('reqwest');

function storeResources(resources, callback) {
  try {

    // TODO: Use Modernizify
    // to detect whether we
    // can actually use local
    // storage
    localStorage.resources = JSON.stringify(resources);
    if (callback) {
      callback();
    }
  } catch (e) {
    if (callback) {
      callback(e);
    }
  }
}

function onMessage(event) {
  if (event.data && event.data.type && event.data.type === 'boot:start') {
    if (event.data.args) {
      storeResources.apply(window, event.data.args);
    } else {
      check();
    }
    window.removeEventListener("message", onMessage);
  }
}

function check(callback) {
  reqwest({ url: '/resources.json', type: 'json' })
    .then(function(resp) {
      storeResources(resp, callback);
    })
    .fail(function(err) {
      callback(err);
    });
}

function init() {
  window.addEventListener("message", onMessage, false);
}

module.exports = {
  init: init
};
