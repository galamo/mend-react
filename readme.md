# Mend - React with Typescript

### Installations

- Docker ( rancher / desktop )
- Vscode
- Node + npm ( nvm )

## Docs

- React
- Typescript

## Server

##### Run API

- cd `dev-apps` folder
- run `docker-compose up`

##### Validate the API is running

- Open browser: `http://localhost:2200/health-check`
- More

```cmd

    1. POST /auth/register HTTP/1.1
    Host: localhost:2200
    Content-Type: application/json
    Authorization: 1
    Content-Length: 56

    {
        "userName":"string",
        "password":"string"
    }

    2. POST /auth/login HTTP/1.1
    Host: localhost:2200
    Content-Type: application/json
    Authorization: 1
    Content-Length: 55

    {
        "userName":"string",
        "password":"string"
    }

    3. GET /secure HTTP/1.1
    Host: localhost:2200
    Content-Type: application/json
    Authorization: string


```

### Javascript

- async operation

1. callbacks
2. promise
3. async await

### Typescript

- `npm init -y` - create new module based on the folder name
- install global - `npm install -g typescript`
- install local - `npm install typescript --save-dev`
- run `tsc --init`
- compile the code `tsc`
- configure useful scripts `watch mode`

#### Primitives

#### Types (Declaration) Vs Interfaces (Contract)

##### Types

1. using `typeof` on JSON

```JSON
{
  "localTime": "utc",
  "theme": "black",
  "productLicense": ["mend_admin", "mend_developer"]
}
```

2. Primitives
3. Union
4. Function type usage
5. intersection

##### Interface

1. Declaration merging
2. extend

##### Class

##### Multiple Types

###### Narrow down type - interface

###### String literal

###### Ex_calculateTax

- Create a function calculateTax that receive a number or string and can calculate according the value the tax

```javascript
console.log(`new price is: ${calculateTax({ price: "40$", tax: 2 })}`);
console.log(`new price is: ${calculateTax({ price: 40, tax: 2 })}`);
```

###### Ex_keyof

- create a function that receive Array of products and product name Or id ( one of products properties ) and return all the products that equal to the relevant name Or id

##### Generics

```typescript
type Product = {
  name: string;
  Price: number;
};
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type clientType = Getters<Product>;
// type clientType = {
//     getName: () => string;
//     getPrice: () => string;
// }
```

# Ex_generics_interface

```typescript
interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];

const users: User[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
];

export type ApiResponse<T> = unknown;

type AdminsApiResponse =
  | {
      status: "success";
      data: Admin[];
    }
  | {
      status: "error";
      error: string;
    };

export function requestAdmins(callback: (response: AdminsApiResponse) => void) {
  callback({
    status: "success",
    data: admins,
  });
}

type UsersApiResponse =
  | {
      status: "success";
      data: User[];
    }
  | {
      status: "error";
      error: string;
    };

export function requestUsers(callback: (response: UsersApiResponse) => void) {
  callback({
    status: "success",
    data: users,
  });
}
```

### React

- Getting started with Vite

```javascript
npm create vite@latest

cd my-project

npm install
npm run dev
```

### Useful scripts:

```json

  "scripts": {
    "compile": "tsc --watch",
    "dev": "nodemon ./dist/index.js",
    "start": "concurrently -k -p \"[{name}]\" -n \"CompileTS,netApp\" -c \"red,green\" \"npm run compile\" \"npm run dev\"  ",
    "start-dev": "nodemon ./src/index.ts"

```

### React

#### JSX (TSX)

- Embedding Expressions in JSX
- JSX is an Expression
- Specifying Attributes with JSX
- Specifying Children with JSX
- JSX Prevents Injection Attacks
- JSX Represents Objects

#### Rendering Elements

#### Components and Props

- Function and Class Components
- Rendering a Component
- Compose components
- Props

#### State

- Object
- Local Component State
- Global State

#### Lifecycle methods (L)

- Mount
- Update
- Unmount

#### Events in React

#### Conditional rendering

#### Alternative Props Concepts

- explicit key
- {...} spread operator

#### Render props

#### Ex_HOC

1. Create a component called <TextComponent> - props: text: string
2. Create a component called <InputComponent>
3. Create a withHover HOC behavior that will wrap components 1+2 and will give the ability to
   highlight the component ( change the background to selected color onMouseOver )

#### Ex_Render_list_Items_1

- Create Country Page Component
- Create Country component - card ( show the country name, flag, population ,area)
- Use the following Api: http://localhost:2200/countries/data
- Present the results in a list.
- Add Sorting Buttons - sort by area, sort by population

#### Ex_Render_list_Items_2

- create a button which support sorting countries by area key, desc.

#### Keys

#### Lifting State up

