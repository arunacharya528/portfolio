import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { getAllExperiences } from "../api";
import { Header } from "./Header";

export const Experience = () => {

    const [experiences, setExperiences] = useState({ loading: true, data: [] })

    useEffect(() => {
        getAllExperiences.then(res => {
            setExperiences({ loading: false, data: res })
        });
    }, []);

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (!experiences.loading) {
            setSelected(experiences.data[0])
        }
    }, [experiences])

    return (
        <div className='min-h-screen flex flex-col' id="exp">
            <Header text={"Experiences"} />

            {experiences.loading ? "Loading" :
                <div className=" grow">
                    <div class="drawer drawer-mobile container mx-auto h-fit">
                        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                        <div class="drawer-content flex flex-col p-5">
                            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Menu</label>
                            {
                                selected === null ?
                                    <div className="text-center">Select from given options</div>
                                    :
                                    <div>
                                        <div className="text-xl font-semibold py-2">{selected.title}</div>
                                        <div className="text-lg font-semibold py-1">{selected.duration}</div>

                                        <MDEditor.Markdown source={selected.description} className="!bg-inherit !text-inherit" />
                                    </div>
                            }
                        </div>
                        <div class="drawer-side">
                            <label for="my-drawer-2" class="drawer-overlay"></label>
                            <ul class="menu w-56 p-2 bg-slate-900">
                                {experiences.data.map((experience, index) =>
                                    <li key={index} className={selected !== null && selected.title === experience.title ? 'bg-primary rounded-md' : ''}><a onClick={e => setSelected(experience)}>{experience.title}</a></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            }

        </div>
    );
}