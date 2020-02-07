import React from 'react';
import classes from '../Profile/Profile.module.css'
// import Post from './MyPosts/Post/Post';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content_img}>
                <img className="content-img__item" src="https://media.istockphoto.com/photos/palm-tree-in-beach-in-tropical-island-caribbean-guadalupe-picture-id955765580"></img>
            </div>
            <div className="profile">
                <img className="profile_img" src="https://store-images.s-microsoft.com/image/apps.20152.9007199266243449.fc6ca929-2de0-411d-9b66-abba3b28492f.68a175b4-3f6b-4929-896d-b12f7846db20?mode=scale&q=90&h=200&w=200&background=%23061E26"></img>
                <p className="profile_discription"></p>
            </div>

            {/* <Post/> */}
        </div>
    )
}
export default Profile;