app.controller('indexController', function($scope, $http, routeFactory, $state, $compile) {
	$scope.formObject = formObject;
	})
	.factory('routeFactory', function ($state) {
		return {
			createRoute: function (obj) {
				console.log(obj);
			}
		};
	})
	.directive('formTemplates', function($compile) {
		var getTemplate = function (templateName) {
			var templateDirective;
			switch (templateName) {
				case 'Input':
				templateDirective = 'input-input';
					break;
				case 'Text':
				templateDirective = 'text-input';
						break;
				case 'Date':
				templateDirective = 'date-input';
						break;
				case 'pageBreak':
				templateDirective = 'div';
						break;
			}
			return templateDirective;
		};

		var buildTemplate = function (scope, element, attributes) {
			console.log(attributes.content);
			var directiveElement = getTemplate(attributes.content);
			element.html('<'+directiveElement+'><'+directiveElement+'>');
			$compile(element.contents())(scope);
		};
		return {
			restrict: 'E',
			link: buildTemplate,
			scope: false
		};
	})
	.directive('dateInput', function() {
		return {
			restrict: 'E',
			replace: 'true',
			scope: false,
			templateUrl: 'date.html'
		};
	})
	.directive('textInput', function() {

		return {
			restrict: 'E',
			replace: 'true',
			scope: false,
			templateUrl: 'text.html'
		};
	})
	.directive('inputInput', function() {
		function link(scope, element, attributes) {
    // console.log(scope);
		// console.log(element);
		// console.log(attributes);
  	}
		return {
			restrict: 'E',
			replace: 'true',
			scope: false,
			link: link,
			templateUrl: 'input.html'
		};
	});
