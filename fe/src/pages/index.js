import LabelInput from "@/components/LabelInput";
import useUserStore from "@/store/userStore";
import { useState } from "react";
import { useRouter } from 'next/router'

export default function Home() {
    const { login: loginUser, token } = useUserStore();
    const router = useRouter();

    const [state, setState] = useState({
        email: 'a@gmail.com', 
        password: '1',
    })

    const handleChange = (e) => setState({...state, [e.target.name]: e.target.value})


    function login(){
        loginUser(state.email, state.password);
        router.push('/board')
    }

    return (
        <div className='flex justify-center mt-20'>
            <div className='w-[350px] p-4'>
                <h1 className='text-3xl font-bold text-center'>Scrum Board</h1>
                <div className='text-xl text-center mt-5 font-bold'>Sign In</div>

                <div className='flex flex-col gap-4 pt-2'>
                    <LabelInput 
                        label="Email"
                        type="text"
                        placeholder="Enter your username"
                        value={state.email}
                        name="email"
                        onChange={handleChange}
                    >
                    </LabelInput>

                    <LabelInput 
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={state.password}
                        name="password"
                        onChange={handleChange}
                    >
                    </LabelInput>

                    <button onClick={login} className='btn btn-primary mt-3'>Login</button>
                </div>
            </div>
        </div>
    )
}
