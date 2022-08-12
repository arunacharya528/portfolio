import { SocialIcon } from 'react-social-icons';
import { Header } from './Header';

export const Contact = () => {
    const links = "https://twitter.com,https://facebook.com,https://github.com"

    const Link = ({ href, name }) => {
        return <a href={href} target="_blank" className='underline underline-offset-2'>{name}</a>
    }
    return (
        <div className="" id='contact'>
            <div className='flex lg:hidden justify-center space-x-5 p-3'>
                {
                    links.split(",").map((link, index) =>
                        <SocialIcon url={link} bgColor='transparent' fgColor='white' key={index} />
                    )
                }
            </div>

            <div className='hidden lg:flex fixed bottom-0 w-5  flex-col space-y-3 p-3'>
                {
                    links.split(",").map((link, index) =>
                        <SocialIcon url={link} bgColor='transparent' fgColor='white' key={index} />
                    )
                }
            </div>
            <div className='bg-gray-900'>
                <div className='flex flex-col justify-center items-center md:flex-row md:justify-around container mx-auto'>
                    <Header text={"Contact me:"} />
                    <div className='flex flex-col pb-16 md:p-0 text-center md:text-left'>
                        <span>Mobile: XXXXXXXXXX</span>
                        <span>Email: something@email.com</span>
                    </div>
                </div>

            </div>
            

            <div className='bg-slate-900 text-center py-8 px-3'>
                <div className="container mx-auto">
                    Created with <Link href={"https://daisyui.com/"} name="DaisyUI" />,&nbsp;
                    <Link href={"https://tailwindcss.com/"} name="TailwindCSS" />,&nbsp;
                    <Link href={"https://reactjs.org/"} name="ReactJS" />,&nbsp;
                    <Link href={"https://www.postgresql.org/"} name="PostgreSQL" />,&nbsp;
                    <Link href={"https://nodejs.org/"} name="NodeJS" /> and&nbsp;
                    <Link href={"https://expressjs.com/"} name="ExpressJS" />
                </div>
            </div>
        </div>

    );
}