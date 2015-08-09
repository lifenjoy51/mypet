'use strict';

describe('myApp.petSquare module', function() {

  beforeEach(module('myApp.petSquare'));

  describe('petSquare controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var petSquareCtrl = $controller('petSquareCtrl');
      expect(petSquareCtrl).toBeDefined();
    }));

  });
});
