var app = angular.module('app');

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: './app/views/todo.html',
		controller: 'Todo'
	});
});

app.controller('Todo', function($scope, $http, angularFire) {
	var db = new Firebase("jdptest.firebaseio.com"); // create db reference..
	angularFire(db.child('todo'), $scope, 'items', []); // angular-wrap collection.. not too pretty.
	$scope.submit = function(txt) { $scope.items.push({ text: txt }); };
	$scope.delete = function(i) { $scope.items.splice(i, 1); };
});
