import React from 'react'
import {Poster} from './Poster.js'

export class Thumbnails extends React.Component{

    render(){
      //  console.log( this.props.state.searchtype, this.props.state.Popular);
        if( this.props.state.searchtype==="movie" && this.props.state.Movies.TotalResults!==0){
            return ( 
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {
                                this.props.state.Movies.movies.map((movie,i) => {
                                    return (
                                        <Poster key={i} image={movie.poster_path} name={movie.title} rating={movie.vote_average}/>)
                                })
                                }
                        </div>
                    </div>
                </div>

    )}
    else if(this.props.state.searchtype==="tv" && this.props.state.Tv.TotalResults!==0){
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {   
                            this.props.state.Tv.tv.map((movie,i) => {
                                return (
                                    
                                    <Poster key={i} image={movie.poster_path} name={movie.name} rating={movie.vote_average}/>)
                            })
                            }
                    </div>
                </div>
            </div>

        )}
        else if(this.props.state.searchtype==="popular" && this.props.state.Popular.TotalResults!==0){
            return ( 
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            {
                                this.props.state.Popular.show.map((movie,i) => {
                                    return (
                                        <Poster key={i} image={movie.poster_path} name={movie.title} rating={movie.vote_average}/>)
                                })
                                }
                        </div>
                    </div>
                </div>
                )

        }

        else if((this.props.state.searchtype==="movie"||this.props.state.searchtype==="tv" )&&  (this.props.state.Movies.TotalPages===0 ||this.props.state.Movies.TotalPages===0)){
            return (
                    <div className="row col s10 push-s3">
                        Something is wrong ..Please check the spelling
                        </div>
                    )
        }

        else return <></>

}
}

export default Thumbnails