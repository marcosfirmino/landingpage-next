import Style from "./features.module.scss"
import Icon from "/public/images/icone.svg"
import Image from "next/image"

const Features = () => {
    return (
        <div className={Style.container}>
            <h2>Neste bairro, não há agência melhor. Garantimos.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className={Style.features}>
                <div className={Style.feature}>
                    <Image src={Icon} alt="Icon" />
                    <h2>Digital Strategy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non quae id soluta quos nihil perspiciatis dolorem quia deserunt in. Voluptate accusamus enim illum quos. Laborum eveniet dolore deleniti quasi!</p>
                </div>
                <div className={Style.feature}>
                    <Image src={Icon} alt="Icon" />
                    <h2>Digital Strategy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non quae id soluta quos nihil perspiciatis dolorem quia deserunt in. Voluptate accusamus enim illum quos. Laborum eveniet dolore deleniti quasi!</p>
                </div>
                <div className={Style.feature}>
                    <Image src={Icon} alt="Icon" />
                    <h2>Digital Strategy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non quae id soluta quos nihil perspiciatis dolorem quia deserunt in. Voluptate accusamus enim illum quos. Laborum eveniet dolore deleniti quasi!</p>
                </div>
                <div className={Style.feature}>
                    <Image src={Icon} alt="Icon" />
                    <h2>Digital Strategy</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non quae id soluta quos nihil perspiciatis dolorem quia deserunt in. Voluptate accusamus enim illum quos. Laborum eveniet dolore deleniti quasi!</p>
                </div>
            </div>
        </div>   
    )
}

export default Features;