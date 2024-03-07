import React from "react";
import { Flip, Slide, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
 const notify = () =>
  toast.success("Wow so easy!", {
   position: "bottom-center",
   autoClose: 5000,
   hideProgressBar: false,
   closeOnClick: true,
   pauseOnHover: true,
   draggable: true,
   progress: undefined,
   theme: "light",
   transition: Zoom,
  });
 // visit this url to change the styles https://fkhadra.github.io/react-toastify/introduction/

 return (
  <div>
   <button onClick={notify}>Notify!</button>
   <ToastContainer />
  </div>
 );
}

export default App;
