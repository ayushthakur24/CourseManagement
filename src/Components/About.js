import React, {useEffect} from "react";
import {Card, CardBody} from "reactstrap";

const About = () => {
     useEffect (() => {
        document.title = "All Course || Learn Code with Ayush";
    },[]);
    return(
        <div>
            <Card>
                <CardBody>
                    <h1 className = "text-center">About me</h1>
                    <h3> Name : Ayush Thakur</h3>
                    <h3>Email : Athakur@scu.edu</h3>
                </CardBody>
            </Card>
        </div>
    );
}

export default About;