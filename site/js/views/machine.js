var app = app || {};

app.MachineView = Backbone.View.extend({
	el: '#snacks',

	initialize: function(initialSnacks)
		this.collection = new app.Machine( initialSnacks );
		this.render();
		this.listenTo( this.collection, 'add', this.renderSnack );
	},

	events: {
		'click #add': 'addSnack'
	},

	addSnack: function( e ) {
		e.preventDefault();

		var formData = {};

		$( '#addSnack div' ).children('input').each( function( i, el ){
			if( $( el ).val() != '' ){
				formData[ el.id ] = $( el ).val();
			}
		});

		this.collection.add( new app.Snack( formData ) );
	},

	//machine is rendered through having each snack item rendered within it
	render: function () {
		this.collection.each(function(item) {
			this.renderSnack(item);
		}, this );
	},

	//snack is rendered via a SnackView

	renderSnack: function(item) {

		var snackView = new app.SnackView({
			model: item
		});
		this.$el.append( snackView.render().el );
	}
});



