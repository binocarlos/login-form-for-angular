module.exports = ' <div> \n <ul class="nav nav-tabs" id="loginFormTab"> <li style="list-style: none">\n</li> <li ng-class="{active:mode==\'login\'}"><a href="#" hm-tap= "setmode(\'login\')">Login</a></li> <li style="list-style: none">\n</li> <li ng-class="{active:mode==\'register\'}"><a href="#" hm-tap= "setmode(\'register\')">Create Account</a></li> <li style="list-style: none">\n</li> </ul>\n <div id="myTabContent" class="tab-content"> \n\n <div ng-class="{active:mode==\'login\', in:mode==\'login\', fade:mode!=\'login\'}" class="tab-pane" id="login"> \n <form class="form-horizontal" name="loginForm" id="loginForm" role="form" style="padding-top:20px;" > \n <fieldset> \n <div class="form-group" ng-class= "{error: showloginvalidate &amp;&amp; loginForm.username.$invalid}"> \n \n <label class="control-label col-xs-12 col-sm-12 col-md-2 col-lg-2" for= "username">Username</label>\n <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"> \n <input type="text" id="username" name="username" placeholder="" class= "form-control input-xlarge" ng-model="login.username" required="">\n <span ng-show= "showloginvalidate &amp;&amp; loginForm.username.$error.required" class= "help-inline">Required</span>\n </div>\n </div>\n\n <div class="form-group" ng-class= "{error: showloginvalidate &amp;&amp; loginForm.password.$invalid}"> \n \n <label class="col-xs-12 col-sm-12 col-md-2 col-lg-2 control-label" for= "username">Password</label>\n <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"> \n <input type="password" id="password" name="password" placeholder="" class="input-xlarge form-control" ng-model="login.password" required="">\n <span ng-show= "showloginvalidate &amp;&amp; loginForm.password.$error.required" class= "help-inline">Required</span>\n </div>\n </div>\n\n <div ng-show="loginmessage" class="help-inline" style="margin-bottom:10px;"> <span class="label label-important">{{ loginmessage }}</span> </div>\n <div ng-show="postregistermessage" class="help-inline" style= "margin-bottom:10px;"> <span class="label label-info">{{ postregistermessage }}</span> </div>\n\n\n <div class="form-group"> \n \n <div class="col-xs-offset-2 col-xs-10 col-sm-offset-2 col-sm-10 col-md-offset-2 col-md-10 col-lg-offset-2 col-lg-10"> \n <button class="btn btn-info" hm-tap="loginSubmit();">Login</button>\n </div>\n </div>\n </fieldset>\n </form>\n </div>\n\n <div ng-class= "{active:mode==\'register\', in:mode==\'register\', fade:mode!=\'register\'}" class="tab-pane" id="create"> \n <form class="form-horizontal" name="registerForm" id="registerForm" style="padding-top:20px;"> \n <fieldset> \n\n <div class="form-group" ng-class= "{error: showregistervalidate &amp;&amp; registerForm.username.$invalid}"> \n \n <label class="control-label col-xs-12 col-sm-12 col-md-2 col-lg-2" for= "username">Username</label>\n <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"> \n <input type="text" id="username" name="username" placeholder="" class= "input-xlarge form-control" ng-model="register.username" required="">\n <span ng-show= "showregistervalidate &amp;&amp; registerForm.username.$error.required" class="help-inline">Required</span>\n </div>\n </div>\n\n <div class="form-group" ng-class= "{error: showregistervalidate &amp;&amp; registerForm.password.$invalid}"> \n \n <label class="control-label col-xs-12 col-sm-12 col-md-2 col-lg-2" for= "password">Password</label>\n <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"> \n <input type="text" id="password" name="password" placeholder="" class= "input-xlarge form-control" ng-model="register.password" required="">\n <span ng-show= "showregistervalidate &amp;&amp; registerForm.password.$error.required" class="help-inline">Required</span>\n </div>\n </div>\n\n <div class="form-group" ng-class= "{error: showregistervalidate &amp;&amp; registerForm.fullname.$invalid}"> \n \n <label class="control-label col-xs-12 col-sm-12 col-md-2 col-lg-2" for= "fullname">Fullname</label>\n <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"> \n <input type="text" id="fullname" name="fullname" placeholder="" class= "input-xlarge form-control" ng-model="register.fullname" required="">\n <span ng-show= "showregistervalidate &amp;&amp; registerForm.fullname.$error.required" class="help-inline">Required</span>\n </div>\n </div>\n\n <div class="form-group" ng-class= "{error: showregistervalidate &amp;&amp; registerForm.email.$invalid}"> \n \n <label class="control-label col-xs-12 col-sm-12 col-md-2 col-lg-2" for= "email">Email</label>\n <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4"> \n <input type="email" id="email" name="email" placeholder="" class= "input-xlarge form-control" ng-model="register.email" required="">\n <span ng-show= "showregistervalidate &amp;&amp; registerForm.email.$error.required" class="help-inline">Email &amp; Required</span>\n </div>\n </div>\n\n <div ng-show="registermessage" class="help-inline"> <span class="label label-important">{{ registermessage }}</span> </div>\n\n <div class="form-group"> \n \n <div class="col-xs-offset-2 col-xs-10 col-sm-offset-2 col-sm-10 col-md-offset-2 col-md-10 col-lg-offset-2 col-lg-10"> \n <button class="btn btn-info" ng-class="{disabled:isactive}" hm-tap= "registerSubmit();">Create</button>\n </div>\n </div>\n\n </fieldset>\n\n </form>\n </div>\n </div>\n </div>';