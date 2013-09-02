module.exports = '<div>\n  <ul class="nav nav-tabs" id="loginFormTab">\n    <li ng-class="{active:mode==\'login\'}"><a href="#" hm-tap="setmode(\'login\')">Login</a></li>\n    <li ng-class="{active:mode==\'register\'}"><a href="#" hm-tap="setmode(\'register\')">Create Account</a></li>\n  </ul>\n  <div id="myTabContent" class="tab-content">\n\n    <div ng-class="{active:mode==\'login\', in:mode==\'login\', fade:mode!=\'login\'}" class="tab-pane" id="login">\n      <form class="form-horizontal" name="loginForm">\n        <fieldset>\n          <div class="control-group" ng-class="{error: showloginvalidate && loginForm.username.$invalid}">\n            <!-- Username -->HELLO\n            <label class="control-label"  for="username">Username</label>\n            <div class="controls">\n              <input type="text" id="username" name="username" placeholder="" class="input-xlarge" ng-model="login.username" required>\n              <span ng-show="showloginvalidate && loginForm.username.$error.required" class="help-inline">Required</span>\n            </div>\n          </div>\n\n          <div class="control-group" ng-class="{error: showloginvalidate && loginForm.password.$invalid}">\n            <!-- Username -->\n            <label class="control-label"  for="username">Password</label>\n            <div class="controls">\n              <input type="password" id="password" name="password" placeholder="" class="input-xlarge" ng-model="login.password" required>\n              <span ng-show="showloginvalidate && loginForm.password.$error.required" class="help-inline">Required</span>\n            </div>\n          </div>\n\n          <div ng-show="loginmessage" class="help-inline" style="margin-bottom:10px;"><span class="label label-important">{{ loginmessage }}</span></div>\n          <div ng-show="postregistermessage" class="help-inline" style="margin-bottom:10px;"><span class="label label-info">{{ postregistermessage }}</span></div>\n\n\n          <div class="control-group">\n            <!-- Button -->\n            <div class="controls">\n              <button class="btn btn-success" hm-tap="loginSubmit();">Login</button>\n            </div>\n          </div>\n        </fieldset>\n      </form>                \n    </div>\n\n    <div ng-class="{active:mode==\'register\', in:mode==\'register\', fade:mode!=\'register\'}" class="tab-pane" id="create">\n      <form class="form-horizontal" name="registerForm">\n        <fieldset>\n\n          <div class="control-group" ng-class="{error: showregistervalidate && registerForm.username.$invalid}">\n            <!-- Username -->\n            <label class="control-label"  for="username">Username</label>\n            <div class="controls">\n              <input type="text" id="username" name="username" placeholder="" class="input-xlarge" ng-model="register.username" required>\n              <span ng-show="showregistervalidate && registerForm.username.$error.required" class="help-inline">Required</span>\n            </div>\n          </div>\n\n          <div class="control-group" ng-class="{error: showregistervalidate && registerForm.password.$invalid}">\n            <!-- Password -->\n            <label class="control-label"  for="password">Password</label>\n            <div class="controls">\n              <input type="text" id="password" name="password" placeholder="" class="input-xlarge" ng-model="register.password" required>\n              <span ng-show="showregistervalidate && registerForm.password.$error.required" class="help-inline">Required</span>\n            </div>\n          </div>         \n\n          <div class="control-group" ng-class="{error: showregistervalidate && registerForm.fullname.$invalid}">\n            <!-- Fullname -->\n            <label class="control-label"  for="fullname">Fullname</label>\n            <div class="controls">\n              <input type="text" id="fullname" name="fullname" placeholder="" class="input-xlarge" ng-model="register.fullname" required>\n              <span ng-show="showregistervalidate && registerForm.fullname.$error.required" class="help-inline">Required</span>\n            </div>\n          </div>\n\n          <div class="control-group" ng-class="{error: showregistervalidate && registerForm.email.$invalid}">\n            <!-- Email -->\n            <label class="control-label"  for="email">Email</label>\n            <div class="controls">\n              <input type="email" id="email" name="email" placeholder="" class="input-xlarge" ng-model="register.email" required>\n              <span ng-show="showregistervalidate && registerForm.email.$error.required" class="help-inline">Email & Required</span>\n            </div>\n          </div>\n\n          <div ng-show="registermessage" class="help-inline"><span class="label label-important">{{ registermessage }}</span></div>\n\n          <div class="control-group">\n            <!-- Button -->\n            <div class="controls">\n              <button class="btn btn-success" ng-class="{disabled:isactive}" hm-tap="registerSubmit();">Create</button>\n            </div>\n          </div>\n\n        </fieldset>\n\n      </form>\n    </div>\n  </div>\n</div>';