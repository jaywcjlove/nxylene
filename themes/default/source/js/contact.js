;(function($){

    $(function(){
        var $con = $('#contents'),
            $preview = $('#section_preview'),
            con_str = $con.val()

        $preview.html(marked(con_str))

        console.log("message:1:",$('#contents').val());
        console.log("message:2:",$('#contents').length);
        console.log("message:2:",marked(con_str));
    })

    
    $(function(){
        $('.JSLite_tabs').children().each(function(idx,item){
            var cla = $(item).attr('class');
            cla&&cla.indexOf('JSLite_tabHead')>-1?$(item).children().each(function(n,obj){
                $(obj).bind('click',function (d){
                    $(item).children().removeClass("on");
                    $(this).addClass("on");
                    $(item).next().children().map(function(nn,nobj){
                        nn==n?$(nobj).show():$(nobj).hide();
                    })
                })
            }):null;
        })
    })

})(JSLite)




