const {Course, CourseMaterials, CourseSkills} = require("../models/models")
const ApiError = require('../errors/ApiErrors')
const uuid = require('uuid')
const path = require('path');

class CourseController{
    async create(req, res, next){
        try{
            let {name, description, price, duration1, categoryId, userId, materials, skills} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const course = await Course.create({name, description, price, duration1, categoryId, userId, img: fileName});

            if (materials) {
                materials = JSON.parse(materials)
                materials.forEach(i =>
                    CourseMaterials.create({
                        filename: i.filename,
                        title: i.title,
                        description: i.description,
                        courseId: course.id
                    })
                )
            }
            if (skills) {
                skills = JSON.parse(skills)
                skills.forEach(i =>
                    CourseSkills.create({
                        description: i.description,
                        courseId: course.id
                    })
                )
            }
            return res.json(course)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res){
        let {categoryId, userId, limit, page} = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let courses;
        if (!categoryId && !userId){ //не указано ничего
            courses = await Course.findAndCountAll({limit, offset})
        }
        if (categoryId && !userId){ //указана только категория
            courses = await Course.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if (!categoryId && userId){ //указан только мастер
            courses = await Course.findAndCountAll({where:{userId}, limit, offset})
        }
        if (categoryId && userId){ //указано всё
            courses = await Course.findAndCountAll({where:{categoryId, userId}, limit, offset})
        }
        return res.json(courses)
    }
    async getOne(req, res){
        const {id} = req.params
        const course = await Course.findOne(
            {
                where: {id},
                include: [{model: CourseSkills, as: 'skills'}, {model: CourseMaterials, as: 'materials'}]
            }
        )
        return res.json(course)
    }
    async update(req, res){
        const course = req.body
        try{
            const updatedCourse = await Course.update(
                course,
                {where: {id: req.params.id}}
            )
            return res.json(updatedCourse)
        } catch (error){
            res.json({message: error.message})
        }
    }

    async delete (req, res){
        try{
            await Course.destroy(
                {where: {id: req.params.id}}
            )
            return res.json({message: "course deleted"})
        } catch (error){
            res.json({message: error.message})
        }
    }
}

module.exports = new CourseController()