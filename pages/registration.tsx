import { useRouter } from "next/router";
import { useState } from "react";

export default function Registartion() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleClick = (path: string) => {
    router.push(path);
  };

  const handleRegistration = async () => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        console.log("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <>
      <div className="w-screen h-screen relative mx-80 bg-white">
        <div className="w-[236px] h-[43px] left-[856px] top-[27px] absolute">
          <div
            className="left-0 top-0 absolute text-black text-[20px] font-medium hover:underline cursor-pointer"
            onClick={() => handleClick("/projects")}
          >
            Projects
          </div>
          <div
            className="w-[106px] h-[43px] left-[26px] top-0 absolute text-right text-black text-[20px] font-medium hover:underline cursor-pointer"
            onClick={() => handleClick("/blog")}
          >
            Blog
          </div>
          <div
            className="w-[71px] h-[43px] left-[165px] top-0 absolute text-right text-black text-[20px] font-medium hover:underline cursor-pointer"
            onClick={() => handleClick("/conatct")}
          >
            Contact
          </div>
        </div>
        <div
          className="left-[110px] top-[30px] absolute text-black text-[20px] font-medium hover:underline cursor-pointer"
          onClick={() => handleClick("/")}
        >
          Home
        </div>
        <div className="w-[560px] h-[650px] left-[296px] top-[267px] absolute bg-slate-100 rounded-2xl" />
        <div className="left-[476px] top-[299px] absolute text-black text-[36px] font-medium">Registration</div>
        <div className="left-[345px] top-[484px] absolute text-black text-[20px] font-medium">Username</div>
        <div className="left-[345px] top-[363px] absolute text-black text-[20px] font-medium">Email</div>
        <div className="left-[342px] top-[615px] absolute text-black text-[20px] font-medium">Password</div>
        <input
          className="absolute bg-white border border-zinc-300 w-[462px] h-10 left-[345px] top-[418px]"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="absolute bg-white border border-zinc-300 w-[462px] h-10 left-[345px] top-[549px]"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          className="absolute bg-white border border-zinc-300 w-[462px] h-10 left-[345px] top-[680px]"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div
          className="w-[134px] h-[46px] left-[506px] top-[759px] absolute bg-red-400 rounded-[30px]"

        />
        <div className="left-[539px] top-[767px] absolute text-white text-[20px] font-medium hover:underline cursor-pointer" onClick={handleRegistration}>Register</div>
        <div className="left-[364px] top-[829px] absolute text-black text-[20px] font-thin">
          If you already have an account, please{" "}
          <a
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => handleClick("/login")}
          >
            login here
          </a>
          .
        </div>
        <div className="w-[305px] h-[108px] left-[421px] top-[979px] absolute">
          <div className="w-[50px] h-[46px] left-0 top-[4px] absolute justify-center items-center inline-flex">
            <div className="w-[50px] h-[46px] relative"></div>
          </div>
          <div className="left-[26px] top-[84px] absolute text-black text-[16px] font-normal">
            Copyright ©2023 All rights reserved
          </div>
          <img className="w-[119px] h-[53px] left-[94px] top-0 absolute" src="/insta.svg" />
        </div>
      </div>
    </>
  );

}