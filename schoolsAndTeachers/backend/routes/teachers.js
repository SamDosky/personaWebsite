var db = require('../db/queries')
var express = require('express')
var router = express.Router()

router.get('/', db.getTeachers)
router.get('/notEmployed', db.getTeachersNullJob) 
router.post('/school', db.getTeachersBySchool)
router.post('/subject', db.getTeachersBySubject)

module.exports = router;
