import React, {useEffect} from "react";
import { Card, CardBody } from "reactstrap";

function Header({name, title}){
     useEffect (() => {
        document.title = "All Course || Learn Code with Ayush";
    },[]);
    return (
        <div>
            <Card>
                <CardBody className = "my-1 bg-warning">
                    <h1 className = "text-center my-3">Welcome to Course Application</h1>
                </CardBody>
            </Card>
            
        </div>
    );
}

export default Header;