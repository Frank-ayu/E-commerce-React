import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.scss";

//app.scss里把link的传统特效给关了
//display: flex;, align-items: center; 和 justify-content: center; 
//- 这些属性确保span内的内容（可能是数字或文本）在垂直和水平方向上都居中。

/*
position: relative; - 为.cartIcon设置相对定位，这意味着其内部的子元素可以使用绝对定位来相对于它进行定位。
background-color: #2879fe; - 设置元素的背景颜色为#2879fe。
color: white; - 设置元素内部的文字颜色为白色。
position: absolute; - 将span设置为绝对定位，这使得它可以相对于其最近的相对定位（在这里是.cartIcon）父元素进行定位。
right: -10px; 和 top: -10px; - 将span元素定位在其父元素的右上角，并且偏移-10像素，使其部分超出其父元素的边界。
display: flex;, align-items: center; 和 justify-content: center; - 这些属性确保span内的内容（可能是数字或文本）在垂直和水平方向上都居中。
*/
const Layout = () => {
  return (
    <div className = "app">
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

// localhost:3000/products/1
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/products/:id",
        element:<Products />
      },
      {
        path:"/product/:id",
        element:<Product />
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
