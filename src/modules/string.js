var BString = {
	escapeHTML: function(str) {
		return str.toString().replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
	}
}
module.exports=BString;