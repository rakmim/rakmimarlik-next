import React from 'react';

const Form = () => {
  return (
    <div className="home_contact">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="form"
      >
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
        />
        <input
          type="hidden"
          name="redirect"
          value="http://localhost:3000/tesekkurler"
        />

        <input
          className="form-control form-control-lg"
          name="name"
          id="name"
          type="text"
          placeholder="İsim*"
          required
        />
        <input
          className="form-control form-control-lg"
          name="phone"
          id="phone"
          type="tel"
          placeholder="Telefon"
        />
        <input
          className="form-control form-control-lg"
          name="email"
          id="email"
          type="email"
          placeholder="Email*"
          required
        />
        <textarea
          className="form-control pt-4"
          name="message"
          id="message"
          placeholder="Mesaj"
          rows="3"
        ></textarea>
        <div className="btn_group">
          <button type="submit" className="btn olive">
            Bize Ulaşın
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
