import express from 'express';
import routes from '../routes';
import { videos, getUpload, postUpload, videoDetail, deleteVideos, getEditVideo, postEditVideo} from '../controllers/videoControllers';
import { uploadVideo } from '../middlewares';

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideos);
export default videoRouter;