import { NavLink } from "react-router-dom"

function Choice(){

    return(
        <>
        
        <div className="bg-white/5 md:w-fit
            w-11/12  flex items-center  md:gap-8 p-8 rounded-md border-4 border-blue-900 gap-4 ">
                <NavLink to="./signe-in"  className=" px-4 py-1 rounded-md border-green-500 border-[3px] font-semibold text-lg bg-slate-800 text-slate-50 ">sign-up</NavLink>
                <NavLink to="./login"  className=" px-4 py-1 rounded-md border-green-500 border-[3px] font-semibold text-lg bg-slate-800 text-slate-50 ">loge-in</NavLink>
                
               
            </div>
        </>
    )
}

export default Choice