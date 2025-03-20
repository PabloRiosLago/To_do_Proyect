import supabase from "./Config/supabaseClient";
import Form from "./Components/Form";
import Tasks from "./Components/Tasks";

function App() {
  console.log(supabase);
  return (
    <>
      <Form />
      <Tasks />
    </>
  );
}

export default App;
