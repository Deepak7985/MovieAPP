import React from "react";


export class Select extends React.Component{

    render(){
        return (
            <div className="row">
               <button  onClick={(e)=>{this.props.onClickmovies(e)}} className="col s6  z-depth-4 btn-large  grey darken-3 " >Movies</button>
                <button  onClick={(e)=>{this.props.onClickTV(e)}} className="col s6 z-depth-4 btn-large  grey darken-3" >Tv-Series</button>
               
            </div>
        )
    }
}