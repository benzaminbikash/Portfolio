import React from "react";
import Facebook from ".././image/facebook.svg";
import Instagram from ".././image/instagram.svg";
import Linkedin from ".././image/linkedin.svg";
import Twitter from ".././image/twitter.svg";

function SocialMedia() {
  return (
    <div className="fixed top-[40%] right-0 bg-white  w-8 rounded-md">
      <div className="flex flex-col gap-2 items-center py-2">
        <a href="https://www.facebook.com/nepalibikash04/">
          <Facebook className="w-[20px]  h-[20px] " />
        </a>
        <a href="https://www.instagram.com/bikashthedev/">
          <Instagram className="w-[30px]  h-[30px] " />
        </a>
        <a href="https://www.linkedin.com/in/bikash-nepali-4478b0310/">
          <Linkedin className="w-[20px] h-[20px]" />
        </a>
        <a href="https://x.com/ssbikashss">
          <Twitter className="w-[20px]  h-[20px] " />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
