const express = require('express');
const router = express.Router();
const services = require('../services/userService.js');
// // 登录功能
router.post('/api/login', services.login);
// //注册功能
router.post('/api/register', services.register);
// 添加文章
router.post('/api/addArticle', services.addArticle);
//查询文章
router.post('/api/selectArticle', services.selectArticle);
//查询单条
router.post('/api/selectOneArticle', services.selectOneArticle);
//删除单条数据
router.post('/api/deleteOneArticle', services.deleteOneArticle);
module.exports = router