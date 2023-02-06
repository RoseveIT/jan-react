import React, {useContext} from "react";
import {MyContext} from "../../index";
import {Button} from "../../components/Button/Button";

const AboutPage = () => {

    const context = useContext(MyContext);
    context.gender = 'male'
    Object.assign(context, {status:true})
    delete context.name
    return (
        <div>
            <Button click={()=>console.log('click from custom button')} style={{backgroundColor: 'black'}}>Click</Button>
            ABOUT
        </div>
    );
};

export {AboutPage};