// 模态框
  jQuery.Modal = function(opts){
    var self = {
      modal: '.modal',
      height: 0,
      width: 0,
      _init: function(){
        var height = $(self.modal).height()
        var winHeight = window.innerHeight;
        if(self.width>0){
          $(self.modal).css({
            width: self.width + 'px',
            marginLeft: '-'+ self.width/2 + 'px'
          });
        }
        if(self.height>0){
          $(self.modal).css({
            height: self.height + 'px'
          })
        }
        // if(height-winHeight>=-30){
          $('body').css({
            position: 'relative'
          })
          $(self.modal).css({
            position: 'absolute',
            top: '-70px',
            marginBottom: '100px',
            transform: 'translateY(0)'
          })
        // }
      },
      open: function(){
        $(this.modal).css({top:$("body").scrollTop()-70+"px"});
        $(this.modal).fadeIn();
        $('.j-modal-mask').fadeIn();
      },
      close: function(){
        $(this.modal).fadeOut();
        $('.j-modal-mask').fadeOut();
      }
    };
    self = $.extend(self,opts);
    self._init();
    $(self.modal).find('.j-close').on('click',function(){
      self.close();
    });
    $('.j-modal-mask').on('click',function(){
      self.close();
    });
    return self;
  }
