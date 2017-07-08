angular.module('myapp')

.controller('signupController' , function($scope,$http,$state){


$scope.signup = function(){
	
	$http({
		method:'POST',
		url:'/signup',
		params:{
			name :$scope.name,
			mail :$scope.mail,
			password :$scope.pass,
			confirmPassword:$scope.cnfpass

		
		}
	})
	.then(function(response){
		console.log("data inserted",response);
	})
}



})