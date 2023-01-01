import React from "react";
import { BiListPlus } from "react-icons/bi";  
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>

      <div className='h-52 w-52 mx-auto'>
        {/* <img src={post.image} alt={post.title} /> */}
      </div>
      <h1 className='font-bold text-center'>{post.title}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {post.title}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {post.tags.map((tag) => {
            return (
              <li key={tag} className='text-sm '>
                {tag}
              </li>
            );
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>




      </div>
    </div>
  );
};

export default PostCard;
