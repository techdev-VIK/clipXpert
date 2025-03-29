import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";


const App = () =>{

  const myRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children:[
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "watch",
          element: <WatchPage />
        }
      ]
    },
    
  ])
  return(

    <Provider store={store}>
      <Header />
      <RouterProvider router={myRoutes} />
    </Provider>

  )
}



export default App;