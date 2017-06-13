var BArray = {
	inArray: function(item, array, key) {
		// var a = { 'code' : 9 , 'name' : 'YDUZ' } || var b = [ { 'code' : 9 , 'name' : 'YDUZ' }, { 'code' : 10 , 'name' : 'YDUZXSD' } ]
		// => inArray ( a , b , 'code' ) = true , inArray ( a , b , 'name' ) = false

		for (var i = 0; i < array.length; i++) {
			if (array[i][key] == item[key])
				return i;
		}
		return null;
	},
	inArrayMultiKey: function(item, array, keys) {
		// var a = { 'code' : 9 , 'name' : 'YDUZ' } || var b = [ { 'code' : 9 , 'name' : 'YDUZ' }, { 'code' : 10 , 'name' : 'YDUZXSD' } ]
		// => inArray ( a , b , ['code','name'] ) = 0 , inArray ( a , b , 'name' ) = false
		if (array == null || array.length == 0)
			return null;

		for (var i = 0; i < array.length; i++) {
			var totalEqual = 0;
			for (var keyIndex = 0; keyIndex < keys.length; keyIndex++) {
				if (
					array[i][keys[keyIndex]] && item[keys[keyIndex]] &&
					(array[i][keys[keyIndex]].toString() == item[keys[keyIndex]].toString())
				)
					totalEqual++;
			}

			if (totalEqual == keys.length)
				return i;
		}
		return null;
	}
}
module.exports=BArray;