login-form-for-angular
======================

angular.js directive that renders a login / register form using Twitter bootstrap markup

## installation

	$ component install binocarlos/login-form-for-angular

## usage

```js
// we must register the component with angular
require('login-form-for-angular');

angular
	.module("myModule", [
		"loginForm"
	])
	.controller('MyCtrl', function(){

		// the user has logged in
		$scope.$on('loginForm:login', function($e, form_data){

		})

		// the user has registered
		$scope.$on('loginForm:register', function($e, form_data){

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

