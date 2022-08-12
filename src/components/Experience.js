import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { Header } from "./Header";

export const Experience = () => {

    const [experiences, setExperiences] = useState({
        loading: false, data: [
            {
                "id": 0,
                "title": "officia pariatur velit",
                "duration": "reprehenderit magna",
                "description": "Pariatur officia deserunt dolore aute nisi qui ex. Irure mollit est Lorem deserunt laboris proident pariatur nisi amet et. Et nisi pariatur enim id exercitation velit aute excepteur pariatur laborum cillum laborum. Nisi nulla eu pariatur ipsum. Et fugiat sit nulla officia deserunt amet do et. Incididunt fugiat exercitation sint Lorem labore. Est ullamco eiusmod ex et enim nostrud ea laborum proident sit magna.\r\n",
                "created_at": "2018-12-12T05:45:53"
            },
            {
                "id": 1,
                "title": "sunt esse minim",
                "duration": "et laborum",
                "description": "Esse nulla commodo cillum sint aliquip. Voluptate non deserunt commodo nostrud est voluptate enim ex nulla esse voluptate. Deserunt ullamco minim cupidatat deserunt officia duis irure cillum ipsum duis veniam esse officia. Fugiat est sint quis proident ex qui.\r\n",
                "created_at": "2018-12-12T05:45:53"
            },
            {
                "id": 2,
                "title": "mollit aliquip adipisicing",
                "duration": "irure occaecat",
                "description": "Eu eu veniam magna aliquip do occaecat. Veniam voluptate tempor elit sint eu officia aute ex sit eiusmod aliquip. Ex proident dolor reprehenderit ea culpa sint anim magna. Sit laborum ea ut commodo nostrud esse velit tempor reprehenderit ad ex consectetur. Quis est mollit eiusmod sunt aliquip adipisicing do sint officia officia ipsum anim.\r\n",
                "created_at": "2018-12-12T05:45:53"
            },
            {
                "id": 3,
                "title": "veniam consequat et",
                "duration": "in nulla",
                "description": "Adipisicing quis proident enim ad id officia culpa veniam pariatur incididunt consectetur deserunt eu fugiat. Fugiat velit id aliqua anim ex. Tempor qui minim officia reprehenderit voluptate.\r\n",
                "created_at": "2018-12-12T05:45:53"
            },
            {
                "id": 4,
                "title": "cillum ad laboris",
                "duration": "exercitation voluptate",
                "description": "Incididunt proident esse qui ea tempor commodo qui adipisicing ea laboris excepteur fugiat eu in. Amet ut mollit ea est nisi in ut ipsum elit irure. Eu laborum exercitation occaecat velit aliqua et enim consequat tempor nostrud laboris deserunt esse sunt. Pariatur cillum mollit quis mollit excepteur.\r\n",
                "created_at": "2018-12-12T05:45:53"
            }
        ]
    })

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (!experiences.loading) {
            setSelected(experiences.data[0])
        }
    }, [])

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