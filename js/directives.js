appModule.directive('fullHeight', ['$window', function($window){
	// Runs during compile
	return {
		scope: {}, // {} = isolate, true = child, false/undefined = no change
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
		}, // {} = isolate, true = child, false/undefined = no change
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: 'templates/directives/skill-directive.html',
		// replace: true,
		link: function($scope, iElm, iAttrs, controller) {
			
			console.log($scope._skills);

		}
	};
}]);;