import './App.css';
import React , { useEffect, useRef, useState } from 'react';

function App() {

  const[days, setDays] = useState ('00');
  const[hours, setHours] = useState ('00');
  const[minutes, setMinutes] = useState ('00');
  const[seconds, setSeconds] = useState ('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('July 15, 2021 00:00:00').getTime();

    interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeGap = countdownDate - currentDate;

      const day = Math.floor(timeGap / (1000 * 60 * 60 *24));
      const hour = Math.floor((timeGap % (1000 * 60 * 60 *24) / (1000 * 60 * 60)));
      const minute = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((timeGap % (1000 * 60)) / 1000);

      if (timeGap < 0) {
        clearInterval(interval.current);
      } else {
        setDays(day);
        setHours(hour);
        setMinutes(minute);
        setSeconds(second);
      }
    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  })

  return(
    <section className="w-full h-screen bg-dark-blue font-body">
      <div className="head h-4/5 w-full flex flex-col justify-center items-center bg-dark-blue bg-head bg-cover gap-10 md:gap-14 lg:gap-18">
        <div className="w-full flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-medium text-white  tracking-widest">
          <h2 className="text-center w-72 md:w-4/6 lg:w-1/2 "> WE'RE LAUNCHING SOON </h2>
        </div>
        <div className="w-full flex items-center text-black px-4 py-4 justify-center gap-4 md:gap-8 lg:gap-12">
          <div className="days w-20 md:w-28 lg:w-36  h-24 md:h-32 lg:h-40 flex flex-col items-center gap-x-4">
            <div className="w-full h-5/6 relative flex flex-col justify-between rounded-lg">
              <span className="absolute flex text-5xl md:text-7xl lg:text-8xl font-bold align-center justify-center self-center my-1.5 md:my-3 lg:my-4 text-soft-red z-10">{(days).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</span> 
              <span className="bg-light-blue h-1/2 w-full rounded-lg"></span>
              <span className="bg-gray-blue h-1/2 w-full rounded-lg"></span>
            </div>
            <span class="text-gray-400 text-xs p-2 font-bold tracking-widest text-gray-blue">DAYS</span>
          </div>
          <div className="hours w-20 md:w-28 lg:w-36  h-24 md:h-32 lg:h-40 flex flex-col items-center gap-x-4">
            <div className="w-full h-5/6 relative flex flex-col justify-between rounded-md">
              <span className="absolute flex text-5xl md:text-7xl lg:text-8xl font-bold align-center justify-center self-center text-soft-red my-1.5 md:my-3 lg:my-4 z-10">{(hours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</span> 
              <span className="bg-light-blue h-1/2 w-full rounded-lg"></span>
              <span className="bg-gray-blue h-1/2 w-full rounded-lg"></span>
            </div>
            <span class="text-gray-400 text-xs p-2 font-bold tracking-widest uppercase text-gray-blue">hours</span>
          </div>
          <div className="minutes w-20 md:w-28 lg:w-36  h-24 md:h-32 lg:h-40 flex flex-col items-center gap-x-4">
            <div className="w-full h-5/6 relative flex flex-col justify-between rounded-md">
              <span className="absolute flex text-5xl md:text-7xl lg:text-8xl font-bold align-center my-1.5 md:my-3 lg:my-4 justify-center self-center text-soft-red z-10">{(minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</span> 
              <span className="bg-light-blue h-1/2 w-full rounded-lg"></span>
              <span className="bg-gray-blue h-1/2 w-full rounded-lg"></span>
            </div>
            <span class="text-gray-400 text-xs p-2 font-bold tracking-widest uppercase text-gray-blue">minutes</span>
          </div>
          <div className="seconds w-20 md:w-28 lg:w-36  h-24 md:h-32 lg:h-40 flex flex-col items-center gap-x-4">
            <div className="w-full h-5/6 relative flex flex-col justify-between rounded-md">
              <span className="absolute flex text-5xl md:text-7xl lg:text-8xl my-1.5 md:my-3 lg:my-4 font-bold align-center justify-center self-center text-soft-red z-10">{(seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</span> 
              <span className="bg-light-blue h-1/2 w-full rounded-lg"></span>
              <span className="bg-gray-blue h-1/2 w-full rounded-lg"></span>
            </div>
            <span class="text-gray-400 text-xs p-2 font-bold tracking-widest uppercase text-gray-blue">seconds</span>
          </div>
        </div>
      </div>
      <div className="footer h-1/4 w-full bg-cover bg-dark-blue bg-footer flex flex-col justify-end gap-6">
        <h4 className="font-semibold place-self-center text-soft-red">my other challenges / works</h4>
        <div className="icons flex justify-center items-end gap-4 md:gap-6 lg:gap-8 animate-pulse">
          <span className="text-med-dark-blue border rounded-full py-2 px-4 bg-soft-red cursor-pointer hover:border-soft-red hover:bg-white transition ease-in-out duration-700"> 
            <a href="https://mr-github-kumar.github.io/Track-COVID-19/" target="_blank" rel="noreferrer" className="font-semibold">Track COVID-19</a>
          </span>
          <span className="text-med-dark-blue border rounded-full py-2 px-4 bg-soft-red cursor-pointer hover:border-soft-red hover:bg-white transition ease-in-out duration-700"> 
            <a href="https://mr-github-kumar.github.io/country-info/" target="_blank" rel="noreferrer" className="font-semibold">REST countries API</a>
          </span>
        </div>
        <div className="bg-transparent p-2 text-white font-3xs text-center">
          <span className="font-light px-2">Challenge by</span> 
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
            <span className="italic text-soft-red hover:text-white transition ease-in-out duration-300">Frontend Mentor</span>
            </a>
            <span className="font-light px-2">. Coded by</span> 
            <a href="https://github.com/mr-github-kumar">
            <span className="italic text-soft-red hover:text-white transition ease-in-out duration-300 font-thin">S Kumar</span></a>.
        </div>
      </div>
    </section>
  );
}

export default App;
