(function($){
    $(function(){
        $('.auth-form-body input[type=button]').on('click',function(){
            $.post('/login',$('.auth-form-body form').serialize(), function(data) {
                console.log('dd',data)
                if(data.code === 0 ){
                    window.location.href = '/admin'
                }else{
                    alert(data.massege)
                }
            },'json');
        })
    })

})(JSLite)