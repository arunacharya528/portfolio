import MDEditor from "@uiw/react-md-editor";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { getAllProjects } from "../api";
import { ModalContext } from "../context/ModalContext";
import { Header } from "./Header";
const moment = require('moment')

export const Project = () => {

    const [projects, setProjects] = useState({ loading: true, data: [] })

    useEffect(() => {
        getAllProjects.then(res => {
            setProjects({ loading: false, data: res })
        })
    }, [])

    const { setModalData, openModal } = useContext(ModalContext);

    const onOpen = (project) => {
        setModalData({
            title: `Details of ${project.name}`,
            body:
                <div className="space-y-3">
                    {project.image ?
                        <div className="flex justify-center">
                            <img src={project.image} className="object-contain w-full md:w-1/2" alt="car!" />
                        </div>
                        : ''
                    }
                    <MDEditor.Markdown source={project.description} style={{ backgroundColor: 'white', color: 'black' }} />
                    <div className="flex space-x-2">
                        {project.tag.split(",").map((tag, index) =>
                            <div class="badge" key={index}>{tag}</div>
                        )}
                    </div>

                    <div className="text-gray-700 italic">{moment(project.created_at).calendar()}</div>

                    <a className="btn btn-primary" href={project.link} target="_blank">View Project</a>
                </div>,
            size: 'w-11/12 max-w-5xl'
        })
        openModal();
    }

    return (
        <div className='bg-fixed min-h-screen container mx-auto p-5'>
            <Header text={'Projects'} id="project" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {

                    projects.loading ?
                        "" :
                        projects.data.map((project, index) =>

                            <div class="card bg-gray-700" key={index}>
                                {
                                    !project.image?
                                        <div className="h-52 w-full flex justify-center items-center bg-gray-600">
                                            <span>Image not provided</span>
                                        </div>
                                        :
                                        <figure>
                                            <img src={project.image} className="object-cover h-52 w-full" alt="car!" />
                                        </figure>
                                }
                                <div class="card-body flex flex-col">
                                    <h2 class="card-title">{project.name}</h2>
                                    <div className="grow"></div>
                                    <div class="card-actions flex flex-col">
                                        <div className="flex space-x-2 flex-wrap">
                                            {project.tag.split(",").map((tag, index) =>
                                                <div class="badge" key={index}>{tag}</div>
                                            )}
                                        </div>
                                        <div>{moment(project.created_at).format("MMMM Do YYYY")}</div>

                                        <div>
                                            <button class="btn btn-sm btn-primary" onClick={e => onOpen(project)}>View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }


            </div>
        </div>
    );
}