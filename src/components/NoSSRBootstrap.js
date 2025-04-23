import { useEffect } from 'react';

const NoSSRBootstrap = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then(() => {
          console.log('Bootstrap JS yüklendi!');
        })
        .catch((err) => {
          console.error('Bootstrap yüklenemedi:', err);
        });
    }
  }, []);

  return null;
};

export default NoSSRBootstrap;
