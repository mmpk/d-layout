montageDefine("63a435b","lib/Stream",{dependencies:["./WritableStream.js","util","../"],factory:function(e,t,n){function i(e){a.call(this,new r(this),e)}function r(e){this.scope=e}n.exports=i;var a=e("./WritableStream.js");e("util").inherits(i,a),i.prototype.readable=!0;var s=e("../").EVENTS;Object.keys(s).forEach(function(e){if(0===s[e])r.prototype["on"+e]=function(){this.scope.emit(e)};else if(1===s[e])r.prototype["on"+e]=function(t){this.scope.emit(e,t)};else{if(2!==s[e])throw Error("wrong number of arguments!");r.prototype["on"+e]=function(t,n){this.scope.emit(e,t,n)}}})}});