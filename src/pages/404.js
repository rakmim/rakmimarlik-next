import React from 'react';
import SeoHead from '@/components/SeoHead';
import seoMeta from '@/data/seoMeta';

const ErrorPage = () => {
    return (
        <>
        <SeoHead {...seoMeta.notFound} />

            <div className="header-layer-bg"></div>

            <main className="wrapper">
                <section className="error-page">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-10 offset-lg-1">
                                <div className="error-content text-center">
                                    <div className="heading">404</div>
                                    <h1>Sayfa bulunamadı</h1>
                                    <p>Hata! Aradığınız sayfa mevcut değil. Taşınmış veya silinmiş olabilir.</p>

                                    <form className="search_form" action="search.php">
                                        <input type="text" name="search" className="keyword form-control" placeholder="Search..." />
                                        <button type="submit" className="form-control-submit"><i className="bi bi-arrow-right"></i></button>
                                    </form>

                                    <div className="btn_group">
                                        <a href='/' className="btn black">Ana sayfaya geri dön</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ErrorPage;