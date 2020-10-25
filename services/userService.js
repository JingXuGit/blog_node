const db = require('../sql/db.js');
var crypto = require('crypto');
// var Date = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
var moment = require('moment');

exports.login = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  var sql = `select * from blog_user where email = '${email}' and password = '${password}'`
  var sql1 = `update blog_user set loginTime = ? where email = '${email}' `
  db.base(sql, email, (result) => {
    // console.log(result, '++++')
    if (!result.length) {
      return res.json({
        status: -1,
        message: '登录失败,请检查登录名与密码'
      })
    } else {
      if (result[0].password == password) {
        result[0].password = crypto.createHash('md5').update(password).digest('hex');
        result[0].loginTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        db.base(sql1, [moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')], (result) => {
        })
        return res.json({
          status: 200,
          message: '登录成功',
          data: result[0]
        })

      } else {
        return res.json({
          status: -2,
          message: '密码错误'
        })
      }

    }
  })
}
exports.register = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  var username = req.body.username;
  var avatarImgUrl = req.body.avatarImgUrl;
  var registTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
  var role = 'other';
  var remarks = '其他用户';
  var sql1 = `select count(1) from blog_user where email = email`
  var sql = `INSERT INTO blog_user(email,password,username,avatarImgUrl,registTime,role,remarks) VALUES (?,?,?,?,?,?,?)`
  db.base(sql1, email, (result) => {
    if (result.length > 1) {
      return res.json({
        status: -1,
        message: '注册失败,用户名重复'
      })
    } else {
      db.base(sql, [email, password, username, avatarImgUrl, registTime, role, remarks], (result) => {
        if (result.affectedRows == 1) {
          return res.json({
            status: 200,
            message: '注册成功'
          })
        } else {
          return res.json({
            status: -1,
            message: '注册失败'
          })
        }
      })
    }
  })

}