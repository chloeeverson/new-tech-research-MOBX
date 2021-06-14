import React, {useState, useContext, createContext} from 'react';
import {useLocalStore, useObserver} from 'mobx-react';

//defined context - so can provide values at all levels of components
// without having to pass down through props
const StoreContext = createContext();

//took context to build out provider which wraps around children components
//within it defining mobX store
const StoreProvider = ({children}) => {
  //store has three pieces:
  const store = useLocalStore(() => ({
    //pets property which is an array
    pets: ['dog'],
    //addPet function which will mutate the pets property by adding new pet to array
    addPet: pet => {
      store.pets.push(pet); 
    },
    //computed pet count value that will return number of pets,
    //based on our pets array state
    get petCount(){
      return store.pets.length;
    } 
  }));

  return (
    //make store the value of context provider so its available to all children its wrapping around
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};


const PetsHeader = () => {
  //accessing store through context
  const store = useContext(StoreContext);
  //useObserver hook in order to observe any changes to store
  //receives function and returns pet count to render 
  return useObserver(() => <h1>{store.petCount} Pets!</h1>)
}; 

const PetsList = () => {
  //accessing store through context
  const store = useContext(StoreContext);
  //useObserver hook in order to observe any changes to store
  //receives function and returns pets array to render 
  return useObserver(() => (
    <ul>
      {store.pets.map(pet => (
        <li key={pet}>{pet}</li>
      ))}
    </ul>
  ));
};

const PetsForm = () => {
  //accessing store through context 
  //in order to call add Pet function to pass in new pet to add 
  const store = useContext(StoreContext);
  //create local state for new pet to be added 
  const [pet, setPet] = useState('');

  return(
    <form 
      onSubmit={e => {
        //on submit add local state pet to pet array in store
        store.addPet(pet);
        //reset pet state to empty to allow for other pets to be added
        setPet('');
        //prevents refresh for form
        e.preventDefault();
      }}
    >
      {/* input field for adding pet - which input becomes pet local state */}
      <input type="text" value={pet} onChange={e => {
        setPet(e.target.value);
      }}
    />
    {/* button for submitting form  */}
    <button type="submit">Add</button>
    </form>

  );
};

function App() {
  return (
    //wrap provider around all components to become its children
    <StoreProvider>
      <main>
        <PetsHeader />
        <PetsForm />
        <PetsList  />
      </main>
    </StoreProvider>
  );
}

export default App;
