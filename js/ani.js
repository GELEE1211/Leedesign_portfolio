$(document).ready(function(){
   //일부 배경 원 마우스호버시 마우스 커서 따라감

   var button = $('.move');

   // 마우스 오버 효과
   button.mousemove(function(event) {
     var buttonWidth = $(this).outerWidth();
     var buttonHeight = $(this).outerHeight();
     var mouseX = event.pageX - $(this).offset().left;
     var mouseY = event.pageY - $(this).offset().top;
 
     var percentX = mouseX / buttonWidth;
     var percentY = mouseY / buttonHeight;
 
     var moveAmount = 200;
 
     var moveX = (0.5 - percentX) * moveAmount;
     var moveY = (0.5 - percentY) * moveAmount;
 
     $(this).css('transform', 'translate(' + moveX + 'px,' + moveY + 'px) scale(1.3)');
   });
 
   // 마우스가 버튼을 벗어날 때 복귀 효과
   button.mouseleave(function() {
     $(this).css({
       'transform': 'none',
       'transition': 'transform 0.3s'
     });
   });

   
});