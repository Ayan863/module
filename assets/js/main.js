// new Task
// asagidaki arraydan isdifade ederek main.js  ve index.js yaradin
// index.js icinde newArray i daxil edin main.js de ele bir function qurun ki
// name ve arrayi parametr olaraq verdikde hemin namenin city ve streetini 
// versin eger name olan objectin icinde city ve ya street yoxdusa
//  error versin logda 

// let arrayy=[]
// const include=(name,array)=>{
//     const findName=array.find((item)=>item.name==name)
//     if(findName.address.city && findName.address.street) {
//         arrayy.push(findName.address.city,findName.address.street); 
//         return arrayy;
//     } 
//     else{
//         try{
//             throw new Error(`yaşadığınız ${(!findName.address.city && !findName.address.street) ?"şəhər və küçə" : !findName.address.city ? "şəhər" : "küçə"} daxil edilməyib` )

//         }catch(error){
//             console.log(error.message)
//         }
//     }
// }
// export default include

// Task 2
// main.js de ele bir function qurunki parametr olaraq id ve array 
// qebul etsin gelen array e gore id ni tapa bilmiyende xeta versin
// eyni zamanda geriye hemen ide aid objecti geri qaytarsin
// qaytarilan objecti index.js de import edin daha sonra logda json stringfy 
// birdefede parse ile logda cixardin .

// const incudeId=(id,array)=>{
//     const findId=array.find((item)=>item.id==id)
//     if(findId) return findId
//     else{
//         try{
//             throw new Error(`Id tapılmadı`)
//         }catch(error){
//             alert(error.message)
//         }
//     }
// }
// export default incudeId
