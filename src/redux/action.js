import {store } from '../index.js'

export function onSubmit(e){
    e.preventDefault();
   // console.log("onSubmit");
    const s=store.getState();
    let page=1;
    if(s.searchtype==="movie"){
        page=s.Movies.page;
        
        }
    else if(s.searchtype==="tv"){
        page=s.Tv.page;

        }
    return dispatch=>{
        return fetch(`https://api.themoviedb.org/3/search/${s.searchtype}?api_key=${s.APIKey}&query=${s.Key}&page=${page}`)
               .then(data=>data.json())
               .then(data=>{
                        console.log("fetched in submit ",data);
                        if(s.searchtype==="movie"){
                        dispatch( {
                                type:"updatemovie",
                                data:data.results,
                                results:data.total_results,
                                pages:data.total_pages,
                                Key:s.Key
                        })}
                        else if(s.searchtype==="tv"){
                            dispatch( {
                                type:"updatetv",
                                data:data.results,
                                results:data.total_results,
                                pages:data.total_pages,
                                Key:s.Key
                        })}
                        
                });        
    }
    
}


export function handleChange(e){
    return dispatch=>{
        dispatch({
            type:"updatekey",
            key:e.target.value
        })
        dispatch({
            type:"page0",
        });
                
    }
}



export function onClickmovies(e){
    e.preventDefault();
    return dispatch=>{
        dispatch({
            type :"movies",
            searchtype:"movie"
    })
}
}
export function onClickTV(e){
    e.preventDefault();
    return dispatch=>{
         dispatch({
            type:"tv",
            searchtype:"tv"
    })
}
}

export function TvPageIncrease(e,page){
    e.preventDefault();
    return dispatch=>{
        dispatch({
        type:"tvpageincrease",
        page
      })
    }
}

export function TvPageDecrease(e,page){
    e.preventDefault();
    return dispatch=>{
        dispatch({
            type:"tvpagedecrease",
            page
               
        })
    }
}
export function MoviePageIncrease(e,page){
    e.preventDefault();
    return dispatch=>{
        dispatch({
            type:"moviepageincrease",
            page
        })
    }
}

export function MoviePageDecrease(e,page){
    e.preventDefault();
    return dispatch=>{
        dispatch({
            type:"moviepagedecrease",
            page
               
        }
    )
    }
}

export function PopularPageIncrease(e,page){
    e.preventDefault();
    return dispatch=>{
        dispatch({
            type:"popularpageincrease",
            page
        })
    }
}

export function PopularPageDecrease(e,page){
    e.preventDefault();
    return dispatch=>{
        dispatch({
            type:"popularpagedecrease",
            page
               
        }
    )
    }
}

export function popular(){
    return dispatch=>{
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=403215d4d68a271d4c5dc907db08554e&language=en-US&page=${store.getState().Popular.page}`)
                .then(data=>data.json())
                .then(data=>{
                        console.log("fetched in popular",data);
                        dispatch({
                        type:"popular",
                        data:data.results,
                        page:data.page,
                        total_pages:data.total_pages,
                        total_results:data.total_results
                        })
     
                    })
    }
}