import routes from '../routes';
import Video from"../models/Video";

export const home = async(req, res)=>{
     try{
        const videos=await Video.find({}).sort({_id :-1});
        
        res.render("Home", {pageTitle:"Home", videos});
     } catch(error){
          console.log(error);
          res.render("Home", {pageTitle:"Home", videos:[]})
     }

};

export const search=async(req, res)=>{
    const {
      query : {term:searchingBy}
    }=req;
    let videos=[];
    try {
      videos = await Video.find({
        title: { $regex: searchingBy, $options: "i" }
      });
    } catch (error) {
      console.log(error);
    }
    res.render("search", { pageTitle: "Search", searchingBy, videos });
  };

export const getUpload=(req, res)=>{
    res.render('upload', {pageTitle:"upload"})};

export const postUpload = async (req, res) => {
    const {
        body: {title, description },
        file : {path}
    } = req;
    console.log(path)
    const newVideo = await Video.create({
        fileUrl: path,
        title: title,
        description: description
    });
    // To Do: Upload and save video
    res.redirect(routes.videoDetail(newVideo.id));
    };

export const videoDetail= async(req, res)=>{
    const {
     params:{id}
    }=req;
    try {
        const video = await Video.findById(id);
        res.render("videoDetail", { pageTitle: "Video Detail", video });
      } catch (error) {
        res.redirect(routes.home);
      }
    };

export const getEditVideo=async(req, res)=>{
    const{
        params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id:id }, { title:title, description:description});
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideos=async(req, res)=>{
  const {
    params:{id}
  }=req;
  try{
     await Video.findByIdAndRemove({_id:id})
     res.redirect(routes.home);
  } catch (error) {
     res.redirect(routes.home);
};
}  
