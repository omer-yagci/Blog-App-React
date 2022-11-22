import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <section className=" gradient-form bg-gray-200 md:h-screen ">
      <div className="container py-12 px-5  flex justify-center items-center h-[100vh]">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg ">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="md:p-12 md:mx-6">
                  <div className="text-center flex items-center justify-center flex-col">
                    <img
                      className="mx-auto w-48"
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      alt="logo"
                    />
                    <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                      The page you are looking for might have been removed had
                      its name changed or is temporarily unavailable
                    </h4>
                    <div className=" flex  items-center justify-around p-1 ">
                      <button
                        className="bg-blue-100 p-[0.2rem] rounded-md border w-[7rem] mx-1"
                        onClick={() => navigate("/")}
                      >
                        Dashboard
                      </button>
                      <button
                        className="bg-blue-100 p-[0.2rem] rounded-md border w-[7rem] "
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
