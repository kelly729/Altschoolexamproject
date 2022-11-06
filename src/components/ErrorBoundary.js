import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }
static getDerivedStateFromError(error){
    return {
        hasError:true
    }
}
render(){
    if(this.state.hasError){
        return (
            <div className="error-boundary">
                <h2>An Erorr Occured</h2>
                   
            </div>
        )
    }
    return this.props.children
}

    
}
export default ErrorBoundary