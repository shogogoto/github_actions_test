import React, {useState, useEffect} from "react";
import {useForm, SubmitHandler} from "react-hook-form";

const LoginForm: React.FC = () => {
    const [id, setId]             = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const onSubmit = () => alert("aaa");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);
    return (
        <form onSubmit={onSubmit}>
            <label>
                ID:{id}
                <input type="text" name="user_id" onChange={handleChange}/>
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="pasword" value={password}/>
            </label>
            <input type="submit" value="Login" />
            <input type="reset" value="Reset" />
        </form>
    )

}

export default LoginForm
