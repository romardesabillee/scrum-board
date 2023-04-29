

export default function LabelInput(props){
    const { label, ...others } = props

    return(
        <div className='flex flex-col'>
            {label && (
                <label className='label'>{label}</label>
            )}
            <input 
                className='input'
                {...others}
            />
        </div>
    )
}