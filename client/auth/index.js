/**
 * Created by Jim on 7/12/2016.
 */
angular
    .module('authApp', [ 'profile', 'logout', 'modify', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("profile");
		$locationProvider.html5Mode(true);
        //
        // Now set up the states
        $stateProvider
            .state('profile', {
                url: '/profile',
                component: 'profile'
            })
            .state('modify', {
                url: '/modify',
                component: 'modify'
            })
            .state('logout', {
                url: '/logout',
                component: 'logout'
            });
    });
