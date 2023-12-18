import { useEffect, useState } from "react";
import { OptionType } from "../../types";
import Select from "react-select";
import { useSearchParams } from "react-router-dom";

type FilterType = {
  title: string;
  options: OptionType[];
};

const CustomFilter = ({ title, options }: FilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // url'e eklenicek ismi belirle
    const key = title === "Yakıt Tipi" ? "fuel" : "year";

    if (selected?.value) {
      // değer varsa url ekle
      params.set(key, selected.value);
    } else {
      // değer yoska urldeki eski değeri sil
      params.delete(key);
    }

    // url'i güncelle
    setParams(params);
  }, [selected]);

  return (
    <div className="w-fit">
      <Select
        onChange={(e: OptionType | null) => setSelected(e)}
        options={options}
        placeholder={title}
        className="text-black min-w-[100px]"
      />
    </div>
  );
};

export default CustomFilter;
