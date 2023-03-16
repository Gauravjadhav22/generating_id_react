import React, { useContext, useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import mgmLogo from '../assets/logo-g.png'
import userLogo from '../assets/man.png'
import excl from "../assets/excl.png"
import * as XLSX from 'xlsx'
import StudentContext from '../context/icardProvider'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [exl, setExl] = useState(null)
  const [showForm, setShowForm] = useState(null)
  const [excelFile, setExcelFile] = useState(null);
  const { addStudents } = useContext(StudentContext)
  const [excelFileError, setExcelFileError] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const navigate = useNavigate()
  // useEffect(() => {
  //   console.log(exl);
  //   const uploadExcl = async () => {

  //     // const result = await excl({
  //     //   sourceFile: exl,
  //     //   header: {
  //     //     rows: 3
  //     //   },
  //     //   columnToKey: {
  //     //     'fullName': '{{A1}}',
  //     //     'age': '{{B1}}'
  //     //   }
  //     // })


  //     // const file = exl;
  //     // const reader = new FileReader();
  //     // reader.onload = (e) => {
  //     //   const data = new Uint8Array(e.target.result);
  //     //   const workbook = readFile(data);
  //     //   const sheetName = workbook.SheetNames[0];
  //     //   const sheet = workbook.Sheets[sheetName];
  //     //   const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  //     //   setJsonData(jsonData);
  //     //   console.log(jsonData);
  //     // }
  //     // reader.readAsArrayBuffer(file);
  //     // console.log(result);
  //   }

  //   uploadExcl()


  //   console.log(jsonData);



  // }, [exl])

  const handleChange = (e) => {


    setShowForm(e.target.value)

  }

  const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    console.log(fileType.includes(selectedFile.type));
    console.log(selectedFile.type);
    if (selectedFile) {
      // console.log(selectedFile.type);
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
          console.log(e.target.result);
        }
      }
      else {
        setExcelFileError('Please select only excel file types');
        setExcelFile(null);
      }
    }
    else {
      console.log('plz select your file');
    }
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      console.log(data);
      setExcelData(data);
      addStudents(data)
      navigate('/icards')

    }
    else {
      setExcelData(null);
    }
  }

  return (< >


    <div className='flex flex-col justify-center items-center'>


      <div className='flex items-center mt-4'>

        <img src={mgmLogo} alt='user_img' />
        <h1 className='font-bold ml-2 text-purple-600'>
          MGM CS AND IT
        </h1>
      </div>
      <div className='my-2 mt-4 w-fit flex flex-col items-center rounded-full shadow-md border px-10 py-4 pb-8 shadow-purple-500'>
        <img src={userLogo} className="rounded-full shadow-sm p-1 shadow-green-400 bg-yellow-200" alt='user_img' width={150} />
        <h1 className='text-4xl font-bold ml-2 text-yellow-400'>I Card Generator</h1>

      </div>
    </div>
    <div className='flex justify-center mt-6'>
      <label className='bg-black text-white w-fit'>Choose Input:

        <select value={setShowForm} onChange={handleChange} className='bg-gray-500 ml-4 w-fit ' >

          <option selected value="InputFrom">--select--</option>
          <option selected value="InputFrom">Enter Details</option>
          <option value="ExcelFile">Upload Excel File</option>

        </select>
      </label>

    </div>
    {
      showForm === "ExcelFile" ? (<div className='flex flex-col my-4 items-center justify-center'>
        <h1 className='font-semibold text-2xl'>Convert Excel File To Pdf</h1>
        <form className='form-group' autoComplete="off"
          onSubmit={handleSubmit}>
          <label className='cursor-pointer text-center text-2xl font-semibold flex justify-center items-center border-2 rounded-xl my-4 shadow' > <p className='text-blue-500 border-3 border-yellow-400 w-fit p-2 rounded-lg mt-2'>Browse File</p> <img src={excl} height={20} />
            <input type="file" onChange={handleFile} required className='my-2 border-4 border-yellow-400 hidden'
            // onChange={(e) => setExl(e.target.files[0])}
            />
          </label>
          {excelFileError && <div className='text-red-500'
            style={{ marginTop: 5 + 'px' }}>{excelFileError}</div>}
          <button type='submit' className='bg-purple-600 font-semibold p-2 rounded-lg text-white text-xl px-24'
            style={{ marginTop: 5 + 'px' }}>Submit</button>
        </form>
      </div>) : (
        <div className='flex justify-center'>
          <InputForm />

        </div>
      )
    }


<div className=' absolute mt-14 left-0 right-0 flex justify-center'><p className='w-fit shadow-xl  hover:shadow-cyan-400 hover:rounded hover:shadow-lg'><a href='https://gauravjadhav22.github.io/portfolio-website/' className='shadow-sm p-1 px-2 w-full hover:bg-green-500 hover:text-white  shadow-amber-200' target="_blank"> Developed By -&gt; </a></p></div>
  </>

  )
}

export default Home