 let num = 13;
let count=0;
for (let i=1; i<=13; i++){
if (num%i==0){
count++;
}
}
if(count==2){
    console.log(num,"Is Prime");
}else{
    console.log("Not Prime");
};
