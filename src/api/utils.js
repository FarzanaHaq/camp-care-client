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

export const saveUserInDb = async user => {
  console.log(user)
  const { data } = await axios.post(
    "http://localhost:3000/user",
    user
  )
  return data
}
export const updateUserInDb = async user => {
  console.log(user)
  const { data } = await axios.patch(
    "http://localhost:3000/update-user",
    user
  )
  return data
}


