import ReactSelect from "react-select";
import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { makes, options } from "../../constants";
import { OptionType } from "../../types";

type SearchProps = {
  styling: string;
};

const SearchButton = ({ styling }: SearchProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="magnifying-glass.svg" width={40} height={40} alt="" />
    </button>
  );
};

const SearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [params, setParams] = useSearchParams("");

  //url güncelle
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (make !== "" && model === "") {
      setParams({ make: make.toLocaleLowerCase() });
    } else if (make !== "" && model !== "") {
      setParams({
        make: make.toLocaleLowerCase(),
        model: model.toLocaleLowerCase(),
      });
    } else {
      alert("Lğtfen marka/model giriniz");
    }
  };

  //useMemo hook u bir değeri hesaplamak ve bu değeri bir sonraki
  //render sırasında hedaplamadan önce önbellekte saklamak için kullanılır
  //bu durum performansı arttırmada yardımcı olur.Maaliyetli işlemlerde tercih edilmelidir.
  //gereksiz tekrarlı hesaplamaların önübne geçer

  const options: OptionType[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [makes]
  );

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item text-black">
        <ReactSelect
          onChange={(e: OptionType | null) => e && setMake(e.value)}
          options={options}
          className="w-full"
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img src="/model-icon.png" width={25} className="absolute ml-4" />
        <input
          type="text"
          placeholder="Civic"
          className="searchbar__input text-black rounded"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
