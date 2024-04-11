import { useState } from "react"

const Add = () => {
  const [contact, setContact] = useState({
    fullName: '',
    phone: '',
    email: ''
  });



  return (
    <div className="flex justify-center items-center w-full">
      <section className=" text-black flex items-center justify-center w-full">
        <div className="max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Add new contact</h1>
                <p className="mt-4 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                  ipsa culpa autem, at itaque nostrum!
                </p>
              </div>


              {/* Contact form ==========================================================================  */}
              <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                  <label htmlFor="fullName" className="sr-only">Full name</label>

                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email</label>

                  <div className="relative">
                    <input
                      type="email"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">Phone number</label>

                  <div className="relative">
                    <input
                      type="tel"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                  >
                    Add contact
                  </button>
                </div>
              </form>

              {/* ==========================================================================  */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Add