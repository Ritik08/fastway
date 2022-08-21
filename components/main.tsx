import React from "react";
import { tableData } from "../assets/constant";
import Image from "next/image";
import { useTheme } from "next-themes";

const Main = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="flex flex-col p-5 bg-slate-200 container my-5 rounded-3xl dark:bg-slate-800">
        <nav className="h-16">
          <ul className="flex list-none justify-end">
            <li className="m-1">
              <button
                aria-label="Toggle Dark Mode"
                type="button"
                className="border-2 rounded-lg px-2 md:px-3 text-xs md:text-base py-1 border-slate-700"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                Dark Mode
              </button>
            </li>
            <li className="m-1">
              <input
                className="px-1 w-32 md:w-64 md:px-3 py-1 border rounded-xl"
                placeholder="search.."
              />
            </li>
            <li className="m-1">Notification</li>
            <li className="m-1">Profile</li>
          </ul>
        </nav>
        <div className="text-lg">My Team</div>
        <div className="md:container flex flex-col md:flex-row">
          <div className="w-100 md:w-1/2 border-2 rounded-xl flex flex-col justify-between m-5 p-5 bg-white dark:bg-gray-800">
            <div className="flex justify-between">
              <div className="w-1/2 border-2 m-2 p-5">
                {" "}
                Total Income
                <p className="font-bold">612.785</p>
              </div>
              <div className="w-1/2 border-2 m-2 p-5">
                {" "}
                Residual Income
                <p className="font-bold">10.785</p>
              </div>
            </div>
            <button className="w-100 m-2 p-1 border-1 bg-blue-600 hover:bg-blue-800 text-white">
              Recieve
            </button>
          </div>
          <div>
            <div className="flex flex-col grow border-2 m-5 p-5 rounded-xl bg-white dark:bg-gray-800">
              <div>Referal System</div>
              <p>Earn 10% for direct referalls and 5% for Indirect Referalls</p>
              <Image
                src="/images/referral.svg"
                alt="referal"
                width={"80%"}
                height="200px"
              />
            </div>
          </div>
        </div>
        <table className="table-fixed w-100 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Id Number
              </th>
              <th scope="col" className="py-3 px-6">
                Nickname
              </th>
              <th scope="col" className="py-3 px-6">
                Registration Time
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <td className="py-4 px-6">{data.id}</td>
                  <td className="py-4 px-6">{data.name}</td>
                  <td className="py-4 px-6">
                    {data.date} &nbsp; {data.time}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Main;
