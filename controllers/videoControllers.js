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

export const postUpload = async (req, res) => {
    const {
        body : {title, description},
        file : {path}
    } = req;

    const newVideo = await Video.create({
        fileUrl:path, 
        title, 
        description

    })
    // console.log(body, file)
    // res.render('upload', {pageTitle:"upload"});

    console.log(newVideo);
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
    };

export const videoDetail=(req, res)=>{res.render('videoDetail', {pageTitle:"video detail"})};

export const editVideo=(req, res)=>{res.render('editVideo', {pageTitle:"edit video"})};

export const deleteVideos=(req, res)=>{res.render('deleteVideos', {pageTitle:"delete video"})};