import React from 'react';
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import timerImage from '@/assets/Timer.png'
import forkKnifeImage from '@/assets/ForkKnife.png'
const RecipeCard = ({ cardDetails }) => {
  
    return (
        <div className=' bg-gradient-to-b from-[#E7F9FD00]  to-[#E7F9FD]  rounded-2xl p-4'>
            <div className="w-full overflow-hidden  " >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden ">
                    <img
                        src={cardDetails.image}
                        alt={cardDetails.title}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* Like Button */}
                    <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Heart
                            className={`w- 5 h-5 ${cardDetails.liked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                        />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 ">
                    <h3 className="text-xl font-semibold mb-4">{cardDetails.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                            <img src={timerImage} alt="timer" className="w-5 h-5" />
                            <span>{cardDetails.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={forkKnifeImage} alt="fork-knife" className="w-5 h-5" />
                            <span>{cardDetails.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;