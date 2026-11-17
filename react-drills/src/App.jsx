import Greeting from './drills/Greeting';
import Counter from  './drills/Counter'
import Parent from   './drills/Parent-Child/Parent'
import UserList from './drills/UserList'
import LoginForm from './drills/LoginForm'


function App() {
  // Sample data for UserList drill
  const users = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'user' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>React Fundamentals Drills</h1>

      <hr />

      <h2>🎯 Drill 1: Greeting Component</h2>
      <Greeting name="React Dev" subtitle="Welcome to the drills!"/>

      <hr />

      <h2>🎯 Drill 2: Counter</h2>
      <Counter/>
      
      <hr />

      <h2>🎯 DRILL 3: Parent-Child Communication </h2>
      <Parent/>

      <hr />

     <h2>🎯 DRILL 4: Lists & Keys - STEP BY STEP GUIDE </h2>
      <UserList users = {[
     { id: 1, name: 'Alice', role: 'admin' },
     { id: 2, name: 'Bob', role: 'user' },
     { id: 3, name: 'Charlie', role: 'user' },
       ]} />
      
     <hr />
    <h2>🎯 DRILL 5: Controlled Form  </h2>
     <LoginForm/>
     <hr />



    </div>
  );
}

export default App;