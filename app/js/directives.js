appModule.directive('fullHeight', ['$window', function($window){
	// Runs during compile
	return {
		scope: {},
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, iElm, iAttrs, controller) {
			
			iElm.css({
				height : $window.screen.availHeight
			});

		}
	};
}])

.directive('skillList', [function(){
	return {
		scope: {
			_skills : '=skills'
		},
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'templates/directives/skill-directive.html',
		link: function($scope, iElm, iAttrs, controller) { }
	};
}]);;