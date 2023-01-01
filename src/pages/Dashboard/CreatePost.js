import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addProductData from "../../redux/thunk/posts/addPost";

const CreatePost = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const post = {
      title: data.title,
      article: data.article,
      tags: [data.tags.split(", ")],
      published: new Date()
    };
    console.log(post);
    dispatch(addProductData(post))
  };

  return (
    <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-2xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-lg'>
          <label className='mb-2' htmlFor='title'>
            Title
          </label>
          <input type='text' id='title' {...register("title")} />
        </div>

        <div className='flex flex-col w-full max-w-lg'>
          <label className='mb-2' htmlFor='article'>
            Article
          </label>
          <textarea type='text' name='article' id='article' {...register("article")} />
        </div>

        <div className='flex flex-col w-full max-w-lg'></div>
        <div className='flex flex-col w-full max-w-lg'>
          <label className='mb-2' htmlFor='tags'>
            Tags (separate with comma)
          </label>
          <input
            type='text'
            name='tags'
            id='tags'
            {...register("tags")}
          />
        </div>

        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
