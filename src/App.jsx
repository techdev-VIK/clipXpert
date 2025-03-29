import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchPage from "./components/WatchPage";


const App = () =>{


  return(

    <BrowserRouter>
      <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Body />}/>
        <Route path="/watch" element={<WatchPage />}/>
      </Routes>
    </Provider>
    </BrowserRouter>

  )
}



export default App;