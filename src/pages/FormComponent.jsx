import React from "react";

const FormComponent = () => {
  return (
    <div className="py-20 h-screen bg-gray-300 px-2">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="w-full px-4 py-6">
            <div className="mb-1">
              <span className="text-sm">Full name</span>
              <input
                type="text"
                className="h-12 px-3 w-full border-blue-400 border-2 rounded focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="mb-1">
              <span className="text-sm">Description</span>
              <textarea
                type="text"
                className="h-24 py-1 px-3 w-full border-2 border-blue-400 rounded focus:outline-none focus:border-blue-600 resize-none"
              ></textarea>
            </div>

            <div className="mb-1">
              <span className="text-sm text-gray-400">
                You will be able to edit this information later
              </span>
            </div>

            <div className="mb-1">
              <span>Attachments</span>
              <div className="relative border-dotted h-32 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                <div className="absolute">
                  <div className="flex flex-col items-center">
                    <i className="fa fa-folder-open fa-3x text-blue-700"></i>
                    <span className="block text-gray-400 font-normal">
                      Attach you files here
                    </span>
                  </div>
                </div>
                <input
                  type="file"
                  className="h-full w-full opacity-0"
                  name=""
                />
              </div>
            </div>

            <div className="mt-3 text-right">
              <a href="#">Cancel</a>
              <button className="ml-2 h-10 w-32 bg-blue-600 rounded text-white hover:bg-blue-700">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
