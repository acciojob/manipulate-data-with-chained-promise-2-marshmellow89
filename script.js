let arr = [1,2,3,4];
let newArr = [];
for(let i=0;i<arr.length;i++){
	if(arr[i]%2==0){
	newArr.push(arr[i]);
	}
};

let newArr2 = [];
		for(let i=0;i<newArr.length;i++){
			newArr2.push(newArr[i]*2);
		}

let res1;
let res2;
			
async function oneSD(){
 res1 = await new Promise(resolve => setTimeout(()=>resolve(newArr),1000));
	console.log(res1);
	
 res2 = await new Promise(resolve => setTimeout(()=> resolve(newArr2),2000));
   console.log(res2);
}

oneSD();
document.getElementById("output").appendChild(res1,res2)
