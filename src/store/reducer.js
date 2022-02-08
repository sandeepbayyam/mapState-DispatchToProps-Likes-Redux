const intialState = {
  Likes : 0,
  Dislikes : 0
}
const reducer =(state=intialState,action)=>{
  console.log(action);
  if(action.type==='likesinc'){
    return {
      ...state,Likes:state.Likes+1,
    };
  }
  if(action.type==='dislikesinc'){
    return{
      ...state,Dislikes:state.Dislikes+1
    }
  }
  return state;
}
export default reducer;