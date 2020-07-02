import React from 'react';
import {Header} from './header.js';
import {Searchbar} from './searchbar.js';
import {Thumbnails}from './Thumbnails.js';
import {connect} from 'react-redux';
import {Select} from './select.js';
import { Pagination } from './pagination.js';
import {Filterbar} from './filterbar.js';
import { popular,onSubmit,handleChange ,onClickmovies,
        onClickTV,MoviePageIncrease,MoviePageDecrease,
        TvPageIncrease,TvPageDecrease,PopularPageIncrease,
        PopularPageDecrease} from '../redux/action.js';

class App extends React.Component {

    componentDidMount(){
        this.props.getPopular();
           
    }

    render(){
        return (
            <>
                <Header /> 
                <Select {...this.props}/>
                <Filterbar/>
                <Searchbar {...this.props}/> 
                <Thumbnails {...this.props}/>
                <Pagination {...this.props}/>       
            </>
        );
    }
}

function mapStateToProps(state){
    return {
        state:state
    }
}

function mapDispatchToProps(dispatch) {
    return { getPopular: () => dispatch(popular()), 
             onSubmit:(e)=>dispatch(onSubmit(e)) ,
             handleChange:(e)=>dispatch(handleChange(e)),
             onClickmovies:(e)=>dispatch(onClickmovies(e)),
             onClickTV:(e)=>dispatch(onClickTV(e)),
             MoviePageIncrease:(e,page)=>dispatch(MoviePageIncrease(e,page)),
             MoviePageDecrease:(e,page)=>dispatch(MoviePageDecrease(e,page)),
             TvPageIncrease:(e,page)=>dispatch(TvPageIncrease(e,page)),
             TvPageDecrease:(e,page)=>dispatch(TvPageDecrease(e,page)),
             PopularPageIncrease:(e,page)=>dispatch(PopularPageIncrease(e,page)),
             PopularPageDecrease:(e,page)=>dispatch(PopularPageDecrease(e,page)),
             
    };
   }

export default connect(mapStateToProps,mapDispatchToProps)(App)
