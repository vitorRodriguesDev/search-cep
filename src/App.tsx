import { useState } from "react";
import { Container } from "./styles"
import { Header, Input, CardBox} from "./components"
import { UseFetch } from "./hooks/useFetch";
import { BASE_URL } from "./constants/BaseUrl";

function App() {
  const [input, setInput] = useState<string>('')
  
  const {data} = UseFetch(`${BASE_URL}/${input}/json`)

  return (
    <>
      <Header />
      <Container>
      <Input  placeholder="Search Cep..." onChange={(e) => setInput(e.target.value)} />
      <CardBox data={data} />
      <div></div>
    </Container>
    </>
  )
}

export default App
