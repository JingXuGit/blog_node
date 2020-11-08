const fs = require("fs");
const db = require('../sql/db.js');
var crypto = require('crypto');
var moment = require('moment');

/* ---------------> 登录注册*/
exports.login = (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var sql = `select * from blog_user where email = '${email}' and password = '${password}'`
    var sql1 = `update blog_user set loginTime = ? where email = '${email}' `
    db.base(sql, email, (result) => {
        if (!result.length) {
            return res.json({
                status: -1,
                message: '登录失败,请检查登录名与密码'
            })
        } else {
            if (result[0].password == password) {
                result[0].password = crypto.createHash('md5').update(password).digest('hex');
                result[0].loginTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
                db.base(sql1, [moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')], (result) => {})
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


/*-----------------> 文章增删改查 */
exports.addArticle = (req, res) => {
    var id = req.body.id;
    var articleContent = req.body.articleContent;
    var articleTitle = req.body.articleTitle;
    var cover = req.body.cover;
    var keyword = req.body.keyword;
    var createTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    var author = 'admin';
    var classifiId = 1
    var remarks = keyword;
    var sql = `INSERT INTO blog_article(articleContent,articleTitle,classifiId,cover,keyword,createTime,author,remarks) VALUES (?,?,?,?,?,?,?,?)`;
    var sql1 = `update blog_article set articleContent = ?, articleTitle = ?, cover = ?, keyword = ?,updateTime = ? where id = '${id}' `
    if (id == null) {
        db.base(sql, [articleContent, articleTitle, classifiId, cover, keyword, createTime, author, remarks], (result) => {

            if (result.affectedRows == 1) {
                return res.json({
                    status: 200,
                    message: '添加文章成功'
                })
            } else {
                return res.json({
                    status: -1,
                    message: '添加失败'
                })
            }
        })
    } else {
        db.base(sql1, [articleContent, articleTitle, cover, keyword, moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')], (result) => {
            if (result.affectedRows == 1) {
                return res.json({
                    status: 200,
                    message: '更新文章成功'
                })
            } else {
                return res.json({
                    status: -1,
                    message: '更新失败'
                })
            }
        })
    }

}

exports.selectArticle = (req, res) => {
    var pageSize = req.body.pageSize;
    var currentPage = req.body.currentPage;
    var page = (currentPage - 1) * pageSize;
    var obj = {};
    var sql1 = `SELECT count(1) as counts from blog_article WHERE deleted = 1`;
    db.base(sql1, 1, (result) => {
        obj.total = result[0].counts
    });
    var sql = `SELECT a.id, a.articleTitle, a.createTime,a.keyword,a.cover from blog_article a WHERE deleted = 1 ORDER BY createTime desc limit ${page} , ${pageSize}`;
    db.base(sql, [currentPage, pageSize], (result) => {
        if (result.length < 1) {
            return res.json({
                status: 200,
                message: '查询成功',
                data: result,
            })
        } else if (!result.length) {
            return res.json({
                status: -1,
                message: '查询失败'
            })
        } else {
            obj.article = result
            res.json({
                status: 200,
                message: '查询成功',
                data: obj
            })
        }
    })
}

exports.selectOneArticle = (req, res) => {
    var id = req.body.id;
    var sql = `SELECT * from blog_article WHERE deleted = 1  and id = ${id}`;
    db.base(sql, id, (result) => {
        if (!result.length) {
            return res.json({
                status: -1,
                message: '查询失败'
            })
        } else {
            res.json({
                status: 200,
                message: '查询成功',
                data: result[0]
            })
        }
    })
}

exports.deleteOneArticle = (req, res) => {
    var id = req.body.id;
    var sql = `update blog_article set deleted = 0 where id = '${id}'`;
    db.base(sql, id, (result) => {
        if (result.affectedRows == 1) {
            return res.json({
                status: 200,
                message: '删除文章成功'
            })
        } else {
            return res.json({
                status: -1,
                message: '删除失败'
            })
        }
    })
}



/* ---------------> 随笔增删查 */
exports.addEssays = (req, res) => {

    var essaysContent = req.body.essaysContent;
    var createTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    var remarks = '随笔备注';
    var sql = `INSERT INTO blog_essays(essaysContent,createTime,remarks) VALUES (?,?,?)`;
    db.base(sql, [essaysContent, createTime, remarks], (result) => {

        if (result.affectedRows == 1) {
            return res.json({
                status: 200,
                message: '添加随笔成功'
            })
        } else {
            return res.json({
                status: -1,
                message: '添加失败'
            })
        }
    })


}

exports.selectEssays = (req, res) => {
    var pageSize = req.body.pageSize;
    var currentPage = req.body.currentPage;
    var page = (currentPage - 1) * pageSize;
    var sql = `SELECT * from blog_essays WHERE deleted = 1 ORDER BY createTime desc limit ${page} , ${pageSize}`;
    // var sql = `SELECT * from blog_essays WHERE deleted = ? `;
    db.base(sql, 1, (result) => {
        if (result.length < 1) {
            return res.json({
                status: 200,
                data: result,
                message: '查询成功',
            })
        } else if (!result.length) {
            return res.json({
                status: -1,
                message: '查询失败'
            })
        } else {
            res.json({
                status: 200,
                message: '查询成功',
                data: result
            })
        }
    })
}

exports.deleteOneEssays = (req, res) => {
    var id = req.body.id;
    var sql = `update blog_essays set deleted = 0 where id = '${id}'`;
    db.base(sql, id, (result) => {
        if (result.affectedRows == 1) {
            return res.json({
                status: 200,
                message: '删除随笔成功'
            })
        } else {
            return res.json({
                status: -1,
                message: '删除失败'
            })
        }
    })
}


/* 上传图片返回path路径-----------> */
exports.uploadImage = (req, res) => {
    let imgData = req.body.imgData;
    var sql = `INSERT INTO blog_images(imageUrl,createTime) VALUES (?,?)`;
    var sql1 = `SELECT * from blog_images WHERE deleted = 1  and imageUrl = ?`;
    if (imgData) {
        //过滤data:URL
        // let base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
        let dataBuffer = new Buffer.from(imgData, 'base64');
        // 存储文件命名是使用当前时间，防止文件重名
        let saveUrl = "./public/page/headImg/" + (new Date()).getTime() + ".png";
        fs.writeFile(saveUrl, dataBuffer, function(err) {
            if (err) {
                res.send(err);
            } else {
                db.base(sql, [saveUrl, moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')], (result) => {
                    if (result.affectedRows == 1) {

                        db.base(sql1, saveUrl, (result) => {
                            if (result.length >= 1) {
                                return res.json({
                                    status: 200,
                                    message: '上传图片成功',
                                    data: result[0]
                                })
                            }
                        })

                    } else {
                        return res.json({
                            status: -1,
                            message: '上传失败'
                        })
                    }
                })
            }
        });
    }
}

/* 查询博客信息 文章数,随笔数 */
exports.selectBlogNum = (req, res) => {
        var obj = {};
        var sql1 = `SELECT count(1) as articleNum from blog_article WHERE deleted = 1`
        var sql2 = `SELECT count(1) as essaysNum from blog_essays WHERE deleted = 1`
        db.base(sql1, 1, (result) => {
            obj.articleNum = result[0].articleNum
            db.base(sql2, 1, (result) => {
                obj.essaysNum = result[0].essaysNum
                return res.json({
                    status: 200,
                    message: '成功',
                    data: obj
                })
            })
        })

    }
    /* 查询博客信息标签数 */
exports.selectBlogLabel = (req, res) => {
    var sql = `SELECT keyword,id,count(1) as count  FROM blog_article a where deleted = 1 GROUP BY keyword,id`
    db.base(sql, 1, (result) => {
        if (!result) {
            res.json({
                status: -1,
                message: '失败',
            })
        } else {
            res.json({
                status: 200,
                message: '成功',
                data: result
            })
        }
    })
}

/* 添加评论 */
exports.addcomment = (req, res) => {
    var user_id = req.body.user_id;
    var content = req.body.content;
    var createTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    var sql = `INSERT INTO blog_comment(createTime,user_id,content) VALUES (?,?,?)`
    db.base(sql, [createTime, user_id, content], (result) => {
        if (result.affectedRows == 1) {
            return res.json({
                status: 200,
                message: '留言成功'
            })
        } else {
            return res.json({
                status: -1,
                message: '留言失败'
            })
        }
    })
}


exports.selectcomment = (req, res) => {
    var obj = {};
    var pageSize = req.body.pageSize;
    var currentPage = req.body.currentPage;
    var page = (currentPage - 1) * pageSize;
    var sql = `select c.id, c.content, CASE  c.state
    WHEN 1 THEN 'true'
    WHEN 0 THEN 'false'
    END  state, c.prase_count, c.createTime, u.id as user_id, u.username,u.avatarImgUrl from blog_comment c join blog_user u on c.user_id = u.id where c.parent_id = 0  ORDER BY createTime desc limit ${page} , ${pageSize}`
    var sql1 = `SELECT LENGTH( getAllSubNodes ( t.id ) )as answer_count  FROM blog_comment t WHERE t.parent_id = 0 ORDER BY createTime desc limit ${page} , ${pageSize}`;
    var sql2 = `SELECT count(1) as counts from blog_comment where parent_id = 0 ORDER BY createTime desc`;
    db.base(sql2, [], (result) => {
        obj.total = result[0].counts
        db.base(sql1, [], (result) => {
            obj.count = result
            db.base(sql, [currentPage, pageSize], (result) => {
                obj.guestbook = result
                if (!result) {
                    res.json({
                        status: -1,
                        message: '失败',
                    })
                } else {
                    res.json({
                        status: 200,
                        message: '成功',
                        data: obj
                    })
                }
            })
        })
    });




}


exports.replycomment = (req, res) => {
    var user_id = req.body.user_id;
    var parent_id = req.body.parent_id;
    var content = req.body.content;
    var answer_id = req.body.answer_id;
    // console.log(parent_id);
    var createTime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    var sql1 = `select count(1) cuont from blog_comment where parent_id = ${parent_id}`
    db.base(sql1, [], (result) => {
        console.log(result)
    })
    var sql = `INSERT into blog_comment(createTime,parent_id,user_id,content,answer_id) VALUES (?,?,?,?,?)`
    db.base(sql, [createTime, parent_id, user_id, content, answer_id], (result) => {
        if (result.affectedRows == 1) {
            return res.json({
                status: 200,
                message: '回复成功'
            })
        } else {
            return res.json({
                status: -1,
                message: '回复失败'
            })
        }
    })
}


exports.selectReply = (req, res) => {
    var id = req.body.id;
    var sql = `SELECT
    c.id,
    c.content,
    c.answer_id,
    c.parent_id,
    c.prase_count,
    CASE  c.state
    WHEN 1 THEN 'true'
    WHEN 0 THEN 'false'
    END  state,
    c.createTime,
    u.id AS user_id,
    u.username,
    u.avatarImgUrl,
    u2.username as answer_name
   FROM
    blog_comment c
    JOIN blog_user u ON c.user_id = u.id 
    join blog_user u2 on c.answer_id = u2.id
   WHERE
    c.id IN (
   SELECT
    SUBSTRING_INDEX( SUBSTRING_INDEX( getAllSubNodes ( ${id} ), ',', help_topic_id + 1 ), ',',- 1 ) AS num 
   FROM
    mysql.help_topic 
   WHERE
    help_topic_id < LENGTH( getAllSubNodes ( ${id} ) ) - LENGTH( REPLACE ( getAllSubNodes ( ${id} ), ',', '' ) ) + 1 
    )`
    db.base(sql, [], (result) => {
        if (!result) {
            res.json({
                status: -1,
                message: '失败',
            })
        } else {
            res.json({
                status: 200,
                message: '成功',
                data: result
            })
        }
    })
}

exports.prase = (req, res) => {
    var id = req.body.id;
    var sql = `update blog_comment set prase_count = ? where id = ${id}`;
    var sql1 = `SELECT prase_count from blog_comment where id = ${id}`;
    var prase_count;
    db.base(sql1, [], (result) => {
        prase_count = result[0].prase_count += 1
        db.base(sql, [prase_count], (result) => {
            if (result.affectedRows == 1) {
                return res.json({
                    status: 200,
                    message: '点赞成功'
                })
            } else {
                return res.json({
                    status: -1,
                    message: '点赞失败'
                })
            }
        })
    })
}