angular.module('mylist').controller('ListController', function($scope, $routeParams, $http, $location){
	var listLength = 0;
	$scope.tmp = [];

	$http.get('/lists').then(function(data){
		$scope.lists = data.data;
	}, function(data){
		console.log("no");
	});


	if($routeParams.name){

		$http.get('/lists/'+$routeParams.name).then(function(data){
		
		$scope.list = JSON.parse(data.data);
		listLength = $scope.list.content.length;
			}, function(data){
				console.log("no lists");
			});
	}

	
	$scope.done = function(array, index){
		
		array[index].status = !array[index].status;
	};

	$scope.remove = function(){
		if(confirm("delete "+$scope.list.name+"?")){
			$http.post('/lists/delete', $scope.list).success(function(data, status){
				$location.path("/");

			});
		}

	}

	$scope.update = function(){
		$http.post('/lists', $scope.list).success(function(data, status){
			alert("saved!");
			$location.path("/");

		});
	}

	$scope.edit= function(){
		$location.path("/lists/edit/"+$scope.list.name);
	}

});