var BString = {
	escapeHTML: function(str) {
		return str.toString().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
	},
	sprintf : function(str, replaces, delimiter){
		if (delimiter == undefined || delimiter == null)
			delimiter = '?';

		var texts = str.split(delimiter);
		var result = '';
		for (var i = 0; i < texts.length; i++){
			if (replaces[i]!=undefined)
				result += texts[i] + replaces[i];
			else
				result += texts[i];
		}

		return result;
	}
}
module.exports=BString;
