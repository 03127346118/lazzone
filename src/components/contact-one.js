import React from "react";

const ContactOne = () => {
  return (
    <section className="contact_form_area">
      <div className="contact_form_width">
        <h1 className="contact_map_title text-center">
          We&apos;re not putting on airs - our work is guaranteed to satisfy.
        </h1>
        <div id="map">
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1CpokyruJBivVOF-xLS6Nr5ytF7Jl2gRf&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
      </div>
      <div className="contact_form_width contact-right">
        <div className="hero-title-with-shape">
          <h4 className="heading_with_border">الحصول على أسعار مجاني</h4>
          <p>
            تواصل معنا للحصول على قبول علاج من مستشفى ألماني، لعرض تكاليف علاج
            ،أو للحصول على رأي طبي ثاني. سنقوم بمساعدتك والإجابة عن أسئلتك فيما
            يتعلق بالعلاج في ألمانيا.
          </p>
        </div>
        <form action="#" method="post">
          <input
            className="half_width input_m_right"
            type="text"
            name="fname"
            placeholder="Your name"
          />
          <input
            className="half_width"
            type="EMAIL"
            name="email"
            placeholder="Email address"
          />
          <input type="tel" name="tell" placeholder="Phone number" />
          <span className="select_icon">
            <select name="select" id="select">
              <option value="option0">Select Service</option>
              <option value="option1">Service 1</option>
              <option value="option2">Service 2</option>
              <option value="option3">Service 3</option>
              <option value="option4">Service 4</option>
            </select>
          </span>
          <button className="btn-yellow" value="SUBMIT">
          يقدم الآن
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactOne;
