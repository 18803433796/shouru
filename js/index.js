$(function(){




/*$(".menu .prod").hover(function(){

	var t;
alert(1)*/
	/*var curItem=$(this);

	t=setTimeout(function(){
		curItem.find(".pro").addClass(".proc");
		curItem.find("div").fadeIn();
		t=null;
	},0);
},function(){
	if(t!=null)clearTimeout(t);
	/*$(this).find(".pro").removeClass("proc");
	$(this).find("div").fadeOut();
})*/






$(".menu .prod").hover(function(){

   $(this).find(".pro").addClass(".proc");
   $(this).find("div").fadeIn();
   
},function(){
   $(this).find(".pro").removeClass("proc");
	$(this).find("div").fadeOut();
})












var num=0;

$(".slides a").hide().eq(0).show();
/*alert($(".slides>a"))*/
function move(type){
	var type=type||"right"
	if(type=="right"){
		num++;
		if(num>=$(".slides a").length){
			num=0;
		}
	}else if(type=="left"){
		num--;
		if(num<=-1){
			num=$(".slides a").length-1;
		}
	}
	$(".slides a").fadeOut().eq(num).fadeIn()
     $(".pager>li").removeClass("active").eq(num).addClass("active")
}
var t=setInterval(move,2000)

$(".slideBox").mouseover(function(){
    clearInterval(t);
 })
$(".slideBox").mouseout(function(){
    t=setInterval(move,2000)
 })
$(".pager>li").click(function(){
   var index=$(this).index();
   $(".slides a").hide().eq(index).show();
    $(".pager>li").removeClass("active").eq(index).addClass("active");
    num=index;
})

})
