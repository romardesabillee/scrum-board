import AdminLayout from "@/layouts/AdminLayout"
import LabelInput from "@/components/LabelInput"
import useBoardStore from "@/store/boardStore"
import Spinner from "@/components/Spinner";
import { useState } from "react";

export default function Board(){
    const { createBoard, isLoading } = useBoardStore();
    const [state, setState] = useState({
        title: '',
        description: '',
    });

    const onChangeSetState = (e) => setState({...state, [e.target.name]: e.target.value});

    function handleClickedAdd(){
        createBoard(state);
    }

    return(
        <AdminLayout>
            <div>
                <h2 className="text-xl font-bold mb-8">Add Board</h2>
                <Spinner 
                    isLoading={isLoading}
                    loadingText="Creating Board.."
                >
                </Spinner>
                <div className="max-w-[340px] mt-2 flex flex-col gap-4 border border-b-gray-300 p-8 rounded-lg">
                    <LabelInput
                        placeholder="Board Title"
                        value={state.title}
                        name="title"
                        onChange={onChangeSetState}
                    >
                    </LabelInput>
                    
                    <LabelInput
                        placeholder="Enter a description"
                        value={state.description}
                        name="description"
                        onChange={onChangeSetState}
                    >
                    </LabelInput>

                    <div className="flex gap-3 items-center mt-2">
                        <button className="btn btn-secondary">Cancel</button>
                        <button 
                            onClick={handleClickedAdd} 
                            className="btn btn-primary">
                                Add
                        </button>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}