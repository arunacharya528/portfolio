import { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { InfoContext } from '../context/InfoContext';
import { Header } from './Header';

export const Contact = () => {
    // const links = "https://twitter.com,https://facebook.com,https://github.com"
    const { getInfo } = useContext(InfoContext)

    const Link = ({ href, name }) => {
        return <a href={href} target="_blank" className='underline underline-offset-2'>{name}</a>
    }

    const SocialLink = () => {
        return (
            <>
                {
                    getInfo('social') ?

                        getInfo('social').split(",").map((link, index) =>
                            <SocialIcon url={link} bgColor='transparent' fgColor='white' key={index} />
                        )

                        : ''
                }
            </>
        );
    }
    return (
        <div className="" id='contact'>
            <div className='flex lg:hidden justify-center space-x-5 p-3'>
                <SocialLink />
            </div>

            <div className='hidden lg:flex fixed bottom-0 w-5  flex-col space-y-3 p-3'>
                <SocialLink />
            </div>
            <div className='bg-gray-900'>
                <div className='flex flex-col justify-center items-center md:flex-row md:justify-around container mx-auto'>
                    <Header text={"Contact me:"} />
                    <div className='flex flex-col pb-16 md:p-0 text-center md:text-left'>
                        <span>Contact: {getInfo('contact')}</span>
                        <span>Email: {getInfo('email')}</span>
                    </div>
                </div>

            </div>


            <div className='bg-slate-900 text-center py-2 px-3 text-sm font-light'>
                <div className="container mx-auto">
                    Created with <Link href={"https://daisyui.com/"} name="DaisyUI" />,&nbsp;
                    <Link href={"https://tailwindcss.com/"} name="TailwindCSS" />,&nbsp;
                    <Link href={"https://reactjs.org/"} name="ReactJS" />,&nbsp;
                    <Link href={"https://fauna.com/"} name="FaunaDB" /> and&nbsp;
                    <Link href={"https://nodejs.org/"} name="NodeJS" />&nbsp;
                </div>
            </div>
        </div>

    );
}