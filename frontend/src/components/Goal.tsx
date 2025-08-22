const Goal = () => {
    return (
        // The Goal component is static for now, but will make live later on 
        <div className="flex flex-col justify-center items-center py-20">
            <p className="text-4xl text-cyan-500">You have </p>
            <h1 className="text-7xl text-cyan-500 py-5">5</h1>
            <p className="text-4xl text-cyan-500">more jobs to apply today</p>
        </div>
    )
}

export default Goal