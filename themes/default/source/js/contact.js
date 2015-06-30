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

})(JSLite)




