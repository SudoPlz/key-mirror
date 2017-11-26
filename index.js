
'use strict';

module.exports =

    /**
     * Takes in a {key:val} and returns a key:key
     *  
     * @param object {key1 : val1 ... keyn:valn}
     */
    function(obj) {
        var key;
        var mirrored = {};

        if ( obj && typeof obj === 'object' ) {
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var objValue = obj[key];
                    if(objValue == null){
                        mirrored[key] = key;
                    } else {
                        mirrored[key] = objValue;
                    }
                }
            }
        }
        return mirrored;
    };
