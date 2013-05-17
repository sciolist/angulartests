var app = angular.module('app');

app.config(function($routeProvider) {
	$routeProvider.when('/product-list', {
		templateUrl: './app/views/product-list.html',
		controller: 'ProductList'
	});
});

app.controller('ProductList', function($scope, $http) {
	$scope.isSelected = function(p) { return p.selected; }
	$http.jsonp('http://search.twitter.com/search.json?q=neat&rpp=150&callback=JSON_CALLBACK').then(function(response) {
		$scope.products = response.data.results;
	});

	$scope.delete = function() {
		var results = _.groupBy($scope.products, function(p) { return !!p.selected });
		$scope.products = results[false]; // keep all the products that weren't selected.
		console.log(results[true]); // then do something with the selected values..
	}
});
