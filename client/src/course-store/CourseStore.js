import {makeAutoObservable} from "mobx";

export default class CourseStore{
    constructor(){
        this._categories = []
        this._courses = []
        this._selectedCategory = {}
        this._selectedBackground = {}
        this._backgrounds = []
        makeAutoObservable(this)
    }
    setBackgrounds(background){
        this._backgrounds = background
    }
    setSelectedBackgrounds(background){
        this._selectedBackground = background
    }
    setCategories(category){
        this._categories = category
    }
    setCourses(course){
        this._courses = course
    }
    setSelectedCategory(category){
        this._selectedCategory = category
    }
    get categories(){
        return this._categories
    }
    get backgrounds(){
        return this._backgrounds
    }
    get courses(){
        return this._courses
    }
    get selectedCategory(){
        return this._selectedCategory
    }
}