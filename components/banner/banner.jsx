"use client"
import {useContext, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Modal, Form, Input, Select, Button } from "antd";
import {MainContext} from "@/provider/MainProvider";

const { Option } = Select;

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {slides} = useContext(MainContext);

    const handleOk = () => {
        setIsOpen(false);
    };

    return (
        <div className="w-full h-[80vh] relative">
            <Swiper loop={true} autoplay={{ delay: 3000 }} allowTouchMove={true} navigation={false}>
                {slides.map((image, index) => (
                    <SwiperSlide key={index} className='h-full'>
                        <Image width={1500} height={800} src={"https://eua.am"+image.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='absolute bottom-[100px] left-[80px] z-10 text-[20px]'>
                <button onClick={() => setIsOpen(true)} className="bg-[#151784] text-white px-8 py-4 rounded-full hover:opacity-90">
                    Apply now
                </button>
            </div>

            {/* Modal */}
            <Modal title="Apply Now" open={isOpen} onCancel={() => setIsOpen(false)} footer={null}>
                <Form layout="vertical" onFinish={handleOk}>
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Surname" name="surname" rules={[{ required: true, message: "Please enter your surname" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone" name="phone" rules={[{ required: true, message: "Please enter your phone number" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email" }]}>
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Education" name="education" rules={[{ required: true, message: "Please select your education level" }]}>
                        <Select>
                            <Option value="high-school">High School</Option>
                            <Option value="bachelor">Bachelor's</Option>
                            <Option value="master">Master's</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Faculty" name="faculty" rules={[{ required: true, message: "Please select your faculty" }]}>
                        <Select>
                            <Option value="engineering">Engineering</Option>
                            <Option value="business">Business</Option>
                            <Option value="medicine">Medicine</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Banner;
