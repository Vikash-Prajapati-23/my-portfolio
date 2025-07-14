import { useState } from "react";

function ContactUs() {
  const [loading, setLoading] = useState(false);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <section
      id="contactus"
      className="text-white h-screen flex justify-center items-center"
    >
      <div className="lg:mt-10 md:mt-80 mt-[45rem] ">
        <div className="">
          <p className="text-xl md:text-4xl font-semibold text-center">
            Contact Us For Any Query
          </p>
        </div>

        <div className="px-0 md:px-24 lg:px-40 my-10">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="cols-span-1 md:order-1 order-2">
              <form action="https://formsubmit.co/00890d1d402d1e2086e8140fbd3947ba" method="POST" onSubmit={handleSave} className="space-y-5 grid ">
                <div className="cols-span-1 flex flex-col md:w-full w-[280px] mx-auto">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required={true}
                    placeholder="Name"
                    className=" text-white border-1 p-1 px-2 rounded"
                  ></input>
                </div>
                <div className="cols-span-1 flex flex-col md:w-full w-[280px] mx-auto">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    required={true}
                    placeholder="Email"
                    className=" text-white border-1 p-1 px-2 rounded"
                  ></input>
                </div>
                <textarea
                  className="  md:w-full w-[280px] mx-auto border-[1px] p-2 border-grey-200 rounded-md"
                  placeholder="Type your message..."
                  rows="6"
                  name="message"
                ></textarea>
                <button
                  variant="outline"
                  disabled={loading}
                  className="bg-blue-400 md:w-24 w-[280px] md:mx-0 mx-auto md:px-0 py-1 font-semibold cursor-pointer text-lg text-white rounded-2xl my-3"
                  aria-label="Submit Form"
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </form>
            </div>

            <div className="cols-span-1 md:px-0 px-8 md:order-2 order-1">
              <div>
                <p className="text-justify">
                  Let’s build something great together! Whether it’s a job
                  opportunity, a freelance project, or tech talk — feel free to
                  say hello
                </p>

                <div className="space-y-5 mt-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex justify-center items-center bg-blue-300 rounded-full">
                      <i class="fa-solid fa-envelope text-2xl text-gray-700"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email</h3>
                      <span>vikashprajapati@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex justify-center items-center bg-blue-300 rounded-full">
                      <i class="fa-solid fa-phone text-2xl text-gray-700"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Phone</h3>
                      <span>6290475457</span>
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
}

export default ContactUs;
