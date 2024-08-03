import React from 'react';

const Footer = () => {
    const FaGithub=()=>{

    }
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer items-end justify-center bg-transparent w-full font-semibold text-xl flex flex-grow  py-4">
      <div className="flex w-fit items-center justify-center gap-4">
        <p className=" text-slate-50 
        ">
          Copyright © {currentYear} assinscreedFC
        </p>
        <a
          href="https://github.com/assinscreedFC"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600"
        >
          <img src="../../github.svg" alt="github"  className=' w-7 text-3xl transition-transform duration-300 transform hover:rotate-360 hover:scale-125 hover:animate-rotate-scale-up hover:rotate-[720deg]'/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
