import { use } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { imageUpload } from "../../api/utils";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

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
    const image = form?.image?.files[0];
    const imageUrl = await imageUpload(image);

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
        image: imageUrl,
        date: newDate,
        participantCount: 0,
      };

      const { data } = await axios.post(
        "http://localhost:3000/add-camp",
        newPost
      );
      toast.success("Camp Added Successfully!");
      form.reset();
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsUploading(false);
    }
  }

  const handleImageUpload = async (e) => {};

  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Camp Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border-2 border-sky-300 focus:outline-lime-500 rounded-md bg-white"
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
                className="w-full px-4 py-3 text-gray-800 border-2 border-sky-300 focus:outline-lime-500 rounded-md bg-white"
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
                className="block rounded-md focus:lime-300 w-full h-37 px-4 py-3 text-gray-800  border-2 border-sky-300 bg-white focus:outline-lime-500 "
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
                  className="w-full px-4 py-3 text-gray-800 border-2 border-sky-300 focus:outline-lime-500 rounded-md bg-white"
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
                  className="w-full px-4 py-3 text-gray-800 border-2 border-sky-300 focus:outline-lime-500 rounded-md bg-white"
                />
              </div>
            </div>
            {/* Healthcare Professional Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="healthcare" className="block text-gray-600">
                Healthcare Professional Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border-2 border-sky-300 focus:outline-lime-500 rounded-md bg-white"
                name="healthcare"
                id="healthcare"
                type="text"
                placeholder="Healthcare Professional Name"
                required
              />
            </div>
            {/* Image */}
            <div className=" p-4  w-full  m-auto rounded-lg flex-grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-sky-300 rounded-lg">
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
                    <div className="bg-sky-300 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500">
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
              className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-sky-300 "
            >
              {isUploading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddCamp;
