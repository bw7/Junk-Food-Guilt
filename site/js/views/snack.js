var app = app || {};

app.SnackView = Backbone.View.extend({
	tagName: 'div',
	className: 'snackContainer'
	template: _.template( $('#snackTemplate').html() ).

	events: {
		'click .delete': 'deleteSnack'
	},

	deleteSnack: function() {
		//model removed
		this.model.destroy();

		//view removed
		this.remove();
	},


	render: function() {
		this.$el.html( this.template( this.model.toJSON() ));

		return this;
	}
});

