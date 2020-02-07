import React from 'react';
import classes from '../Post/Post.module.css';

const Post = (props) => {
  console.log()
  return (

    <div className={classes.content}>

      <div className={classes.post_item}>
        <img className={classes.post_item__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk9sgG68T9M9psOcvJ24Gp2Vp5Sd9tDhsHOZ16HEYK3i6-U6lv"></img>

        {props.message}

        <div>
         Like {props.like}
        </div>
       
      </div>

    </div>
  )
}

export default Post;