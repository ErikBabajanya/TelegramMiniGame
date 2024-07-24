import user from "../user.json";
import Image from "next/image";
import backgroundImage from "../public/image0_0.jpg"; // Import the background image

export default function Home() {
  return (
    <div className="w-full h-screen bg-background">
      <div className="w-full h-[60px] flex ">
        <div className="w-full h-full flex justify-around">
          <div className="h-full flex items-center ">
            <div className="h-[40px] rounded-[50%]">
              <div className="w-[120px] w-full h-full flex">
                <Image
                  src="https://cdn0.iconfinder.com/data/icons/game-1-3/50/71-512.png"
                  alt="Coin"
                  width={40}
                  height={40}
                />
                <div className="w-full h-full flex items-center ml-[5px]">
                  {user.gold_count}
                </div>
              </div>
            </div>
          </div>
          <div className="h-full">
            <div className="h-full flex items-center">
              <div className="h-[40px] rounded-[50%]">
                <div className="w-[120px] h-full flex">
                  <Image
                    src="https://cryptologos.cc/logos/toncoin-ton-logo.png"
                    alt="Coin"
                    width={40}
                    height={40}
                  />
                  <div className="w-full h-full flex items-center ml-[5px]">
                    {user.ton_count}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
