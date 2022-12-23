import "./Form.css"


function Form() {
    return <>
        <div className = "screen">
            <div className = "info"> 
                <div className = "brand">
                    <div className = "img"> </div>
                    <div className = "pokeroi"> <h1>pokeroi</h1></div>
                </div>
                
            </div>
            <div className = "Bx">
                <div className = "Bx1">
                    <div className = "header"> 
                        <h2>Became a liquidity provider </h2>
                    </div>
                    
                    <div className = "criptoBX">
                        <div className = "Container">
                            <div className = "PKR">
                                <div className = "span">
                                        <span> PKR </span>
                                    </div>
                                <div className = "inputBx">
                                    <input placeholder = "Hash"></input>
                                </div>
                        </div>
                        <div className = "RMAI">
                                <div className = "span">
                                    <span> RMAI </span>
                                </div>
                            <div className = "inputBx">
                                <input placeholder = "Hash"></input>
                            </div>
                        </div>
                    </div>   
                    </div>
                </div>
                <div className = "Bx2">
                        <div className = "header"> 
                            <h2>Lock crypto </h2>
                        </div>  
                        <div className = "criptoBX">
                            <div className = "Container">
                                <div className = "PKR">
                                    <div className = "span">
                                        <span> PKR </span>
                                    </div>
                                    <div className = "inputBx">
                                        <input placeholder = "Hash"></input>
                                    </div>
                                </div>
                                <div className = "RMAI">
                                    <div className = "span">
                                        <span> RMAI </span>
                                    </div>
                                     <div className = "inputBx">
                                         <input placeholder = "Hash"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>  
            </div>
            <div className = "buttom">
                <div className = "submit">
                    <input type="submit" value = "Submit" />
                </div>
            </div>
            <div className = "stats">
                <div className = "statsBx">
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
                    <div className = "stat"> 
                        <div className = "number">10M</div>
                        <div className = "cont">Total Supply</div>
                    </div>
                </div>
                
            </div>
        </div> 
        
    </>
}

export default Form ;