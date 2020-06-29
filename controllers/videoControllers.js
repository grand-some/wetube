import routes from '../routes';
import Video from"../models/Video";

export const home = async(req, res)=>{
    try{
        const videos=await Video.find({});
        res.render("Home", {pageTitle:"Home", videos});
    } catch(error){
        console.log(error);
        res.render("Home", {pageTitle:"Home", videos:[]})
    }

};

export const search=(req, res)=>{
    const searchingBy=req.query.term;
    //const {qrury{term:searchingBy}}=req;
    res.render("Search", {pageTitle:"search", searchingBy, videos})

};

export const getUpload=(req, res)=>{
    res.render('upload', {pageTitle:"upload"})};

export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(324393));
    };

export const videoDetail=(req, res)=>{res.render('videoDetail', {pageTitle:"video detail"})};

export const editVideo=(req, res)=>{res.render('editVideo', {pageTitle:"edit video"})};

export const deleteVideos=(req, res)=>{res.render('deleteVideos', {pageTitle:"delete video"})};