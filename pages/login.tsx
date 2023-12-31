import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();


    const handleClick = (path: string) => {
        router.push(path);
    };

    return (
        <>
            <div className="w-screen h-screen relative mx-80 bg-white">
                <div className="w-[236px] h-[43px] left-[856px] top-[27px] absolute">
                    <div className="left-0 top-0 absolute text-black text-[20px] font-medium hover:underline cursor-pointer" onClick={() => handleClick("/projects")}>Projects</div>
                    <div className="w-[106px] h-[43px] left-[26px] top-0 absolute text-right text-black text-[20px] font-medium hover:underline cursor-pointer" onClick={() => handleClick("/blog")} >Blog</div>
                    <div className="w-[71px] h-[43px] left-[165px] top-0 absolute text-right text-black text-[20px] font-medium hover:underline cursor-pointer">Contact</div>
                </div>
                <div className="left-[110px] top-[30px] absolute text-black text-[20px] font-medium hover:underline cursor-pointer" onClick={() => handleClick("/")}>Home</div>
                <div className="w-[560px] h-[650px] left-[296px] top-[267px] absolute bg-slate-100 rounded-2xl" />
                <div className="left-[531px] top-[302px] absolute text-black text-[36px] font-medium">Login</div>
                <div className="left-[342px] top-[402px] absolute text-black text-[20px] font-medium">Username</div>
                <div className="left-[342px] top-[541px] absolute text-black text-[20px] font-medium">Password</div>
                <input className="absolute bg-white border border-zinc-300 w-[462px] h-10 left-[342px] top-[466px]" type="text" placeholder="Username"></input>
                <input className="absolute bg-white border border-zinc-300 w-[462px] h-10 left-[342px] top-[605px]" type="password" placeholder="Password"></input>
                <div className="w-[134px] h-[46px] left-[513px] top-[759px] absolute bg-red-400 rounded-[30px]" />
                <div className="left-[551px] top-[765px] absolute text-white text-[20px] font-medium">Login</div>
                <div className="left-[364px] top-[829px] absolute text-black text-[20px] font-thin">
                    If you don’t have an account, please{" "}
                    <a
                        className="text-blue-500 hover:underline cursor-pointer"
                        onClick={() => handleClick("/registration")}
                    >
                        register here
                    </a>
                    .
                </div>
                <div className="w-[305px] h-[108px] left-[421px] top-[979px] absolute">
                    <div className="w-[50px] h-[46px] left-0 top-[4px] absolute justify-center items-center inline-flex">
                        <div className="w-[50px] h-[46px] relative">
                        </div>
                    </div>
                    <div className="left-[26px] top-[84px] absolute text-black text-[16px] font-normal">Copyright ©2023 All rights reserved</div>
                    <img className="w-[119px] h-[53px] left-[94px] top-0 absolute" src="/insta.svg" />
                </div>
            </div>
        </>
    )
}