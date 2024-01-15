import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Contact from "./home/Contact";
import MyReviews from "./home/MyReviews";
import Movies from "./home/Movies";
import TV from "./home/TV";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/myReviews",
    element: <MyReviews />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tv",
    element: <TV />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
