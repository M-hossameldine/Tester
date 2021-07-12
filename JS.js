const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin", 
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Erine's House", "Daria's House-Town Hall",
  "Ernie's House- Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];

// convert list of roads into a data Structure
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if(graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges.map( edge => edge.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);

// Test
/*
 * Current Location: palce 
 * Destination Address: address
*/ 

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move (destination) {
    if(!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map( p => {
        if(p.place != this.place) return p;
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels); 
    }
  }
}

let first = new VillageState (
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
)
let next = first.move("Alice's House");

console.log(first.place);
console.log(first.parcels);

console.log(next.place);
console.log(next.parcels);

console.log(first.parcels);


let obj = { propOne: 45};
Object.freeze(obj);
obj.propOne = 30; // -> Throws an error in the strict mode 
console.log(obj.propOne); // -> 45

let obj2 = Object.freeze({value: 2});
obj2.value = 5;
console.log(obj2.value); // ->


let object1 = Object.seal({value1: 23});
object1.value1 = 30; 
object1.value2 = 40;

console.log(object1.value1); 
console.log(object1.value2);

delete object1.value1;
console.log(object1.value1);

