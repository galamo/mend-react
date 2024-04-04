// type Connection = {};
// function createConnection(url: string, user: string): Connection;
// function createConnection(url: number, user: number): Connection {
//   return { url, user };
// }

function add(a: number, b: number): number;
function add(a: Array<number>, b: Array<number>): number;
function add(a, b) {
  console.log(a);
  console.log(b);
}

add(1, 2);
add([1, 2, 3], [222, 3, 45]);
