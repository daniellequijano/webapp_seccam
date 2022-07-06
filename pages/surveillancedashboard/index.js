import Navbar from "../../components/Container/navbar"
import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import ModalImage from "react-modal-image"
import Moment from "react-moment"

import { CheckIcon } from "@heroicons/react/outline"

const list = [
  {
    email: "dan@gmail.com",
    pkey: "1",
    datetime: "July 6, 2022",
    keyid: "123456",
    rfuid: "12345",
  },
]
export default function dashboard(props) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              Captured Images
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the captured images from the RFID including their id
              and image.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            {/*   <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 sm:w-auto"
            >
              Add
            </button> */}
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Key ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Date & Time
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        RFU ID
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {list.map((capture) => (
                      <tr key={capture.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0"></div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {capture.pkey}
                              </div>
                              <div className="text-gray-500">
                                {capture.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {" "}
                            <Moment local>{capture.datetime}</Moment>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            Active
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <meta
                            http-equiv="Content-Security-Policy"
                            content="upgrade-insecure-requests"
                          />
                          <div className=" items-center grid grid-cols-1">
                            <ModalImage
                              className="h-10 w-10 rounded-full"
                              small={`https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`}
                              large={`https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`}
                              alt={capture.keyid}
                              showRotate={true}
                            ></ModalImage>
                            <div className="text-yellow-600 hover:text-yellow-900 ml-1 ">
                              View
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {capture.rfuid}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <Moment fromNow>{capture.datetime}</Moment>
                        </td>

                        {/*      <td className="relative  whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="#"
                            className="text-yellow-600 hover:text-yellow-900 px-2"
                          >
                            Delete{" "}
                            <span className="sr-only">, {capture.name}</span>
                          </a>
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
