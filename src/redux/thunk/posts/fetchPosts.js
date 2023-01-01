import { getContent } from "../../actions/postAction";


const loadAllPosts = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://redux-blog-server.vercel.app/posts");
    const data = await res.json();

    if (data.data.length) {
      dispatch(getContent(data.data));
    }
  };
};

export default loadAllPosts;
