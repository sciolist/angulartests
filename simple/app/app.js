
var app = angular.module('app', []); // defines the application..

app.config(function($routeProvider) {
	$routeProvider.otherwise({ redirectTo: '/product-list' }); // if no other routes match, redirect..
})
