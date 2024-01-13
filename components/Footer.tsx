import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">Made by Kunal Mathur</p>
      <Image
        src="/pokeball.png"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      
        <div>
    
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
     
      </div>
    </footer>
  );
}

export default Footer;
