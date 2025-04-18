import { Course } from "../models/courseModel.js";

export const getAllCourses = async () => {
    const courses = await Course.find();
    return courses;
    }

export const getCourseById = async (parent:any, arg: {id:string}) => {
    console.log(arg.id);
    const course = await Course.findById(arg.id);
    console.log(course);
    return course;
}    

export const getAllLectures = async () => {
}