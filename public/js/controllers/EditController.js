angular.module('mylist').controller('EditController', function($scope, $routeParams, $http, $location){
	if($routeParams.name){

		$http.get('/lists/'+$routeParams.name).then(function(data){
		
		$scope.list = JSON.parse(data.data);
		listLength = $scope.list.content.length;
			}, function(data){
				console.log("no lists");
			});
	}

	$scope.displayItens = function(){
		if($scope.list.name){
			$scope.formItens = true;
		}
	};

	$scope.adicionaItem = function(){
		$scope.list.content.push({name : $scope.tmpItem, status : false});
		$scope.tmpItem = "";
	};

	$scope.deleteItem = function(array,index){
		array.splice(index, 1);
	};

	$scope.saveList = function(){
		$http.post('/lists', $scope.list).success(function(data, status){
				alert("saved!");
				$location.path("/");

			});
		
	};

});