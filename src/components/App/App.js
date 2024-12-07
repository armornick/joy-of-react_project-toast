import React from "react";

import ToastShelf from "../ToastShelf";
import ToastProvider from "../ToastProvider";
import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <ToastShelf />
      <Footer />
    </ToastProvider>
  );
}

export default App;
