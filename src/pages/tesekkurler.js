import React from 'react';
import Link from 'next/link';
import SeoHead from '@/components/SeoHead';
import seoMeta from '@/data/seoMeta';

const Tesekkurler = () => {
  return (
    <>
      <SeoHead {...seoMeta.thankyou} />

      <main className="wrapper">
        <section className="thank_you_page bg-dark-100 text-center py-5">
          <div className="container">
            <h1 className="text-white mb-3">Teşekkürler!</h1>
            <p className="text-gray-600 mb-4">Mesajınız başarıyla gönderildi. En kısa sürede size geri döneceğiz.</p>
            <Link href="/" className="btn olive">Ana Sayfaya Dön</Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Tesekkurler;
