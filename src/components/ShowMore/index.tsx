import CustomButton from "../CustomButton";
import { useSearchParams } from "react-router-dom";

type ShowMoreProps = {
  limit: number;
  isNext: boolean;
};

const ShowMore = ({ limit, isNext }: ShowMoreProps) => {
  const [params, setParams] = useSearchParams();

  // url deki limit parametresine 5 ekler

  const handleNavigate = () => {
    //yeni limit hesaplama
    const newLimit: number = limit + 5;
    //diğer parametreleri silmeden yenisini ekleme
    params.set("limit", String(newLimit));

    //url güncelle
    setParams(params);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      {isNext && (
        <CustomButton title="Daha Fazla" handleClick={handleNavigate} />
      )}
    </div>
  );
};

export default ShowMore;
