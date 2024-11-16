import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.svg";
import Style from "./header.module.scss";

const Header = () => {
    return (
        <div className={Style.container}>
            
            <div className={Style.logotipo}>
            <Image src = {Logo}></Image>
            </div>
            <div className={Style.menu}>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/">O que fazemos</Link>
                <Link href="/">Cases</Link>
            </ul>
            </div>
            <div className="action">
            <button className={Style.button}>Fale Conosco</button>
            </div>
    </div>
    ) 
}

export default Header 