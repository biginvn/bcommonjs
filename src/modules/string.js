var BString = {
	escapeHTML: function(str) {
		return str.toString().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
	},
	
	getObjectItemInArray: function(list, key, value) { 
	// Get object item in array , define by key of item (example get item by id )
		for (var i = 0; i < list.length; i++) {
			if (list[i][key] == value) {
				var result = list[i];
				return result;
			}
		}
		return null;
	}
}
module.exports=BString;