const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
    
});

class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    connectionTest(query){
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {reject({
                     message: `error: ${err}`, 
                    });
                    throw err;
                }
                
                connection.query(query, (error, results, fields) => {
                    resolve({
                        results,
                    });

                    connection.release(); //ends query

                    if(error) {
                        reject({
                            errorMessage2: "failed to make connection in query",
                        });
                        throw error;
                    }
                })
            })
        })
    }
}

module.exports = DbService;
//emport and import functions