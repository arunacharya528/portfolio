import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

export const Introduction = () => {
    const { getInfo } = useContext(InfoContext)
    return (
        <div className='bg-fixed h-screen bg-gradient-to-r from-cyan-500 to-blue-500' id="intro">
            <div className="flex flex-col lg:flex-row-reverse h-full items-center justify-center lg:justify-around w-full">
                <div>
                    <img src={getInfo('photo')} className="bg-contain w-32 h-32 md:w-64 md:h-64 rounded-full" />
                </div>
                <div className="space-y-2 p-5">
                    <div className="text-lg font-semibold">Hi. I'm</div>
                    <div className="text-5xl font-bold">Arun Acharya</div>
                    <div className="text-xl font-semibold space-x-2">

                        {
                            getInfo('profession') ?
                                getInfo('profession').split(",").map((value, index) =>
                                    <span className="badge">{value}</span>
                                )

                                : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}