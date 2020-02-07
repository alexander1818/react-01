import React from 'react';
import classes from '../Post/Myposts.module.css';
import Post from './Post';

const Myposts = () => {
  return (

    <div className={classes.content}>
      <div className={classes.post}>
        <p className="my-post">my post</p>
      </div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>New post</div>
      <div className={classes.post_item}>
      <Post message="Hi, how are you?" like="15"/>
      <Post message="Its my first post" like="20"/>
      <Post />
      </div>
      
    </div>
  )
}

export default Myposts;