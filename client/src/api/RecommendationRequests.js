import axios from 'axios'

const RecommendAPI = axios.create({ baseURL: 'http://localhost:5500' });

export const getRecommendations = (place) => RecommendAPI.get(`/recommend/top_locations/${place}`);
export const getTrendingRecommendations = (id) => RecommendAPI.get(`/recommend/similar_user_recs/${id}`);
export const getUserRecommendation = (id)   => RecommendAPI.get(`/recommend/top_users/${id}`);
