import { createContext, useState } from "react";


const StudentContext = createContext()


export const StudentProvider = ({ children }) => {
    const [studentData, setStudentData] = useState({})
    const [studentsData, setStudentsData] = useState([{
        fullName: "testdata.fullName11",
        email: "testdata.email",
        address: "testdata.address",
        age: "testdata.age",
        bloodgrp: "testdata.bloodgrp",
        phone: " testdata.phone",
        className: "testdata.className",
        dob: "testdata.dob",
        userPic: "testdata.userPic",
        parentPhone: "testdata.parentPhone",
        motherName: "testdata.motherName",
    },{
        fullName: "testdata.fullName33",
        email: "testdata.email",
        address: "testdata.address",
        age: "testdata.age",
        bloodgrp: "testdata.bloodgrp",
        phone: " testdata.phone",
        className: "testdata.className",
        dob: "testdata.dob",
        userPic: "testdata.userPic",
        parentPhone: "testdata.parentPhone",
        motherName: "testdata.motherName",
    },{
        fullName: "testdata.fullName55",
        email: "testdata.email",
        address: "testdata.address",
        age: "testdata.age",
        bloodgrp: "testdata.bloodgrp",
        phone: " testdata.phone",
        className: "testdata.className",
        dob: "testdata.dob",
        userPic: "testdata.userPic",
        parentPhone: "testdata.parentPhone",
        motherName: "testdata.motherName",
    },{
        fullName: "testdata5.fullName",
        email: "testdata.email",
        address: "testdata.address",
        age: "testdata.age",
        bloodgrp: "testdata.bloodgrp",
        phone: " testdata.phone",
        className: "testdata.className",
        dob: "testdata.dob",
        userPic: "testdata.userPic",
        parentPhone: "testdata.parentPhone",
        motherName: "testdata.motherName",
    },])

    const addStudent = (data) => {
        setStudentData({ ...data })
    }


    return (
        <StudentContext.Provider value={{ studentData, addStudent ,studentsData}}>
            {children}
        </StudentContext.Provider>)
}

export default StudentContext