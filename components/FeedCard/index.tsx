import Image from "next/image";
import React from "react";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";

const FeedCard: React.FC = () => {
    return (
        <div className="border border-l-0 border-r-0 border-b-0  border-gray-600 p-5 hover:bg-slate-900  transition-all cursor-pointer">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4">
                    <Image
                        src="https://avatars.githubusercontent.com/u/90103440?v=4"
                        alt="profile"
                        height={50}
                        width={50}
                    />
                </div>
                <div className="col-span-11">
                    <h5>prajwal  </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                        autem quaerat eligendi explicabo sed inventore quis quae architecto
                        debitis nostrum?
                    </p>

                    <div className="flex items-center mt-5 text-xl justify-between  p-2 w-[90%]">
                        <div>
                            <FaRegComment />
                        </div>
                        <div><AiOutlineRetweet /></div>
                        <div>< CiHeart /></div>
                        <div><FaRegBookmark /></div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default FeedCard;
