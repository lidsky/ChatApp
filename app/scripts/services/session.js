'use strict';

angular.module('chatAppApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
