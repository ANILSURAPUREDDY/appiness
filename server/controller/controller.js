var model = require('../model/model.js');
var router = {};

router.getOrders = function(req, res){
    console.log(req.body);
    var ip = req.body.params
    model.getOrders(ip, function(err, resp){
        if(err && !resp){
            res.status(200).send(JSON.stringify({status:"Error", msg:err}))
        } else {
            res.status(200).send(JSON.stringify({status:"success", response:resp}))
        }
    })
}

router.updateOrderStatus = function(req, res){
    var ip = req.body.params;
    console.log("ip for updateing",ip)
    if( !ip.id && !ip.status ){
        res.status(200).send("All Conditions are not met.");
    }
    model.updateOrderStatus(ip, function(err,resp){
        if(err){
            res.status(200).send(JSON.stringify({status:"Error",msg:"we are facing some issues with server."})); 
        } else {
            res.status(200).send({status:"success",response:resp}); 
        }
    })
}


module.exports = router;