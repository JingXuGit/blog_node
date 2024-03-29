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
//查询单条文章数据
router.post('/api/selectOneArticle', services.selectOneArticle);
//删除单条文章数据
router.post('/api/deleteOneArticle', services.deleteOneArticle);


//添加随笔
router.post('/api/addEssays', services.addEssays);

router.post('/api/selectEssays', services.selectEssays);

router.post('/api/deleteOneEssays', services.deleteOneEssays);

router.post('/api/uploadImage', services.uploadImage);



router.post('/api/selectBlogNum', services.selectBlogNum);


router.post('/api/selectBlogLabel', services.selectBlogLabel);

router.post('/api/addcomment', services.addcomment);

router.post('/api/selectcomment', services.selectcomment);

router.post('/api/replycomment', services.replycomment);

router.post('/api/selectReply', services.selectReply);

router.post('/api/prase', services.prase);



module.exports = router