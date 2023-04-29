import LabelInput from "@/components/LabelInput"


export default function Register(){

    return(
        <div className='flex justify-center mt-20'>
            <div className='w-[350px] p-4'>
                <h1 className='text-3xl font-bold text-center'>Scrum Board</h1>
                <div className='text-xl text-center mt-5 font-bold'>Sign up</div>

                <div className='flex flex-col gap-4 pt-2'>
                    <LabelInput 
                        label="Name*"
                        type="text"
                        placeholder="Enter your name"
                    >
                    </LabelInput>

                    <LabelInput 
                        label="Email*"
                        type="email"
                        placeholder="Enter your name"
                    >
                    </LabelInput>

                    <LabelInput 
                        label="Password*"
                        type="password"
                        placeholder="Create a password"
                    >
                    </LabelInput>

                    <button className='btn btn-primary mt-3'>Register</button>
                </div>
            </div>
        </div>
    )
}