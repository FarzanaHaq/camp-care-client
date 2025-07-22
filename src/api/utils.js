import axios from "axios";

export const imageUpload = async (imageData) => {
  const imageFormData = new FormData();
  imageFormData.append("image", imageData);

  const { data } = await axios.post(
    "https://api.imgbb.com/1/upload?key=d3f842e47391f5de996a3360e84da30c",
    imageFormData
  );
  return data?.data?.display_url;
};

export const saveUserInDb = async (user) => {
  const { data } = await axios.post(
    "https://camp-server-lake.vercel.app/user",
    user
  );
  return data;
};
export const updateUserInDb = async (user) => {
  const { data } = await axios.patch(
    "https://camp-server-lake.vercel.app/update-user",
    user
  );
  return data;
};
