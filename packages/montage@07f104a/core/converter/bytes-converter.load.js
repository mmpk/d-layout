montageDefine("07f104a","core/converter/bytes-converter",{dependencies:["../core","./converter","./number-converter"],factory:function(e,t){e("../core").Montage;var n=e("./converter").Converter,i=e("./number-converter")._numericValueToString;e("./number-converter")._stringToNumericValue;var s=e("./number-converter").NUMERIC_SCALES_BINARY_,a=e("./converter").isDef,r=["P","T","G","M","K","","m","u","n"],o=function(e,t,n){var o="";return(!a(n)||n)&&(o="B"),i(e,s,t,o,r)},l=function(e,t){return o(e,t,!1)};t.BytesConverter=n.specialize({decimals:{value:2},convert:{value:function(e){return l(e,this.decimals)}},revert:{value:function(e){return e}}})}});