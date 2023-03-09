
export default class CourseStore{
    constructor(){
        this._categories = [
            {id: 1, name: 'Визаж'},
            {id: 2, name: 'Ногтевой сервис'},
            {id: 3, name: 'Парикмахерское искусство'},
            {id: 4, name: 'Подология'}
        ]
        this._masters = [
            {id: 1, name: 'Наталья', email: 'nataly@gmail.com', password: 'nata69', role: 'MASTER', qualification: 'Парикмахер'},
            {id: 2, name: 'Светлана', email: 'sweet@gmail.com', password: 'nata09', role: 'MASTER', qualification: 'Визажист'}
        ]
        this._courses = [
            {id: 1, name: "c1", description: "jkhjklsavhed", rating: 5, time: "5 мес", price: 50000, img: "example.jpg"},
            {id: 2, name: "c2", description: "jkhjklsavhed", rating: 4,time: "5 мес", price: 50900, img: "example.jpg"},
            {id: 3, name: "c3", description: "jkhjklsavhed", rating: 0,time: "5 мес", price: 50000, img: "example.jpg"},
            {id: 4, name: "c4", description: "jkhjklsavhed", rating: 3,time: "5 мес", price: 50000, img: "example.jpg"},
            {id: 5, name: "c5", description: "jkhjklsavhed", rating: 5,time: "5 мес", price: 50000, img: "example.jpg"},
            {id: 6, name: "c6", description: "jkhjklsavhed", rating: 0,time: "5 мес", price: 50000, img: "example.jpg"},
            {id: 7, name: "c7", description: "jkhjklsavhed", rating: 3,time: "5 мес", price: 50000, img: "example.jpg"},
            {id: 8, name: "c8", description: "jkhjklsavhed", rating: 5,time: "5 мес", price: 50000, img: "example.jpg"}
        ]
        this._selectedCategory = {}
    }
    setCategories(category){
        this._categories = category
    }
    setMasters(master){
        this._masters = master
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
    get masters(){
        return this._masters
    }
    get courses(){
        return this._courses
    }
    get selectedCategory(){
        return this._selectedCategory
    }
}