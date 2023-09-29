

const BellNotification = ({onMouseEnterBell, onMouseLeaveBell}) => {
    return ( <div onMouseEnter={onMouseEnterBell} onMouseLeave={onMouseLeaveBell} className="flex justify-center items-center bg-zinc-900 bg-opacity-95 border-t-2 rounded-sm fixed w-80 h-24 top-16 right-12 z-50">
            <p className="text-zinc-400">No recent notifications</p>
    </div> );
}
 
export default BellNotification;