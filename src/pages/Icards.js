import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo-g.png";
import sign from "../assets/prSign.png";
import bgImg from "../assets/p1.jpg";
import load from "../assets/load.gif";

import StudentContext from "../context/icardProvider";
import { useContext } from "react";

import { PDFDownloadLink } from "@react-pdf/renderer";

import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

const Icards = () => {
  const { studentsData, getStudents } = useContext(StudentContext);
  console.log(studentsData);
  // const [frontData, setFrontData] = useState([])
  let frontData = [];

  const PdfFile = () => {
    console.log(useContext(StudentContext));

    return (
      <Document>
        {studentsData.map((itm, index) => (
          <Page
            key={index}
            style={{
              textTransform: "capitalize",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {itm.map((studentData, index) => {
              return (
                <View
                  style={{
                    border: "1px solid black",
                    backgroundColor: "purple",
                    height: "5.8cm",
                    width: "8.8cm",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    borderRadius: "5px",
                    marginTop: "6px",
                    margin: "12px",
                  }}
                  key={index + "key"}
                >
                  <View
                    style={{
                      backgroundColor: "#BF55EC",
                      borderBottom: "2px solid #9B51A0",
                      borderTopLeftRadius: "5px",
                      borderTopRightRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "row",
                      paddingLeft: "2px",

                    }}
                  >
                    <View style={{ paddingVertical: "2px" }}>
                      <Image
                        alt="img.jpg"
                        src={logo}
                        style={{ width: "45px" }}
                      />
                    </View>
                    <View
                      style={{
                        marginLeft: "5px",
                        color: "white",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{

                          textAlign: "center",
                          fontSize: "9px",
                          marginTop: "-2px"
                        }}
                      >
                        mahatma gandhi mission's
                      </Text>
                      <Text
                        style={{
                          marginVertical: "4px",
                          textTransform: "uppercase",
                          fontSize: "10px",
                          alignSelf: "flex-start"
                        }}
                      >
                        college of computer science & it
                      </Text>
                      <Text
                        style={{
                          marginBottom: "2px",
                          fontWeight: "bold",
                          fontSize: "5px",
                          alignSelf: "flex-start",
                        }}
                      >
                        near airport nanded-431605 tel: (02462)-222592
                        web:https://www.mgmccsit.ac.in/
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      padding: "10px",
                      backgroundColor: "white",
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      alignContent: "start",
                      alignItems: "left",
                      height: "70%",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        flexDirection: "row",
                        marginBottom: "5px",
                      }}
                    >
                      <View>
                        <Text
                          style={{ marginTop: "0px", fontSize: "8px" }}
                          fixed
                        >
                          Name: {studentData.fullName}
                        </Text>
                        <Text
                          style={{ marginTop: "4px", fontSize: "8px" }}
                          fixed
                        >
                          Age: {studentData.age}
                        </Text>
                        <Text
                          style={{ marginTop: "4px", fontSize: "8px", height: "22px", width: "200%" }}
                          fixed
                        >
                          Address: {studentData.address}
                        </Text>
                        <Text
                          style={{ fontSize: "8px", marginTop: "2px", height: "22px", width: "220%", marginBottom: "4px" }}

                        >
                          Email: {studentData.email}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: "65px",
                          height: "70px",
                          left: "58%",
                          alignSelf: "flex-end",
                          marginLeft: "35px",
                          top:"-20%",
                          position: "absolute",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          alt="img.jpg"
                          src={studentData.userPic}
                          style={{
                            width: "53px",
                            height: "60px",
                            border: "5px solid purple",
                            borderRadius: "5px",
                            backgroundColor: "purple",
                            padding: "1px",
                          }}
                        />
                        <View style={{
                          width: "55px",
                          height: "30px",
                          position: "absolute",
                          top: "74%",
                          left: "15%"
                         

                        }}>
                          <Image
                            alt="img.jpg"
                            src={sign}

                          />
                        </View>

                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        textAlign: "left",
                        alignItems: "center",
                        flexDirection: "row",
                        marginRight: "5px",
                        marginTop: "6px"
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            margin: "1px",

                            fontSize: "8px",
                          }}
                          fixed
                        >
                          BloodGrp: {studentData.bloodgrp.split('.')[0]}
                        </Text>
                        <Text
                          style={{
                            marginVertical: "2px",



                            fontSize: "8px",
                          }}
                          fixed
                        >
                          Dob: {studentData.dob}
                        </Text>
                        <Text
                          style={{
                            margin: "1px",fontSize: "8px",
                          }}
                          fixed
                        >
                          Year: {studentData.year}
                        </Text>
              
                      </View>

                      <View style={{ alignItems: "flex-start", marginHorizontal: "3px", }}>
                        <Text style={{ marginTop: "-3px", marginRight: "5px", fontSize: "11px", alignSelf: "flex-end", zIndex:100 }}>Principal</Text>

                        <Text
                          style={{
                            margin: "1px",

                            fontSize: "8px",
                          }}
                          fixed
                        >
                          Contact: {studentData.phone}
                        </Text>
                        <Text
                          style={{
                            margin: "1px",
                            fontSize: "8px",

                          }}
                          fixed
                        >
                          ClassName: {studentData.className}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </Page>
        ))}
        {studentsData.map((itm, index) => (
          <Page
            key={index}
            style={{
              textTransform: "capitalize",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {itm?.map((studentData, index) => {
              return (
                <View
                  style={{
                    height: "5.8cm",
                    width: "8.8cm",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid black",
                    borderRadius: "5px",
                    justifyContent: "flex-start",
                    margin: "12px",
                    overflow: "hidden",

                  }}
                  key={index + "key"}
                >
                  <View style={{ marginTop: "2px", flexDirection: "row", justifyContent: "space-between", }}>

                    <Text style={{ margin: "1px", marginLeft: "10px", fontSize: "14px", fontWeight: "bold" }}>Please Note</Text>
                    <Text style={{ margin: "1px", marginLeft: "10px", fontSize: "12px", marginRight: "4px", fontWeight: "bold" }}>{studentData.studentCode}</Text>
                  </View>

                  <View style={{ padding: "10px", lineHeight: 1.5 }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: "8px",
                        marginBottom: "4px"
                      }}
                    >
                      1. the student should possess identity card and must
                      produce whenever demanded.
                    </Text>

                    <Text
                      style={{
                        marginTop: "-1px",
                        marginBottom: "4px",
                        fontWeight: "bold",
                        fontSize: "8px",
                      }}
                    >
                      2. if it is lost. the card holder must intimate to the
                      principal and apply for a new card within a week.
                    </Text>

                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: "8px",
                      }}
                    >
                      3. if this card does not belong to you, please return it
                      to:{" "}

                      the principal, MGM'S College of comp. Sci & It, nanded

                    </Text>

                  </View>
                  <View style={{
                    width: "100%",
                    height: "60%",
                    marginBottom: "-8px"

                  }}>


                    <Image
                      alt="img.jpg"
                      src={bgImg}
                      style={{
                        width: "100%",
                        height: "100%",


                      }}
                    />
                  </View>

                  <Image
                    style={{
                      height: "58px",
                      width: "60px",
                      position: "absolute",
                      top: "61%",
                      left: "4%"
                    }}
                    src={`${`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=name: ${studentData.fullName} --> ParentContact: ${studentData.parentPhone} --> MotherName: ${studentData.motherName}`}`}
                  />
                </View>
              );
            })}
          </Page>
        ))}
      </Document>
    );
  };

  return (
    <>
      {
        <PDFDownloadLink document={<PdfFile />} filename="FORM">
          {({ loading }) =>
            loading ? (
              <div className="text-3xl text-black flex justify-center mt-52 items-center">
                <img src={load} height={150} width={150} />
                <h1>please wait Pdf is creating</h1>
              </div>
            ) : (
              <div className="text-3xl text-black flex justify-center mt-52">
                <button className="text-white bg-green-500 p-2 rounded-xl">
                  Download Pdf
                </button>
              </div>
            )
          }
        </PDFDownloadLink>
      }
    </>
  );
};

export default Icards;
