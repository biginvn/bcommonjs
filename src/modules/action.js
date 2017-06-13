var BAction = {
    openPopupWindow : function (link, title,w,h){
            var left = (screen.width/2)-(w/2);
            var top = (screen.height/2)-(h/2);
        return window.open(link, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
    }
}

module.exports=BAction;