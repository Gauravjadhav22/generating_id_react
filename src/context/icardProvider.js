import { createContext, useCallback, useState } from "react";


const StudentContext = createContext()


export const StudentProvider = ({ children }) => {
  const [studentData, setStudentData] = useState({})
  const [studentsData, setStudentsData] = useState([])

  const addStudents = useCallback(
    (newState) => {
      console.log(newState);
      console.log(Math.round((newState.length / 4) + 1));
      let length = Math.round((newState.length / 4) + 1)
      let count = 0;
      let bigArr = []
      for (let index = 0; index < length; index++) {
        let arr = []
        if (!newState[count]) {
          break
        }
        for (let i = 0; i < 8; i++) {

          if (!newState[count]) {
            break
          }
          arr.push(newState[count])
          console.log();
          count++;

        }
        bigArr.push(arr)

      }
      console.log(bigArr);

      setStudentsData([...bigArr])

    },
    [studentsData, setStudentsData],
  )
  const addStudent = useCallback(
    (newState) => {
      console.log(newState);
      setStudentData({ ...newState })

    },
    [studentData, setStudentData],
  )

  const getStudents = useCallback(
    () => ({ setStudentsData, ...studentsData }),
    [studentsData, setStudentsData],
  )
  const getStudent = useCallback(
    () => ({ setStudentData, ...studentData }),
    [studentData, setStudentData],
  )


  return (
    <StudentContext.Provider value={{ getStudents, getStudent, addStudent, studentData, addStudents, studentsData }}>
      {children}
    </StudentContext.Provider>)
}

export default StudentContext
