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



    const PdfFile = () => {

        console.log(useContext(StudentContext));


        return (
            <Document >
                {
                    studentsData?.map((studentData, index) => {

                        return <Page style={{ textTransform: "capitalize", }} >




                            <View style={{ backgroundColor: "purple", height: "400px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-start", border: "1px solid black", borderRadius: "25px", marginHorizontal: "25px", marginTop: "5px" }} key={index + 'key'}>

                                <View style={{ backgroundColor: "#BF55EC", borderRadius: "25px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", flexDirection: "row", padding: "1px", paddingLeft: "2px" }}>
                                    <View>

                                        <Image alt="img.jpg" src={logo} style={{ width: "93px" }} />
                                    </View>
                                    <View style={{ marginHorizontal: "20px", color: 'white', justifyContent: "center", alignItems: "center" }}>

                                        <Text style={{ marginTop: "8px", textAlign: "center", fontSize: "18px" }} >mahatma gandhi mission's</Text>
                                        <Text style={{ marginTop: "8px", textTransform: "uppercase", fontSize: "22px" }} >college of computer science & it</Text>
                                        <Text style={{ marginTop: "8px", marginBottom: "8px", fontWeight: "bold", fontSize: "12px" }}>near airport nanded-431605 tel-45645*** web:https://www.mgmccsit.ac.in/</Text>
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
                    })}
                {
                    studentsData?.map((studentData, index) => {

                        return <Page style={{ textTransform: "capitalize", }} >


                            <View style={{ height: "400px", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "25px", justifyContent: "flex-start", margin: "25px", overflow: "hidden" }} key={index + 'key'}>

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
                                    style={{ height: "125px", width: "152px", position: "absolute", top: "50%" }}
                                    src={`${`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=name: ${studentData.fullName} --> ParentContact: ${studentData.parentPhone} --> MotherName: ${studentData.motherName}`}`}
                                />
                            </View>

                        </Page>
                    })}

            </Document >
        )
    }









    return (
        <>


            {
                <PDFDownloadLink document={<PdfFile students={studentsData} />} filename="FORM">
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