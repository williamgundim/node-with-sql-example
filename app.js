const port = 8080;
const mysql = require('./model')();
const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 

app.get("/", (req, res)=>{

    res.json({status: 'Server no ar!'});

})

//Post.
app.post("/post", async(req, res)=>{

    try{

        let post = req.body;

        let query = mysql.query('INSERT INTO cliente SET ?', post, function (error, results, fields) {
            if (error) throw error;
            // Neat!
          });

          console.log(query.sql); 
    }
    
    catch (error){

    }

} )

app.listen(port);