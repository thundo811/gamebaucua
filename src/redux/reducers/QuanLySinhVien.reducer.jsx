
const stateStudent = {
    DSSV: [
        {MaSV:1, Ten: 'Nguyen Van B', Tuoi: 19, Lop:'Fronent 18'}
    ],
    sinhVienSua:{
            MaSV: 0,
            Ten: '',
            Tuoi: 0,
            Lop: ''
    }
}

const sinhVienStoreReducer = (state = stateStudent, action) => {
    switch(action.type)
    {
        case 'THEM_SINH_VIEN' : {
         
            state.DSSV = [...state.DSSV, action.sinhVien];
            return {...state}
        };
        case 'SUA_SINH_VIEN' : {
           state.sinhVienSua = action.sinhVien;
           return {...state}
        };
        case 'CAP_NHAT_SINH_VIEN' : {
            let DSSVUpdate = [...state.DSSV];

            // tim sinh vien cap nhat
           let index = DSSVUpdate.findIndex(sv => sv.MaSV === action.sinhVien12.MaSV);
           if(index !== -1){
               console.log(index+"asdfsd");
               
               DSSVUpdate[index] = action.sinhVien12;
           }
           state.DSSV = DSSVUpdate;
           return {...state}
        };
        case 'XOA_SINH_VIEN' : {
            let DSSVUpdate = [...state.DSSV];

            // tim sinh vien cap nhat
           let index = DSSVUpdate.findIndex(sv => sv.MaSV === action.id);
           if(index !== -1){
              
               
               DSSVUpdate.splice(index,1)
           }
           state.DSSV = DSSVUpdate;
           return {...state}
        }
        
    }
    return {...state}
}

export default sinhVienStoreReducer