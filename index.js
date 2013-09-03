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
      scope:true,
      transclude:true,
      replace:true,
      template:template,
      controller:function($scope){
        $scope.mode = 'login';
        $scope.setmode = function(mode){
          $scope.mode = mode;
        }

        $scope.login = {
          username:'',
          password:''
        }

        $scope.register = {
          username:'',
          password:'',
          fullname:'',
          email:''
        }

        $scope.active = true;

        $scope.showloginvalidate = false;

        $scope.loginSubmit = function(){
          $scope.active = true;
          $scope.showloginvalidate = true;
          if(!$scope.loginForm.$valid){
            return;
          }

          $scope.$emit('loginForm:login', $scope.login, function(error, message){
            if(error){
              $scope.loginmessage = error;
            }
          });
          return false;
        }

        $scope.showregistervalidate = false;

        $scope.registerSubmit = function(){
          $scope.active = true;
          $scope.showregistervalidate = true;
          if(!$scope.registerForm.$valid){
            return;
          }
          $scope.$emit('loginForm:register', $scope.register, function(error, message){
            if(error){
              $scope.registermessage = error;
              return;
            }
            $scope.registermessage = '';
            $scope.postregistermessage = message || '';
            $scope.login.username = $scope.register.username;  
            $scope.setmode('login');
          });
          return false;
        }

      },
      link: function($scope, iElm, iAttrs, controller) {
				
			}
    }
  })