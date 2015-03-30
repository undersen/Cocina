(function(){
	var app = angular.module('dessert',[]);

	app.controller('DessertController', function(){
		this.products = desserts;
	});

		var desserts =[{
			name: 'Canastas de Chocolate',
			Description:'asdfghrewgegegwe',
			Reviews:'Tomaaaas',
		},
		{
			name: 'Canastas de vainilla',
			
		}];

	})();