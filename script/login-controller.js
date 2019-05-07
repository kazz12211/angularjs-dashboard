app.controller('loginController', function($location, $window, $uibModal) {
    let self = this;

    const container = document.getElementById('container');
    self.userInfo = {};

    self.clickSignUpButton = () => {
        container.classList.add('right-panel-active');
    };

    self.clickSignInButton = () => {
        container.classList.remove('right-panel-active');
    };

    self.signin = () => {
        $window.location.href = "/index.html";
    };

    self.signup = () => {

    };

});