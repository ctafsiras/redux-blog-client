import { deletePost } from "../../actions/postAction";

const deleteContent = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://redux-blog-server.vercel.app/post/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(deletePost(id));
    }
  };
};

export default deleteContent;
