const mysql = require('mysql');
exports.base = (sql, data, callback) => {
    const connection = mysql.createConnection({
        host: '39.107.230.206',
        user: 'root',
        password: 'lijingxu',
        database: 'jingxu_blog'
    });
    connection.connect();

    connection.query(sql, data, function(error, results, fields) {
        if (error) throw error;
        callback(results);
        // console.log('数据库连接成功');
    })
    connection.end();
}