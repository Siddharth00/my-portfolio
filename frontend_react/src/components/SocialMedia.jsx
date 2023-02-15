import React from 'react';
import { BsGithub, BsStackOverflow, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsLinkedin />
    </div>
    <div>
      <BsStackOverflow />
    </div>
    <div>
      <BsGithub />
    </div>
  </div>
);

export default SocialMedia;