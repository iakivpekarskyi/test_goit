import axios from 'axios';

const instance = axios.create({
  baseURL: `https://656bb3fddac3630cf72854f1.mockapi.io`,
});

export const getAllAds = async (page) => {
  const { data } = await instance.get('advert', {
    params: { page, limit: 12 },
  });

  return data;
};

export const getOneAd = async (_id) => {
  const { data } = await instance.get(`advert/${_id}`);

  return data;
};

const adAPI = {
  getAllAds,
  getOneAd,
};

export default adAPI;
