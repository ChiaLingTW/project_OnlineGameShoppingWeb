var mysql = require("mysql");
exports.conn = (sql, data, callback) => {
  const connection = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "project_topic",
    dateStrings: true,
  });
  connection.connect();

  connection.query(sql, data, function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    callback(results, fields);
  });
  connection.end();
};
