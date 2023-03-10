import Image from "next/image";
import Navbar from "./Navbar";
import { useState } from "react";
import InlineButton from "../misc/InlineButton";
import Greeter from "./Greeter";

const profileImageMe = "/resources/profileMe.webp"
const profileImageDog = "/resources/profileDog.webp"

const Header = () => {
    const [ profileImageSrc, setProfileImageSrc ] = useState(profileImageMe)
    const profileImage = (
        <Image 
            onMouseEnter={(e) => setProfileImageSrc(profileImageDog)}
            onMouseLeave={(e) => setProfileImageSrc(profileImageMe)}
            priority
            fill
            sizes="100%"
            src={ profileImageSrc } 
            alt="Profile"
            className="rounded-[2.5rem] border-[9.5px] border-gray-500"
        />
    )
        
    return (
        <div>
            <div className="flex flex-col gap-5 justify-between">
                <h2 className="text-sm md:text-lg text-left sm:text-left indent-8 md:leading-6 mt-1 my-auto">
                    <div className="h-28 w-28 md:h-36 md:w-36 relative float-right ml-2 mb-2 md:ml-4 md:mb-4 lg:mb-0">
                        { profileImage }
                    </div>

                    <p className="mb-2">
                        I'm a <InlineButton externalTo="https://bhsec.bard.edu/queens/">BHSEC</InlineButton> student in NYC with a passion for tinkering, coding, Ancient Latin, D&D, strategy board games, creating, designing, engineering, geeking, making, and figuring things out.
                    </p>
                    <p>
                        Information, projects, contacts, my resume, and more can be found on this website. If you have any questions, feel free to <InlineButton externalTo="mailto:wolfmermelstein@gmail.com">email me!</InlineButton>
                    </p>
                </h2>

                <Navbar/>
            </div>
        </div>
    );
}
 
export default Header;