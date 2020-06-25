import {video} from "../db";
import routes from '../routes';


export const home=(req, res)=>{res.render("Home", {pageTitle:"Home", video})};

export const search=(req, res)=>{
    const searchingBy=req.query.term;
    //const {qrury{term:searchingBy}}=req;
    res.render("Search", {pageTitle:"search", searchingBy, video})

};

export const videos=(req, res)=>{res.render('videos', {pageTitle:"videos"})};

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