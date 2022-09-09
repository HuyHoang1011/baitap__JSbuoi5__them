//bài 1
function KV(a){
    if(a==X){
        return 0;
    }
    if(a==A){
        return 2;
    }
    if(a==B){
        return 1;
    }
    if(a==C){
        return 0,5;
    }
}
function DT(a){
    if(a==0){
        return 0;
    }
    if(a==1){
        return 2,5;
    }
    if(a==2){
        return 1,5;
    }
    if(a==3){
        return 1;
    }
}
document.getElementById("Tinh").onclick=function(){
    var diemChuan=document.getElementById("DiemChuan").value*1;
    var diemHS=0;
    var diemMot = document.getElementById("DiemMot").value*1;
    var diemHai = document.getElementById("DiemHai").value*1;
    var diemBa = document.getElementById("DiemBa").value*1;
    var KVuc=document.getElementById("khuvuc").value;
    var DTuong=document.getElementById("doiTuong").value*1;

    diemHS=diemMot+diemHai+diemBa+KV(KVuc) + DT(DTuong);
    if(diemHS==diemChuan){
        var kq="Đậu";
    }else{
        var kq="Trượt";
    }
    document.getElementById("Diem").innerHTML=kq;
}

//tinh tiền điện

document.getElementById("TinhTienDien").onclick=function(){
    var soDien=document.getElementById("numberDien").value;
    var kq;
    if (soDien<=50){
        kq=500*soDien;
    }else if(soDien>50 && soDien<=100){
        kq=500*50 + 650*(soDien-50);
    }else if(soDien>100 && soDien <=200){
        kq=500*50 + 650*50 + 850*(soDien-100);
    }else if(soDien>200 && soDien<=350){
        kq=500*50 + 650*50 + 850*100 + 1100*(soDien-200);
    }else {
        kq=500*50 + 650*50 + 850*100 + 1100*150 + 1300*(soDien-350);
    }
    document.getElementById("GiaDien").innerHTML=kq;
}