import React from "react";

const PriceGrid = ({ inr, usd, heading, sub1, sub2 }) => {
  return (
    <div className="mb-10">
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
      <div className="relative mb-6">
        <div
          className="bg-indigo-600 h-12 flex items-center justify-center"
          style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-black text-lg text-2xl font-semibold">
            {heading}
          </h2>
        </div>
      </div>
      <div className="overflow-x-auto align-baseline">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right font-bold text-2xl capitalize ">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Date
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Availability
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {sub1}
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {sub2}
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y text-center divide-gray-200">
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                01-11-2024
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                05 seats left
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {inr}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {usd}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="/enroll"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Enroll Now!
                </a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                01-12-2024
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                05 seats left
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {inr}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {usd}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="/enroll"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Enroll Now!
                </a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                01-01-2025
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                05 seats left
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {inr}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {usd}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="/enroll"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Enroll Now!
                </a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                01-02-2025
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                05 seats left
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {inr}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {usd}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="/enroll"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Enroll Now!
                </a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                01-03-2025
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                05 seats left
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {inr}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {usd}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="/enroll"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Enroll Now!
                </a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                01-04-2025
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                05 seats left
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {inr}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {usd}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="/enroll"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Enroll Now!
                </a>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                01-05-2025
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                05 seats left
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {inr}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {usd}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <a
                  href="/enroll"
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Enroll Now!
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceGrid;

const AddFile = () => {
  return (
    <>
      <div>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
          <div>
            <h1> hello </h1>

            <p>ullamco ut ea consectetur et est culpa et culpa duis.</p>
          </div>
        </p>
      </div>
    </>
  );
};
