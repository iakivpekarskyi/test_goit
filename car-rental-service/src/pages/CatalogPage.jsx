import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { getAllAdsThunk } from '../redux/ads/thunk';
import { selectAds, selectPage } from '../redux/ads/selectors';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../redux/root/selectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const ads = useSelector(selectAds);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(getAllAdsThunk(page));
  }, [dispatch, page]);

  console.log('Ads:', ads);
  console.log('isLoading:', isLoading);
  console.log('Error:', error);

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          {ads && ads.map((ad) => <Card key={ad.id} data={ad} />)}
          {error && (
            <div>
              Something went wrong! <br /> {error}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CatalogPage;
