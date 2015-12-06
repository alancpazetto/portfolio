appModule.controller('SkillController', [
	'$log', 
	'$scope',
	'$rootScope',
function(
	$log,
	$scope,
	$rootScope
){
	
	$scope.skillsWeb = {
		
		frontEnd : [
			{
				name: 'HTML5',
				value : 100
			},
			{
				name: 'CSS3',
				value : 100
			}, 
			{
				name: 'JavaScript',
				value : 100
			},
			{
				name: 'UX',
				value : 90
			},
			{
				name: 'UI',
				value : 90
			},
			{
				name: 'jQuery',
				value : 88
			},
			{
				name: 'AngularJS',
				value : 85
			},
			{
				name: 'Bootstrap',
				value : 85
			},
			{
				name: 'SASS',
				value : 85
			},
			{
				name: 'Bourbon.io',
				value : 68
			}
		],

		backEnd : [
			{
				name: 'PHP',
				value : 100
			},
			{
				name: 'MySQL',
				value : 100
			},
			{
				name: 'CodeIgniter',
				value : 100
			},
			{
				name: 'SQL',
				value : 95
			},
			{
				name: 'NodeJS',
				value : 85
			},
			{
				name: 'SQL Server',
				value : 75
			},
			{
				name: 'Express',
				value : 70
			},
			{
				name: 'MongoDB',
				value : 50
			}
		]

	};
	
	$scope.skillsMobile = {
		
		native : [
			{
				name: 'UX',
				value : 95
			},
			{
				name: 'Android',
				value : 85
			},
			{
				name: 'Objective-C',
				value : 85
			},
			{
				name: 'UI',
				value : 80
			},
			{
				name: 'SQLite',
				value : 70
			},
			{
				name: 'Swift',
				value : 40
			}
		],

		hybrid : [
			{
				name: 'Ionic Fram.',
				value : 100
			},
			{
				name: 'Cordova',
				value : 100
			},
			{
				name: 'HTML5',
				value : 100
			},
			{
				name: 'CSS3',
				value : 100
			},
			{
				name: 'JS',
				value : 100
			},
			{
				name: 'AngularJS',
				value : 85
			},
			{
				name: 'jQuery Mob.',
				value : 50
			}
		]

	};
	
	$scope.skillsOthers = {
		
		partOne : [
			{
				name: $rootScope._t.skills.portuguese,
				value : 100
			},
			{
				name: 'Team Work',
				value : 100
			},
			{
				name: $rootScope._t.skills.focus,
				value : 100
			},
			{
				name: $rootScope._t.skills.agility,
				value : 100
			},
			{
				name: 'Sublime Text',
				value : 100
			},
			{
				name: 'Git',
				value : 80
			},
			{
				name: 'TFS',
				value : 80
			},
			{
				name: 'English',
				value : 75
			},
			{
				name: 'Scrum',
				value : 75
			},
			{
				name: 'SVN',
				value : 70
			}
		],

		partTwo : [
			{
				name: 'C',
				value : 83
			},
			{
				name: 'Photoshop',
				value : 80
			},
			{
				name: 'C#',
				value : 75
			},
			{
				name: 'Illustrator',
				value : 70
			},
			{
				name: 'Flash',
				value : 70
			},
			{
				name: 'C++',
				value : 60
			},
			{
				name: 'Corel Draw',
				value : 60
			},
			{
				name: 'Fireworks',
				value : 60
			}
		]

	};

}])

