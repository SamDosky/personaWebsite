const pgp = require('pg-promise')({})
const db = pgp('postgres://localhost/schools')

const getTeachers = (req, res, next) => {
    db
        .any('SELECT teachers.id, teachers.name AS teacher, subject, schoolID, schools.name AS school FROM teachers JOIN schools ON schoolID=schools.id;')
        .then(data => {
            res.status(200).json({
                status: 'success',
                data: data,
            })
        })
        .catch(err => {
            return next(err)
        })
}

const getTeachersBySchool = (req, res, next) => {
    db
        .any('SELECT teachers.id, teachers.name AS teacher, subject, schoolID, schools.name AS school FROM teachers JOIN schools ON schoolID=schools.id WHERE schools.name=$1;',
            [req.body.school])
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
            })
        })
        .catch(err => {
            return next(err)
        })
}

const getTeachersBySubject = (req, res, next) => {
    db
        .any('SELECT teachers.id, teachers.name AS teacher, subject, schoolID, schools.name AS school FROM teachers JOIN schools ON schoolID=schools.id WHERE subject=$1;',
            [req.body.subject])
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
            })
        })
        .catch(err => {
            return next(err)
        })
}

// Get all teachers with no schools 
const getTeachersNullJob = (req, res, next) => {
    db
        .any('SELECT teachers.id, teachers.name AS teacher, subject, schoolID, schools.name AS school FROM teachers LEFT JOIN schools ON schoolID=schools.id WHERE schoolid IS null;')
        .then(data => {
            res.status(200).json({
                status: 'Success',
                data: data,
            })
        })
        .catch(err => {
            return next(err)
        })
}

module.exports = {
    getTeachers: getTeachers,
    getTeachersBySchool: getTeachersBySchool,
    getTeachersBySubject: getTeachersBySubject,
    getTeachersNullJob: getTeachersNullJob
}