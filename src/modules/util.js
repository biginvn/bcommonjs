var BUtil = {
    isEmpty : function (str){
        if (str == undefined || str == null)
            return true;
        if (str.constructor === Array){
            return str.length == 0 ? true : false;
        }
        return str.length == 0; // for string
    }
}

module.exports = BUtil;