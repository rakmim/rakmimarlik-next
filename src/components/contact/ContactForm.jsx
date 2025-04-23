import React from 'react';
import Form from '../Form';
import Paragraph from '../Paragraph';
import SectionGridLines from '../section/SectionGridLines';

const ContactForm = () => {
    return (
        <section className="contact_us bg-dark-200">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-10">
                        <div className="section-header">
                            <h1 className="text-white text-uppercase mb-4">BİZE ULAŞIN</h1>
                            <Paragraph text='' />
                            <Form />
                        </div>
                    </div>
                </div>
            </div>

            <SectionGridLines />
        </section>
    );
};

export default ContactForm;