import React from "react";

const MyReviewEdit = (props) => {
  //   const [updateData, setUpdateData] = useState();
  const { getUpdateData, handleUpdate } = props;
  const { _id, review } = props.reviewDetail;

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor={`my-modal${_id}`} className="btn btn-outline btn-accent btn-sm">
        Edit
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`my-modal${_id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Review</h3>
          <form onSubmit={handleUpdate} className="w-full  bg-white rounded-lg px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* <h2 className="px-4 pt-3 pb-2 text-gray-800 text-xl font-medium">Add a new review</h2> */}
              <div className="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  onChange={getUpdateData}
                  className="textarea textarea-bordered w-full h-28"
                  placeholder="Type Your Review"
                  defaultValue={review}
                  required
                ></textarea>
              </div>
              <div className="w-full md:w-full flex items-start  px-3 mb-8">
                <div className="-mr-1">
                  <button type="submit" className="btn btn-primary">
                    Update Review
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="modal-action">
            <label htmlFor={`my-modal${_id}`} className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewEdit;
