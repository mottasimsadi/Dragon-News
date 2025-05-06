import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
      <div>
        <h2 className="font-bold mb-5">Find Us On</h2>
        <div className="">
          <div className="join join-vertical w-full">
            <div className="btn bg-base-100 join-item justify-start">
              <span className="bg-base-200 rounded-full p-1">
                <FaFacebookF />
              </span>
              Facebook
            </div>
            <div className="btn bg-base-100 join-item justify-start">
              <span className="bg-base-200 rounded-full p-1">
                <FaTwitter />
              </span>
              Twitter
            </div>
            <div className="btn bg-base-100 join-item justify-start">
              <span className="bg-base-200 rounded-full p-1">
                <FaInstagram />
              </span>
              Instagram
            </div>
          </div>
        </div>
      </div>
    );
};

export default FindUs;