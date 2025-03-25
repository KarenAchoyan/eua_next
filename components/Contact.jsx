import React from 'react';
import {FaGlobe, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import {getDictionary} from "@/utils/utils";

const Contact = async ({lang}) => {
    const dict = await getDictionary(lang);
    return (
        <>
            <div className="w-full bg-gray-100 py-10">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-10">
                        Contact Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 my-10">
                        <div className="flex flex-col items-center">
                            <FaMapMarkerAlt className="text-3xl text-gray-700 mb-2" />
                            <h3 className="text-lg font-semibold">ADDRESS</h3>
                            <p className="text-sm">10 Davit Anhaght str., Yerevan, Armenia</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaPhoneAlt className="text-3xl text-gray-700 mb-2" />
                            <h3 className="text-lg font-semibold">CONTACT INFO:</h3>
                            <p className="text-sm">(010) 240038</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaGlobe className="text-3xl text-gray-700 mb-2" />
                            <h3 className="text-lg font-semibold">WEBSITE</h3>
                            <a href="https://www.eua.am" className="text-sm text-blue-500 hover:underline">www.eua.am</a>
                        </div>
                    </div>


                </div>
                <div className="mt-10">
                    <iframe
                        className="w-full h-[600px] rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.620027897936!2d44.51632717586889!3d40.20314537144048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce5466d1941%3A0xeebf45a8582a7e74!2s10%20Davit%20Anhaght%20St%2C%20Yerevan%200037!5e0!3m2!1sen!2sam!4v1707765401282!5m2!1sen!2sam"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;