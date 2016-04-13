angular.module('mylist').controller('CreateController', function($scope, $routeParams, $http, $location){
	
	$scope.buttonDisplay = "ng-hide";
	$scope.itens = [];

	$http.get('/lists').success(function(data, status){
		$scope.lists = data;
	});


	$scope.checkName = function(){
		if ($scope.lists.indexOf($scope.list.name) > -1) {
			$scope.nameAvailable = "has-error";
			$scope.buttonDisplay = "ng-hide";
			$scope.formItens = false;
		}else{
			$scope.nameAvailable = "";
			$scope.buttonDisplay = "ng-show";
		}
	};

	$scope.displayItens = function(){
		if($scope.list.name){
			$scope.formItens = true;
		}
	};

	$scope.adicionaItem = function(){
		$scope.itens.push({name : $scope.tmpItem, status : false});
		$scope.tmpItem = "";
	};

	$scope.deleteItem = function(array,index){
		array.splice(index, 1);
	};

	$scope.saveList = function(){
		$scope.list.content = $scope.itens;
		if($scope.list.name){
			$http.post('/lists', $scope.list).success(function(data, status){
				alert("saved!");
				$location.path("/");

			});
		}

	};

});