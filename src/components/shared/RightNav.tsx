

export default function RightNav(){
    return (
        <div id="right-nav" className="min-w-fit sticky bg-black xl:flex overflow-y-auto flex-col hidden text-white px-8 py-3">
            <div className="flex-1 whitespace-nowrap">
                <h1 className="text-xl font-semibold">Suggested Community</h1>
            </div>
            <div className="flex-1">
                <h1 className="text-xl font-semibold  whitespace-nowrap">Suggested Users</h1>
            </div>
        </div>
    )
}