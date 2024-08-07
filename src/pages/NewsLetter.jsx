import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
  const [news, setNews] = useState('');
  const notify = () => toast('Thanks, You Subscribed');
  function handleClick() {
    if (!news) return;
    setNews('');
    notify();
  }

  return (
    <section className="mt-8 flex flex-col items-center font-main bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <label htmlFor="email" className="text-xl mb-4">
        Subscribe to our Newsletter
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={news}
        onChange={(e) => setNews(e.target.value)}
        placeholder="Enter your email"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition "
        onClick={handleClick}
      >
        Subscribe
      </button>
      <ToastContainer />
    </section>
  );
};
export default NewsLetter;
