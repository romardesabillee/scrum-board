import AdminLayout from "@/layouts/AdminLayout"
import LabelInput from "@/components/LabelInput"

export default function Board(){

    return(
        <AdminLayout>
            <div>
                <h2 className="text-xl font-bold mb-8">Add Board</h2>
                
                <div className="max-w-[340px] flex flex-col gap-4 border border-b-gray-300 p-8 rounded-lg">
                    <LabelInput
                        placeholder="Board Title"
                    >
                    </LabelInput>
                    
                    <LabelInput
                        placeholder="Enter a description"
                    >
                    </LabelInput>

                    <div className="flex gap-3 items-center mt-2">
                        <button className="btn btn-secondary">Cancel</button>
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}