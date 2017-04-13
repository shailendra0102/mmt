
(function(){

	angular.module('mmt').config(routesConfiguration);

	routesConfiguration.$inject=['$urlRouterProvider','$stateProvider','$locationProvider']

	function routesConfiguration($urlRouterProvider,$stateProvider,$locationProvider){
		//$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home',{
				url:'/home',
				views: {
					'header': {
						templateUrl: 'components/home/header.html'
					},
					'content': {
						templateUrl: 'components/home/home.html'
					},
					'footer': {
						templateUrl: 'components/home/footer.html'
					}
				}
			})

			.state('search',{
				url:'/search',
				views: {
					'header': {
						templateUrl: 'components/search/header.html'
					},
					'content': {
						templateUrl: 'components/search/search.html'
					},
					'footer': {
						templateUrl: 'components/search/footer.html'
					}
				}
			})



			

	}


})();