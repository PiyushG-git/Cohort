// promises
// async await
// setimeout and setinterval

// promises->ek kaam jaake karo
// pending state
// hojjayega -> resolved
// nahi hoga -> reject


// promises
// ...................
// const prm=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(); //then change
//         // reject()  //catch  change
//     },3000)
// })

// prm.then(function(){
//     console.log("resolved");
// })
// .catch(function(){
//     console.log("rejected");
// })


// fetch
// .............................
// fetch se kisi bhi url par jaa  sakte hai
// fetch ka data readable nahi hota by default
// usey json bannake readable karte hai
// iske baad jo data milta hai wo raedable hota hai

// fetch(`https://randomuser.me/api/`)
// .then(function(notReadableData){
//     return notReadableData.json();
// })
// .then(function(asliData){
//     console.log(asliData.results[0].name.first);
// })


// data.json is ek new promises nikalta hai
// fetch ke function me promise lgaa hoga(jisne js banaya)
// .......................................
// fetch(`https://randomuser.me/api/`)
// .then((raw)=>raw.json)
// .then((data)=>{
//     console.log(data.results[0].name.first);
// })
// .catch((err)=>{
//     console.log(err);
// })




// async await -> promise pr kaam hota hai
// await ko function likhna neccesary hai
// isme ab .then .catch kaa use nhi krna padta

// async function abcd(){
//     let raw = await fetch(`https://randomuser.me/api/`);
//     let data = await raw.json;
//     console.log(data);
// }
// abcd();



function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10);
            if(num<5){
                resolve(true);
            }
            else{
                reject(false)
            }
        },3000);
    });
}

async function abcd(){
    let v= await getNum();
    console.log(v);
}
abcd()


