import { Link } from 'react-router-dom';

const Card = ({
  strDrink,
  strAlcoholic,
  strCategory,
  strDrinkThumb,
  idDrink,
}) => {
  return (
    <div>
      <div className="bg-white shadow-xl">
        <img src={strDrinkThumb} alt="" />
        <div className=" flex flex-col gap-2 p-6 bg-slate-50">
          <h1 className="text-2xl font-bold">{strDrink}</h1>
          <h2 className="text-lg">{strCategory}</h2>
          <h2 className="text-lg">{strAlcoholic}</h2>
          <Link
            className="bg-green-400 text-white px-6 py-2 text-lg mt-6
             block text-center font-bold"
            to={`/cocktails/${idDrink}`}
          >
            Have A Sip
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
