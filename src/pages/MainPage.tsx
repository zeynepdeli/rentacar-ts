import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { fetchCars } from "../utils";
import { CarType } from "../types";
import Card from "../components/Card";
import ShowMore from "../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CustomFilter from "../components/CustomFilter";
import { fuels, years } from "../constants";

const MainPage = () => {
  const [params] = useSearchParams();
  // state'ile tuttuğumuz verinin tipini generic ile belirleriz
  const [cars, setCars] = useState<CarType[]>([]);

  // url den klimit parametresini al yoksa 5'e eşitle
  const limit = Number(params.get("limit")) || 5;

  useEffect(() => {
    //  urldeki bütün parameterlerden bir obje oluşturma
    const paramsObj = Object.fromEntries(params.entries());

    fetchCars(paramsObj)
      .then((data: CarType[]) => setCars(data))
      .catch((err) => setCars(err));
  }, [params]);

  // veri boş mu kontrol
  const isDataEmpty = cars.length < 1 || !cars;

  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        {/* başlık */}
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        {/* filtreleme */}
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels} />
            <CustomFilter title="Üretim Yılı" options={years} />
          </div>
        </div>
        {/*  listeleme alanı */}
        {isDataEmpty ? (
          <div className="home__error-container">
            <h2>Üzgünüz, herhangi bir sonuç bulunamadı</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((data, key) => (
                <Card key={key} car={data} />
              ))}
            </div>

            <ShowMore limit={limit} isNext={limit < 30} />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
