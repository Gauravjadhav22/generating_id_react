import React, { useEffect } from 'react'
import logo from "../assets/logo-g.png"
import sign from "../assets/sign.png"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import StudentContext from '../context/icardProvider';
import { useContext } from 'react';
import QRCode from 'react-qr-code';
const Template = () => {

  const { studentData } = useContext(StudentContext)
  const printDocument = async () => {

    const icard = document.querySelector('#icardtopdf')

    const doc = new jsPDF('l', 'pt');
    await html2canvas(icard, {
      allowTaint: true,
      useCORS: true,

    }).then((canvas) => {
      doc.addImage(canvas.toDataURL("image/png"), 'PNG', 5, 5, 568, 600);
    })


    doc.save("Document.pdf")



  }




  return (
    <>

      <div className='flex justify-center mt-14 animate-bounce'>
        <button onClick={() => printDocument()} className='bg-blue-600 text-white p-1 rounded-lg text-xl'>
          click here to download
        </button>
      </div>

      <div id='icardtopdf' style={{ width: "584px" }} className='p-10 mx-14 flex-col justify-between items-center  h-fit overflow-hidden '>
        <div className='border-b-0 shadow rounded-xl bg-black'>
          {/* //header of icard */}
          <div className='rounded-t-xl p-1 pb-1 flex justify-around items-center bg-purple-500 text-white capitalize'>
            <div style={{ marginLeft: "-20px", marginRight: "-60px" }} >

              <img alt="img.jpg" src={logo} width={90} />
            </div>


            <div className='mr-5 flex flex-col text-center'>
              <p className='text-lg font-bold'>mahatma gandhi mission's</p>
              <p className='text-lg font-bold'>college of computer science & it</p>
              <p style={{ fontSize: "10px" }}>near airport nanded-431605 tel-45645*** web:https://www.mgmccsit.ac.in/</p>
            </div>
          </div>

          {/* //body of icard */}
          <div className='px-3 bg-white flex justify-between border-2 rounded-2xl '>
            <div className='py-2'>
              <div className='text-black capitalize text-lg font-semibold'>
                <p>Name: &nbsp;{studentData.fullName}</p>
                <p>address: &nbsp;{studentData.address}</p>
                <p>class: &nbsp;{studentData.className}</p>
                <div className='grid grid-cols-2 gap-3 py-1'>
                  <p>dob: &nbsp;{studentData.dob} ({studentData.age}yrs)</p>
                  <p>student_code: &nbsp;{studentData.studentCode}</p>
                  <p>bloodgroup: &nbsp;{studentData.bloodgrp}</p>
                  <p>phone: &nbsp;{studentData.phone}</p>
                  <p>Year: &nbsp;{new Date().getFullYear()}</p>
                </div>

              </div>



            </div>
            {/* //userpic and principal sign of icard */}
            <div className='mt-14 flex flex-col justify-self-end items-center'>
              <div className='rounded-lg h-fit overflow-hidden shadow-md border-2 p-1 bg-purple-500'>
                <img alt="img.jpg" className='border-2 rounded-lg shadow-xl bg-white' src={studentData.userPic} width={190} />

              </div>
              <div style={{ marginTop: "-52px" }} className='text-xl'>
                <img alt="img.jpg" src={sign} width={80} height={12} />

                <h1 style={{ marginTop: "-12px", marginBottom: "8px" }}>principal</h1>
              </div>

            </div>
          </div>
        </div>
        <br />
        <br />


        <div className='border rounded-xl shadow '>
          {/* //body of icard */}
          <div className=' bg-white pt-1 flex-col justify-between rounded-xl'>
            <div className='px-1 text-xl font-medium'>

              <div className='flex justify-between '>
                <h1>PLEASE NOTE</h1>
                <div>

                  <h1 className='text-right'>4234435342342</h1>
                </div>

              </div>

              <ol className='list-decimal text-xs capitalize p-4'>
                <li>the student should possess identity card and must produce whenever demanded.</li>
                <li className='my-1'>if it is lost. the card holder must intimate to the principal and apply for a new card within a week.</li>
                <li>if this card does not belong to you, please return it to: <i>the principal, MGM'S College of comp. Sci & It, nanded</i></li>
              </ol>


            </div>
            <div className="rounded-sm relative w-full h-52 flex justify-end items-end bg-college">

              <QRCode
                size={56}
                style={{ height: "auto", maxWidth: "35%", width: "35%", padding: "2px" }}
                value={`name:${studentData.fullName} \n ParentContact:${studentData.parentPhone} \n MohterName:${studentData.motherName}`}
                viewBox={`0 0 56 56`} />
            </div>


          </div>
        </div>
      </div>


    </>

  )
}

export default Template