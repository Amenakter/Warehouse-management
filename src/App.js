import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from './Compponents/Pages/AddItem/Additem';
import Blog from './Compponents/Pages/Blog/Blog';
import Catagoris from './Compponents/Pages/Catagories/Catagories';
import Home from './Compponents/Pages/Home/Home/Home';
import Login from './Compponents/Pages/Login/Login';
import ManageInventory from './Compponents/Pages/ManageInventory/ManageInventory';
import MyItems from './Compponents/Pages/MyItems/MyItems';
import NotFound from './Compponents/Pages/NotFound/NotFound';
import Register from './Compponents/Pages/Register/Register';
import RequiredAuth from './Compponents/Pages/RequiredAuth/RequiredAuth';
import UpdateInventories from './Compponents/Pages/UpdateInventories/UpdateInventories';
import Footer from './Compponents/Shered/Footer/Footer';
import Header from './Compponents/Shered/Header/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventories/:id' element={<UpdateInventories></UpdateInventories>}></Route>
        <Route path='/manageinventory' element={

          <RequiredAuth>
            <ManageInventory></ManageInventory>
          </RequiredAuth>
        }></Route>
        <Route path='/additem' element={

          <RequiredAuth>
            <Additem></Additem>
          </RequiredAuth>
        }></Route>
        <Route path='/myitems' element={

          <RequiredAuth>
            <MyItems></MyItems>
          </RequiredAuth>
        }></Route>
        <Route path='/catagories' element={<Catagoris></Catagoris>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
