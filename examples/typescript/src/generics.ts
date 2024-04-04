type StringFromType<T> = T extends string ? string : number;

type IsThisIsString = StringFromType<"userName">;

type Product = {
  name: string;
  Price: number;
};

function getSingleUser(users: Array<string>): string {
  return users[0];
}

function getSingleProduct(products: Array<Product>): Product {
  return products[0];
}
function getSingleObject<T>(arr: Array<T>): T {
  return arr[0];
}
const arr = [{ name: "mend", price: 10000 }];

const singleObject = getSingleObject(arr);
const singleObject2 = getSingleObject([
  { scanId: "scan_id", timestamp: "2024-03-04" },
]);

// const htmlElement = document.getElementById<HTMLInputElement>("id");

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

interface Song {
  artist: string;
  length: number;
  name: string;
  writer: string;
}

class PlayList<T> {
  private list: T[] = [];
  add(listItem: T) {
    this.list.push(listItem);
  }
  get(index: number): T {
    return this.list[index];
  }
  play() {
    this.list.pop();
  }
}

const songs = new PlayList<Song>();
songs.add({ artist: "string", length: 1, name: "string", writer: "string" });
// songs.add({ title: "A" });

function mergeFunction<T extends Song, U extends Video>(
  obj1: T,
  obj2: U
): T & U {
  return { ...obj1, ...obj2 };
}

function merge2(s: Song, v: Video) {
  return 1;
}

mergeFunction(
  { artist: "string", length: 1, name: "string", writer: "string", a: 1 },
  { title: "aa", creator: "aa", resolution: "aa", a: 1 }
);
