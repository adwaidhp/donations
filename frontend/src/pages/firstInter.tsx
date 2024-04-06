import { useState } from "react";
export const FirstInterPage = () => {

  const [donateItem, setDonateItem] = useState("");
  return (
    <div className="flex flex-col items-center justify-center h-full">
      
      <div className="text-6xl mb-[30px] mt-[275px]">What do you have to <span className="text-green-500">Donate</span> ?</div>
      <div className="flex justify-between align-middle rounded-full border-2 w-1/3">
        <input className=" px-5 py-4 rounded-l-full w-5/6 outline-none"
          placeholder="Search"
          type="text"
          onChange={(e) => {
            setDonateItem(e.target.value);
          }}
        />
        <div className="bg-green-500 flex justify-center items-center rounded-full h-10 mt-2 mr-2">
        <button className="p-3">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>
        </button>
        </div>
      </div>
      <div className="fixed w-full h-full -z-10 mt-[300px]">
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 3456 2234" preserveAspectRatio="xMidYMid meet">
  <g fill="#000000">
    <path d="M1653.5 2219.6 c-1.2 -1.8 -1.4 -3 -0.6 -4.4 0.9 -1.6 34.8 -21.1 51 -29.2 5.4 -2.7 6.8 -3 8.8 -2.1 2 0.9 2.4 1.7 2.1 4.3 -0.3 3.6 2.5 1.8 -34.5 22.1 -11.6 6.5 -22 11.7 -23.2 11.7 -1.1 0 -2.8 -1.1 -3.6 -2.4z"/>
    <path d="M1760.5 2163.6 c-2.7 -4.2 -0.6 -6.2 13.3 -12.8 19.9 -9.4 42.6 -19.6 44.2 -19.8 3.3 -0.5 4.7 0.1 5.6 2.3 1.5 3.3 0.6 5.4 -2.9 7 -1.8 0.8 -11.7 5.4 -22.2 10.2 -10.4 4.8 -22 10.3 -25.7 12.1 -8 4 -10.2 4.2 -12.3 1z"/>
    <path d="M1871.6 2114.8 c-2 -2.8 -2 -4.3 -0.1 -6.1 2.1 -2.2 57.3 -23.7 60.7 -23.7 0.8 0 2.3 0.9 3.4 2.1 3.2 3.5 0.4 6.6 -9.1 10.2 -4.4 1.6 -17.6 6.7 -29.3 11.3 -11.8 4.6 -22 8.4 -22.7 8.4 -0.8 0 -2.1 -1 -2.9 -2.2z"/>
    <path d="M1985.7 2073.5 c-2 -1.9 -2.2 -5.8 -0.4 -7.3 0.6 -0.5 14.6 -5.4 31 -10.7 25.4 -8.3 30.2 -9.6 32.3 -8.7 2.7 1.3 3.4 6.2 1.2 7.9 -1.1 0.9 -54.9 18.7 -60.4 20 -1.2 0.3 -2.8 -0.2 -3.7 -1.2z"/>
    <path d="M2101.1 2037.1 c-1.2 -1.2 -2.1 -2.5 -2.1 -3 0 -2.7 4.3 -5.2 14 -7.9 27.8 -7.9 49.5 -13.3 51.6 -12.8 2.5 0.7 3.9 3.6 2.9 6.6 -0.4 1.3 -2.3 2.4 -5.8 3.4 -14.5 4.1 -54.5 14.9 -56.4 15.3 -1.3 0.3 -2.9 -0.3 -4.2 -1.6z"/>
    <path d="M2218.2 2006.8 c-2.1 -2.1 -1.5 -6.7 1.1 -7.8 4.1 -1.9 61.8 -14.9 63.3 -14.3 2.1 0.8 3.6 4.1 2.9 6.2 -0.7 2.4 -3.7 3.5 -15 6 -4.9 1.1 -17.7 4.1 -28.2 6.6 -21 4.9 -22.3 5.1 -24.1 3.3z"/>
    <path d="M2337 1980.3 c-2.7 -1.9 -2.6 -5.9 0.3 -7.6 3 -2 61.8 -14 64 -13.1 2.1 0.8 3.3 5.2 2 7.3 -0.7 1.1 -6 2.6 -16.4 4.8 -8.5 1.7 -22.7 4.7 -31.6 6.6 -14.4 3 -16.5 3.3 -18.3 2z"/>
    <path d="M2454.5 1954.6 c-2 -3 -0.7 -6.3 2.8 -7.1 9.8 -2.4 57.8 -11.5 60.2 -11.5 3.4 0 5.5 1.5 5.5 4 0 4.3 -1.9 5 -32.5 11 -16.4 3.3 -30.9 6 -32.2 6 -1.3 0 -2.9 -1 -3.8 -2.4z"/>
    <path d="M2573.4 1931.5 c-1.5 -2.3 -1.5 -2.7 -0.1 -4.8 1.3 -2.1 4.1 -2.9 22.4 -6.5 11.4 -2.3 25.3 -5.3 30.8 -6.6 8.9 -2.2 10.2 -2.3 12.3 -1 2.4 1.6 3 5.5 1 7.2 -0.7 0.6 -4.9 1.9 -9.3 3.1 -9 2.3 -51.9 11.1 -54.1 11.1 -0.7 0 -2.1 -1.1 -3 -2.5z"/>
    <path d="M2689.2 1902.8 c-0.7 -0.7 -1.2 -2.5 -1.2 -4 0 -3.3 -1.1 -2.7 23.5 -12.4 9.4 -3.6 20.8 -8.4 25.4 -10.5 9.5 -4.4 13.5 -4.9 15.1 -1.9 1.5 2.8 0.4 5.7 -2.8 7.4 -11.1 5.7 -53.6 22.6 -57 22.6 -1 0 -2.3 -0.5 -3 -1.2z"/>
    <path d="M2796.7 1851.9 c-0.8 -1.1 -1.3 -2.9 -1 -3.9 0.3 -1.1 6.5 -5.4 15 -10.5 8 -4.7 20 -12.2 26.8 -16.5 6.7 -4.4 12.9 -8 13.7 -8 2.5 0 5.1 3.7 4.4 6.3 -0.6 2.5 -13.1 11 -37.3 25.5 -17.2 10.3 -19 10.9 -21.6 7.1z"/>
    <path d="M2896 1787 c-3.9 -3.9 -3.4 -4.6 12.5 -17.2 6.6 -5.2 17.2 -13.8 23.5 -19.1 6.3 -5.3 12.1 -9.7 12.8 -9.7 2.9 0 5.2 2.1 5.2 4.9 0 2.4 -2 4.5 -13.7 14.3 -25.7 21.4 -35.4 28.8 -37.4 28.8 -0.5 0 -1.8 -0.9 -2.9 -2z"/>
    <path d="M2985.6 1709.4 c-0.9 -0.8 -1.6 -2.3 -1.6 -3.2 0 -2.5 44.3 -47.2 46.8 -47.2 2.6 0 5.2 2.6 5.2 5.2 0 3 -43.7 46.8 -46.7 46.8 -1.2 0 -2.9 -0.7 -3.7 -1.6z"/>
    <path d="M3067.5 1623.4 c-0.9 -0.9 -1.5 -2.7 -1.3 -3.9 0.2 -1.3 7.1 -10.3 15.3 -20.1 8.3 -9.8 17.3 -20.5 20.1 -23.9 2.8 -3.3 5.7 -6.1 6.6 -6.3 0.8 -0.2 2.5 0.6 3.8 1.6 1.7 1.4 2.1 2.5 1.7 4.3 -0.6 2.2 -29.4 37.7 -37.5 46.2 -3.9 4 -6.2 4.6 -8.7 2.1z"/>
    <path d="M3141 1529.4 c-1.2 -3 -1.7 -2 7.7 -14.9 4 -5.5 12.1 -16.6 17.8 -24.6 11.7 -16.4 13.4 -17.8 16.9 -14.3 0.9 0.8 1.6 2.5 1.6 3.8 0 1.2 -6 10.5 -13.7 21.3 -21.3 29.5 -22.8 31.3 -26.3 31.3 -2.4 0 -3.3 -0.6 -4 -2.6z"/>
    <path d="M3210.2 1433.8 c-2.3 -2.3 -1.2 -5.5 5.9 -16.4 4 -6 11.4 -17.6 16.7 -25.9 5.2 -8.2 10 -15.3 10.6 -15.7 1.8 -1.2 3.2 -0.9 5.7 1.1 2.1 1.7 2.3 2.3 1.3 4.8 -1.2 3.2 -30.7 49.5 -33 51.8 -1.8 1.8 -5.5 2 -7.2 0.3z"/>
    <path d="M3273.2 1332.8 c-2.3 -2.3 -1.1 -5.5 8.1 -21.3 5.1 -8.8 12 -20.8 15.2 -26.8 4.4 -7.9 6.6 -10.9 8.4 -11.4 3 -0.8 5.5 0.7 5.9 3.7 0.4 2.7 -0.9 5.2 -18 34.8 -11.9 20.3 -13.2 22.2 -15.7 22.2 -1.5 0 -3.2 -0.5 -3.9 -1.2z"/>
    <path d="M3331.8 1229.9 c-1 -0.5 -1.8 -2.1 -1.8 -3.5 0 -3.5 28.1 -57.3 30.3 -58 2.7 -0.9 5.6 0.5 6.3 3 0.6 2.4 -4.4 13.1 -20 42.6 -9 17 -10.4 18.5 -14.8 15.9z"/>
    <path d="M3385 1123 c-1.1 -1.1 -2 -2.4 -2 -2.8 0 -1.1 26 -56.4 27.2 -57.9 1.7 -2.1 5.6 -1.5 7.3 1.1 1.5 2.3 1.2 3.2 -7.9 22.9 -18.9 40.8 -19.5 41.8 -24.6 36.7z"/>
    <path d="M3434.6 1015.4 c-0.9 -0.8 -1.6 -2.3 -1.6 -3.2 0 -1.5 21.6 -53 22.7 -54.2 0.2 -0.3 0.3 5.6 0.1 13 l-0.4 13.5 -6.7 15 c-7.8 17.4 -10.1 20 -14.1 15.9z"/>
    <path d="M0 707.7 l0 -5.5 14.6 -6.2 c8.6 -3.6 15.6 -6 17.2 -5.8 3.5 0.4 5.4 5 3 7.4 -0.8 0.9 -8.5 4.5 -16.9 8.1 -8.5 3.5 -16 6.7 -16.6 7 -1 0.4 -1.3 -1 -1.3 -5z"/>
    <path d="M85.8 676.9 c-2.1 -1.2 -2.4 -6.2 -0.5 -7.7 1.2 -1.1 46.2 -16.4 57.3 -19.6 4.6 -1.3 5.4 -1.3 7.3 0 2.3 1.7 2.8 5.6 0.9 7.2 -1.2 0.9 -61.3 21.2 -62.7 21.2 -0.3 0 -1.4 -0.5 -2.3 -1.1z"/>
    <path d="M202.4 638.9 c-2.8 -3.1 -0.3 -6.9 5.6 -8.5 27 -7.2 56.1 -14.4 58.1 -14.4 3.1 0 4.9 1.7 4.9 4.5 0 3.2 -2.7 5 -9.3 6.4 -3.2 0.7 -16.7 4.2 -30 7.7 -13.2 3.5 -24.8 6.4 -25.7 6.4 -0.9 0 -2.5 -0.9 -3.6 -2.1z"/>
    <path d="M323.2 610.4 c-1.2 -0.8 -2.2 -2.3 -2.2 -3.3 0 -4.4 1.9 -5 32.5 -11.6 31.6 -6.8 34.4 -7.2 36.3 -5.3 1.4 1.4 1.6 6.4 0.2 7.3 -0.5 0.3 -14.6 3.5 -31.2 7.1 -16.7 3.5 -31 6.7 -31.8 6.9 -0.9 0.3 -2.6 -0.2 -3.8 -1.1z"/>
    <path d="M443.2 584.8 c-1.9 -1.9 -1.4 -5.6 1.1 -7.2 2.1 -1.3 58.8 -12.6 63.3 -12.6 2.8 0 4.4 1.9 4.4 5.2 0 2 -0.7 3.1 -2.2 3.8 -2.8 1.2 -59.6 12 -63 12 -1.3 0 -2.9 -0.5 -3.6 -1.2z"/>
    <path d="M564 560.9 c-1.6 -2.9 -0.4 -6.8 2.3 -7.4 10.8 -2.6 63.3 -12.2 64.4 -11.8 3.3 1.3 3.6 7.6 0.5 8.8 -2.4 1 -61.3 12.5 -63.9 12.5 -1.2 0 -2.7 -0.9 -3.3 -2.1z"/>
    <path d="M685 537.1 c-1.5 -2.8 -1.2 -4.6 0.8 -6.3 0.9 -0.8 15.2 -4.3 31.7 -7.8 16.5 -3.5 30.7 -6.5 31.6 -6.7 3.7 -1 6.6 6 3.5 8.6 -1.4 1.2 -59.9 14.1 -64 14.1 -1.5 0 -3 -0.8 -3.6 -1.9z"/>
    <path d="M805.5 509.6 c-2.2 -3.4 -0.6 -6.2 4.3 -7.5 51.4 -13.3 59.7 -15.2 61.9 -14.2 3 1.4 3.2 6.5 0.3 8.1 -2.6 1.4 -59.8 16 -62.7 16 -1.3 0 -2.9 -1.1 -3.8 -2.4z"/>
    <path d="M924.6 477.9 c-1.6 -2.3 -0.9 -5.8 1.5 -7.1 0.8 -0.4 10.4 -3.5 21.4 -6.9 11 -3.4 24.3 -7.7 29.5 -9.6 10.3 -3.7 13.6 -3.7 14.6 0.1 1.2 5 -0.4 5.9 -24.8 13.9 -40 13.1 -39.8 13 -42.2 9.6z"/>
    <path d="M1040.6 436.7 c-2.1 -1.6 -1.9 -6.6 0.4 -7.8 19.9 -10.2 57.1 -27.9 58.8 -27.9 2.8 0 4.7 4.2 3.2 7 -1.1 2 -56 30 -58.9 30 -1 0 -2.5 -0.6 -3.5 -1.3z"/>
    <path d="M1147 377 c-0.6 -1.2 -0.9 -2.9 -0.5 -3.9 0.3 -1 7.2 -6.2 15.3 -11.6 8.1 -5.4 20 -13.6 26.4 -18.1 12.2 -8.8 15.8 -10.1 17.8 -6.4 2.5 4.6 0.5 6.3 -33.4 29.2 -19.8 13.4 -23.4 14.9 -25.6 10.8z"/>
    <path d="M1246.5 305 c-1.2 -1.3 -1.5 -2.7 -1.1 -4.2 0.4 -1.3 6.4 -7.1 13.4 -13 7 -5.9 17.2 -14.8 22.7 -19.9 13.7 -12.4 13.9 -12.5 17 -10.5 4.8 3.1 3.5 5.6 -9.2 17.2 -18.8 17.1 -37.2 32.4 -39.2 32.4 -1 0 -2.6 -0.9 -3.6 -2z"/>
    <path d="M1337.2 222.4 c-1.2 -0.8 -2.2 -2.4 -2.2 -3.5 0 -1.2 5.8 -8.2 14.3 -17.2 7.8 -8.4 17.8 -19.2 22.1 -24 8.2 -9 10.8 -10.4 14 -7.1 3.3 3.2 2.8 3.9 -17.5 25.9 -16.2 17.6 -26.2 27.5 -27.6 27.5 -0.5 0 -1.9 -0.7 -3.1 -1.6z"/>
    <path d="M1417.4 129.5 c-1.6 -2.5 -1.6 -2.7 1.2 -6.5 4 -5.3 34.1 -44 36.5 -46.7 3.4 -4.1 8.9 -2.4 8.9 2.7 -0.1 2.3 -16.6 24.5 -34.1 45.8 -6.7 8 -9.6 9.1 -12.5 4.7z"/>
    <path d="M1491.6 32.5 c-0.9 -0.9 -1.6 -2.4 -1.6 -3.3 0.1 -0.9 4.3 -7.8 9.4 -15.2 l9.3 -13.5 6.2 -0.3 6.3 -0.3 -11.4 16.8 c-9.2 13.5 -12 16.9 -14 17.1 -1.4 0.2 -3.3 -0.4 -4.2 -1.3z"/>
  </g>
  <g fill="#ffffff">
    <path d="M0 1473.6 l0 -760.4 15.8 -6.6 c18 -7.6 18.2 -7.7 19.6 -9.8 1.6 -2.6 -0.8 -6.8 -3.9 -6.8 -1.4 0 -8.5 2.5 -15.8 5.6 -7.3 3.1 -13.8 5.8 -14.5 6.1 -0.9 0.4 -1.2 -70.1 -1.2 -350.6 l0 -351.1 754.5 0 754.5 0 -9.6 14 c-7.7 11.3 -9.5 14.6 -9 16.5 0.6 2.5 4.3 4.2 6.9 3.2 0.7 -0.2 6.3 -7.9 12.5 -17.1 l11.3 -16.6 967.5 0 967.4 0 0 478.3 0 478.2 -11.6 27.3 c-12 28.1 -12.8 31.3 -8.4 32.7 1 0.3 2.8 0.2 3.8 -0.4 1.6 -0.8 9.6 -17.4 15.1 -31.2 0.6 -1.5 1 224.1 1 623.4 l0.1 625.7 -1728 0 -1728 0 0 -760.4z m1680.3 736.7 c37 -20.3 34.2 -18.5 34.5 -22.1 0.3 -2.6 -0.1 -3.4 -2.1 -4.3 -2 -0.9 -3.4 -0.6 -8.8 2.1 -16.2 8.1 -50.1 27.6 -51 29.2 -1.4 2.5 1.3 6.8 4.2 6.8 1.2 0 11.6 -5.2 23.2 -11.7z m92.5 -47.7 c3.7 -1.8 15.3 -7.3 25.7 -12.1 10.5 -4.8 20.4 -9.4 22.2 -10.2 3.5 -1.6 4.4 -3.7 2.9 -7 -0.9 -2.2 -2.3 -2.8 -5.6 -2.3 -1.6 0.2 -24.3 10.4 -44.2 19.8 -13.9 6.6 -16 8.6 -13.3 12.8 2.1 3.2 4.3 3 12.3 -1z m124.4 -54 c11.7 -4.6 24.9 -9.7 29.3 -11.3 9.5 -3.6 12.3 -6.7 9.1 -10.2 -1.1 -1.2 -2.6 -2.1 -3.4 -2.1 -3.4 0 -58.6 21.5 -60.7 23.7 -0.8 0.8 -1.5 2 -1.5 2.6 0 1.9 3 5.7 4.5 5.7 0.7 0 10.9 -3.8 22.7 -8.4z m122.8 -43.7 c15.7 -5 29.1 -9.6 29.8 -10.2 2.2 -1.7 1.5 -6.6 -1.2 -7.9 -2.1 -0.9 -6.9 0.4 -32.3 8.7 -16.4 5.3 -30.4 10.2 -31 10.7 -3.3 2.7 0.1 9.4 4.1 8.5 1.2 -0.3 14.9 -4.7 30.6 -9.8z m112 -33.3 c13.5 -3.7 26.8 -7.4 29.7 -8.2 3.5 -1 5.4 -2.1 5.8 -3.4 1 -3 -0.4 -5.9 -2.9 -6.6 -2.1 -0.5 -23.8 4.9 -51.6 12.8 -9.7 2.7 -14 5.2 -14 7.9 0 2 4.3 5.1 6.3 4.6 1.2 -0.2 13.2 -3.4 26.7 -7.1z m110.3 -28.1 c10.5 -2.5 23.3 -5.5 28.2 -6.6 11.3 -2.5 14.3 -3.6 15 -6 0.7 -2.1 -0.8 -5.4 -2.9 -6.2 -1.5 -0.6 -59.2 12.4 -63.3 14.3 -4.1 1.8 -2.6 9 1.9 9 1 0 10.5 -2 21.1 -4.5z m144.6 -31.8 c10.4 -2.2 15.7 -3.7 16.4 -4.8 1.3 -2.1 0.1 -6.5 -2 -7.3 -2.2 -0.9 -61 11.1 -64 13.1 -2.9 1.7 -3 5.7 -0.3 7.6 1.8 1.3 3.9 1 18.3 -2 8.9 -1.9 23.1 -4.9 31.6 -6.6z m103.6 -20.7 c30.6 -6 32.5 -6.7 32.5 -11 0 -2.5 -2.1 -4 -5.5 -4 -2.4 0 -50.4 9.1 -60.2 11.5 -1.2 0.3 -2.7 1.4 -3.3 2.6 -1.5 2.7 1.1 6.9 4.3 6.9 1.3 0 15.8 -2.7 32.2 -6z m109.7 -21.5 c25.7 -5.3 37.8 -8.2 39.6 -9.7 2 -1.7 1.4 -5.6 -1 -7.2 -2.1 -1.3 -3.4 -1.2 -12.3 1 -5.5 1.3 -19.4 4.3 -30.8 6.6 -18.3 3.6 -21.1 4.4 -22.4 6.5 -1.4 2.1 -1.4 2.5 0.1 4.8 0.9 1.4 2.3 2.5 3 2.5 0.8 0 11.5 -2 23.8 -4.5z m105.6 -29.9 c11.5 -4.3 38.1 -15.5 43.4 -18.2 3.2 -1.7 4.3 -4.6 2.8 -7.4 -1.6 -3 -5.6 -2.5 -15.1 1.9 -4.6 2.1 -16 6.9 -25.4 10.5 -24.6 9.7 -23.5 9.1 -23.5 12.4 0 3.2 1.6 5.2 4.2 5.2 1.1 0 7.1 -2 13.6 -4.4z m99.3 -47.2 c5.1 -2.6 22.7 -13.3 36.7 -22.2 14.2 -9 16.1 -11.4 12.7 -15.2 -1 -1.1 -2.5 -2 -3.3 -2 -0.8 0 -7 3.6 -13.7 8 -6.8 4.3 -18.8 11.8 -26.8 16.5 -8.5 5.1 -14.7 9.4 -15 10.5 -0.6 2.5 1.9 6 4.4 6 1.1 0 3.4 -0.7 5 -1.6z m98.5 -66 c4.6 -3.2 13.9 -10.6 32.7 -26.2 11.7 -9.8 13.7 -11.9 13.7 -14.3 0 -2.8 -2.3 -4.9 -5.2 -4.9 -0.7 0 -6.5 4.4 -12.8 9.7 -6.3 5.3 -16.9 13.9 -23.5 19.1 -15.9 12.6 -16.4 13.3 -12.5 17.2 2.6 2.6 2.9 2.5 7.6 -0.6z m110.2 -97.8 c14.6 -14.7 22.2 -23 22.2 -24.4 0 -2.6 -2.6 -5.2 -5.2 -5.2 -2.5 0 -46.8 44.7 -46.8 47.2 0 2.3 2.7 4.8 5.3 4.8 1.5 0 9 -6.8 24.5 -22.4z m62.4 -67.3 c8.1 -8.5 36.9 -44 37.5 -46.2 0.4 -1.8 0 -2.9 -1.7 -4.3 -1.3 -1 -3 -1.8 -3.8 -1.6 -0.9 0.2 -3.8 3 -6.6 6.3 -2.8 3.4 -11.8 14.1 -20.1 23.9 -8.2 9.8 -15.1 18.8 -15.3 20.1 -0.4 2.6 2.1 5.5 4.7 5.5 0.9 0 3.3 -1.7 5.3 -3.7z m76.6 -95.4 c12.3 -15.8 32.2 -44.6 32.2 -46.5 0 -1.3 -0.7 -3 -1.6 -3.8 -3.5 -3.5 -5.2 -2.1 -16.9 14.3 -5.7 8 -13.8 19.1 -17.8 24.6 -9.4 12.9 -8.9 11.9 -7.7 14.9 0.7 2 1.6 2.6 4 2.6 2.5 0 3.8 -1 7.8 -6.1z m64.6 -92.4 c2.3 -2.3 31.8 -48.6 33 -51.8 1 -2.5 0.8 -3.1 -1.3 -4.8 -2.5 -2 -3.9 -2.3 -5.7 -1.1 -0.6 0.4 -5.4 7.5 -10.6 15.7 -5.3 8.3 -12.7 19.9 -16.7 25.9 -7.1 10.9 -8.2 14.1 -5.9 16.4 1.7 1.7 5.4 1.5 7.2 -0.3z m75.4 -121.7 c17.1 -29.6 18.4 -32.1 18 -34.8 -0.4 -3 -2.9 -4.5 -5.9 -3.7 -1.8 0.5 -4 3.5 -8.4 11.4 -3.2 6 -10.1 18 -15.2 26.8 -5.1 8.8 -9.3 16.9 -9.3 18 0 2.9 1.9 4.5 5.1 4.5 2.5 0 3.8 -1.9 15.7 -22.2z m44.5 -82 c1.6 -1.3 11.6 -19.8 23.4 -43.2 4.5 -9 6.3 -13.6 5.9 -15.2 -0.7 -2.5 -3.6 -3.9 -6.3 -3 -2.2 0.7 -30.3 54.5 -30.3 58 0 3.8 4.1 5.7 7.3 3.4z m53.3 -105.6 c1.5 -0.9 7.1 -12.1 19 -37.9 9.1 -19.7 9.4 -20.6 7.9 -22.9 -1.7 -2.6 -5.6 -3.2 -7.3 -1.1 -1.2 1.5 -27.2 56.8 -27.2 57.9 0 1.3 3.9 4.8 5.3 4.8 0.6 0 1.7 -0.4 2.3 -0.8z m-3271.5 -456.3 c16.7 -5.6 31 -10.6 31.7 -11.1 1.9 -1.6 1.4 -5.5 -0.9 -7.2 -1.9 -1.3 -2.7 -1.3 -7.3 0 -11.1 3.2 -56.1 18.5 -57.3 19.6 -2.8 2.3 -0.8 8.6 2.8 8.8 0.3 0 14.2 -4.5 31 -10.1z m112.6 -33.3 c13.3 -3.5 26.8 -7 30 -7.7 6.6 -1.4 9.3 -3.2 9.3 -6.4 0 -2.8 -1.8 -4.5 -4.9 -4.5 -2 0 -31.1 7.2 -58.1 14.4 -5.9 1.6 -8.4 5.4 -5.6 8.5 1.1 1.2 2.7 2.1 3.6 2.1 0.9 0 12.5 -2.9 25.7 -6.4z m127.1 -30 c16.6 -3.6 30.7 -6.8 31.2 -7.1 1.4 -0.9 1.2 -5.9 -0.2 -7.3 -1.9 -1.9 -4.7 -1.5 -36.3 5.3 -30.6 6.6 -32.5 7.2 -32.5 11.6 0 2.2 3.9 5.1 6 4.4 0.8 -0.2 15.1 -3.4 31.8 -6.9z m119.6 -24.1 c16 -3.1 30.1 -6 31.4 -6.5 1.5 -0.7 2.2 -1.8 2.2 -3.8 0 -3.3 -1.6 -5.2 -4.4 -5.2 -4.5 0 -61.2 11.3 -63.3 12.6 -4.2 2.6 -2.4 8.4 2.5 8.4 1.3 0 15.5 -2.5 31.6 -5.5z m121.1 -23.4 c16.5 -3.2 30.7 -6.2 31.7 -6.6 3.1 -1.2 2.8 -7.5 -0.5 -8.8 -1.1 -0.4 -53.6 9.2 -64.4 11.8 -4.6 1.1 -3.7 9.5 1 9.5 1.2 0 15.7 -2.7 32.2 -5.9z m121.7 -24.6 c16.5 -3.6 30.7 -7 31.4 -7.6 3.1 -2.6 0.2 -9.6 -3.5 -8.6 -0.9 0.2 -15.1 3.2 -31.6 6.7 -16.5 3.5 -30.8 7 -31.7 7.8 -3.3 2.8 -1.4 8.2 2.8 8.2 1.4 0 16.1 -2.9 32.6 -6.5z m119.6 -28 c16 -4.1 30.1 -7.9 31.2 -8.5 2.9 -1.6 2.7 -6.7 -0.3 -8.1 -2.2 -1 -10.5 0.9 -61.9 14.2 -4.9 1.3 -6.5 4.1 -4.3 7.5 0.9 1.3 2.5 2.4 3.8 2.4 1.2 0 15.4 -3.4 31.5 -7.5z m95.8 -26.5 c3.8 -1.2 17.4 -5.5 30.2 -9.7 24.4 -8 26 -8.9 24.8 -13.9 -1 -3.8 -4.3 -3.8 -14.6 -0.1 -5.2 1.9 -18.5 6.2 -29.5 9.6 -11 3.4 -20.6 6.5 -21.4 6.9 -2.4 1.3 -3.1 4.8 -1.5 7.1 1.9 2.6 3.4 2.6 12 0.1z m137.3 -54 c15.7 -7.9 28.5 -14.9 29.1 -16 1.5 -2.8 -0.4 -7 -3.2 -7 -1.7 0 -38.9 17.7 -58.8 27.9 -2.3 1.2 -2.5 6.2 -0.4 7.8 1 0.7 2.5 1.3 3.5 1.3 0.9 0 14.3 -6.3 29.8 -14z m98.7 -57.8 c33.9 -22.9 35.9 -24.6 33.4 -29.2 -2 -3.7 -5.6 -2.4 -17.8 6.4 -6.4 4.5 -18.3 12.7 -26.4 18.1 -8.1 5.4 -15 10.6 -15.3 11.6 -0.4 1 -0.1 2.7 0.5 3.9 2.2 4.1 5.8 2.6 25.6 -10.8z m92.2 -70.1 c7 -5.9 18.1 -15.6 24.5 -21.5 12.7 -11.6 14 -14.1 9.2 -17.2 -3.1 -2 -3.3 -1.9 -17 10.5 -5.5 5.1 -15.7 14 -22.7 19.9 -7 5.9 -13 11.7 -13.4 13 -0.8 2.7 1.9 6.2 4.7 6.2 1 0 7.6 -4.9 14.7 -10.9z m81.9 -77.3 c6.7 -6.4 36.2 -38.3 38.6 -41.8 2.1 -3 2.1 -4.4 0.1 -6.4 -3.2 -3.3 -5.8 -1.9 -14 7.1 -4.3 4.8 -14.3 15.6 -22.1 24 -8.5 9 -14.3 16 -14.3 17.2 0 1.8 3.4 5.1 5.3 5.1 0.4 0 3.3 -2.4 6.4 -5.2z m83.2 -94 c17.5 -21.3 34 -43.5 34.1 -45.8 0 -5.1 -5.5 -6.8 -8.9 -2.7 -2.4 2.7 -32.5 41.4 -36.5 46.7 -2.8 3.8 -2.8 4 -1.2 6.5 2.9 4.4 5.8 3.3 12.5 -4.7z"/>
  </g>
  </svg>
    </div>
    </div>
  );
}