angular.module('shopApp')
.controller('MainCtrl', function($scope, $http, socket){
	$scope.products = [];

	$http.get('/api/products').success(function(products){
		$scope.products = products;
		socket.syncUpdates('product', $scope.products);
	});

	$scope.addProduct = function() {
		if ($scope.newProduct === '') {
			return;
		}
		$http.post('/api/products', {name: $scope.newProduct});
		$scope.newProduct = '';
	};

	$scope.deleteProduct = function(product){
		$http.delete('api/products/' + product._id);
	};

	$scope.$on('$destroy', function() {
		socket.unsyncUpdates('product');
	});


});