import React, {useEffect} from "react";
import { Card,CardBody } from "reactstrap";


const Contact = () =>{
     useEffect (() => {
        document.title = "All Course || Learn Code with Ayush";
    },[]);
    return(
        <div>
             <Card>
                <CardBody>
                    <h5 className = "text-center my-3">You can contact us on the through the given information below.</h5>
                </CardBody>
            </Card>
        </div>

    )
}

export default Contact;