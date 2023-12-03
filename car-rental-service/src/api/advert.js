import axios from 'axios';

const instance = axios.create({
  baseURL: `https://656bb3fddac3630cf72854f1.mockapi.io/api`,
});

export const getAllAds = async (page) => {
  const { data } = await instance.get('advert', {
    params: { page, limit: 12 },
  });

  return data;
};

export const getOneAd = async (id) => {
  const { data } = await instance.get(`advert/${id}`);

  return data;
};

const addToFav = async (id) => {};

const AdApi = {
  getAllAds,
  getOneAd,
  addToFav,
};

export default AdApi;
