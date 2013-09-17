'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('DrumRollForever', ['btford.socket-io']);

app.config(function ($routeProvider, $locationProvider) {
  // $routeProvider.
  $locationProvider.html5Mode(true);
});
