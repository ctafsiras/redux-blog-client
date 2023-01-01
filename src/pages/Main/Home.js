import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import { sortPost } from "../../redux/actions/filterActions";
import { getContent } from "../../redux/actions/postAction";
import loadAllPosts from "../../redux/thunk/posts/fetchPosts";

const Home = () => {
  const latest = useSelector((state) => state.filter.latest);
  const posts = useSelector((state) => state.product.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllPosts());
  }, [dispatch]);

  const activeClass = "text-white bg-indigo-500 border-white";

  if (!posts) {
    return <div>Kiccu nai</div>
  }
  let content;

  if (latest) {
    content = posts.map((post) => (
      <PostCard key={post._id} post={post} />
    ));
  }
  else {
    content = posts.reverse().map((post) => (<PostCard key={post._id} post={post} />));
  }

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={() => dispatch(sortPost())}
          className={`border px-3 py-2 rounded-full font-semibold ${latest && activeClass} `}
        >
          Latest
        </button>
        <button
          onClick={() => dispatch(sortPost())}
          className={`border px-3 py-2 rounded-full font-semibold ${!latest && activeClass}`}
        >
          Oldest
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;
