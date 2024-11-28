import axios from "axios";
import Button from "../button";
import Input from "../input";
import Select from "../select";
import Styles from "./contact.module.scss";
import { sendError } from "next/dist/server/api-utils";

const Contact = () => {
    const SendEmail = () => {
        axios
            .post("/api/sendEmail",{messageBody: `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}, Site: ${site}, Midia: ${midia}`})
            .then(()=> console.log("uhuuuul"))
            .catch(()=> console.log("Opsss"))
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.texts}>
                <span>ENTRE EM CONTATO</span>
                <h2>Aumente seu resultado de vendas e performance</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
            <div className={Styles.form}>
                <h2>Fale com um especialista</h2>
                <form onSubmit={SendEmail}>
                    <Input type="text"  placeholder="Nome completo" onBluer={} required />
                    <Input type="email"  placeholder="E-mail profissional" required />
                    <Input
                     id="phone"
                     name="phone"
                     type="text"
                     placeholder="Celular/Whatsapp"
                     pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                     required/>
                    <Input type="text"  placeholder="Site" required />
                    <Select  
                        placeholder="Orçamento para mídia" 
                        options={[
                            {label: "Instagram", value:"instagram"},
                            {label: "Facebook", value:"facebook"},
                    ]} required/>
                        
    
                    <Button title="Enviar" kind="full" />
                </form>
            </div>
            <div className={Styles.footer}>
                <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <strong>Política de Privacidade.</strong></p>
            </div>
        </div>
    )    
}

export default Contact;