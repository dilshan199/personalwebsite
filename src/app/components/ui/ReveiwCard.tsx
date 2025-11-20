"use client";
import React from "react";
import { Review } from "@/app/type";

interface ReveiwCardProps {
    review: Review;
}

const ReveiwCard = ({ review }: ReveiwCardProps) => {
    return (
        <div className="review-item px-3 py-5 h-44 bg-white w-full  lg:w-[350px] rounded-md shadow-md mb-5">
            <div className="flex items-center space-x-3">
                <div className='w-10 h-10 rounded-full bg-blue-lagoon-500/25 flex justify-center items-center'>
                    <h6 className='font-extrabold font-poppins text-blue-lagoon-500 uppercase text-xl'>C</h6>
                </div>
                <div>
                    <h6 className='font-semibold font-poppins text-base text-gray-700'>{review.name}</h6>
                    <p className='font-normal text-blue-lagoon-500 text-xs font-poppins'>{review.designation}</p>
                </div>
            </div>
            <p className='text-xs font-normal font-poppins text-gray-500 text-justify mt-4'>{review.feedback}</p>
        </div>
    );
};

export default ReveiwCard;