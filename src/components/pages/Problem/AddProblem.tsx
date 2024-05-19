'use client'
import React, { useState } from "react";
import dynamic from "next/dynamic";
import ProfileImage from "@/components/shared/ProfileImage/ProfileImage";
import { useSelector } from "react-redux";
import axios from "axios";
import { url } from "inspector";
import { FetchMainApi } from "@/utils/fetch/clientSideFetchApi";
import { useCookies } from "react-cookie";
import {currentDate} from "@/utils/currentDate"
const Quill = dynamic(() => import('./Quill'), {
    ssr: false
})
const ImageUpload = dynamic(() => import('./ImageUpload'), {
    ssr: false
})
const MultiSelect = dynamic(() => import('@/components/shared/MultiSelect/NormalSelect'), {
    ssr: false
})


function AddProblem() {
    const [files, setFiles] = useState<File[]>([]);
    const [value, setValue] = useState(``)
    const profileData = useSelector((state:any) => state.profile)
    const [selected, setSelected] = useState<any>([])

    const [cookie, setCookie] = useCookies(["_token"]);
    const header = {
      'Authorization': `Bearer ${cookie._token}`
    };
    const [problemPost, setProblemPost] = useState({
        status: "draft",
        image: [],
    })

    const handleProblemPost = () => {
        if(files.length > 0){
            const formData = new FormData();
            files.forEach((file, index) => {
                formData.append("file", file);
            });
            
            axios.post("https://upload.codesstackflow.com/upload/multiple", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                const imageUrls = response.data.files.map(file => file.pathname + file.filename);
                const reqData ={
                    package: selected,
                    details: value,
                    status: problemPost.status,
                    image: imageUrls,
                    date: currentDate(),
                    author: profileData.id
                }
                FetchMainApi({url: "/problem-post/post", method: "post", header: header, data: reqData})
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            })
            .catch(error => {
                console.error("There was an error uploading the files!", error);
            });
            
        }else{
            const reqData ={
                packages: selected,
                details: value,
                status: problemPost.status,
                image: [],
                date: currentDate(),
                author: profileData.id
            }
            FetchMainApi({url: "/problem-post/post", method: "post", header: header, data: reqData})
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    return <>
        <div className="card w-full bg-base-100 shadow-md rounded">
            <label htmlFor="create_a_problem" className="card-body cursor-pointer rounded">
                <div className="flex space-x-3 items-center">
                    <ProfileImage/>
                    <div className="textarea textarea-bordered w-full resize-none">
                        <div className="opacity-70">Post your problem.....</div>
                    </div>
                </div>
            </label>
            <div className="px-8">
                <span>Filter</span>
                <MultiSelect selected={selected} setSelected={setSelected} />
            </div>
        </div>


        <input type="checkbox" id="create_a_problem" className="modal-toggle" />
        <div className="modal" role="dialog">
            <div className="modal-box max-w-5xl rounded">
                <h1 className="md:text-xl font-semibold text-center mb-2">Create A Problem</h1>
                <hr></hr>
                <div className="flex flex-col my-3 space-x-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between space-y-10 md:space-x-2">

                        <div className="flex items-center space-x-2">
                            <ProfileImage/>
                            <div className="font-semibold flex flex-col">
                                <span>{profileData.full_name}</span>
                                <div className="">
                                    <select className="select select-bordered mt-1 min-h-0 h-7" defaultValue={"public"} onChange={(e) => setProblemPost({...problemPost, status: e.target.value})}>
                                        <option value="public" className='py-2'>
                                            {/* <span className="text-gray-500"><WorldIc/></span> */}
                                            Public
                                        </option>
                                        <option value="private" className='py-2'>
                                            {/* <span className="text-gray-500"><LockOnlyMe/></span> */}
                                            Private
                                        </option>
                                    </select>

                                </div>
                            </div>
                        </div>


                        <div className="my-2 w-1/2">
                            <span>Select Your Language</span>
                            <MultiSelect selected={selected} setSelected={setSelected}/>
                        </div> </div>


                    <div className="mt-5">
                        <Quill value={value} setValue={setValue} />
                    </div>
                    <ImageUpload files={files} setFiles={setFiles} />

                    


                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary w-fit rounded my-2" onClick={handleProblemPost}>Post Problem</button>
                    </div>

                </div>



            </div>
            <label className="modal-backdrop" htmlFor="create_a_problem">Close</label>
        </div>
    </>
}




export default AddProblem;