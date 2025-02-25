import Hello from './assets/Hello';
import Contact from './assets/Contac';

function App() {
  const helloData = [
    { name: 'Witthawat', message: 'hi there' },
    { name: 'Tom', message: 'Hello ...' }
  ];

  return (
    <div>
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email = "s6606021610184@email.kmutnb.ac.th" phone = "0929211857" />
    </div>
  );
}

export default App;
