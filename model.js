let connection = function ConnectSQL(){


    //Conexao com o banco de dados MySQL.
    const mysql = require("mysql");
    const app = mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'Sysdba@123',
        database: 'dbapp'
    })

    app.connect( function(error) {

        if (error) {
            console.error('error', error.stack)
        }
        else
        {
            console.log('server started');
        }

    });

    return app;

}

module.exports = connection;