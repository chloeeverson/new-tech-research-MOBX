# MobX

## About
In this project I explored a foreign technology to me: MobX.

MobX is a library that makes state management simple and scalable. 

MobX replaces Redux - the state management library I've been using for React projects up until now.

Unlike Redux, MobX states are mutable - meaning they are able to be changed. MobX observes the changes as they are mutating and keeps track of the changes for you using the useObserver function. 

While Redux creates a reducer that has an action that updates the store, Mobx has an action that updates an observable that causes a reaction whereever the observable is used. You have events that have actions and those actions modify the state (which are usually observables). When observables are updated they cause a reaction to the observed components that then cause a UI update. 

Benefits of MobX:
- There are less steps and changes are reflected automatically 
- Easier to get started, not much boilerplate to get going
- More flexible: lets you decide how many stores you want to have and how you're going to use them
- Has computes: can pull data out of state and make changes to it and display it back in components

## Installation
- npm install mobx 
- npm install mobx-react

## Pets Example

To test my understanding, I created an application that uses MobX to store pets, make changes to pets, and reflect those changes on the DOM. This utilizes MobX's unique features of mutability and computing. 

## Next Steps

Each week I will dedicate time to explore MobX further by researching/practicing one of the following bullet points:

- explore autorun feature
- creating multiple stores
- using MobX with server / database
- asynchronous actions

## Resources

- https://mobx.js.org/README.html
- https://www.youtube.com/watch?v=pnhIJA64ByY
- https://www.youtube.com/watch?v=UeRUT5H6XPI&t=194s


