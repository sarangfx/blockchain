import React from "react";

function CorrelationMatrix() {
  return (
    <div className="w-3/4 h-80 bg-[#1D2031] rounded-md p-3 border border-x-1 border-[#2b3152]  hover:bg-[#1D2031]/5 cursor-pointer ">
      Correlation Matrix
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-right text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3"></th>
              <th scope="col" class="px-6 py-3">
                DAX
              </th>
              <th scope="col" class="px-6 py-3">
                Nasdaq 100
              </th>
              <th scope="col" class="px-6 py-3">
                S&P 500
              </th>
              <th scope="col" class="px-6 py-3">
                Russell 2000
              </th>
              <th scope="col" class="px-6 py-3">
                Dow Jones Industrial Average
              </th>
              <th scope="col" class="px-6 py-3">
                US Dollar Index
              </th>
              <th scope="col" class="px-6 py-3">
                VIX Index
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-right bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span>
                  <img src="./src/assets/bitcoin.png" alt="Bitcoin"></img>
                </span>
              </th>
              <td class="px-6 py-4">0.37</td>
              <td class="px-6 py-4">0</td>
              <td class="px-6 py-4">0.18</td>
              <td class="px-6 py-4">0.34</td>
              <td class="px-6 py-4">0.17</td>
              <td class="px-6 py-4">-0.02</td>
              <td class="px-6 py-4 ">-0.11</td>
            </tr>
            <tr class="text-right bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span>
                  <img src="src/assets/ethereum.png" alt="Ethereum"></img>
                </span>
              </th>
              <td class="px-6 py-4">-0.48</td>
              <td class="px-6 py-4">-0.41</td>
              <td class="px-6 py-4">-0.55</td>
              <td class="px-6 py-4">-0.12</td>
              <td class="px-6 py-4">-0.57</td>
              <td class="px-6 py-4">-0.76</td>
              <td class="px-6 py-4 ">0.64</td>
            </tr>
            <tr class="text-right bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <span>
                  <img src="src/assets/solana.png" alt="Solana"></img>
                </span>
              </th>
              <td class="px-6 py-4 ">0.18</td>
              <td class="px-6 py-4">-0.14</td>
              <td class="px-6 py-4">-0.12</td>
              <td class="px-6 py-4">0.41</td>
              <td class="px-6 py-4">0.14</td>
              <td class="px-6 py-4">-0.33</td>
              <td class="px-6 py-4 ">0.45</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CorrelationMatrix;
