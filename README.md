login-form-for-angular
======================

angular.js directive that renders a login / register form using Twitter bootstrap markup

## installation

	$ component install binocarlos/login-form-for-angular

## usage

To make the form look nice - you should have a copy of Twitter Boostrap CSS - to make it work, you need angular js on the page.

Then - include your component's build.js on the page:

```html
<link rel="stylesheet" href="css/bootstrap.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/angular.js/1.1.5/angular.min.js"></script>
<script src="build/build.js"></script>
```

In our custom build for the page:

```js
// we must register the component with angular
require('login-form-for-angular');

angular
	.module("myModule", [
		"loginForm"
	])
	.controller('MyCtrl', function($location){

		// the user has logged in
		$scope.$on('loginForm:login', function($e, form_data, callback){

			// do our login stuff
			customlogin(form_data, function(error){

				if(error){
					callback(error);
				}
				else{
					// we will redirect the page - no need to run the callback
					$location.path('/secure');	
				}
				
				
			})
			
		})

		// the user has registered
		$scope.$on('loginForm:register', function($e, form_data, callback){

			// once we have done our register logic - run the callback giving an error as the first argument and the success message as the second
			callback(null, 'all registered');
		})
	})
```

We can now trigger the login form within our markup:

```html
<login-form />
```

The directive emits 2 events back to the parent scope:

 * loginForm:login
 * loginForm:register

In each case, the object representing the form data is provided - it is up to the event handler what to do with it.

## Licence

MIT

