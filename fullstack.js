var express=require("express")
var app=express()
var bodyparser=require("body-parser")
var dbf=require("./dbConnection2")
var con=dbf()
var cors = require('cors');

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.get("/showAll", function(req,res){
    var query=`select * from employees`
    con.query(query,function(error,result,fields){
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
})
app.post("/insert", function(req,res){
    var empno= req.body.empno
    var name= req.body.name
    var address= req.body.address
    var query=`insert into employees values(${empno}, '${name}', '${address}')`
    con.query(query,function(error,result,fields){
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
            console.log("Data Sent!")
        }
    })
    
})
app.post("/insertusers", function(req,res){
    var role= req.body.role
    var username= req.body.username
    var name= req.body.name
    var password= req.body.password
    var query=`insert into users values(${role}, '${username}', '${name}', '${password}')`
    con.query(query,function(error,result,fields){
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
            console.log("Data Sent!")
        }
    })
})
app.put("/update", function(req,res){
    var empno= req.body.empno
    var name= req.body.name
    var address= req.body.address
    var query=`UPDATE employees SET name='${name}', address='${address}' where empno=${empno};`
    con.query(query,function(error,result,fields){
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
            console.log("Data Sent!")
        }
    })
    
})
app.delete("/delete", function(req,res){
    var username= req.body.username
    var query=`delete from users where username='${username}'`
    con.query(query,function(error,result,fields){
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
            console.log("Data Sent!")
        }
    })
})
    app.delete("/delete", function(req,res){
        var empno= req.body.empno
        var query=`delete from employees where empno=${empno}`
        con.query(query,function(error,result,fields){
            if(error){
                console.log(error)
            }
            else{
                res.send(result)
                console.log("Data Sent!")
            }
        })
})
app.listen(6060)