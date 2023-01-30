import { createContext, useCallback, useState } from "react";


const StudentContext = createContext()


export const StudentProvider = ({ children }) => {
    const [studentData, setStudentData] = useState({})
    const [studentsData, setStudentsData] = useState([])
 
    const addStudents =  useCallback(
      (newState ) =>   {
        console.log(newState);
        setStudentsData([...newState])

    },
      [studentsData,setStudentsData],
    )
    const addStudent =  useCallback(
      (newState ) =>   {
        console.log(newState);
        setStudentData({...newState})

    },
      [studentData,setStudentData],
    )
  
    const getStudents = useCallback(
        () => ({setStudentsData, ...studentsData}),
        [studentsData, setStudentsData],
      )
    const getStudent = useCallback(
        () => ({setStudentData, ...studentData}),
        [studentData, setStudentData],
      )
    

    return (
        <StudentContext.Provider value={{getStudents,getStudent,addStudent, studentData, addStudents ,studentsData}}>
            {children}
        </StudentContext.Provider>)
}

export default StudentContext