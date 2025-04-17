import Logo from "../logo/page"
import Navigation from "../navigation/page"

function MainHeader() {
    return (
        <div className="flex justify-around items-center bg-gray-800 text-white p-4">
            <div className='w-1/5'><Logo /></div>
            <div className='w-1/2'><Navigation /></div>
        </div>
    )
}

export default MainHeader
