
// Tarayıcı Depolama Alanları


// Session Storage

// const add = document.querySelector("#add");
// const del = document.querySelector("#delete");
// const clear= document.querySelector("#clear");



// const addkey = document.querySelector("#addkey");
// const addvalue= document.querySelector("#addvalue");
// const deletekey =document.querySelector("#deletekey");




// add.addEventListener("click",addItem);
// del.addEventListener("click",deleteItem);
// clear.addEventListener("click",clearItem);


// function addItem(e){
//     sessionStorage.setItem(addkey.value,addvalue.value);
// }


// function deleteItem(e){
//     sessionStorage.removeItem(deletekey.value);
// }


// function clearItem(e){
//     sessionStorage.clear();
// }


//Local Storage


//SetItem


localStorage.setItem("programlama","javascript");
localStorage.setItem("bilgisayar",7000);


//GetItem

// const value = localStorage.getItem("bilgisayar");
// console.log(value);
// console.log(typeof value);


//Clear Local Storage

// localStorage.clear();

// console.log(localStorage.getItem("klavye"));

if (localStorage.getItem("bilgisayar")=== null){
    console.log("Sorgulanan veri bulunamadı")
}else{
    console.log("Sorgulanan veri bulundu");
}