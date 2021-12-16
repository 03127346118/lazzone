import React, { Component } from "react";

export const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class ContactOne extends Component {
  constructor(props) {
    super(props);
    this.state = { status: "init", email: "", name: "" };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    this.setState({ status: "submitting" });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "subscribe",
        email: this.state.email,
        name: this.state.name,
      }),
    })
      .then((res) => {
        this.setState({ status: "success", email: "", name: "" });
        console.log(res);
      })
      .catch((err) => {
        this.setState({ status: "failed" });
        console.log(err);
      });

    e.preventDefault();
  };
  render() {
    return (
      <section id="contact" className="contact_form_area">
        <div className="contact_form_width">
          <h1 className="contact_map_title text-center">
            سنقوم بمساعدتك والإجابة عن أسئلتك فيما يتعلق بالعلاج في ألمانيا
          </h1>
          <div id="map">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1CpokyruJBivVOF-xLS6Nr5ytF7Jl2gRf&ehbc=2E312F"
              width="640"
              height="480"
            ></iframe>
          </div>
        </div>
        <div className="contact_form_width contact-right">
          <div className="hero-title-with-shape">
            {/* <h4 className="heading_with_border">الحصول على أسعار مجاني</h4> */}
            <p>
              تواصل معنا للحصول على قبول علاج من مستشفى ألماني، لعرض تكاليف علاج
              ،أو للحصول على رأي طبي ثاني. سنقوم بمساعدتك والإجابة عن أسئلتك
              فيما يتعلق بالعلاج في ألمانيا.
            </p>
          </div>
          <form
            className="subscribe-form"
            name="subscribe"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="subscribe" />
            <input
              type="hidden"
              name="bot-field"
              onChange={this.handleChange}
            />
            <input
              className="half_width input_m_right"
              type="text"
              name="fname"
              placeholder="Your name"
              onChange={this.handleChange}
            />
            <input
              className="half_width"
              type="EMAIL"
              name="email"
              placeholder="Email address"
              onChange={this.handleChange}
            />
            <input type="tel" name="tell" placeholder="Phone number" />
            <span className="select_icon">
              <select name="select" id="select" onChange={this.handleChange}>
                <option disabled="true" value="option1">
                  اختر الخدمة
                </option>
                <option
                  value="  عرض تكاليف علاج
"
                >
                  {" "}
                  عرض تكاليف علاج
                </option>
                <option value="رأي طبي ثاني">رأي طبي ثاني</option>
                <option
                  value="
قبول العلاج"
                >
                  قبول العلاج
                </option>
                <option value="شيء آخر">شيء آخر</option>
              </select>
            </span>
            <button
              className="btn-yellow"
              type="submit"
              disabled={
                this.state.status === "submitting" ||
                this.state.status === "success"
              }
              value="SUBMIT"
            >
              أرسل
            </button>
            {this.state.status === "success" && (
              <div className="text-success text-center">
                <i className="fa fa-check-circle" aria-hidden="true"></i> You've
                successfully subscribed our Newsletter.
              </div>
            )}
          </form>
        </div>
      </section>
    );
  }
}

export default ContactOne;
