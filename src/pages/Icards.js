import React, { useEffect, useRef, useState } from 'react'
import logo from "../assets/logo-g.png"
import sign from "../assets/sign.png"
import bgImg from "../assets/p1.jpg"
import load from "../assets/load.gif"

import StudentContext from '../context/icardProvider';
import { useContext } from 'react';

import { PDFDownloadLink } from '@react-pdf/renderer';

import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";




const Icards = () => {
    const { studentsData, getStudents } = useContext(StudentContext)
    console.log(studentsData);
    // const [frontData, setFrontData] = useState([])
    let frontData = []

    const PdfFile = () => {

        console.log(useContext(StudentContext));


        return (
            <Document >
                {studentsData.map((itm, index) => <Page key={index} style={{ textTransform: "capitalize", display: "flex", flexDirection: "row", flexWrap: "wrap" }} >

                    {itm.map((studentData, index) => {
                        return <View style={{ border: "1px solid black", backgroundColor: "purple", height: "25%", width: "45%", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-start", borderRadius: "25px", marginTop: "5px", margin: "12px" }} key={index + 'key'}>

                            <View style={{ backgroundColor: "#BF55EC", borderRadius: "25px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", flexDirection: "row", padding: "1px", paddingLeft: "2px" }}>
                                <View>

                                    <Image alt="img.jpg" src={logo} style={{ width: "55px" }} />
                                </View>
                                <View style={{ marginHorizontal: "15px", color: 'white', justifyContent: "center", alignItems: "center", }}>

                                    <Text style={{ marginTop: "5px", textAlign: "center", fontSize: "12px" }} >mahatma gandhi mission's</Text>
                                    <Text style={{ marginTop: "5px", textTransform: "uppercase", fontSize: "10px" }} >college of computer science & it</Text>
                                    <Text style={{ marginTop: "5px", marginBottom: "8px", fontWeight: "bold", fontSize: "5px", alignSelf: "flex-start" }}>near airport nanded-431605 tel-45645*** web:https://www.mgmccsit.ac.in/</Text>
                                </View>

                            </View>
                            <View style={{ padding: "10px", backgroundColor: "white", textAlign: "left", display: "flex", flexDirection: "column", alignContent: "start", alignItems: "left", margin: "5px", borderRadius: "10px" }}>
                                <View style={{ display: 'flex', justifyContent: "between", flexDirection: "row", marginBottom: "15px" }}>
                                    <View  >
                                        <Text style={{ marginTop: "10px", fontSize: "8px" }} fixed>Name: {studentData.fullName}</Text>
                                        <Text style={{ marginTop: "10px", fontSize: "8px" }} fixed>Age: {studentData.age}</Text>
                                        <Text style={{ marginTop: "10px", fontSize: "8px" }} fixed>Address: {studentData.address}</Text>
                                        <Text style={{ marginTop: "10px", fontSize: "8px" }} fixed>Phone: {studentData.phone}</Text>

                                    </View>
                                    <View style={{ width: "65px", height: "70px", alignSelf: "flex-end", marginLeft: "35px", overflow: 'hidden', display: "flex", justifyContent: "center" }}>
                                        <Image alt="img.jpg" src={studentData.userPic} style={{ width: "63px", height: "70px", border: "5px solid purple", borderRadius: "5px", backgroundColor: "purple", padding: "1px" }} />
                                        <Image alt="img.jpg" src={sign} style={{ width: "55px", height: "32px", position: 'absolute', top: "55%", left: "1%" }} />
                                    </View>
                                </View>


                                <View style={{ display: "flex", justifyContent: "space-between", textAlign: "left", alignItems: "center", flexDirection: "row" }}>
                                    <View>

                                        <Text style={{ margin: "10px", marginHorizontal: "1", fontSize: "8px" }} fixed>BloodGrp: {studentData.bloodgrp}</Text>
                                        <Text style={{ margin: "10px", marginHorizontal: "1", fontSize: "8px" }} fixed>Dob: {studentData.dob}</Text>
                                    </View>
                                    <View>

                                        <Text style={{ margin: "10px", marginHorizontal: "1", fontSize: "8px" }} fixed>Email: {studentData.email}</Text>
                                        <Text style={{ margin: "10px", marginHorizontal: "1", fontSize: "8px" }} fixed>ClassName: {studentData.className}</Text>
                                    </View>
                                </View>

                            </View>



                        </View>
                    })}

                </Page>)}
                {studentsData.map((itm, index) => <Page key={index} style={{ textTransform: "capitalize", display: "flex", flexDirection: "row", flexWrap: "wrap" }} >

                    {
                        itm?.map((studentData, index) => {




                            return <View style={{ height: "25%", width: "45%", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "15px", justifyContent: "flex-start", margin: "12px", overflow: "hidden" }} key={index + 'key'}>

                                <View style={{ padding: "10px" }}>
                                    <View  >

                                        <Text style={{ marginTop: "10px", fontWeight: "bold", fontSize: "10px" }}>- the student should possess identity card and must produce whenever demanded.</Text>
                                    </View>
                                    <View >
                                        <Text style={{ marginTop: "10px", fontWeight: "bold", fontSize: "10px" }}>- if it is lost. the card holder must intimate to the principal and apply for a new card within a week.</Text>
                                    </View>
                                    <View >
                                        <Text style={{ marginTop: "10px", fontWeight: "bold", fontSize: "10px" }}>- if this card does not belong to you, please return it to: <i>the principal, MGM'S College of comp. Sci & It, nanded</i></Text>
                                    </View>
                                </View>
                                <Image alt="img.jpg" src={bgImg} style={{ width: "618px", height: "118px", padding: "-32px" }} />

                                <Image
                                    style={{ height: "65px", width: "65px", position: "absolute", top: "50%" }}
                                    src={`${`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=name: ${studentData.fullName} --> ParentContact: ${studentData.parentPhone} --> MotherName: ${studentData.motherName}`}`}
                                />
                            </View>

                        })}
                </Page>)}
            </Document >
        )
    }









    return (
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

    )
}

export default Icards