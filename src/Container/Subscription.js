import React from "react";

const Subscription = () => {
  return (
    <section id="sectionSubscription" className="container-fluid subscription-bg mb-5">
      <div className="container pt-5 pb-5">
        <div className="row pt-4 pb-4">
          <div className="col-sm-4 subscribe-header">
            Subscribe To Our Newsletter
          </div>
          <div className="col-sm-8">
            <form>
              <div className="row">
                <div className="form-group col-sm-9">
                  <input
                    type="email"
                    className="form-control"
                    id="subscribeEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter your e-mail"
                  ></input>
                </div>
                <div className="col-sm-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
