//global
const HOME="/";
const JOIN="/join";
const LOGIN = "/login";
const LOGOUT="/logout";
const SERCH="/search";

//Users
const USER="/users";
const USER_DETAIL="/:id";
const EDIT_PROFILE="/edit-profile";
const CHANGE_PASSWORD="/change-password";

//video

const VIDEOS='/video';
const UPLOAD="/upload";
const VIDEO_DETAIL='/:id';
const EDIT_VIDEO="/:id/edit"
const DELETE_VIDEO="/:id/delete"


const routes ={
home:HOME,
join:JOIN,
login:LOGIN,
logout:LOGOUT,
search:SERCH,
user:USER, 
userDetail:USER_DETAIL,
editProfile:EDIT_PROFILE,
changePassword:CHANGE_PASSWORD,
videos:VIDEOS,
upload:UPLOAD,
videoDetail:VIDEO_DETAIL,
editVideo:EDIT_VIDEO,
deleteVideo:DELETE_VIDEO
}

export default routes;