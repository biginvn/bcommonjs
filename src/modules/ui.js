var BString = require('./string');
var BUtil = require('./util');
var modalMessageHTML =
'<div class="modal fade" tabindex="-1" role="dialog" id="b-alert" aria-labelledby="Message" aria-hidden="true"> \
  <div class="modal-dialog" role="document"> \
    <div class="modal-content"> \
      <div class="modal-header"> \
        <h5 class="modal-title" id="exampleModalLabel">?</h5> \
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> \
          <span aria-hidden="true">&times;</span> \
        </button> \
      </div> \
      <div class="modal-body">?</div> \
      <div class="modal-footer"> \
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button> \
      </div> \
    </div>  \
  </div> \
</div>';

var modalConfirmHTML =
'<div class="modal fade" tabindex="-1" role="dialog" id="b-alert" aria-labelledby="Message" aria-hidden="true"> \
  <div class="modal-dialog" role="document"> \
    <div class="modal-content"> \
      <div class="modal-header"> \
        <h5 class="modal-title">?</h5> \
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> \
          <span aria-hidden="true">&times;</span> \
        </button> \
      </div> \
      <div class="modal-body">?</div> \
      <div class="modal-footer"> \
        <button type="button" class="btn btn-danger" data-dismiss="modal">No</button> \
        <button type="button" class="btn btn-success">Yes</button> \
      </div> \
    </div>  \
  </div> \
</div>';

var messageTipHTML = '<ul class="b-tip" id="b-tip"></ul>';
var BUI = {
  alert : function(message, title, type){
    title = BUtil.isEmpty(title) ? 'Message' : title;
    type = BUtil.isEmpty(type) ? 'message' : 'confirm';
    html = type == 'message' ? BString.sprintf(modalMessageHTML, [title, message]):BString.sprintf(modalConfirmHTML, [title, message]);
    $("#b-alert").detach();
    $('body').append(html);
    $("#b-alert").modal();
  },

  message : function(message, delay, className){
    delay = BUtil.isEmpty(delay) ? 2000 : delay;
    className = BUtil.isEmpty(className) ? 'bg-danger' : className;
    var bTipEl = $('#b-tip');
    if (bTipEl.length == 0 )
      $('body').append(messageTipHTML);

    bTipEl = $('#b-tip');

    var elMessage = '<li class="?" id="?">?</li>';
    var totalTip = $('#b-tip > li').length;
    var elID = 'b-tip-number-' + totalTip;
    elMessage = BString.sprintf(elMessage,[className,elID,message]);

    bTipEl.append(elMessage);
  }
}

module.exports = BUI;
