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
    
    Movier: {
        value: function(event) {
            console.log("EVENT:")
            console.log(event)
        }
    }

});
