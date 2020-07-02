import {state_data} from './store.js'

const Reducers= function reducer(state=state_data,action){
    switch(action.type){
        case "updatemovie": return Object.assign({},state,{Movies:Object.assign({},state.Movies,{
            movies:action.data,TotalPages:action.pages,TotalResults:action.results,Key:action.Key})});

        case "updatetv": return Object.assign({},state,{Tv:Object.assign({},state.Tv,{
            tv:action.data,TotalPages:action.pages,TotalResults:action.results,Key:action.Key})});

        case "updatekey": return Object.assign({},state,{Key:action.key,});

        case "page0":return Object.assign({},state,{Movies:Object.assign({},state.Movies,{
            page:1 }),Tv:Object.assign({},state.Tv,{page:1})});

        case "movies":return Object.assign({},state,{searchtype:action.searchtype});

        case "tv":return Object.assign({},state,{searchtype:action.searchtype});

        case "popular": return Object.assign({},state,{Popular:Object.assign({},state.Popular,{
            show:action.data,TotalResults:action.total_results,TotalPages:action.total_pages,page:action.page})});
        
        case "tvpageincrease": return Object.assign({},state,{Tv:Object.assign({},state.Tv,{
            page:action.page })});
        
        case "tvpagedecrease": return Object.assign({},state,{Tv:Object.assign({},state.Tv,{
            page:action.page })});

        case "moviepageincrease": return Object.assign({},state,{Movies:Object.assign({},state.Movies,{
            page:action.page })});

        case "moviepagedecrease": return Object.assign({},state,{Movies:Object.assign({},state.Movies,{
                page:action.page })});
        
        case "popularpageincrease": return Object.assign({},state,{Popular:Object.assign({},state.Popular,{
                page:action.page })});
        case "popularpagedecrease": return Object.assign({},state,{Popular:Object.assign({},state.Popular,{
                 page:action.page })});    

       default: return state;
   }
}

export default Reducers;
