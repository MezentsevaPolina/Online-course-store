import {$authHost, $host} from "./index";


export const createCourse = async (course) => {
    const {data} = await $authHost.post('api/course', course)
    return data
}
export const updateCourse = async (id, course) => {
    const {data} = await $authHost.put('api/course/' + id, course)
    return data
}
export const deleteCourse = async (id) => {
    const {data} = await $authHost.post('api/course/' + id)
    return data
}
export const fetchCourses = async () => {
    const {data} = await $host.get('api/course',)
    return data
}

export const fetchOneCourse = async (id) => {
    const {data} = await $host.get('api/course/' + id,)
    return data
}