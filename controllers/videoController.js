import { videos as videoList } from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videoList });
};
export const search = (req, res) => {
    const {query : { term : searchingBy }} = req;
    res.render("search", { pageTitle: "Search", searchingBy, videoList });
};
export const videos = (req, res) => res.render("videos", { pageTitle: "Videos" });

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
    const {
        body : { file, title, description }
    } = req;
    // To Do : Upload and save Video
    res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });