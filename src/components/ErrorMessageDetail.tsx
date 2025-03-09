const ErrorMessageDetail = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-lg flex flex-col items-center">
        <strong className="font-bold text-lg">Error fetching data</strong>
        <p className="text-sm mt-1">Please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorMessageDetail;
