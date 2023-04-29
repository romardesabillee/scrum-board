
export default function AdminLayout({ children }){

    return(
        <div className="">
            <div className="p-4 border border-b-gray-400">
                <div className="flex justify-between w-[90%] m-auto text-sm">
                    <h1>Scrum board</h1>
                    <div>Logout</div>
                </div>
            </div>
            <div className="w-[90%] m-auto p-4 pt-10">
                {children}
            </div>
        </div>
    )
}