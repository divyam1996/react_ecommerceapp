const initialState = {
    count:0,
    city:null,
    address:null
}

const reducer =(state=initialState,action)=>{
      console.log(action);
    if(action.type=="INC"){
      state.count=state.count+1;
    }
    if(action.type == 'DEC'){
        state.count=state.count-1;
    }
    return state;
}

export default reducer;