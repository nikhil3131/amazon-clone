import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="hidden sm:block">
            {/* back to top */}
            <div className="text-center text-sm text-white bg-[#37475A] py-3 cursor-pointer" onClick={() => {navigate("/");}}>
                Back to home
            </div>

            {/* main footer */}
            <div className="bg-[#232F3E] text-gray-300 py-10">
                {/* desktop footer */}
                <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8 gap-8">
                    <div className="flex flex-col text-sm space-y-1">
                        <h1 className="font-black text-lg text-white mb-1">Get to Know Us</h1>
                        <span>About Us</span>
                        <span>Careers</span>
                        <span>Press Releases</span>
                        <span>Amazon Science</span>
                    </div>

                    <div className="flex flex-col text-sm space-y-1">
                        <h1 className="font-black text-lg text-white mb-1">Connect with Us</h1>
                        <span>Facebook</span>
                        <span>Twitter</span>
                        <span>Instagram</span>
                    </div>

                    <div className="flex flex-col text-sm space-y-1">
                        <h1 className="font-black text-lg text-white mb-1">Make Money with Us</h1>
                        <span>Sell on Amazon</span>
                        <span>Sell under Amazon Accelerator</span>
                        <span>Amazon Global Selling</span>
                        <span>Protect and Build Your Brand</span>
                        <span>Become an Affiliate</span>
                        <span>Fulfilment by Amazon</span>
                    </div>

                    <div className="flex flex-col text-sm space-y-1">
                        <h1 className="font-black text-lg text-white mb-1">Let Us Help You</h1>
                        <span>COVID-19 and Amazon</span>
                        <span>Your Account</span>
                        <span>Returns Centre</span>
                        <span>100% Purchase Protection</span>
                        <span>Amazon App Download</span>
                        <span>Help</span>
                    </div>
                </div>
            </div>

            <div className="bg-[#37475A] flex items-center justify-center py-3">
              <img src="../../src/assets/images/NicePng_amazon-logo-png_167642.png" width={100} height={40}/>
            </div>
        </footer>
    );
}
