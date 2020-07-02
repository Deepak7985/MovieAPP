import React from 'react'

export class Searchbar extends React.Component{

    render(){
        return ( 
            <div className="container">
                <div className="row">               
                     <div className="col s8 offset-s2">
                        <form action=""  onSubmit={(e)=>this.props.onSubmit(e)}>
                            <div className="input-field">
                                <input  placeholder="Whats on your mind" type="text" onChange={(e)=>this.props.handleChange(e)} required/>
                            </div>
                        </form>
                    </div>
              </div>
            </div>
        );

        
    }
}
