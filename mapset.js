let map = new Map();

map.set('1', 'str1');   
map.set(1, 'num1');     
map.set(true, 'bool1');
//remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3
console.log(map)
/*
for(let key of map.keys()){
    console.log("maps key==>"+key)
}

for(let value of map.values()){
    console.log("value==>"+value)
}

for(let ent of map.entries()){
    console.log("maps entry==>"+ent)
}
map.delete(1);
for(let ent of map.entries()){
    console.log("maps entry Ofter deleted==>"+ent)
} */
console.log(map.has('1'));

map.forEach((value,key)=>{
    console.log(`${key}: ${value}`);
   // console.log(maps)
});