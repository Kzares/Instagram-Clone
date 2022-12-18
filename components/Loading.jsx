
function Loading() {
    return (
        <center className='grid items-center justify-center h-screen '>
            <img className='w-[200px] mb-10 transition duration-300 transform ease-in hover:scale-105 animate-pulse'
                src="
                data:image/jpeg;base64,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
                " alt="" />

        </center>
    )
}

export default Loading