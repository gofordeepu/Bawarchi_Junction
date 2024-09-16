import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import About from './components/About';
import Contactus from './components/Contactus';
import Errorui from './components/Errorui';
import {createBrowserRouter,Outlet } from 'react-router-dom';
import Restromenu from './components/Restromenu';
const App = ()=> {
    return(
      <div className='app'>
        <Header/> 
        {/* <Body/> */}
        <Outlet/>
      </div>
    )
}

const appRouter=createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contactus/>
        },
        {
          path:"/restro/:resID",
          element:<Restromenu/>
        }
    ],
    
    errorElement:<Errorui/>
  }
]);

export default App;
export {appRouter};