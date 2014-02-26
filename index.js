var template = require('./template.js');

angular
	.module("loginForm", [
    
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

        $scope.$on('login:mode', function(ev, mode){
          $scope.setmode(mode);
        })

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
          if(!$scope.register.password){
            $scope.registermessage = 'please enter a password';
            return;
          }
          if($scope.register.password!=$scope.register.password2){
            $scope.registermessage = 'the 2 passwords do not match';
            return;
          }
          

          var data = {};

          Object.keys($scope.register || {}).forEach(function(p){
            data[p] = $scope.register[p];
          })

          delete(data.password2);
          
          $scope.$emit('loginForm:register', data, function(error, message){
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