const output = document.querySelector('.text')
let valu = document.querySelectorAll('.c1')
let ac = document.querySelector(".ac")
const equal = document.querySelector('.equal')
const del = document.querySelector('.delete')

valu.forEach((val)=>{
    val.addEventListener("click",()=>{
        output.value = output.value + val.value
    })
})
ac.addEventListener("click",()=>{
    try{
        output.value = "0";
    } catch(err){
        console.log(err)
    }
})
del.addEventListener("click",()=>{
    try{
        output.value = output.value.slice(0,-1)
    } catch(err){
        console.log(err)
    }
})
equal.addEventListener("click",()=>{
    try{
        output.value = eval(output.value)
    } catch (err){
        console.log(err)
    }
})