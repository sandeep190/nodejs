function signup(req,con){
    console.log(req.body);
    var msg='';
    var requestData = req.body;
    var selectQuery = "select * from users where email='"+requestData.email+"'"
    con.query(selectQuery, function (err, resD) {
        var numRows = resD.length;
        if(numRows==0){
        var sql = "INSERT INTO users (uname,email, address) VALUES ('"+requestData.name+"', '"+requestData.email+"','"+requestData.address+"')";
        con.query(sql, function (err, result) {
            if (err) { console.log(err); }
            console.log("1 record inserted");
            msg='Registration successfull!'
            return msg;
        });
    } else {
        msg='Already Ragisterd'
        return msg;
    }
});
}

module.exports=signup
