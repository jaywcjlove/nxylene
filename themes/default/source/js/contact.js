;(function($){
    $(function(){
        var $con = $('input[name=contents]'),
            $preview = $('#section_preview'),
            con_str = $con.val()

        //使用MDEditor编辑器
        var mde = new MDEditor({
            id:"#mdeditor",
            minheight:300,
            maxheight:600
        }).load().input(function(evn,opts){
            $con.val(opts.value)
        });
        $con.val(mde.getMD())
    })

})(JSLite)




