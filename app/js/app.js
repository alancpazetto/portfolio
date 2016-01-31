/**
* AlanPazettoPortfolio Module
*
* AngularJS application for portfolio
*/
var appModule = angular.module('AlanPazettoPortfolio', [])
.run([
	'$rootScope',
function(
	$rootScope
){

	$rootScope.labels = {
		'pt-br' : {
			general : {
				cvLink : 'https://docs.google.com/document/d/1vas93G-6uM2sXNJ5uxVNw7gGlZ0gt4Ab0U15AjHUm8s/edit?usp=sharing'
			},
			banner : {
				firstLine : 'Olá, eu sou o Alan',
				secondLine : 'Sou um desenvolvedor web e mobile',
				seeThisCode : 'Ver código do site',
				seeCV : 'Ver curriculo'
			},
			skills : {
				title : 'Habilidades',
				webDevelopment : 'Desenvolvimento Web',
				mobileDevelopment : 'Desenvolvimento Mobile',
				native : 'Nativo',
				hybrid : 'Híbrido',
				otherSkills : 'Outras habilidades',
				portuguese : 'Português',
				english : 'Inglês',
				focus : 'Foco',
				agility : 'Agilidade'
			},
			portfolio : {
				title : 'Projetos'
			},
			contact : {
				title : 'Contato',
				seeThisCode : 'Ver código do site',
				seeCV : 'Ver curriculo'
			}
		},
		'en-us' : {
			general : {
				cvLink : 'https://docs.google.com/document/d/108sSyuLiERqvO_1erTYFRp8V2RQxOt5r5e--h65oP_c/edit?usp=sharing'
			},
			banner : {
				firstLine : 'Hello, I\'m Alan',
				secondLine : 'And I\'m Web and Mobile developer',
				seeThisCode : 'See this code',
				seeCV : 'See CV'
			},
			skills : {
				title : 'Skills',
				webDevelopment : 'Web development',
				mobileDevelopment : 'Mobile development',
				native : 'Native',
				hybrid : 'Hybrid',
				otherSkills : 'Other skills',
				portuguese : 'Portuguese',
				english : 'English',
				focus : 'Focus',
				agility : 'Agility'
			},
			portfolio : {
				title : 'Projects'
			},
			contact : {
				title : 'Contact',
				seeThisCode : 'See this code',
				seeCV : 'See CV'
			}
		}
	}

	var userLang = navigator.language || navigator.userLanguage; 
	userLang = userLang.toLowerCase();

	$rootScope._langCode = ($rootScope.labels[ userLang ] === undefined) ? 'en-us' : userLang;
	$rootScope._t = $rootScope.labels[ $rootScope._langCode ];
	$rootScope.changeLanguage = function(code){
		if( $rootScope.labels[code] !== undefined ){
			$rootScope._t = $rootScope.labels[code];
			$rootScope._langCode = code;
		}
	}

}])
;