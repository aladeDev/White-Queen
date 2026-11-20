import React from "react";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-[#194333] px-5 md:px-12 lg:px-15 lg:py-10 py-16 md:py-20"
    >
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-1 items-start">
        <div className="w-full">
          <h2 className=" text-center lg:text-start uppercase text-[#F5F1E9] text-2xl  lg:text-[43px] leading-[1.3] tracking-tight max-w-md">
            LET'S CREATE SOMETHING MEANINGFUL.
          </h2>

          <p className="text-white  text-center lg:text-start  text-[15px] leading-[1.6] mt-3 w-90 px-1 lg:max-w-[340px]">
            Have a project, opportunity or idea in mind? I'd love to hear about
            it. I'm open to full-time roles, freelance collaborations and
            conversations about design, product and building meaningful things.
          </p>

          <div className="flex flex-col gap-4 mt-5">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F5F1E9] flex items-center justify-center shrink-0">
                <FaPhone className="text-[#194333] text-sm" />
              </div>

              <div>
                <p className="text-[#91A69A] text-[14px] uppercase ">PHONE</p>
                <p className="text-[#F5F1E9] text-[15px]">+2348118785193</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F5F1E9] flex items-center justify-center shrink-0">
                <FaEnvelope className="text-[#194333] text-sm" />
              </div>

              <div>
                <p className="text-[#91A69A] text-[14px] uppercase">EMAIL</p>
                <p className="text-[#F5F1E9] text-[15px] break-all">
                  whitequeenprecious1@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F5F1E9] flex items-center justify-center shrink-0">
                <FaLocationDot className="text-[#194333] text-sm" />
              </div>

              <div>
                <p className="text-[#91A69A] text-[14px] uppercase">ADDRESS</p>
                <p className="text-[#F5F1E9] text-[15px]">+2348118785193</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#1B4535] border border-[#315746] rounded-md p-6 sm:p-8 md:p-9">
          <div className="flex items-center justify-between gap-3 mb-10">
            <h3 className="text-[#F5F1E9] text-base font-medium">
              Start a project
            </h3>

            <p className="text-[#91A69A] text-[13px]">
              Typically replies within 24 hours
            </p>
          </div>

          <form className="flex flex-col gap-7">
            {/* First and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your first name"
                className="w-full h-[38px] px-3 rounded-md bg-[#234D3D] border border-[#315746] text-white text-xs placeholder:text-[#F5F1E9] outline-none focus:border-[#91A69A] transition"
              />

              <input
                type="text"
                placeholder="Your last name"
                className="w-full h-[38px] px-3 rounded-md bg-[#234D3D] border border-[#315746] text-white text-xs placeholder:text-[#F5F1E9] outline-none focus:border-[#91A69A] transition"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full h-[38px] px-3 rounded-md bg-[#234D3D] border border-[#315746] text-white text-xs placeholder:text-[#F5F1E9] outline-none focus:border-[#91A69A] transition"
            />

            {/* Service */}
            <select
              defaultValue=""
              className="w-full h-[38px] px-3 rounded-md bg-[#234D3D] border border-[#315746] text-[#F5F1E9] text-xs outline-none focus:border-[#91A69A] transition"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="web-design">Web Design</option>
              <option value="web-development">Web Development</option>
              <option value="ui-ux">UI/UX Design</option>
              <option value="branding">Branding</option>
              <option value="other">Other</option>
            </select>

            <textarea
              rows="4"
              placeholder="A few details about your goals, timeline, and project..."
              className="w-full min-h-[80px] px-3 py-3 rounded-lg bg-[#234D3D] border border-[#315746] text-white text-xs placeholder:text-[#F5F1E9] outline-none resize-none focus:border-[#91A69A] transition"
            />

            <button
              type="submit"
              className="w-full h-11 rounded-md bg-[#F5F1E9] text-[#194333] text-[18px] font-semibold hover:bg-white transition duration-300"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
