var BUtil = {
    isEmpty : function (str){
        if (str == undefined || str == null)
            return true;
        if (typeof(str) === "boolean")
        	return !str;
        if (isNaN(str))
        	return str == 0;
        if (str.constructor === Array){
            return str.length == 0 ? true : false;
        }
        return str.length == 0; // for string
    },
    currencyFormat: function(str, currency, separator) {
    	if (this.isEmpty(currency))
    		currency = 'USD';
    	if (this.isEmpty(separator))
    		separator = ',';

		var num = Number(str).toFixed(0);
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1"+separator) + " " + currency;
	}
}

module.exports = BUtil;