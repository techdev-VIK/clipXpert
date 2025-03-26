const Header = () => {
    return (
      <div className="grid grid-cols-12 gap-4 m-2 p-3 shadow-lg items-center">
        
        <div className="flex col-span-2 items-center">
          <img className="h-8 mr-2" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" alt="menu" />
          <h1 className="text-2xl font-bold text-blue-500">clipXpert</h1>
        </div>
  
        <div className="col-span-8 flex justify-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-lg w-1/2 md:w-3/4"
          />
          <button className="bg-sky-500 hover:bg-sky-700 ...">Search</button>
        </div>
  
        <div className="col-span-2">
          <img
            className="h-10 rounded-full"
            src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            alt="user"
          />
        </div>
        
      </div>
    );
  };
  
  export default Header;
  