#### components advantages
1. easy structure => 
2. Re-use => components that are reoccuring

#### points
1. npm start is defined in package.json
2. 

components are functions that return UI
component names are to start in upper case or rendering fails

a fragment is used to encapsulate multiple tags into one and eliminates the need to use div or other tags unnecessarily (<></>)

Start component names with capital letters

components that are passed in tags in react are called props and they are used to make components dynamic and are passed in object form

props are read only not by syntax but as a practice which is strongly recommended

numbers cannot be passed in string it must be passed in expressions using {}

objects are put in double curly brackets and must be camel case

UNDERSTAND CHANNEL PROPS

{...obj} -> spread operator used to use objects in return statements ES6 syntax

short circuiting
{/* <div className="channel">{channel}{verified ? "✅": null}</div>method3 */}
                <div className="channel">{channel}{verified && "✅"}</div>      {/*method4: short circuiting*/}
                to remove extra null line

custom events are the events that are defined by the programmer
ex- onClick event defined in a jsx component file instead of an html component
handled using props since functions are also treated as variables in js so they are passed as props

Event bubbling => if you click an event then it is propogated from that element to its parent or rather to the next level
-> this is stopped using Event objects
any handler function has a default argument/parameter which can be accessed by using e(example given) and upon printing it is a SyntheticBaseEvent

SyntheticBaseEvent => it is a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, except the events work itentically across all browsers.

State => state is a built-in react object that is used to contain data or information about the component. A component's state can change over time; whenever it changes the component re-renders.

Hooks => These are functions that let you "hook into" react state and lifecycle features from function components. Hooks don't work inside classes - they let you use React without classes.

lifting state up => to send a function of data of an parent component from a child component