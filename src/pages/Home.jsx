import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
const Home = () => {
  const [drink, setDrink] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

  async function fetchDrink() {
    try {
      const drinks = await axios.get(URL);
      if (drinks.data.drinks) {
        setDrink(drinks.data.drinks);
      } else {
        setDrink([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDrink();
  }, []);

  function submit(e) {
    e.preventDefault();
    if (!name) return;
    setLoading(true);
    fetchDrink();
    setName('');
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center mt-8 ">
        {' '}
        <h1 className="mt-20 text-3xl font-bold">loading...</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow">
        {/* <!-- Main Content --> */}
        <main className="flex-grow container mx-auto p-6 ">
          {/* <!-- Description --> */}
          <section className="text-center my-8">
            <h2 className="text-3xl font-bold mb-4">
              Find the Perfect Cocktail
            </h2>
            <p className="text-lg text-gray-700">
              Search from a wide variety of cocktails. Get detailed recipes and
              enjoy making your favorite drinks at home.
            </p>
          </section>
          {/* <!-- Search Form --> */}
          <section className="flex justify-center items-center mb-8">
            <form
              onSubmit={submit}
              id="searchForm"
              className="flex justify-between items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl"
            >
              <input
                type="search"
                id="drinks"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="ml-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              >
                Search
              </button>
            </form>
          </section>
          {/* <!-- Cocktails Display --> */}
          <div className="flex items-center justify-center">
            {drink.length > 0 ? (
              <section className="mt-24">
                <div className="container max-w-[1000px] mx-auto grid medium:grid-cols-2 lg:grid-cols-3 gap-6">
                  {drink.map((item) => (
                    <Card key={item.idDrink} {...item} />
                  ))}
                </div>
              </section>
            ) : (
              <div>
                <h1 className="mt-20 text-3xl font-bold">No Drinks Found</h1>
              </div>
            )}
          </div>
        </main>
        {/* <!-- Footer --> */}
        <footer className="bg-gray-800 text-white text-center py-6">
          <p>&copy; 2024 Cocktail Drinks Fetching. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};
export default Home;
