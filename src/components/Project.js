import MDEditor from "@uiw/react-md-editor";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { Header } from "./Header";
const moment = require('moment')

export const Project = () => {

    const projects = [
        {
            "id": 0,
            "name": "Tempor veniam laboris in ullamco irure.",
            "description": "Laboris esse ad dolore do sit. Qui exercitation non est occaecat labore ut fugiat labore velit sunt et eiusmod commodo ex. Lorem id excepteur qui tempor proident Lorem. Do excepteur laborum et non tempor reprehenderit id eu culpa. In duis ipsum nostrud tempor est nisi do nulla eiusmod ullamco qui fugiat. Lorem tempor velit nulla ea ea ad in anim dolor magna adipisicing adipisicing incididunt ipsum.\r\nLaborum Lorem magna fugiat eiusmod occaecat sunt pariatur duis dolore. Nulla laborum id et proident commodo aliqua. Ut eu nisi quis ea adipisicing fugiat laboris nisi ea sit commodo sit. Aliquip labore tempor consectetur cillum. Nostrud ipsum ea minim dolore exercitation id ad laboris laborum anim. Esse elit et qui voluptate cillum duis dolore dolore adipisicing elit aliquip.\r\nNon laborum est eiusmod aliquip laborum mollit fugiat cillum veniam qui labore deserunt eu. Exercitation id fugiat nisi nostrud do. Consectetur cillum eu velit elit veniam aliqua.\r\nOccaecat veniam occaecat sunt nulla voluptate cillum officia. Sit labore amet aliqua sit qui amet aliquip dolore eiusmod ad. Voluptate deserunt voluptate ex aliqua eu mollit fugiat labore nisi exercitation. Cupidatat duis cupidatat consectetur veniam aliquip et incididunt eiusmod deserunt. Adipisicing exercitation cillum enim veniam elit.\r\nLaboris cillum consequat aliquip reprehenderit ex eiusmod ad. Adipisicing consectetur occaecat adipisicing commodo sit mollit ex sint cillum eu ullamco irure. Adipisicing excepteur ullamco aliqua esse commodo dolor enim ex veniam. Mollit anim ad eiusmod proident tempor anim veniam esse deserunt dolore. Ad nulla duis aliquip laborum sit deserunt voluptate. Reprehenderit est aliquip amet in voluptate cillum Lorem elit deserunt fugiat elit. Id aliquip adipisicing esse et laborum sunt sit.\r\n",
            "link": "https://randomlink.com",
            "image": null,
            "tag": "some,random,tag",
            "created_at": "2018-12-12T05:45:53"
        },
        {
            "id": 1,
            "name": "Est tempor magna ullamco nisi nostrud.",
            "description": "Cillum exercitation laborum cillum et eiusmod et mollit irure nostrud pariatur quis. Ad deserunt dolor enim ullamco et nulla elit ipsum voluptate. Amet fugiat veniam qui aliquip ipsum cupidatat proident nisi reprehenderit eiusmod exercitation voluptate ea pariatur.\r\nSint dolore proident consequat do adipisicing deserunt et cillum aliqua minim ea. Ex ex aute fugiat excepteur velit. Consectetur fugiat nulla nulla officia nostrud eiusmod. Pariatur excepteur eu non nostrud ex est ullamco nostrud duis minim aliqua. Dolore laborum nisi nisi elit laborum.\r\nVeniam dolor est laboris aliqua cillum reprehenderit enim sunt velit reprehenderit velit. Consequat incididunt mollit nulla nostrud et consequat sunt nostrud. Culpa deserunt eiusmod enim in fugiat. Ullamco et consectetur eiusmod fugiat eu in labore adipisicing eu cillum reprehenderit. Anim tempor ad nostrud duis culpa ea incididunt Lorem ea. Aliqua commodo deserunt quis officia nulla do in labore culpa ipsum id est.\r\nVoluptate aliqua duis ex consectetur qui ea excepteur veniam. Ut anim officia labore sint nisi officia. Consequat ea dolor laborum Lorem proident officia nostrud sit enim laboris reprehenderit tempor. Irure esse exercitation voluptate velit exercitation nulla nulla voluptate. Adipisicing proident minim mollit id laboris est culpa nulla aliqua. Quis sit ipsum eu minim fugiat eu labore et ex nisi veniam fugiat ullamco. Laboris ipsum id eiusmod fugiat.\r\nDo pariatur id incididunt eu eu occaecat voluptate labore. Dolore esse pariatur aliquip sit esse elit adipisicing. Aliqua sunt cillum laboris adipisicing deserunt ullamco anim sint pariatur deserunt. Elit commodo cillum minim et minim nulla velit qui nisi.\r\n",
            "link": "https://randomlink.com",
            "image": null,
            "tag": "some,random,tag",
            "created_at": "2018-12-12T05:45:53"
        },
        {
            "id": 2,
            "name": "Laboris nostrud ex commodo deserunt labore.",
            "description": "Sunt labore pariatur duis commodo ut ipsum. Dolore do eiusmod esse nostrud. Exercitation et incididunt ullamco quis sint exercitation ex esse. Tempor excepteur dolor labore adipisicing cillum. Consequat adipisicing do commodo reprehenderit do dolor. In adipisicing sit esse amet aliqua magna. Nulla amet velit duis velit esse eiusmod ad culpa magna Lorem et proident.\r\nEst aliquip ad laboris nostrud nisi enim veniam proident labore Lorem veniam deserunt pariatur. Consectetur occaecat et mollit aute officia enim est elit ea sunt. Fugiat aliqua aliqua dolore magna anim tempor dolore consequat. Magna laborum ex culpa consequat. Nostrud id excepteur enim ullamco non nisi sit do et. Quis labore velit nisi mollit esse qui in irure minim laborum adipisicing.\r\nEnim occaecat cillum eiusmod veniam id culpa voluptate cupidatat excepteur aliquip. Laborum cillum pariatur aliquip fugiat fugiat ullamco magna elit elit. Lorem minim Lorem et laboris non nostrud. Sit dolor qui sit pariatur ut esse sit nisi amet occaecat ullamco velit. Elit id non quis non cillum enim ad culpa reprehenderit exercitation dolore tempor. Excepteur nostrud irure laborum reprehenderit aliqua Lorem do dolore consectetur consequat labore ipsum. Quis esse et aliquip eu magna magna reprehenderit nulla id.\r\nLaboris pariatur non officia commodo amet voluptate aute ea anim aliquip labore proident id pariatur. Tempor nisi ut officia esse non ad minim aliqua ullamco ipsum minim. Ipsum ipsum laborum incididunt quis non sit sint pariatur anim irure proident minim.\r\nPariatur mollit sint cupidatat non tempor nostrud excepteur. Minim sint ullamco in non adipisicing. Laborum dolore minim quis proident est. Id irure esse fugiat aliquip anim duis minim quis aliqua. Nisi aute Lorem nostrud quis dolor est sint esse mollit. Duis aliquip laboris nisi sit incididunt mollit minim cupidatat veniam deserunt. Qui quis ullamco Lorem commodo excepteur Lorem nostrud id eiusmod.\r\n",
            "link": "https://randomlink.com",
            "image": "https://placeimg.com/400/225/arch",
            "tag": "some,random,tag",
            "created_at": "2018-12-12T05:45:53"
        },
        {
            "id": 3,
            "name": "Est et esse reprehenderit veniam minim veniam ad irure aute sunt exercitation minim.",
            "description": "Adipisicing nostrud commodo ut esse elit nostrud amet fugiat dolore nulla deserunt est ea nisi. Ullamco reprehenderit amet eiusmod velit. Et eiusmod pariatur quis deserunt nulla est sint non nisi veniam elit.\r\nEnim occaecat occaecat exercitation sint nulla amet. Sunt occaecat est sunt reprehenderit esse qui non. Anim dolore dolore minim nisi consequat voluptate qui non sint irure sit aliquip irure et. Nostrud fugiat laborum nulla qui. Mollit laboris dolor adipisicing minim enim tempor anim amet in esse aliquip tempor ad proident. Consequat elit enim irure do et aliquip enim.\r\nVoluptate voluptate adipisicing sint est proident adipisicing occaecat mollit ad deserunt nulla. Ut incididunt magna dolore irure occaecat enim commodo qui voluptate. Fugiat id occaecat nisi aliquip excepteur sit qui commodo enim. Est sint do commodo non sunt incididunt culpa eiusmod voluptate tempor. Elit ipsum eu pariatur in elit minim eu mollit qui aliquip ea ex incididunt cupidatat. Quis amet et dolor culpa ullamco velit sunt minim proident voluptate non veniam duis. Amet ipsum proident sit fugiat laboris ullamco consequat in cupidatat nulla fugiat est ut.\r\nId cupidatat ullamco commodo fugiat sunt pariatur qui non ea elit mollit consequat quis. In occaecat quis dolore aliqua voluptate incididunt consectetur sint ad qui laborum incididunt in. Duis est consectetur aliqua reprehenderit eiusmod.\r\nDolor consectetur excepteur esse proident duis anim. Ut cupidatat ex nisi exercitation aliquip minim est anim nulla nostrud labore consequat ut aliqua. Eiusmod et voluptate exercitation id proident dolor sint. Eiusmod proident dolore et eiusmod minim.\r\n",
            "link": "https://randomlink.com",
            "image": null,
            "tag": "some,random,tag",
            "created_at": "2018-12-12T05:45:53"
        },
        {
            "id": 4,
            "name": "Commodo qui consectetur veniam irure dolor sit qui qui occaecat ea elit elit.",
            "description": "Officia ut dolore anim eiusmod tempor sit. Sit commodo eiusmod pariatur sint tempor ea adipisicing non cillum enim officia consectetur. Magna esse veniam laboris laborum amet mollit eiusmod et ea in commodo anim cillum. Id eiusmod ea nisi culpa velit. Non Lorem sit id proident laborum est.\r\nAmet dolore aliquip occaecat nostrud laborum tempor in id laborum non commodo nisi veniam culpa. Voluptate ullamco sunt et qui nulla voluptate est. Consequat magna id nisi commodo ad sunt.\r\nAliquip exercitation occaecat pariatur in et qui. Reprehenderit tempor Lorem reprehenderit qui consectetur dolor pariatur qui magna sint anim ut enim. Ullamco sunt ipsum nulla sint quis occaecat aliqua est voluptate cillum voluptate cupidatat. Quis ea anim aliquip commodo sit commodo laboris veniam nisi exercitation adipisicing enim adipisicing. Sunt minim Lorem duis culpa laborum. Voluptate commodo do labore officia incididunt voluptate adipisicing exercitation ullamco.\r\nUllamco ut reprehenderit ullamco non deserunt. Irure dolore proident fugiat voluptate fugiat. Tempor commodo culpa id est nostrud ad incididunt exercitation velit.\r\nEt ut tempor est ullamco nostrud ea tempor qui consectetur proident adipisicing tempor est. Mollit ullamco sunt elit ullamco in exercitation consectetur id eiusmod sint do anim. Id cupidatat consequat irure dolore pariatur laboris cillum irure laborum proident non deserunt.\r\n",
            "link": "https://randomlink.com",
            "image": null,
            "tag": "some,random,tag",
            "created_at": "2018-12-12T05:45:53"
        }
    ]


    const { setModalData, openModal } = useContext(ModalContext);

    const onOpen = (project) => {
        setModalData({
            title: `Details of ${project.name}`,
            body:
                <div className="space-y-3">
                    {project.image !== null ?
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
        <div className='bg-fixed min-h-screen container mx-auto p-5' id="project">
            <Header text={'Projects'} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {projects.map((project, index) =>

                    <div class="card bg-gray-700" key={index}>
                        {
                            project.image === null ?
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
                                <div className="flex space-x-2">
                                    {project.tag.split(",").map((tag, index) =>
                                        <div class="badge" key={index}>{tag}</div>
                                    )}
                                </div>
                                <div>{moment(project.created_at).fromNow()}</div>

                                <div>
                                    <button class="btn btn-sm btn-primary" onClick={e => onOpen(project)}>View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
}