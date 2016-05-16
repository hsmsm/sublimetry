$(function(){
$(#"divMsg").ajaxStart(function(){
    $(this).show().html("正在发送登录请求…");
 })
 
$("#divMsg").ajaxStop(function(){
   $(this).html("请求处理已完成。").hide();
})

$("#button1").click(function() {
   var $name = $("#txtName");
   var $pass = $("#txtPass");
    if($name.val()!=""&& $pass.val()!=""){
        UserLogin($name.val(),$pass.val());
     }
    else {
       if($name.val()==""){
          alert("用户名不能为空！");
          $name.focus();
          return false;
} else{
    alert("密码不能为空！");
    $pass.focus();
    return false;
   }
  }
})
});

function UserLogin(name,pass){
   $.ajax({
        type:""GET,
        url:"",
        data:,
        success:function(data){
             if(data=="1"){
              window.location="chatmain.html";
          }
          else{
             alert("用户名或密码错误！");
             return false;
         }
      }
    });
}