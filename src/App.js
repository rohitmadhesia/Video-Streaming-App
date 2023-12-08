import Body from "./components/Body";
import Head from "./components/Head";
import {Provider} from "react-redux";
import appStore from "./utilites/appStore";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage";


function App() {

  const appRouter = createBrowserRouter([{
       path:"/",
       element:<Body/>,
       children:[
       {
        path:"/",
        element:<Maincontainer/>,
       },
       {
        path:"/watch",
        element:<WatchPage/>
       }

       ]
  }])

  return (
    <Provider store={appStore}>
  <div>
    <Head/>
    <RouterProvider router={appRouter}/>
     </div>
     </Provider>
  );
}

export default App;
