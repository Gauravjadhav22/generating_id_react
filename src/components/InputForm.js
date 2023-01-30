import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../config/firebase"
import StudentContext from '../context/icardProvider'
import excelToJson from "convert-excel-to-json";

const InputForm = () => {

    const { addStudent } = useContext(StudentContext)
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("")
    const [motherName, setMotherName] = useState("")
    const [parentPhone, setParentPhone] = useState("")
    const [loading, setLoading] = useState(false)
    const [imgUploaded, setImgUploaded] = useState(false)
    const [studentCode, setStudentCode] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [dob, setDob] = useState("")
    const [age, setAge] = useState(0)
    const [bloodgrp, setBloodgrp] = useState("")
    const [className, setClassName] = useState("")
    const [userPic, setUserPic] = useState("")


    const handleSubmit = (testdata) => {
        console.log(testdata);


        const ref = collection(firestore, "testData") // Firebase creates this automatically

        let data = {
            fullName: testdata.fullName,
            email: testdata.email,
            address: testdata.address,
            age: testdata.age,
            bloodgrp: testdata.bloodgrp,
            phone: testdata.phone,
            className: testdata.className,
            dob: testdata.dob,
            userPic: testdata.userPic,
            parentPhone: testdata.parentPhone,
            motherName: testdata.motherName,

        }
        try {
            console.log(data);
            addDoc(ref, { ...data })
        } catch (err) {
            console.log(err)
        }
        navigate('/result')
    }




    const upload_img = (img) => {
        setLoading(true)
        const data = new FormData()
        data.append("file", img)
        data.append("upload_preset", "icards")
        data.append("cloud_name", "dwmm1r1ph")
        fetch("https://api.cloudinary.com/v1_1/dwmm1r1ph/image/upload", {
            method: "post",
            body: data
        })
            .then(resp => resp.json())
            .then(data => {
                setUserPic(data.secure_url)
                console.log(userPic);
            })
            .catch(err => console.log(err)).finally(() => {
                setLoading(false)
                setImgUploaded(true)
            })
    }

    const submithandler = (e) => {
        e.preventDefault(e)
        addStudent({ fullName, address, studentCode, email, phone, dob, age, className, userPic, bloodgrp, motherName, parentPhone })
        handleSubmit({ fullName, address, studentCode, email, phone, dob, age, className, userPic, bloodgrp, motherName, parentPhone })
    }





    return (<>
        <div className='mx-12 my-12 flex justify-center'>

            {
                loading ? (
                    <div className='flex justify-center items-center px-3 w-fit rounded-xl py-2 absolute'>
                        <h1 className='font-bold text-xl animate-pulse'>please wait</h1>
                        <span className='mt-1.5 h-5 w-5 mx-1 bg-current rounded-full bg-amber-500 animate-bounce' />
                        <span className='mt-1.5 h-5 w-5 mx-1 bg-current rounded-full bg-amber-500 animate-bounce' />
                        <span className='mt-1.5 h-5 w-5 mx-1 bg-current rounded-full bg-amber-500 animate-bounce' />
                        <br /><p>image is uploading...</p>
                    </div>
                ) : (

                    <form onSubmit={submithandler}>
                        {
                            !imgUploaded ?
                                <div className='text-center border shadow my-2 mb-4 300 p-4 rounded-md'>
                                    <label
                                        className="block mb-2 text-sm font-medium capitalize text-black"
                                        htmlFor="file_input"
                                    >
                                        Upload your passport size photo
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            upload_img(e.target.files[0])
                                        }
                                        }
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        aria-describedby="file_input_help"
                                        id="file_input"
                                        type="file"
                                        required
                                    />
                                    <p
                                        className="mt-1 text-sm text-gray-700 dark:text-gray-400"
                                        id="file_input_help"
                                    >
                                        SVG, PNG, JPG or GIF (MAX. 800x400px).
                                    </p>
                                </div>
                                : <h2 className='text-green-800 capitalize'>image uploaded successfully!..</h2>
                        }

                        <div className="p-2 border-2 shadow my-2 relative z-0 mb-6 group">
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                value={email}
                                name="floating_email"
                                id="floating_email"
                                className="block pt-3.5 pl-2  w-64 lg:w-96 md:w-96 xl:w-full text-sm text-black 
                    bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                    focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-3"
                                placeholder="xyz@gmail.com"
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 
                    peer-focus:-translate-y-2 px-1 "
                            >
                                Email address
                            </label>
                        </div>
                        <div className="p-2 border-2 shadow my-2 relative z-0 mb-6 w-full group">
                            <input
                                onChange={(e) => setFullName(e.target.value)}
                                value={fullName}
                                type="text"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block pt-3.5 pl-2  w-64 lg:w-96 md:w-96 xl:w-full text-sm text-black 
                        bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-3"
                                placeholder="enter full name"
                                required
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-2 px-1"
                            >
                                Fullname
                            </label>
                        </div>
                        <div className="p-2 border-2 shadow my-2 relative z-0 mb-6 w-full group">
                            <input
                                onChange={(e) => setMotherName(e.target.value)}
                                value={motherName}
                                type="text"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block pt-3.5 pl-2  w-64 lg:w-96 md:w-96 xl:w-full text-sm text-black 
                        bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-3"
                                placeholder="enter mother name"
                                required
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-2 px-1"
                            >
                                Mother Name
                            </label>
                        </div>
                        <div className="p-2 border-2 shadow my-2 relative z-0 mb-6 w-full group">
                            <input
                                onChange={(e) => setParentPhone(e.target.value)}
                                value={parentPhone}
                                type="tel"
                                maxLength="10"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block pt-3.5 pl-2  w-64 lg:w-96 md:w-96 xl:w-full text-sm text-black 
                        bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-3"
                                placeholder="+91 78655***"
                                required
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-2 px-1"
                            >
                                Parent's Contact
                            </label>
                        </div>

                        <div className="p-2 border-2 shadow my-2 relative z-0 mb-6 w-full group">
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}

                                type="text"
                                name="floating_last_name"
                                id="floating_last_name"
                                className="block pt-3.5 pl-2  w-64 lg:w-96 md:w-96 xl:w-full text-sm text-black 
                        bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-3"
                                placeholder="mgm college,nanded"
                                required
                            />
                            <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-2 px-1"
                            >
                                Address
                            </label>
                        </div>
                        <div className="p-2 border-2 shadow my-2 relative z-0 mb-6 w-full group">
                            <input
                                onChange={(e) => {
                                    var ageDifMs = Date.now() - e.target.valueAsDate.getTime();
                                    var ageDate = new Date(ageDifMs); // miliseconds from epoch
                                    let age = Math.abs(ageDate.getUTCFullYear() - 1970)
                                    if (age < 17) {
                                        alert("please enter correct dob")
                                        e.target.value = null
                                    }
                                    setAge(age);
                                    setDob(e.target.value)
                                }}
                                value={dob}
                                type="date"
                                name="repeat_student_code"
                                id="floating_repeat_student_code"
                                className="block pt-3.5 pl-2  w-64 lg:w-96 md:w-96 xl:w-full text-sm text-black 
                                                bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                                focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-3"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_repeat_student_code"
                                className="peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-2 px-1"
                            >
                                DOB
                            </label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">

                            <div className="p-2 border-2 shadow my-2 relative z-0 mb-6 w-full group">
                                <input
                                    onChange={(e) => setBloodgrp(e.target.value)}
                                    value={bloodgrp}
                                    maxLength="3"
                                    type="text"
                                    name="repeat_student_code"
                                    id="floating_repeat_student_code"
                                    className="block pt-3.5 pl-2  w-64 lg:w-96 md:w-96 xl:w-full text-sm text-black 
                                    bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                    focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-3"
                                    placeholder="A+"
                                    required
                                />
                                <label
                                    htmlFor="floating_repeat_student_code"
                                    className="peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-2 px-1"
                                >
                                    Blood Group
                                </label>
                            </div>
                            <div className="p-2 border-2 shadow my-2 relative z-0 mb-6 w-full group">
                                <input
                                    onChange={(e) => setStudentCode(e.target.value)}
                                    type="number"
                                    value={studentCode}
                                    name="floating_student_code"
                                    id="floating_student_code"
                                    className="block pt-3.5 pl-2  w-64 lg:w-96 md:w-96 xl:w-full text-sm text-black 
                                    bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                    focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-3"
                                    placeholder="11545444"
                                    required
                                />
                                <label
                                    htmlFor="floating_student_code"
                                    className="peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-2 px-1"
                                >
                                    student_code
                                </label>
                            </div>


                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="p-2 border-2 shadow my-2 relative z-0 mb-6 w-full group">
                                <input
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                    type="tel"
                                    maxLength="10"
                                    name="floating_phone"
                                    id="floating_phone"
                                    className="block pt-3.5 pl-2  w-64 lg:w-96 md:w-96 xl:w-full text-sm text-black 
                        bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-3"
                                    placeholder="+91 95445*****"

                                    required
                                />
                                <label
                                    htmlFor="floating_phone"
                                    className="peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-2 px-1"
                                >
                                    Phone number
                                </label>
                            </div>
                            <div className="p-2 border-2 shadow my-2 relative z-0 mb-6 w-full group">
                                <input
                                    onChange={(e) => setClassName(e.target.value)}
                                    value={className}

                                    type="text"
                                    name="floating_company"
                                    id="floating_company"
                                    className="block pt-3.5 pl-2  w-64 lg:w-96 md:w-96 xl:w-full text-sm text-black 
                                    bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                    focus:outline-none focus:ring-0 focus:border-blue-600 peer mt-3"
                                    placeholder="tybca"
                                    required
                                />
                                <label
                                    htmlFor="floating_class"
                                    className="peer-focus:font-medium absolute text-sm duration-300 transform top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-2 px-1"
                                >
                                    Class
                                </label>
                            </div>
                        </div>



                        <button
                            type="submit"
                            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                        >
                            Submit
                        </button>

                    </form>
                )
            }



        </div>
    </>
    )
}

export default InputForm