var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController', function ($scope) {

    // Function to submit form after all validation has occurred
    $scope.submitForm = function (isValid) {

        // Check whether whole form is valid
        if (isValid) {
            alert('This form is awesome');
        }

    };

});