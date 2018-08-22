var collection ={
 2548:{
  album:"slippery When Wet",
  artist :"Bon Jovi",
  tracks:["Let it Rock" ,
  "You Give Love a bad Name"
]
      
 },

 2468:{
    album:"1999",
    artist :"Prince",
    tracks:["1999" ,
    "Little Red Corvette"
    ]
        
   },

1245:{
    artist :"Robert Palmer",
    tracks:[]
},

5439:{
    album :"ABBA Gold"
 }
};

var collectionCopy  =JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
    if (prop ==="tracks" &&  value !==""){
         if(collection[id][prop]){
            collection[id][prop].push(value); 
         }else{
            collection[id][prop]= [value]
         }

    }else if(value !==""){
        collection[id][prop] ==value;        
    }else{
         delete collection[id][prop];
    }
  return collection;
}

console.log("Get Started");
console.log(updateRecords(2548,"album","Loose Goose"));
console.log(updateRecords(2468,"album","Sum 21"));
console.log(updateRecords(1245,"album","Michael Jackson"));
console.log(updateRecords(5439,"album","Hotel California"));