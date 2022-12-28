import "./DropdownMenu.css"
import {useState} from "react"
import {MdKeyboardArrowDown} from "react-icons/md"

function DropdownMenu({selected, setSelected}) {
    const [isActive,setIsActive] = useState(false);
    const options = ['Stake Cripto', 'Became a liquidity provider']
    return <>
        <div className = "dropdown">
            <div className = "dropdown-btn" onClick = { e => setIsActive(!isActive)} >
                {selected}
                <span className = "icDown"> <MdKeyboardArrowDown/></span>
            </div>
            {isActive && (
                 <div className = "dropdown-content">
                    {options.map(option => (
                        <div onClick = {e => {
                            setSelected(option)
                            setIsActive(false)
                            }}
                               className = "dropdown-item">
                            {option}
                        </div>

                     ))}
             </div>
            )}
           
            
        </div> 

    </>
}

export default DropdownMenu ;