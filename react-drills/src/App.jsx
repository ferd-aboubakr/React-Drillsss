import Greeting from './drills/Greeting';
import Counter from  './drills/Counter'
import Parent from   './drills/Parent-Child/Parent'


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

    </div>
  );
}

export default App;