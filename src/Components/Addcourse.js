import React, { Fragment, useEffect, useState } from "react"
import { Button, Container, Form, FormGroup, Input} from "reactstrap"
import {toast} from "react-toastify";
import axios from "axios";
import base_url from "../api/bootapi";

const AddCourse = () => {
     useEffect (() => {
        document.title = "All Course || Learn Code with Ayush";
    },[]);

    const [course,setCourse] = useState({})

    //form handler function
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDeafult()

    };

    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Course has been added successfully");
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Course not added successfully");
            }

        );
    };
    return (
        <Fragment>
            <h1 className = "text-center my-3">Fill Course details</h1>
            <Form onSubmit = {handleForm}>
                <FormGroup>
                    <label> Course Id</label>
                    <Input type = "text" placeholder = "Enter your course Id" name = "userId" id = "userId" style = {{height: 50}} onChange = {(e) => {
                        setCourse({...course,id:e.target.value})
                    }}/>
                </FormGroup>

                <FormGroup>
                    <label for = "title"> Course Title</label>
                    <Input type = "text" placeholder = "Enter your course title here" id="title" style = {{height: 50}}
                    onChange = {(e) => {setCourse({...course,title:e.target.value});}}/>
                </FormGroup>

                <FormGroup>
                    <label for = "description">Course Description</label>
                    <Input type = "textarea" placeholder = "Enter course description here" id = "description" style = {{height: 100}}
                    onChange = {(e) => {
                        setCourse({...course,description: e.target.value});
                    }}/>
                </FormGroup>

                <Container className = "text-center">
                    <Button type = "submit" color = "success">AddCourse</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type = "reset" color = "warning" onClick = {() => { setCourse({});}}>Clear Form</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default AddCourse;