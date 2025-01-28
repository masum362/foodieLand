import React from 'react';
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const SocialCard = ({ socialCard }) => {


    return (
        <Card className="max-w-md w-full bg-white">
            {/* Header */}
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                        <img src={socialCard.userAvatar} alt={socialCard.username} className="rounded-full" />
                    </Avatar>
                    <div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold text-sm">{socialCard.username}</span>
                            {socialCard.isVerified && (
                                <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            )}
                        </div>
                        <span className="text-xs text-gray-500">{socialCard.location}</span>
                    </div>
                </div>
                <button className="p-2">
                    <MoreHorizontal className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            {/* Image */}
            <div className="relative">
                <Swiper
                    pagination={{
                        type: 'custom',
            renderCustom: function (swiper, current, total) {
                // Create bullets
                let bullets = '';
                for(let i = 0; i < total; i++) {
                    bullets += `<span class="inline-block w-2 h-2 rounded-full mx-1 ${i === current - 1 ? 'bg-[#3897F0]' : 'bg-[#00000026]'}"></span>`;
                }
                
                // Return both fraction and bullets
                return `
                    <div class="bg-black/50 text-white px-2 py-1 rounded-full absolute right-5 -top-64">
                        ${current}/${total}
                    </div>
                    <div class="absolute bottom-0 z-10 left-1/2 transform -translate-x-1/2">
                        ${bullets}
                    </div>
                `;
            }
        }}
                    modules={[Pagination]}
                    className="mySwiper relative"
                // navigation={true}
                >

                    {socialCard.images.map((image, index) => (

                        <SwiperSlide key={index}>
                            <img src={image} alt="Social Post" className="w-full h-auto object-cover" />
                        </SwiperSlide>
                    ))}
                   
                </Swiper>

               
            </div>


            {/* Actions */}
            <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                        <button className="hover:text-red-500">
                            <Heart className="w-6 h-6" />
                        </button>
                        <button>
                            <MessageCircle className="w-6 h-6" />
                        </button>
                        <button>
                            <Share2 className="w-6 h-6" />
                        </button>
                    </div>
                    <button>
                        <Bookmark className="w-6 h-6" />
                    </button>
                </div>

                {/* Likes */}
                <div className="flex items-center gap-2 mb-1">
                    <Avatar className="w-5 h-5">
                        <img src={socialCard.userAvatar} alt="Liker" className="rounded-full" />
                    </Avatar>
                    <p className="text-sm">
                        Liked by <span className="font-semibold">{socialCard.likes.mutual[0].name}</span> and <span className="font-semibold">{socialCard.likes.like} others</span>
                    </p>
                </div>

                {/* Caption */}
                <p className="text-sm">
                    <span className="font-semibold mr-2">{socialCard.username}</span>
                    {socialCard.caption}
                </p>

                {/* Date */}
                <p className="text-xs text-gray-500 mt-1">September 19</p>
            </div>
        </Card>
    )
}

export default SocialCard