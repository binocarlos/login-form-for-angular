var template = require('./template.js');
var hammerangular = require('hammer-for-angular');

angular
	.module("loginForm", [
    "hmTouchevents"
  ])
	
  .directive('loginForm', function(){



    //field.required && showvalidate && containerForm[field.name].$invalid
    return {
      restrict:'EA',
      scope:{
        loginUrl:'@',
				registerUrl:'@'
      },
      transclude:true,
      replace:true,
      template:template,
      controller:function($scope){
        $scope.login = function(){

        }

        $scope.register = function(){
          
        }
      },
      link: function($scope, iElm, iAttrs, controller) {
				console.log('yay we are making a login form');
			}
    }
  })