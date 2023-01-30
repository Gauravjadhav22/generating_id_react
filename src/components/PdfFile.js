import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";
import React, { useContext, useEffect } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import StudentContext from '../context/icardProvider';
// import createTw from "react-pdf-tailwind";
import logo from "../assets/logo-g.png"
import sign from "../assets/sign.png"
import QRCode from 'react-qr-code';



const styles = StyleSheet.create({

    page: {
        border: "2px solid green",
        backgroundColor: "transparent",
        padding: 15,
        margin: 22,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        borderRadius: "23px"
    },

});

const container = StyleSheet.create({

    body: {

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    },

});



const PdfFile = () => {

    console.log(useContext(StudentContext));
    const { studentsData } = useContext(StudentContext)
    // console.log(students);


    return (
        <Document style={container.body}>

            {
                studentsData?.map((studentData, index) => {

                    return <View key={index} style={container.body}>

                        <Page style={styles.page} className="bg-black" key={index + 'key'}>
                            <Text fixed>{studentData.fullName}</Text>
                            <Text fixed>{studentData.fullName}</Text>
                            <Text fixed>{studentData.fullName}</Text>
                            <Text fixed>{studentData.fullName}</Text>
                            <Text fixed>{studentData.fullName}</Text>
                            <Text fixed>{studentData.fullName}</Text>
                            <Text fixed>{studentData.fullName}</Text>
                            <Text fixed>{studentData.fullName}</Text>






                            <Text

                                render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
                        </Page>
                        <Page style={styles.page} className="bg-black" key={index + 'key'}>
                            <Text fixed>{studentData.fullName}</Text>

                            <Text

                                render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
                        </Page>
                    </View>
                })}
        </Document >
    )
}
export default PdfFile