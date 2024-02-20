import React from "react";

import Public from "../layouts/Public";
import Title from "../components/Title";
import UserForm from "../components/UserForm";
import { Link } from "react-router-dom";

function SignUp(){
    return(
        <Public>
            <div className="grid justify-items-center gap-5">
                <Title />
                <UserForm buttonValue="Criar uma nova conta"/>               
                <p>Já possui uma conta? <Link to="/signin" className="text-blue-500 hover:underline">Acesse agora!</Link></p>
            </div>
        </Public>
    );
}

export default SignUp;