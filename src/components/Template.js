import React, { useContext, useEffect } from 'react'
import PdfFile from './PdfFile'
import logo from "../assets/logo-g.png"
import sign from "../assets/sign.png"
import bgImg from "../assets/p1.jpg"
import load from "../assets/load.gif"
import { Document, Image, Page, PDFDownloadLink, Text, View } from '@react-pdf/renderer'
import StudentContext from '../context/icardProvider'
const Template = () => {
  const { studentsData, studentData } = useContext(StudentContext)

  // const { studentData } = useContext(StudentContext)
  // const printDocument = async () => {

  //   const icard = document.querySelector('#icardtopdf')

  //   const doc = new jsPDF('l', 'pt');
  //   await html2canvas(icard, {
  //     allowTaint: true,
  //     useCORS: true,

  //   }).then((canvas) => {
  //     doc.addImage(canvas.toDataURL("image/png"), 'PNG', 5, 5, 568, 600);
  //   })


  //   doc.save("Document.pdf")



  // }

  const PdfFile = () => {

    console.log(useContext(StudentContext));


    return (
      <Document >
        <Page style={{ textTransform: "capitalize", }} >




          <View style={{ backgroundColor: "purple", height: "400px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-start", border: "1px solid black", borderRadius: "25px", marginHorizontal: "25px", marginTop: "5px" }} >

            <View style={{ backgroundColor: "#BF55EC", borderRadius: "25px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", flexDirection: "row", padding: "1px", paddingLeft: "2px" }}>
              <View>

                <Image alt="img.jpg" src={logo} style={{ width: "93px" }} />
              </View>
              <View style={{ marginHorizontal: "20px", color: 'white',justifyContent:"center",alignItems:"center" }}>

                <Text style={{ marginTop: "8px", textAlign: "center",fontSize:"18px" }} >mahatma gandhi mission's</Text>
                <Text style={{ marginTop: "8px",textTransform:"uppercase" ,fontSize:"22px" }} >college of computer science & it</Text>
                <Text style={{ marginTop: "8px", marginBottom: "8px", fontWeight: "bold",fontSize:"12px" }}>near airport nanded-431605 tel-45645*** web:https://www.mgmccsit.ac.in/</Text>
              </View>

            </View>
            <View style={{ padding: "10px", backgroundColor: "white", textAlign: "left", display: "flex", flexDirection: "column", alignContent: "start", alignItems: "left", margin: "8px", borderRadius: "10px" }}>
              <View style={{ display: 'flex', justifyContent: "between", flexDirection: "row", marginBottom: "15px" }}>
                <View  >
                  <Text style={{ margin: "10px", }} fixed>Name: {studentData.fullName}</Text>
                  <Text style={{ margin: "10px", }} fixed>Age: {studentData.age}</Text>
                  <Text style={{ margin: "10px", }} fixed>Address: {studentData.address}</Text>
                  <Text style={{ margin: "10px", }} fixed>Phone: {studentData.phone}</Text>

                </View>
                <View style={{ flex: "1", alignSelf: "flex-end", marginLeft: "55px", border: "2px solid purple", padding: "0px", borderRadius: "25px", paddingVertical: "0px", display: "flex", justifyContent: "flex-start", alignItems: 'center', flexDirection: "column", overflow: 'hidden' }}>
                  <Image alt="img.jpg" src={studentData.userPic} style={{ width: "183px", height: "158px" }} />
                  <Image alt="img.jpg" src={sign} style={{ width: "143px", height: "52px", position: 'absolute', top: "71%" }} />
                </View>
              </View>


              <View style={{ display: "flex", justifyContent: "space-between", textAlign: "left", alignItems: "center", flexDirection: "row" }}>
                <View>

                  <Text style={{ margin: "10px", marginHorizontal: "1" }} fixed>BloodGrp: {studentData.bloodgrp}</Text>
                  <Text style={{ margin: "10px", marginHorizontal: "1" }} fixed>Dob: {studentData.dob}</Text>
                </View>
                <View>

                  <Text style={{ margin: "10px", marginHorizontal: "1" }} fixed>Email: {studentData.email}</Text>
                  <Text style={{ margin: "10px", marginHorizontal: "1" }} fixed>ClassName: {studentData.className}</Text>
                </View>
              </View>

            </View>



          </View>


        </Page>

         <Page style={{ textTransform: "capitalize", }} >


          <View style={{ height: "400px", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "25px", justifyContent: "flex-start", margin: "25px", overflow: "hidden" }}>

            <View style={{ padding: "15px" }}>
              <View  >

                <Text style={{ marginTop: "15", fontWeight: "bold", fontSize: "20px" }}>- the student should possess identity card and must produce whenever demanded.</Text>
              </View>
              <View >
                <Text style={{ marginTop: "15", fontWeight: "bold", fontSize: "20px" }}>- if it is lost. the card holder must intimate to the principal and apply for a new card within a week.</Text>
              </View>
              <View >
                <Text style={{ marginTop: "15", fontWeight: "bold", fontSize: "20px" }}>- if this card does not belong to you, please return it to: <i>the principal, MGM'S College of comp. Sci & It, nanded</i></Text>
              </View>
            </View>
            <Image alt="img.jpg" src={bgImg} style={{ width: "618px", height: "218px", padding: "-32px" }} />

            <Image
              style={{ height: "125px", width: "152px", position: "absolute", top: "47%" }}
              src={`${`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=name: ${studentData.fullName} --> ParentContact: ${studentData.parentPhone} --> MotherName: ${studentData.motherName}`}`}
            />
          </View>

        </Page>


      </Document >
    )
  }



  return (
    <>

      <>


        {
          <PDFDownloadLink document={<PdfFile />} filename="FORM">
            {({ loading }) => (loading ?
              <div className='text-3xl text-black flex justify-center mt-52 items-center'>
                <img src={load} height={150} width={150} />
                <h1>please wait Pdf is creating</h1>
              </div>


              : <div className='text-3xl text-black flex justify-center mt-52'>
                <button className='text-white bg-green-500 p-2 rounded-xl'>Download Pdf</button>
              </div>)}
          </PDFDownloadLink>
        }

      </>

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

              <img style={{ height: "125px", width: "152px", position: "absolute", }}
                src={`${`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=name: ${studentData.fullName} --> ParentContact: ${studentData.parentPhone} --> MotherName: ${studentData.motherName}`}`}
              />    </div>


          </div>
        </div>
      </div>


    </>

  )
}

export default Template