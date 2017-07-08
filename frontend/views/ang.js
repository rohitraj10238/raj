var app =angular.module('myapp',['ui.router']);

app.config(function($stateProvider){

	$stateProvider
		.state('signin-state',{
			url:'/signin',
			templateUrl:'signin.html',
			controller:'loginCtrl1'
			
		})
$stateProvider
		.state('signup-state',{
			url:'/signup',
			templateUrl:'signup.html',
			controller:'signupcontroller'

		})
$stateProvider
		.state('profile-state',{
			url:'/profile',
			templateUrl:'profile.html',
			controller:'profilecontroller'

		})




});
