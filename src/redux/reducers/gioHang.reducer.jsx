//store dành cho nghiệp vụ quản lý modal

const stateModal = {
  gioHang:[
      {MaSP:1, HinhAnh:'...', TenSP:"...",DonGia:0,SoLuong:0}
  ]
}

const gioHangModalReducer = (state = stateModal, action) =>{
    
  //Xu ly them gio hang
 switch (action.type){
   case 'THEM_SAN_PHAM_MOI':{

    let gioHangCapNhat = [...state.gioHang];
    let index = gioHangCapNhat.findIndex(spGH => spGH.MaSP === action.sanPham.id);
    if(index!==-1){
     
      
      gioHangCapNhat[index].SoLuong +=1;
    }else{
      let {id, name,img, price} = action.sanPham;
      let spGH = {MaSP:id, HinhAnh: img, TenSP:name,DonGia: price,SoLuong:1}
      gioHangCapNhat.push(spGH);
    }

    state.gioHang = gioHangCapNhat;

    return {...state};
   }
   case 'CAP_NHAT_SO_LUONG': {
    let gioHangCapNhat = [...state.gioHang];
    let index = gioHangCapNhat.findIndex(spGH => spGH.MaSP === action.id);
    if(index!==-1){
      if(action.tangGiam === true){
        gioHangCapNhat[index].SoLuong++;
      }else{
      
        if(gioHangCapNhat[index].SoLuong>1)
        gioHangCapNhat[index].SoLuong--;

      }
    }
    state.gioHang = gioHangCapNhat;

    return {...state};
   }
   case 'XOA_SAN_PHAM': {
    let gioHangCapNhat = [...state.gioHang];

    let index = gioHangCapNhat.findIndex(spGH => spGH.MaSP === action.id);

    if(index!==-1){
      gioHangCapNhat.splice(index,1);
    }

    state.gioHang = gioHangCapNhat;

    return {...state};

   }
   default : return {...state};
 }
    
    return {...state};
}

export default gioHangModalReducer;