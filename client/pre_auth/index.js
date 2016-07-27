/**
 * Created by Jim on 7/6/2016.
 */
angular
    .module( 'preAuthApp', ['login', 'register', 'ui.router', 'ngMaterial' ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/login");
		$locationProvider.html5Mode(true);
        //
        // Now set up the states
        $stateProvider
            .state('login', {
                url: '/login',
                component: 'login'
            })
            .state('register', {
                url: '/register',
                component: 'register'
            });
    });
    