(function(){
	var app = angular.module('dessert',[]);

	app.controller('DessertController', function(){
		this.products = desserts;
	});

		var desserts =[
		{
			name: 'Canastas de Chocolate',
			Description:'Canasta de Chocolates para el dia de san valentin , ideal para sorprender su pareja.',
			Reviews:'0 Reviews',

		},
		{
			name: 'Cheesecake',
			Description:'Canasta de Chocolates para el dia de san valentin , ideal para sorprender su pareja.',
			Reviews:'0 Reviews'
			
		},

		{
			name: 'Rose Water Macarons',
			Description:'Canasta de Chocolates para el dia de san valentin , ideal para sorprender su pareja.',
			Reviews:'0 Reviews'
			
		}

		];

	})();