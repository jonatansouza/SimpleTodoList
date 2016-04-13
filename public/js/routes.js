angular.module('mylist', ['ngRoute'])
.config(function($routeProvider){
	$routeProvider.when('/lists', {
		templateUrl: 'partials/lists.html',
		controller: 'ListController'
	})
	.when('/create',{
		templateUrl:'partials/create.html',
		controller: 'CreateController'
	})
	.when('/lists/:name',{
		templateUrl:'partials/list.html',
		controller: 'ListController'
	})
	.when('/lists/edit/:name',{
		templateUrl:'partials/edit.html',
		controller: 'EditController'
	})
	.otherwise({
		redirectTo: '/lists'
	});

});