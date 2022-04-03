import React from "react"


const Landingpage  = () => {
    return(
        <div className="h-screen bg-cust_back" >
            <div>
                <img style= {{
                    position:'absolute',
                    left: '57px',
                    top: '36px'
                }}src={require("../../assets/images/actual.png")} />    
            </div>
            <div>
                <img  style={{
            position: "absolute",
            width: "734px",
            height: "97px",
            left: "57px",
            top: "850px",
            opacity: "0.8",
          }} src={require("../../assets/images/bottom.png")} />
            </div> 
            <div>
                <img style={{
                    position: "absolute",
                    width:"784px",
                    height:"709px",
                    left:"900px",
                    top:"150px"

                }} src={require("../../assets/images/body.png")}/>    
                
            </div>
            <div>
                <img style={{
                    position: "absolute",
                    width: "319px",
                    height: "78px",
                    left: "1450px",
                    top: "15px"
                    
                    
                    

                }} src={require("../../assets/images/walletconnect.png")} />
            </div>
            <div>
                <img style={{
                    position: "absolute",
                    width: "101px",
                    height: "101px",
                    left: "1350px",
                    top: "15px"
                    
                    
                    

                }} src={require("../../assets/images/starlogo2.png")} />
            </div>
            <div>
                <img style={{
                    position: 'absolute',
                    width: '396.75px',
                    height: '345.2px',
                    left: '1450px',
                    top: '600px'
                }} src={require("../../assets/images/earth.png")}/>
            </div>
        </div>

      
    )

}

export default Landingpage;