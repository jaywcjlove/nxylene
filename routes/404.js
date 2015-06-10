var express = require("express")
var router = express.Router()

// 404
router.get('/*', function(request, response){
    response.render('404', {
        title: 'No Found'
    })
});


module.exports = router