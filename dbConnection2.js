var mysql=require('mysql')

module.exports=function connection(){
    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"project"
    })

    con.connect(function(err){
        if(err){
            console.log("Error in connection")
        }
        else{
            console.log("Connected")
        }
    })
    return con;
}