import { useRouter } from "next/router";

export default function Blog(){

    const router = useRouter();


    const handleClick = (path: string) => {
      router.push(path);
    };

return (
    <>
<div className="w-screen h-screen relative mx-60 bg-white">
<div className="left-[152px] top-[27px] absolute text-black text-[20px] font-medium hover:underline cursor-pointer" onClick={()=>handleClick("/")}>Home</div>
  <div className="w-[236px] h-[43px] left-[856px] top-[27px] absolute">

    <div className="left-0 top-0 absolute text-black text-[20px] font-medium hover:underline cursor-pointer" onClick={()=>handleClick("/projects")}>Projects</div>
    <div className="w-[106px] h-[43px] left-[30px] top-0 absolute text-right text-red-500 text-[20px] font-medium hover:underline cursor-pointer" onClick={()=>handleClick("/blog")}>Blog</div>
    <div className="w-[71px] h-[43px] left-[165px] top-0 absolute text-right text-black text-[20px] font-medium hover:underline cursor-pointer" onClick={()=>handleClick("/contact")}>Contact</div>
  </div>
  <div className="w-[156px] h-[54px] left-[235px] top-[160px] absolute text-black text-[44px] font-bold">Blog</div>
  <div className="w-[305px] h-[108px] left-[424px] top-[1123px] absolute">
    <div className="w-[50px] h-[46px] left-0 top-[4px] absolute justify-center items-center inline-flex">
      <div className="w-[50px] h-[46px] relative">
      </div>
    </div>
    <div className="w-[305px] h-[108px] relative">
<div className="w-[50px] h-[46px] left-0 top-[4px] absolute">
<div className="w-[50px] h-[46px] left-0 top-0 absolute">
</div>
</div>
<div className="left-[26px] top-[84px] absolute text-black text-[16px] font-normal">Copyright ©2023 All rights reserved</div>
<img className="w-[119px] h-[53px] left-[94px] top-0 absolute" src="/insta.svg" />
</div>
  </div>
  <div className="w-[682px] h-[165.27px] left-[235px] top-[269px] absolute">
    <div className="w-[682px] h-[33px] left-0 top-0 absolute text-black text-[30px] font-medium">Blog post 1</div>
    <div className="w-[157px] h-[29px] left-0 top-[59px] absolute text-black text-[20px] font-normal">2023.07.03</div>
    <div className="w-[682px] h-[43px] left-0 top-[89px] absolute text-black text-[16px] font-normal">Lorem ipsum</div>
    <div className="w-[681px] h-[0px] left-[1px] top-[161px] absolute border border-neutral-200"></div>
  </div>
  <div className="w-[682px] h-[165.27px] left-[235px] top-[462px] absolute">
    <div className="w-[682px] h-[33px] left-0 top-0 absolute text-black text-[30px] font-medium">Blog post 2</div>
    <div className="w-[157px] h-[29px] left-0 top-[59px] absolute text-black text-[20px] font-normal">2023.07.03</div>
    <div className="w-[682px] h-[43px] left-0 top-[89px] absolute text-black text-[16px] font-normal">Lorem ipsum</div>
    <div className="w-[681px] h-[0px] left-[1px] top-[161px] absolute border border-neutral-200"></div>
  </div>
  <div className="w-[682px] h-[165.27px] left-[235px] top-[665px] absolute">
    <div className="w-[682px] h-[33px] left-0 top-0 absolute text-black text-[30px] font-medium">Blog post 2</div>
    <div className="w-[157px] h-[29px] left-0 top-[59px] absolute text-black text-[20px] font-normal">2023.07.03</div>
    <div className="w-[682px] h-[43px] left-0 top-[89px] absolute text-black text-[16px] font-normal">Lorem ipsum</div>
    <div className="w-[681px] h-[0px] left-[1px] top-[161px] absolute border border-neutral-200"></div>
  </div>
  <div className="w-[682px] h-[165.27px] left-[235px] top-[848px] absolute">
    <div className="w-[682px] h-[33px] left-0 top-0 absolute text-black text-[30px] font-medium">Blog post 2</div>
    <div className="w-[157px] h-[29px] left-0 top-[59px] absolute text-black text-[20px] font-normal">2023.07.03</div>
    <div className="w-[682px] h-[43px] left-0 top-[89px] absolute text-black text-[16px] font-normal">Lorem ipsum</div>
    <div className="w-[681px] h-[0px] left-[1px] top-[161px] absolute border border-neutral-200"></div>
  </div>
</div>
</>
)
}