## Hooks

- useState
- useEffect
- useRef
- useMemo
- useCallback
- useContext
- useReducer

## Controled vs unControled components

## Ref

## Portals

`createPortal(children, domNode, key?)`

1. Rendering to a different part of the DOM
2. Rendering a modal dialog with a portal
3. Rendering React components into non-React server markup
4. Rendering React components into non-React DOM nodes

## Advanced

- Redux state management
- HOC
- Buld react app - source map explorer
- Error bounderies

### EX-1

- Create your own IdCard Component
  based on your information
- `lastName`: A string
- `firstName`: A string
- `gender`: A string, 'male' or 'female'
- `height`: A number
- `birth`: A date
- `picture`: A string

```js
<IdCard
  lastName="Doe"
  firstName="John"
  gender="male"
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
```

### EX-1 Typescript

1. Create the following interface: `ICountry`
2. country will have: name, flag, total population
3. create instance for israel country and print it.

### Keys in react

### EX useEffect

1. Create a Component that fetch's products from the following API `https://dummyjson.com/docs/products/`
2. Show the Products in the page.
3. Implement selected Product functionality which will present on the top of the page the selected Product

### EX Toggle component

1. Toggle Countries Rendering to show unmount aborting request
2. Toggle Products

### EX-Image Component

- Create an Image component
- image should get a URL string
- in case the URL is missing - present the `defaultImage`
- `defaultImage`: https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg
- advanced - check if the image is not loaded as well and show the default image

### EX-4

- style css module
- create your own style module by adding the following file to Header component

### EX-5

- Implement Toggle Products Page
- Create `ProductPage` component
- fetch the products from the following api - https://dummyjson.com/products
- Create `Product` Component
- Present all the Products in the `ProductsPage`

### EX-6

- based on your Products result
- Memoize the Avg price
- Present it as product statistics

### EX-7

- Create A button in login page: "click here to register"
- Clicking on the button will move the client ot the registration page
- Remove the register from the router

### EX-8

- implement the login component
- please see the POST Login operation

### React Router DOM

`npm install react-router-dom@6`

### Subjects 23-7

- useRef
  1. current reference mutation
  2. reference to DOM
- React router DOM
- useState Vs useRef
- useContext , useReducer
- axios interceptor
- nested rotes

### Subjects

- useContext , useReducer
- nested routes

### EX - 9

- Add New Route Countries Route

### EX Create Login form - 10

## Subjects

1. code splitting
2. useReducer, useContext
3. async operations

### EX - 11 Code splitting

1. Create New Route - `Countries Reports`
2. use Code splitting approach to lazy load this component
3. Add new Component Name: `PieChartCountriesPopulation` ( based on recharts)
4. Using the countries data fetching - show every region & population on the chart
5. optimize your component load with React.memo

### EX - 12 useContext & useReducer

1. Create AppDate component which present the current date when reports loaded
2. support toggle functionality - between local and UTC
3. use Switch component `https://v4.mui.com/components/switches/`

### Subjects:

1. Redux toolkit
2. Testing

### EX - 13

Redux toolkit

1. migrate the is utc state to the setting reducer
2. create new reducer for reports and store the numbers/precentage state inside
3. implement redirect to countries reports after loginSuccess
4. move register async operation to work with redux ( async function OR thunk)

### EX - 14

1. Write a unit test for region population calculation function - `calcPopulationPerRegion`

- test correct flow
- false positive
- null / string calculation

### EX - 15

1. Write a unit-ui test for setting the user name flow in redux
2. assert that the user is rendered to the header

missing features

- tests - unit tests => Testing Lib, unit testing and more
- redux toolkit => Starting Now...
- React.memo - component memoization => Done
- coucurrent examples => Done
- use Reducer + useContext => Done
- source-map-explorer => Done
- react 18 new features ( useDeffered ) => Done
- Dispatch ts issue => Done
- Line chart => Done

# Async operation with redux:

## Examples

- useState under the hood
- useEffect ( cleanup ) - aborting
- installing react material
- conditional rendering
- creating the country component

# Questions

1. Async await

- what will be the output here?

```javascript
async function getFromServer() {
  console.log(121);
  const result = await axios.get("http://mako1.co.il");
  console.log(333);
}

async function getFromServer2() {
  console.log(545);
  const result = await axios.get("http://mako2.co.il");
  console.log(777);
}

console.log(656);
getFromServer2();
getFromServer();
console.log(611);
```

### Useefffect Cleanup example

```javascript
// useEffect - side effects , call api, subscribe events, manipulate DOM
// useState - how it really works?

function App() {
  const [team, setTeam] = useState("Brazil");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      console.log("Resize-Window");
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("CleanUp");
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}
```
