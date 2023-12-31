import { motion } from "framer-motion";
import CustomButton from "../CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset,Yolculuğa Başla</h1>
        <p className="hero__subtitle text-gray-300">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısın? Araç
          kiralama deneyimini Altın seçenekleri ile taçlandırarak her anını özel
          kılabilirsin
        </p>
        <CustomButton title="Arabaları Keşfet" designs="mt-10 " />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          initial={{ translateX: 250 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 1 }}
          src="/hero.png"
          className="img-fluid object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
