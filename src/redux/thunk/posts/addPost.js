import { addContent } from "../../actions/postAction";

const addProductData = (post) => {
  return async (dispatch, getState) => {
    const res = await fetch("https://redux-blog-server.vercel.app/post", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addContent(post)
      );
    }
  };
};

export default addProductData;
