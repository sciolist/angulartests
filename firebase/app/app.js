
var app = angular.module('app', ['firebase']); // defines the application..

app.config(function($routeProvider) {
	$routeProvider.otherwise({ redirectTo: '/' }); // if no other routes match, redirect..
})
