import { use } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { imageUpload } from "../api/utils";

const AddCamp = () => {
  const { user } = use(AuthContext);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
 
  async function handleFormSubmit(e) {
    e.preventDefault();
    setIsUploading(true);
    const form = e.target;
    const name = form?.name?.value;
    const location = form?.location?.value;
    const description = form?.description?.value;
    const price = form?.price?.value;
    const healthcare = form?.healthcare?.value;
    //const image = form?.image?.files[0];
    //const imageUrl = await imageUpload(image);

    const formatDate = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1; // getMonth() returns 0-11
      const year = date.getFullYear();

      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");

      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // Convert to 12-hour format

      return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    };

    const newDate = formatDate(selectedDate);

    try {
      const newPost = {
        name,
        location,
        description,
        price: parseFloat(price),
        healthcare,
        image: uploadedImage,
        date: newDate,
        participantCount: 0,
      };

      const { data } = await axios.post(
        "https://camp-server-lake.vercel.app/add-camp",
        newPost
      );
      toast.success("Camp Added Successfully!");
      form.reset();
     
    } catch (err) {
      console.log(err);
    } finally {
      setIsUploading(false);
    }
  }

    const handleImageUpload = async e => {
    e.preventDefault()
    const image = e.target.files[0]
   
    try {
      // image url response from imgbb
      const imageUrl = await imageUpload(image)
    
      setUploadedImage(imageUrl)
    } catch (err) {
      setImageUploadError('Image Upload Failed')
      console.log(err)
    }
  }

  return (
   <div className="bg-[#F2F4F7] h-screen pt-20 px-20">
     <div className=" flex flex-col justify-center items-center text-gray-800 bg-white rounded-2xl py-10 shadow-xl">
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Camp Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border-2 border-gray-300 focus:outline-none rounded-md bg-white"
                name="name"
                id="name"
                type="text"
                placeholder="Camp Name"
                required
              />
            </div>
            {/* location */}
            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border-2 border-gray-300 focus:outline-none rounded-md bg-white"
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
              />
            </div>
            {/* Description */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                id="description"
                placeholder="Write camp description here..."
                className="block rounded-md focus:lime-300 w-full h-37 px-4 py-3 text-gray-800  border-2 border-gray-300 bg-white focus:outline-none "
                name="description"
              ></textarea>
            </div>
          </div>
          <div className="space-y-6 flex flex-col">
            {/* Price & Quantity */}
            <div className="flex justify-between gap-2">
              {/* Price */}
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600 ">
                  Camp Fee
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border-2 border-gray-300 focus:outline-none rounded-md bg-white"
                  name="price"
                  id="price"
                  type="text"
                  placeholder="Price"
                  required
                />
              </div>
              {/* date */}
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600 ">
                  Date
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="w-full px-4 py-3 text-gray-800 border-2 border-gray-300 focus:outline-none rounded-md bg-white"
                />
              </div>
            </div>
            {/* Healthcare Professional Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="healthcare" className="block text-gray-600">
                Healthcare Professional Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border-2 border-gray-300 focus:outline-none rounded-md bg-white"
                name="healthcare"
                id="healthcare"
                type="text"
                placeholder="Healthcare Professional Name"
                required
              />
            </div>
            {/* Image */}
            <div className=" p-4  w-full  m-auto rounded-lg flex-grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex items-center gap-5 w-max mx-auto text-center">
                  <label>
                    <input
                     onChange={handleImageUpload}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-[#031B4E] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3">
                     Upload
                    </div>
                  </label>   
  
                
                  {uploadedImage && (
                    <div className="w-full">
                      <img
                        className="w-[100px]"
                        src={uploadedImage}
                        alt="plant image"
                      />
                    </div>
                  )}
                  {imageUploadError && <p>{imageUploadError}</p>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#031B4E] "
            >
              {isUploading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
   </div>
  );
};

export default AddCamp;
