import React from 'react';
import { Formik, useField } from 'formik';
import * as Yup from "yup";
import { Wrapper, ContactBox, Form, Intro, Error, Input, Message, Submit, SideImage } from "../styles/Contact-styles";
import Navigation from "./Navigation"

const MyInput = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Input {...field} {...props} />
            {meta.error && meta.touched && <Error>{meta.error}</Error>}
        </>
    );
}
const MyMessage = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Message {...field} {...props} />
            {meta.error && meta.touched && <Error>{meta.error}</Error>}
        </>
    );
}

function Contact() {
    return (
        <Wrapper>
            <Navigation />
            <ContactBox>
                <SideImage />
                <Formik
                    initialValues={{
                        topic: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={Yup.object({
                        topic: Yup.string()
                            .min(5, 'Must be at least 5 characters.')
                            .max(15, "It's too long!")
                            .required('Required.'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required.'),
                        message: Yup.string()
                            .min(10, 'Your message is too short :(')
                            .required('Required.'),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            alert("Thank you for your message!");
                            resetForm();
                            setSubmitting(false);
                        }, 2000)
                    }}
                >{props => (
                    <Form onSubmit={props.handleSubmit}>
                        <Intro>Write to me!</Intro>
                        <MyInput placeholder="Topic" name="topic" />
                        <MyInput type="email" name="email" placeholder="E-mail" />
                        <MyMessage placeholder="Message..." name="message" />
                        <Submit type="submit">{props.isSubmitting ? "Loading..." : "Submit!"}</Submit>
                    </Form>
                )}
                </Formik>
            </ContactBox>
        </Wrapper>
    )
}
export default Contact