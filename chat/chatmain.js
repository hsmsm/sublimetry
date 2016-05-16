$(function(){
$("#button1").click(function(){
var $content=$("#txtcontent");
   if($content.val()!=""){
      SendContent($content.val());
}
else{
   alert("发送不能为空！");
     $content.focus();
     return false;
}
});

function SendContent(content){
   $.ajax({
       type:"GET",
       url:"",
       data:"",
       success:function(data){
          if(data=="1"){
            GetMessageList();
            $("$txtcontent").val("");
          }
     else{
        alert("发送失败！");
        return false;
          }
       }
});

//¶¨Ê±»ñÈ¡×îÐÂÁÄÌìÄÚÈÝºÍµ±Ç°ÔÚÏßµÄÓÃ»§ÐÅÏ¢

AutoUpdContent(); //Í¬Ê±»ñÈ¡Á½¸ö¹¦ÄÜ
 var hander=setInterval("AutoUpdContent()",5000);
  $("#divMsg").ajaxStart(function(){
      $(this).show().html("正在发送数据…");
})
  $("#divMsg").ajaxStop(function(){
        $(this).html("已完成！").hide();
})

function AutoUpdContent(){
   GetMessageList();
   GetOnlineList();
}

function GetMessageList(){
     $.ajax({
       type:"GET",
       url:"",
       data:"",
       success:function(data){
         $("#content").html(data);
   }
 });
}

function GetOnLineList(){
         $.ajax({
            type:"GET",
             url:"",
             data:"",
             success:function(data){
              $("#online").html(data);
         }
     });
}