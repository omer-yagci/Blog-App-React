import React from "react";
import { useNavigate } from "react-router-dom";
import updateIMG from "../assests/update.png";
import { useFetch, UpdateUser, DeleteUser } from "../auth/functions";

const Modal = ({ update, setUpdate, id }) => {
  const { contactList } = useFetch();
  const navigate = useNavigate();

  const removeHandler = (id) => {
    DeleteUser(id);
    navigate("/");
  };
  const updateHandler = (id) => {
    const items = contactList.find((item) => item.id === id);
    items.title = update.title;
    items.image = update.imageURL;
    items.content = update.content;
    UpdateUser(items);
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-around items-center gap-4 m-2">
        <div>
          {/* Button trigger modal  EDİT BTN*/}
          <button
            type="button"
            className=" button-55 w-[120px] bg-slate-300 py-2 px-4 rounded-md text-lg font-bold text-slate-800 hover:text-blue-500 duration-300 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Edit
          </button>
          {/* Modal */}
          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    className="text-xl leading-normal text-gray-800 font-bold"
                    id="exampleModalLabel"
                  >
                    Update Your Blog
                  </h5>
                  <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="flex flex-col justify-center items-center mt-1 gap-4">
                  <img src={updateIMG} alt="" />
                  <input
                    type="text"
                    placeholder="Title *"
                    className="w-[25rem] border-4 outline-none py-2 indent-2 shadow-md shadow-black rounded-md"
                    value={update.title}
                    onChange={(event) =>
                      setUpdate({ ...update, title: event.target.value })
                    }
                  />
                  <input
                    className="w-[25rem] border-4 outline-none py-2 indent-2 shadow-md shadow-black rounded-md"
                    value={update.imageURL}
                    type="text"
                    placeholder="imageURL"
                    onChange={(event) =>
                      setUpdate({ ...update, imageURL: event.target.value })
                    }
                  />
                  <div className="relative">
                    <textarea
                      cols="10"
                      rows="5"
                      className=" w-[25rem] h-[12rem] border-4 outline-none py-2 indent-2 shadow-md shadow-black rounded-md"
                      placeholder="Content *"
                      value={update.content}
                      onChange={(event) =>
                        setUpdate({
                          ...update,
                          content: event.target.value,
                        })
                      }
                      wrap="hard"
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  {/* Close BTN */}
                  <button
                    type="button"
                    className="px-6
            py-2.5
            bg-purple-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-purple-700 hover:shadow-lg
            focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-purple-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  {/* Save Edit */}
                  <button
                    type="button"
                    className="px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out
        ml-1"
                    onClick={() => updateHandler(id)}
                    data-bs-dismiss="modal"
                  >
                    Save Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Delete BTN */}
        <button
          className="button-55 w-[120px] bg-slate-300 py-2 px-6 rounded-md text-lg font-bold text-slate-800 hover:text-red-600 duration-300 "
          onClick={() => removeHandler(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Modal;
