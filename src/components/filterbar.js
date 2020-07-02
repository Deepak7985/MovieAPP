import React from'react'

export class Filterbar extends React.Component{
    render(){
        return (
            <div className="row">
                <form  >
                        <div className="col s4 right grey darken-1 btn-large">
                          <h6 className="left">Sort by</h6> 
                        </div>

                        <div className="col s4 left grey darken-1 btn-large">
                        <h6 className="left">Genre</h6>
                        </div>

                        <div className="col s4 grey darken-1 btn-large">
                        <h6 className="left">Language</h6>
                        </div>

                </form >  
            </div>
        ) 
    }
}