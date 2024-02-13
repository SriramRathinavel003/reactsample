import React from "react";

class StateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Key:"RedxZap"
        
        }
            
    }
    render(){
        return(
            <div>
                <h1>
                    React State
                </h1>
                <h2>
                    {
                        this.state.Key}
                    
                </h2>
            </div>
        )
    }

}
export default StateComponent;