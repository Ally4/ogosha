import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default class div7 extends Component{

  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_33qbo66', 'template_af256wy', e.target, 'user_uL2C0Mc7JfAqOSBxda8gJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  render() {
  return (
    <div className="email_form">
                        <div className="container">
                          <form onSubmit={this.sendEmail}>
                              <div className="row pt-5 mx-auto">
                              <div className="col-8 form-group mx-auto">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                              </div>
                              <div className="col-8 form-group pt-2 mx-auto">
                                <input type="text" className="form-control" placeholder="Telephone Number" name="telephone_number" />
                              </div>
                              <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="BOOK" />
                                <h4>We shall contact you shortly</h4>
                              </div>
                              </div>
                          </form>
                        </div>
    </div>
  )
  }
}
