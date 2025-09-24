import { FaStar } from "react-icons/fa";

const FeedbackModal = ({setRating, setHovered, hovered, rating, comment, setComment, handleSubmit}) => {
  return (
     <dialog id="my_modal_2" className="modal">
           <div className="modal-box bg-sky-100">
             <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
               <h2 className="text-2xl font-semibold mb-4 text-center text-black">
                 Give Feedback
               </h2>
               <div className="flex justify-center mb-4">
                 {[...Array(5)].map((_, index) => {
                   const starValue = index + 1;
                   return (
                     <button
                       key={starValue}
                       type="button"
                       onClick={() => setRating(starValue)}
                       onMouseEnter={() => setHovered(starValue)}
                       onMouseLeave={() => setHovered(null)}
                     >
                       <FaStar
                         size={28}
                         className={`transition-colors ${
                           starValue <= (hovered || rating)
                             ? "text-yellow-400"
                             : "text-gray-300"
                         }`}
                       />
                     </button>
                   );
                 })}
               </div>
               <textarea
                 className="textarea textarea-bordered w-full mb-4 bg-sky-100 text-gray-800"
                 placeholder="Write your feedback here..."
                 value={comment}
                 onChange={(e) => setComment(e.target.value)}
               ></textarea>
               <button
                 className="btn bg-sky-300 w-full border-none"
                 onClick={handleSubmit}
               >
               Submit
               </button>
             </div>
           </div>
           <form method="dialog" className="modal-backdrop">
             <button className="text-black">close</button>
           </form>
         </dialog>
  )
}

export default FeedbackModal