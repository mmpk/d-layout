/**
 * @module ui/bar.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Bar
 * @extends Component
 */
exports.Bar = Component.specialize(/** @lends Bar# */ {
    constructor: {
        value: function Bar() {
            this.super();
        }
    },
    
    prepareForActivationEvents: {
        value: function() {
             this.element.addEventListener('mouseup', this);
             this.element.addEventListener('onkeydown', this);
             this.element.addEventListener('mouseover', this);
        }
    },

    handleMouseover: {
        value: function(event) {
            console.log("EVENT:")
            console.log(event)
        }
    }

});
