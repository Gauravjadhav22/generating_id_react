import React, { useEffect, useRef, useState } from 'react'
import logo from "../assets/logo-g.png"
import sign from "../assets/sign.png"
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import StudentContext from '../context/icardProvider';
import { useContext } from 'react';
import QRCode from 'react-qr-code';
import PdfFile from '../components/PdfFile';
import { PDFDownloadLink } from '@react-pdf/renderer';


const Icards = () => {


    const { studentsData, getStudents } = useContext(StudentContext)



    const printDocument = async () => {

        const icards = document.getElementById('icards')
        console.log(icards);

        const doc = new jsPDF('pt', 'mm');

        setTimeout(() => {

            html2canvas(icards, {
                allowTaint: true,
                useCORS: true,
                scrollY: -window.scrollY,
                scale: 1

            }).then((canvas) => {
                const imgWidth = 170;
                const pageHeight = 220;
                const imgHeight = ((canvas.height * imgWidth) / canvas.width);
                let heightLeft = imgHeight;
                let position = 0;
                doc.addImage(canvas.toDataURL("image/png"), 'PNG', 10, 0, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight +315;
                    doc.addPage();
                    doc.addImage(canvas.toDataURL("image/png"), 'PNG', 10, position, imgWidth, imgHeight );

                    heightLeft -= pageHeight;
                }
         
              
              doc.save('download.pdf');
            })



        }, 1000);







    }
    // useEffect(() => {

    //     if (window.performance) {
    //         if (performance.navigation.type == 1) {
    //             return window.location.href = '/'
    //         }
    //     }

    //     return (() => {


    //     })
    // }, [])




    return (
        <>

            <>
            <div className='flex justify-center mt-14 animate-bounce'>
                <button onClick={() => printDocument()} className='bg-blue-600 text-white p-1 rounded-lg text-xl'>
                    click here to download
                </button>
            </div>
            <div id='icards' >
                {studentsData.map((studentData, index) => {

                    return (
                        <div key={index + 'key'} style={{ width: "584px", height: '440mm', overflow: 'visible',marginBottom:"152px"  }} className='p-10 mx-14 flex-col justify-between items-center  h-fit overflow-visible '>
                            <div className='border-b-0 shadow rounded-xl bg-black'>
                          
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


                            <div className='rounded-xl shadow '>
                       
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
                        </div>)

                })}
            </div>
</>
            {/* {
                setTimeout(() => {
                    <PDFDownloadLink document={<PdfFile students={studentsData} />} filename="FORM">
                        {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
                    </PDFDownloadLink>
                }, 2000)
            } */}

            {/* <PdfFile students={studentsData} /> */}
        </>

    )
}

export default Icards