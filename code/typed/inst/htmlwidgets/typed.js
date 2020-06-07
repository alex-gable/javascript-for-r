HTMLWidgets.widget({

  name: 'typed',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance
    var typed;

    return {

      renderValue: function(x) {

        typed = new Typed('#' + el.id, x);

      },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});