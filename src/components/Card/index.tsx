import { useState } from "react";
import { CarType } from "../../types";
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import DetailModal from "./DetailModal";
import { generateImage } from "../../utils";

interface ICardProps {
  car: CarType;
}

const Card = ({ car }: ICardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="car-card group">
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      {/* fiyat alanı */}
      <p className="flex mt-6 text-[32px]">
        <span className="text-[16px] font-semibold">₺</span>
        {Math.round(Math.random() * 4300) + 500}
        <span className="text-[16px] font-medium self-end">/gün</span>
      </p>
      {/* resim alanı */}
      <div className="relative w-full h-40 my-3 object-contain">
        <img
          src={generateImage(car)}
          alt="car-pic"
          className="w-full h-full object-contain"
        />
      </div>
      {/* alt kısım */}
      <div className="w-full mt-2 flex relative">
        <div className=" group-hover:invisible mt-2 w-full flex justify-between text-gray">
          <CarInfo
            title={car.transmission === "a" ? "Otomatik" : "Manuel"}
            icon="./steering-wheel.svg"
          />
          <CarInfo title={car.drive?.toUpperCase()} icon="./tire.svg" />
          <CarInfo title={car.city_mpg + "MPG"} icon="./gas.svg" />
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Daha Fazla"
            designs="w-full py-[16px]"
            rIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {/* detay modalı kapatma */}
      <DetailModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default Card;
