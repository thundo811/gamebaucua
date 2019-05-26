import React from 'react';
// import './App.css';
// import Header from './components/Header';
// import Slider from './components/Slider';
// import ProductList from './components/ProductList';
// import Footer from './components/Footer';
// import Modal from './components/Modal';
// import BaiTapGioHang from './components/baitapgiohang/BaiTapGioHang';

import BaiTapGameBauCua from './components/BaiTApGameBAuCua/BaiTapGameBauCua';

function App() {

  return (
    <div className="App">
    {/* <BaiTapGioHang /> */}
   {/* <BaiTapQuanLySinhVien /> */}
   <BaiTapGameBauCua />
      {/* <Header />
      <Slider />
      <ProductList />
      <Footer />
      <Modal /> */}
    </div>
  );
}

export default App;
