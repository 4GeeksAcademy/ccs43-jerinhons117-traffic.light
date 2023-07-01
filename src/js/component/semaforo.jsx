import React, {useState} from "react";
import ReactDOM from "react-dom";


export function TrafficLight (){
    const [color, setColor] = useState(false)

    
    return(
        <div className="body">
        <div className="semaforo">

            <div className={`rojo ${
                    color === "rojo" ? "shadows_red" : ""  
                }`} onClick={(event)=>{
                    console.log("rojo")
                    setColor((prev) =>{
                        if(prev =="rojo"){
                            return "";
                        }
                        return "rojo"
                    }

                    )
                        
                            
                }}>
                </div>
                <div className={`amarillo ${
                    color === "amarillo" ? "shadows_yellow" : ""  
                }`} onClick={(event)=>{
                    console.log("amarillo")
                    setColor((prev) =>{
                        if(prev =="amarillo"){
                            return "";
                        }
                        return "amarillo"
                    }

                    )
                }}>
                </div>
                <div className={`verde ${
                    color === "verde" ? "shadows_green" : ""  
                }`} onClick={(event)=>{
                    console.log("verde")
                    setColor((prev) =>{
                        if(prev =="verde"){
                            return "";
                        }
                        return "verde"
                    }

                    )
                    
                }}>
                </div>

        </div>

            <div className="palito_periquitos">hola


            </div>
               
                

                
                

        </div>)
} 