import axios from "axios";
import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
}
from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Course = ({course,update}) => {
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("course deleted");
                update(id);
            },
            (error) => {
                toast.error("course not deleted, might be server problem");
            }
        );        
    };
    return (
        <Card className = "text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className = "text-center">
                    <Button color="danger">Update</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button color="warning ml-3" onClick={() => {deleteCourse(course.id);}}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
    );
}

export default Course;