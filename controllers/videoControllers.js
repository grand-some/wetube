export const home=(req, res)=>{res.render("Home", {pageTitle:"Home"})};
export const search=(req, res)=>{res.render("Search", {pageTitle:"search"})};

export const videos=(req, res)=>{res.render('videos', {pageTitle:"videos"})};
export const upload=(req, res)=>{res.render('upload', {pageTitle:"upload"})};
export const videoDetail=(req, res)=>{res.render('videoDetail', {pageTitle:"video detail"})};
export const editVideo=(req, res)=>{res.render('editVideo', {pageTitle:"edit video"})};
export const deleteVideos=(req, res)=>{res.render('deleteVideos', {pageTitle:"delete video"})};