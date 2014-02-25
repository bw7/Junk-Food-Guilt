var app = app || {};

app.Snack = Backbone.Model.extend({
	defaults: {
		snackImage: 'img/sample.png',
		name: 'Unknown',
		calories: 'None',
		exercise: "None", 
		duration: "None"
	}
});