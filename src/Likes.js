import React from 'react';
import './style.css'
import {connect} from 'react-redux';

const Likes =  (props)=>{
  console.log(props);
  return (
    <div className='betterview'>
      <i className="bi bi-hand-thumbs-up" onClick ={props.like}></i>:{props.Likes}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <i className="bi bi-hand-thumbs-down" onClick={props.dislike}></i>:{props.Dislikes}
    </div>
  )
}
function mapStateToProps(state){
return state;
}
function mapDispatchToProps(dispatch){
  return {
        like:()=>{
          dispatch({type:'likesinc'})
        },
        dislike:()=>{
          dispatch({type:'dislikesinc'})
      }
  } 
}
export default connect(
  mapStateToProps,mapDispatchToProps
) (Likes);