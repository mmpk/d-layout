montageDefine("07f104a","composer/key-composer",{dependencies:["../core/core","./composer"],factory:function(e,t){var n=e("../core/core").Montage,i=e("./composer").Composer,a="keyPress",s="longKeyPress",o="keyRelease",l=t.KeyComposer=i.specialize({_isLoaded:{value:!1},_shouldDispatchEvent:{value:!1},shouldDispatchLongPress:{value:!1},_longPressTimeout:{value:null},_keyRegistered:{value:!1},_keys:{value:null},keys:{get:function(){return this._keys},set:function(e){this._keyRegistered?(c.defaultKeyManager.unregisterKey(this),this._keys=e,c.defaultKeyManager.registerKey(this)):this._keys=e}},load:{value:function(){this._isLoaded=!0,this._shouldDispatchEvent&&!this._keyRegistered&&(c.defaultKeyManager.registerKey(this),this._keyRegistered=!0)}},unload:{value:function(){this._isLoaded=!1,c.defaultKeyManager.unregisterKey(this),this._keyRegistered=!1}},addEventListener:{value:function(e,t,n){var l=this.component;i.addEventListener.call(this,e,t,n),(e==a||e==s||e==o)&&(this._shouldDispatchEvent=!0,e==s&&(this._shouldDispatchLongPress=!0),this._isLoaded?this._keyRegistered||(c.defaultKeyManager.registerKey(this),this._keyRegistered=!0):l&&"function"!=typeof l.addComposer&&(this.element||(this.element=window),this.load()))}},constructor:{value:function(){i.constructor.call(this)}},deserializedFromTemplate:{value:function(){var e=this.component;null===this.identifier&&(this.identifier=n.getInfoForObject(this).label),e&&("function"==typeof e.addComposer?e.addComposer(this):this._isLoaded||(this.element||(this.element=window),this.load()))}}},{createKey:{value:function(e,t,n){var i=this;return this===l&&(i=new l),n||(n=e.identifier?e.identifier+t.toLowerCase().replace(/[ +]/g).toCapitalized():t.toLowerCase().replace(/[ +]/g)),i.keys=t,i.identifier=n,e.addComposer(i),i}},createGlobalKey:{value:function(e,t,n){var i=this;return this===l&&(i=new l),i.keys=t,i.identifier=n,e.addComposerForElement(i,window),i}}}),r=null,c=n.specialize({_defaultKeyManager:{value:null},_loadingDefaultKeyManager:{value:!1},_keysToRegister:{value:[]},constructor:{value:function(){}},registerKey:{value:function(t){var n=this;this._defaultKeyManager?this._defaultKeyManager.registerKey(t):(this._keysToRegister.push(t),this._loadingDefaultKeyManager||(this._loadingDefaultKeyManager=!0,e.async("core/event/key-manager").then(function(e){var t=n._defaultKeyManager=e.defaultKeyManager;n._keysToRegister.forEach(function(e){t.registerKey(e)}),n._keysToRegister.length=0}).done()))}},unregisterKey:{value:function(e){this._defaultKeyManager&&this._defaultKeyManager.unregisterKey(e)}}},{defaultKeyManager:{get:function(){return r||(r=new c),this._defaultKeyManager?this._defaultKeyManager:r}}})}});