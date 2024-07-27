import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const SingleCocktail = () => {
  const [data, setData] = useState([]);
  const { drinkId } = useParams();
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  async function singleCocktail() {
    const drinks = await axios(URL);
    const drink = drinks.data.drinks;
    setData(drink);
    console.log(drink);
  }

  useEffect(() => {
    singleCocktail();
  }, []);

  return (
    <div className="mt-20 mb-16 px-4">
      {}
      {data.map((item) => {
        return (
          <div key={drinkId}>
            <div className="grid md:grid-cols-2 max-w-[600px] md:max-w-[900px] bg-teal-800 text-white w-full bg mx-auto md:items-center ">
              <img src={item.strDrinkThumb} alt="" className="w-full" />
              <div className="flex flex-col gap-2 p-8">
                <h1 className="text-3xl font-bold mb-2">
                  Drink Name : {item.strDrink}
                </h1>
                <h1 className="text-lg">Drink Category : {item.strCategory}</h1>
                <h1 className="text-lg"> {item.strAlcoholic}</h1>
                <p className="text-lg">Instruction : {item.strInstructions}</p>
                <Link
                  to={'/'}
                  className="bg-green-400 text-white px-6 py-2 text-lg mt-6
             block text-center font-bold"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SingleCocktail;
