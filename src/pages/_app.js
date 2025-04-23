import dynamic from 'next/dynamic';
import '../styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SeoStructuredData from '@/components/SeoStructuredData'; 
// Swiper base CSS
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';

import MainLayout from '@/Layout/MainLayout';

const NoSSRBootstrap = dynamic(() => import('@/components/NoSSRBootstrap'), { ssr: false });

export default function MyApp({ Component, pageProps }) {
  return (
    <><SeoStructuredData />
    <MainLayout>
      <NoSSRBootstrap />
      <Component {...pageProps} />
    </MainLayout></>
  );
}
