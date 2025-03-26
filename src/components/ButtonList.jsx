const ButtonList = () => {
    const buttons = [
      { label: "Trending" },
      { label: "Music" },
      { label: "Technology" },
      { label: "Sports" },
      { label: "Entertainment" },
    ];
  
    return (
      <div className="flex space-x-4 mb-6">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {button.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default ButtonList;
  