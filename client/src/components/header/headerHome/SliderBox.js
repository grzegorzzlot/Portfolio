import React from 'react'; 
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

const SliderBox = (props)=>{
    return(
        <div className="slider-box">
            <h1>Portfolio</h1>
            <div className="button-group">
                <Link to="/portfolio"><Button className='first'>Zobacz projekty</Button></Link>
                <ScrollLink
                to='contact'
                smooth={true}
                duration= {800}
                >
                    <Button className='second'>Napisz do mnie</Button>
                </ScrollLink>
            </div>
        </div>
    )
}

export default SliderBox;