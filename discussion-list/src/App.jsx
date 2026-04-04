export default function App() {
  const myList = ['Batman', 'Commissioner Gordon', 'Alfred'];

  return (
    <ul>
      {
      myList.map( (item) => (
        <li>{item}</li>
      ))
      }

    </ul>



  )
};
