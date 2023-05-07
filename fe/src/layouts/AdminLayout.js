import { useEffect } from "react";
import useUserStore from "@/store/userStore";
import { useRouter } from "next/router";

export default function AdminLayout({ children }){
    const { user, getUser, isLoading, logout } = useUserStore();
    const router = useRouter();

    
    useEffect(() => {
        getUser();
    }, [])

    return(
        <div className="">
            <div className="p-4 border border-b-gray-400">
                <div className="flex justify-between w-[90%] m-auto text-sm">
                    <div>
                        <h1>Scrum board</h1>
                        <div>Name: {user?.name}</div>
                    </div>
                    <div className="cursor-pointer" onClick={() => logout()}>Logout</div>
                </div>
            </div>
            <div className="w-[90%] m-auto p-4 pt-10">
                {children}
            </div>
        </div>
    )
}