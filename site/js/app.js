var app = app || {};

$(function() {
	var snacks = [
		{ name: 'Rold Gold Tiny Twists Pretzels', calories: '230', exercise: 'basketball', duration: '24 minutes'},
		{ name: 'Doritos (Nachos Cheese Flavored)', calories: '140', exercise: 'bicycling', duration: '29 minutes'},
		{ name: 'Oreas (Six Cookies)', calories: '240', exercise: 'canoeing', duration: '56 minutes'},
		{ name: 'M&M\'s (Peanut)', calories: '250', exercise: 'walking', duration: '74 minutes'},
		{ name: 'Skittles', calories: '231', exercise: 'swimming', duration: '33 minutes'},
		{ name: 'Hershey\'s Milk Chocolate', calories: '210', exercise: 'weight training', duration: '35 minutes'},
	];

	new app.MachineView( snacks );
});
