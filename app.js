// Default Export function
export default function show(){
    console.log("Hello World");
}


const promise=new Promise ((resolve,reject)=>{
    let a=13;
    if(a==10){
        resolve("Success Message")
    }else{
        reject("Error Message")
    }
}).then((success_Msg)=>{
    console.log(success_Msg);
},(error_Msg)=>{
console.log(error_Msg);
}).catch((reject_error)=>{
    console.log(reject_error);
}).finally(()=>{
    console.log("Cleaned");
})

















