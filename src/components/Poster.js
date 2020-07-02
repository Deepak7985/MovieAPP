import React from 'react'

export class Poster extends React.Component{
    render(){
        return( 
            
                <div className="col s12 l2 ">
                        <div className="card medium">                       
                         <div className="card-image waves-effect waves-block waves-light">
                             {
                                 this.props.image==null ?<img src= {"https://juststickers.in/wp-content/uploads/2016/12/404-error-not-found.png"} alt="card" ></img>: <img src = {`http://image.tmdb.org/t/p/w185${this.props.image}`} alt="card" />
                             }
                           
                         </div>
                          <div className="card-content">
                            <p className="">{this.props.name}</p>
                            <p className="center yellow">Rating: {this.props.rating}</p>
                            </div>
                    


                    </div>

                </div>

        

        )
    }

}