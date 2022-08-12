export const Introduction = () => {

    return (
        <div className='bg-fixed h-screen bg-gradient-to-r from-cyan-500 to-blue-500' id="intro">
            <div className="flex flex-col lg:flex-row-reverse h-full items-center justify-center lg:justify-around w-full">
                <div>
                    <img src="http://via.placeholder.com/1020x700" className="bg-contain w-32 h-32 md:w-64 md:h-64 rounded-full" />
                </div>
                <div className="space-y-2">
                    <div className="text-lg font-semibold">Hi. I'm</div>
                    <div className="text-5xl font-bold">Arun Acharya</div>
                    <div className="text-xl font-semibold">profession</div>
                </div>
            </div>
        </div>
    );
}