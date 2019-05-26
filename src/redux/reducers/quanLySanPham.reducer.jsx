
const stateQuanLy = {
  listProduct: [
    { id: 'sp_1', name: 'iphoneX', price: 30000000, quantity: 1, img: './img/sp_iphoneX.png', desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password' },
    {id: 'sp_2', name: 'Note 7', price: 20000000, quantity: 1, img: './img/sp_note7.png', desc: 'The Galaxy Note7 comes with aperfectly symmetrical design for good reason'
    },
    { id: 'sp_3', name: 'Vivo', price: 10000000, quantity: 1, img: './img/sp_vivo850.png', desc: 'A young global smartphone brandfocusing on introducing perfect sound quality'
    },
    {id: 'sp_4', name: 'Blacberry', price: 15000000, quantity: 1, img: './img/sp_blackberry.png', desc: 'BlackBerry is aline of smartphones, tablets, and services originally designed'}
  ]
}

const quanLySanPhamReducer = (state = stateQuanLy, action) => {


  return {...state};
}

export default quanLySanPhamReducer;