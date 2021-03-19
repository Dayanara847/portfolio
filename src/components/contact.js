import * as React from "react";
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import swal from "sweetalert";

import Github from "../images/github.png";
import LinkedIn from "../images/linkedin.png";

// styles
const Container = styled.div`
    clip-path: polygon(0 30%, 100% 0%, 100% 100%, 0% 100%);
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
    padding-top: 7vw;
`
const ContactHeader = styled.h1`
    padding-bottom: 1vw;
`
const InfoContact = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    justify-content: center;
    align-items: center;
`
const FormGroup = styled.form`
    display: block;
    position: relative;
	width: 25vw;
`
const Label = styled.label`
	margin-bottom: 0.5vw;
    display: block;
    font-family: Arial;
    font-size: 0.95vw;
`
const Input = styled.input`
    margin-bottom: 0.5vw;
	color: white;
	background-color: black;
	border: none;
	border-radius: 0.3vw;
	padding: 0.5vw;
	width: 100%;
    font-family: Arial;
    font-size: 0.95vw;
`
const Message = styled.textarea`
	margin-bottom: 0.5vw;
	color: white;
    background-color: black;
    border: none;
	border-radius: 0.3vw;
    padding: 0.5vw;
	width: 100%;
    font-family: Arial;
    font-size: 0.95vw;
`
const Button = styled.button`
    border: none;
    padding: 0.5vw;
    background-color: white;
    border-radius: 1vw;
    cursor: pointer;
    float: right;
`
const Links = styled.div`
    display: flex;
    justify-content: space-around;
`
const LinkContact = styled.a`
    position: relative;
`
const ImgContact = styled.img`
    width: 1.3vw;
    margin: 0.5vw;
`

const Contact = () => {
    const user_id = "user_cqtq1nlnZa2IUOohxdVZU";
    function sendEmail(event) {
        event.preventDefault();

        emailjs
         .sendForm(
            "service_lzp4v1",
            "contact_form",
            event.target,
            user_id
        )
        .then(
            result => {
            console.log(result.text);
            document.getElementById("contact_form").reset();
            swal("Todo listo!", "Mensaje enviado correctamente!", "success");
            },
            error => {
                console.log(error.text)
                swal("Oh no!", "Error al enviar el mensaje.", "error");
            }
        )
    }

return (
    <Container>
        <ContactHeader>¿HABLAMOS?</ContactHeader>
        <InfoContact>
            <FormGroup id="contact_form" onSubmit={sendEmail}>
                <Label>Nombre</Label>
                <Input />
                <Label>Email</Label>
                <Input type="email" />
                <Label>Mensaje</Label>
                <Message rows={9} />
                <Button type="submit">Enviar</Button>
            </FormGroup>
            <Links>
                <LinkContact href="https://github.com/Dayanara847">
                    <ImgContact src={Github} alt="" />
                </LinkContact>
                <LinkContact href="https://www.linkedin.com/in/dayanara-maurin/">
                    <ImgContact src={LinkedIn} alt="" />
                </LinkContact>
            </Links>
        </InfoContact>
    </Container>
    )
};

export default Contact;
