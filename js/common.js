$(document).ready(function(){

  //풀페이지 플러그인
	$('#fullpage').fullpage({
		//options here
		menu : ".gnb",
    navigation : true,
		autoScrolling:true,
    anchors : ['menu1','menu2','menu3','menu4', 'menu4-1','menu4-2','menu4-3','menu4-4','menu4-5','menu4-6','menu4-7','menu5'],
    navigationTooltips:['INTRO','ABOUT_ME','SKILLS','PORTFOLIO-COVER','TALK_WITHTEA','BUSAN_MUSEUM','TEAM_PROJECT1','TEAM_PROJECT2','VIDIO','2D_DESIGNS','INDUSTRIAL_DESIGN','CONTACT'],
    navigationPosition:'right',
    showActiveTooltip:true,
    responsiveWidth: 768,
    onLeave: function(index, nexindex, direction){
      if(nexindex == 5){
        $("#fp-Nav").fadeOut(300);
      }else{
        $("#fp-Nav").fadeIn(300);
      }
    },
	});

  //영상부분 마우스 호버시 재생이미지로 변경
  $(".vidio .a-box a").mouseover(function(){
    $(".vidio .a-box a img").attr("src", "img/vidio_hover.png")
   });
   $(".vidio .a-box a").mouseleave(function(){
    $(".vidio .a-box a img").attr("src", "img/vidio.png")
   });


});