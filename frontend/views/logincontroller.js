app.controller('loginCtrl1', function($scope,$state,$http){

	$scope.signin = function(){
$http({
url:'/signin',
method:'GET',
params :{
	name: $scope.uname,
	pass: $scope.upassword
}

then(function(response){
		console.log(">>>>>>. response data",response.data)

    // $scope.showLoader = false;
		$state.go('profile-state' , {xyz : response.data});
	})
  





  