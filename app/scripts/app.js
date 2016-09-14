'use strict';

/**
 * @ngdoc overview
 * @name es6ExamplesApp
 * @description
 * # es6ExamplesApp
 *
 * Main module of the application.
 */
angular
  .module('es6ExamplesApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/arrowFunction', {
        templateUrl: 'views/arrowfunction.html',
        controller: 'ArrowfunctionCtrl',
        controllerAs: 'arrowFunction'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
