import settings from "./settings.json";
const data: string = "Mend Scan";

type Settings = typeof settings;
function setConfiguration(config: Settings): boolean {
  console.log(config.localTime);
  return true;
}

setConfiguration(settings);

console.log(settings);
type Book = {
  author: Author;
  title: string;
  numberOfPages?: number;
  publishedAt?: string;
};

type Author = {
  firstName: string;
  lastName: string;
};

const book1: Book = {
  author: { firstName: "jorden", lastName: "peterson" },
  title: "12 rules of life",
  numberOfPages: 330,
};
const book2: Book = {
  author: { firstName: "jorden", lastName: "peterson" },
  title: "12 rules of life",
};

function addNewpage(book: Required<Book>) {
  book.numberOfPages = book.numberOfPages + 1;
}

function sendBookToApi(book: Partial<Book>) {}
sendBookToApi({ title: "" });

// addNewpage(book2); this is error

console.log(book1);
type WithId = { id: string };

interface IBook {
  author: Author;
  title: string;
  numberOfPages?: number;
}

interface IBookApi extends IBook {
  id: string;
}
// shared - common lib
interface IAxios {
  request: object;
  response: object;
}

// client1-
interface IAxios {
  requestId: string;
}
interface MendIAxios extends IAxios {}

const axiosRequest: IAxios = {
  request: {},
  response: {},
  requestId: "ssss",
};

function getApiData(book: Book): Book & WithId {
  // saved in database
  return { ...book, id: "New Id From Api" };
}
