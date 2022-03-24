import axios from "axios";

const apiPath = "https://jsonplaceholder.typicode.com";
const postsPath = "/posts";

export const getAllPosts = async () => {
  const { data } = await axios.get(`${apiPath}${postsPath}`);

  return data;
};

export const getPost = async (id: number) => {
  const { data } = await axios.get(`${apiPath}${postsPath}/${id}`);

  return data;
};

export const getPostComments = async (id: number) => {
  const { data } = await axios.get(`${apiPath}${postsPath}/${id}/comments`);

  return data;
};
