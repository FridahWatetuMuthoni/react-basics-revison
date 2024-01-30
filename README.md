# React Tutorial

## Props

Props are read-only properties that are shared between components.
A parent component can send data to a child component.

```javascript
<Component key=value />
```

## PropTypes

PropTypes is a mechanism that ensures that the passed value is of the correct datatype.
age: PropType.number

## defaultProps

defaultProps is the default values for props in case they are not
passed from the parent component.
name:'Guest'

## Sorting and Filtering

```javascript
const fruits = [
  {
    id: 1,
    name: "apple",
    calories: 95,
  },
  {
    id: 2,
    name: "orange",
    calories: 45,
  },
  {
    id: 3,
    name: "banana",
    calories: 105,
  },
  {
    id: 4,
    name: "coconut",
    calories: 159,
  },
];

//alphabetical sorting
fruits.sort((a, b) => a.name.localeCompare(b.name));

//reverse alphabetical order
fruits.sort((a, b) => b.name.localeCompare(a.name));

//numeric
fruits.sort((a, b) => a.calories - b.calories);

//reverse numeric
fruits.sort((a, b) => b.calories - a.calories);

const low_calories = fruits.filter(fruit => fruit.calories >= 100)
const high_calories = fruits.filter(fruit => fruit.calories <= 100>)
```

## Click Events

Click events occur when a user clicks a specific element.
This iteractions can be responded to by passing a callback to the onclick event handler

## React Hooks

React hooks are special functions that allow functional components to use react features without writting class components.
React Hooks inlcude, useState, useEffect, useContext, useReducer, useCallback and more.
useState => useState is a react hook that allows the creattion of a stateful variable and a setter function to update its value in the virtual DOM [name setName].

1:58:00
