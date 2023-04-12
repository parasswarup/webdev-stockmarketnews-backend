import NewsModel from "../models/news-model.js";

export const findAllNews = async () => {
    const news = await NewsModel.find().sort({time: 'desc'});
    return news;
};

export const findNewsById = async (id) => {
    const news = await NewsModel.findById(id);
    return news;
};

export const deleteNews = async (id) => {
    const status = await NewsModel.deleteOne({ _id: id });
    return status;
};

export const createNews = async (news) => {
    const newNews = await NewsModel.create(news);
    return newNews;
};

