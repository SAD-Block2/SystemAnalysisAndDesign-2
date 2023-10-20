function check(req, res){
    var body = req.body;
    return res.json({
        message: params.params,
    });
    
}

function postMessage(req,res){
    var body = req.body;
    return res.json({
        message: body.message,
    });
}
exports.check = check;
exports.postMessage = postMessage;