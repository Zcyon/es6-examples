'use strict';

describe('Controller: ArrowfunctionCtrl', function () {

  // load the controller's module
  beforeEach(module('es6ExamplesApp'));

  var ArrowfunctionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArrowfunctionCtrl = $controller('ArrowfunctionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArrowfunctionCtrl.awesomeThings.length).toBe(3);
  });
});