.controller('PortfolioController', [
	'$log', 
	'$scope',
function(
	$log,
	$scope
){
	
	$scope.portfolioItens = {
		'pt-br' : [
			{
				title : 'MoByPharma - Applicativo',
				description : 'App para farmácias de manipulação usando Ionic Framework (AngularJS + Cordova)',
				image : 'img/portfolio/mobypharma.jpg',
				links : [
					{ icon : 'fa-apple', url : 'https://itunes.apple.com/br/app/mobypharma/id1004769011?mt=8&ign-mpt=uo%3D4' },
					{ icon : 'fa-android', url : 'https://play.google.com/store/apps/details?id=br.com.alternate.suafarmacia' }
				]
			},
			{
				title : 'App Grupo Fagorn',
				description : 'App iOS, Android e WP8 para empresas do grupo Fagron, usando Ionic Fram.. 14 paises / 18 apps, incluindo EUA, Brasil, Italia, Grécia e Holanda.',
				image : 'img/portfolio/fagron.jpeg',
				links : [
					{ icon : 'fa-apple', url : 'https://itunes.apple.com/br/artist/fagron-global/id964543843' },
					{ icon : 'fa-android', url : 'https://play.google.com/store/apps/developer?id=Fagron%20BV&hl=pt_BR' },
					{ icon : 'fa-windows', url : 'http://www.windowsphone.com/pt-BR/store/publishers?publisherId=Fagron%2BBV&appId=dbc413cb-87c9-4474-a88a-4949827d9a02' }
				]
			},
			{
				title : 'OWN Travel',
				description : 'Hot site e aplicativo para agências de viagens',
				image : 'img/portfolio/owntravel.png',
				links : [
					{ icon : 'fa-link', url : 'http://owntravel.own.art.br/' }
				]
			},
			{
				title : 'Full Control Automação',
				description : 'Site institucional',
				image : 'img/portfolio/fullcontrol.png',
				links : [
					{ icon : 'fa-link', url : 'http://fullcontrolautomacao.com.br/' }
				]
			},
			{
				title : 'Rigamonti Ferreira',
				description : 'Site institucional',
				image : 'img/portfolio/rigamonti.png',
				links : [
					{ icon : 'fa-link', url : 'http://rigamontiferreira.com.br/' }
				]
			},
			{
				title : 'Estuidola - Play the music',
				description : 'Blog de música',
				image : 'img/portfolio/estudiola.png',
				links : [
					{ icon : 'fa-link', url : 'http://www.estudiola.com/' }
				]
			}
		],
		'en-us' : [
			{
				title : 'MoByPharma - Mobile app',
				description : 'Mobile application for compound pharmacys using Ionic Framework (AngularJS + Cordova)',
				image : 'img/portfolio/mobypharma.jpg',
				links : [
					{ icon : 'fa-apple', url : 'https://itunes.apple.com/br/app/mobypharma/id1004769011?mt=8&ign-mpt=uo%3D4' },
					{ icon : 'fa-android', url : 'https://play.google.com/store/apps/details?id=br.com.alternate.suafarmacia' }
				]
			},
			{
				title : 'Fagron companies app',
				description : 'iOS, Android and WP8 application for Fagron companies, using Ionic Framework (AngularJS + Cordova). 14 countries / 18 apps, including USA, Brazil, Italy, Greece and Netherlands. (Link will show only apps published in your country)',
				image : 'img/portfolio/fagron.jpeg',
				links : [
					{ icon : 'fa-apple', url : 'https://itunes.apple.com/br/artist/fagron-global/id964543843' },
					{ icon : 'fa-android', url : 'https://play.google.com/store/apps/developer?id=Fagron%20BV&hl=pt_BR' },
					{ icon : 'fa-windows', url : 'http://www.windowsphone.com/pt-BR/store/publishers?publisherId=Fagron%2BBV&appId=dbc413cb-87c9-4474-a88a-4949827d9a02' }
				]
			},
			{
				title : 'OWN Travel',
				description : 'Hot site and travel app',
				image : 'img/portfolio/owntravel.png',
				links : [
					{ icon : 'fa-link', url : 'http://owntravel.own.art.br/' }
				]
			},
			{
				title : 'Full Control Automação',
				description : 'Bussiness web site',
				image : 'img/portfolio/fullcontrol.png',
				links : [
					{ icon : 'fa-link', url : 'http://fullcontrolautomacao.com.br/' }
				]
			},
			{
				title : 'Rigamonti Ferreira',
				description : 'Bussiness web site',
				image : 'img/portfolio/rigamonti.png',
				links : [
					{ icon : 'fa-link', url : 'http://rigamontiferreira.com.br/' }
				]
			},
			{
				title : 'Estuidola - Play the music',
				description : 'Music blog',
				image : 'img/portfolio/estudiola.png',
				links : [
					{ icon : 'fa-link', url : 'http://www.estudiola.com/' }
				]
			}
		]
	};

}])
;
