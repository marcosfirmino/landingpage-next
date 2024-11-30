import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Styles from "./contact.module.scss";
import Button from "../button";
import Input from "../input";
import Select from "../select";
import { Loading } from "../loading";
import { SuccessModal } from "../successModal";
import { FailModal } from "../failModal";

const Contact = () => {
    const [isLoading, setLoading] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [failModal, setFailModal] = useState(false)


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            website: "",
            midia: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Campo obrigatorio"),
            email: Yup.string().email("E-mail invalido").required("Campo obrigatorio"),
            phone: Yup.string().matches("","Digite um telefone valido").required("Campo obrigatorio"),
            website: Yup.string(),
            midia: Yup.string().required("Campo obrigatorio"),
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => handleSubmitForm(values)
    })

    const handleSubmitForm = (values) => {
        setLoading(true)
        axios
            .post("/api/sendEmail",{messageBody: `Nome: ${values.name}, E-mail: ${values.email}, Telefone: ${values.phone}, Site: ${values.website}, Midia: ${values.midia}`,})
            .then(()=> {
                formik.resetForm()
                setLoading(false)
                setSuccessModal(true)
            })
            .catch(()=> {
                setLoading(false)
                setFailModal(true)
            })
    } 
    
    const closeModal = () => {
        setFailModal(false)
        setSuccessModal(false)
    }

    return (
        <>
            {isLoading && <Loading/>}
            {successModal && <SuccessModal closeModal={closeModal}/>}
            {failModal && <FailModal closeModal={closeModal}/>}
            <div className={Styles.container} id="contato">
                <div className={Styles.texts}>
                    <span>ENTRE EM CONTATO</span>
                    <h2>Aumente seu resultado de vendas e performance</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
                <div className={Styles.form}>
                    <h2>Fale com um especialista</h2>
                    <form id="formulario" onSubmit={formik.handleSubmit}>
                        <Input
                        id="name"
                        name="name"
                        type="text"  
                        placeholder="Nome completo"
                        onBluer={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        required/>
                        <Input
                        id="email"
                        name="email"
                        type="email"  
                        placeholder="E-mail profissional"
                        onBluer={formik.handleBlur} 
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        required/>
                        <Input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Celular/Whatsapp"
                        pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                        onBluer={formik.handleBlur} 
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        required/>
                        <Input
                        id="website"
                        name="website"
                        type="text"  
                        placeholder="Site" 
                        onBluer={formik.handleBlur} 
                        onChange={formik.handleChange}
                        value={formik.values.website}
                        required/>
                        <Select
                        id="midia"
                        name="midia"
                        placeholder="Orçamento para mídia" 
                        options={[
                                {label: "Instagram", value:"instagram"},
                                {label: "Facebook", value:"facebook"},
                        ]} onChange={formik.handleChange} value={formik.values.midia} required/>
                            
                        <Button type="submit" title="Enviar" kind="full" />
                    </form>
                </div>
                <div className={Styles.footer}>
                    <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa <strong>Política de Privacidade.</strong></p>
                </div>
            </div>
        </>
    )    
}

export default Contact;