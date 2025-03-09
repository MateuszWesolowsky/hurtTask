import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center w-full">
    <h1 className="text-5xl font-bold text-red-500">
      404 - Strona nie znaleziona
    </h1>
    <p className="text-xl mt-4 text-gray-700">
      Przepraszamy, strona, której szukasz, nie istnieje.
    </p>
    <Link to="/" className="mt-6 text-blue-500 hover:text-blue-700">
      Powrót do strony głównej
    </Link>
  </div>
);

export default NotFoundPage;
