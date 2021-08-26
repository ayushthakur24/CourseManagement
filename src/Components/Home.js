import React, {useEffect} from "react";
import { Jumbotron,Container,Button } from "reactstrap";

const Home = () => {
     useEffect (() => {
        document.title = "All Course || Learn Code with Ayush";
    },[]);
    return(
        <div>
            <Jumbotron className = "text-center bg-yellow">
                <h1> Learn to code with Ayush!</h1>

                <p> This a React App learning with Ayush. I hope you guys enjoy this course.</p>

                <Container>
                    <Button color = "black" outline>
                        Start Using
                    </Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home;