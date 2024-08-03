import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logein(){
    const [user,setuser]=useState('');
    const [password,setpassword]=useState('');
    const navigate = useNavigate();

    const sub = async (e)=>{
        e.preventDefault();
        try{
            const bb= await axios.post("/api/log-in" ,{username:user,password: password}, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(bb.request.responseURL)
            window.location.href=bb.request.responseURL
            
           
            
            console.log(bb);
            }catch (e){
                console.log(e);
            }
    }

    return(
        <>
        <div className="flex justify-center items-center w-full h-5/6">
            <form action="" method="post" onSubmit={sub} className="bg-white/5 md:w-fit
            w-11/12  flex items-center flex-col md:gap-8 p-8 rounded-md border-4 border-blue-900 gap-4 ">
                <legend className="text-white text-lg font-semibold">loge-in</legend>
            <div className="flex flex-col md:flex-row gap-2">
                <label htmlFor="title" className="text-lg font-medium text-white">userName: </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border-[3px] border-[#4070f4] focus:shadow-md py-[2px]"
                    value={user}
                    onChange={(e) => setuser(e.target.value)}
                />
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                <label htmlFor="title" className="text-lg font-medium text-white">password: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border-[3px] border-[#4070f4] focus:shadow-md py-[2px]"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />
                </div>
                <button type="submit" className=" px-4 py-1 rounded-md border-green-500 border-[3px] font-semibold text-lg bg-slate-800 text-slate-50 ">Send</button>
            </form></div>
        </>
    )

}

export default Logein