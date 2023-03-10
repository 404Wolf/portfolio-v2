import Image from "next/image";

const Contact = ({ name, username, url, icon }) => {
    const size = 50;
    const alt = `${username} (${name})`

    return (
        <div className="duration-150 hover:scale-110">
            <a href={ url } title={ alt } target="_blank" rel="noreferrer noopener">
                {icon && <Image
                    priority
                    className="rounded-full" 
                    alt={ alt }
                    src={ icon } 
                    width={ size } 
                    height={ size } 
                />}
            </a>
        </div>
    );
}
 
export default Contact;