import "./Form.css"
import {useState} from "react";
import DropdownMenu from "../dropdownMenu/DropdownMenu";


function Form() {
    const [selected, setSelected] = useState("Choose One");

    return <>
            
            <div className = "body ">
                <div className = "bubbles">
                    <span style = {{"--i":11}}></span>
                    <span style = {{"--i":1}}></span>
                    <span style = {{"--i":20}}></span>
                    <span style = {{"--i":8}}></span>
                    <span style = {{"--i":11}}></span>
                    <span style = {{"--i":25}}></span>
                    <span style = {{"--i":5}}></span>
                    <span style = {{"--i":18}}></span>
                    <span style = {{"--i":14}}></span>
                    <span style = {{"--i":2}}></span>
                    <span style = {{"--i":6}}></span>
                    <span style = {{"--i":21}}></span>
                    <span style = {{"--i":11}}></span>
                    <span style = {{"--i":50}}></span>
                    <span style = {{"--i":6}}></span>
                    <span style = {{"--i":23}}></span>
                    <span style = {{"--i":18}}></span>
                    <span style = {{"--i":11}}></span>
                    <span style = {{"--i":20}}></span>
                    <span style = {{"--i":13}}></span>
                    <span style = {{"--i":30}}></span>
                    <span style = {{"--i":20}}></span>
                    <span style = {{"--i":14}}></span>
                    <span style = {{"--i":8}}></span>
                    <span style = {{"--i":50}}></span>
                    <span style = {{"--i":28}}></span>
                    <span style = {{"--i":20}}></span>
                    <span style = {{"--i":15}}></span>
                    <span style = {{"--i":11}}></span>
                    <span style = {{"--i":8}}></span>
                    <span style = {{"--i":5}}></span>
                    <span style = {{"--i":25}}></span>
                    <span style = {{"--i":14}}></span>
                    <span style = {{"--i":2}}></span>
                    <span style = {{"--i":6}}></span>
                    <span style = {{"--i":21}}></span>
                    <span style = {{"--i":11}}></span>
                    <span style = {{"--i":5}}></span>
                </div>
                
           <div className = "screen">
            <div className = "info"> 
                <div className = "brand">
                    <div className = "img"> </div>
                    <div className = "pokeroi"> <h1>pokeroi</h1></div>
                </div>
                
            </div>
            <div className = "Bx">
                <div className = "Bx1">
                    <div>
                        <h1>
                        <span> Provide liquidity or stake </span> <br />
                        in PKR and RMAI to earn MATIC
                        
                        </h1>
                    </div>
                </div>
                <div className = "Bx2">
                         
                        <div className = "criptoBX">
                            <div className = "Container">
                            <div className = "selectContainer">
                                <DropdownMenu selected = {selected} setSelected = {setSelected}></DropdownMenu>
                            </div>

                            <form className = "form">
                                <div className = "PKR">
                                    <div className = "inputBx">
                                        <input type="text" required = "required"/>
                                             <span> PKR </span>      
                                        </div>
                                </div>
                                <div className = "RMAI">
                                    <div className = "inputBx">
                                        <input type="text" required = "required"/>
                                             <span> RMAI </span>      
                                        </div>
                                </div>
                                <div className = "buttom">
                                    <div className = "submit">
                                        <input type="submit" value = "Submit" />
                                    </div>
                                </div>
                            </form>
                            </div>
                        </div>
                </div>  
            </div>
            <div className = "margin">
            </div>
            <div className = "stats">
                <div className = "statsBx">
                    <div className = "stat"> 
                        <div className = "number">10M</div>
                        <div className = "cont">Total Supply </div>
                    </div>
                    <div className = "stat"> 
                        <div className = "number">10M</div>
                        <div className = "cont">Total Supply</div>
                    </div>
                    <div className = "stat"> 
                        <div className = "number">10M</div>
                        <div className = "cont">Total Supply</div>
                    </div>
                    <div className = "stat"> 
                        <div className = "number">10M</div>
                        <div className = "cont">Total Supply</div>
                    </div>
                </div>
            </div>
       

       </div>
        
    </div>








        
       
    </>
}
export default Form ;