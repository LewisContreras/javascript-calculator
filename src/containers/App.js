import { Center, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

function App() {
  const [ecuation, setEcuation] = useState("")
  const [current, setCurrent] = useState(0)
  const [previous, setPrevious] = useState("")

  const handleClick = (e) =>{
    let targetContent = e.target.textContent
    if ( targetContent === "AC") {
      setEcuation("")
      setCurrent(0)
    }else if(targetContent === "/" || targetContent === "+" || targetContent === "-" || targetContent === "*" ){
      console.log("coincido pai")
      
      setCurrent(targetContent)
      setEcuation(ecuation + targetContent)
    }
    else if (current === 0) {
      setCurrent(targetContent)
      setEcuation(ecuation + targetContent)
    }
    else if(targetContent === "="){
      try {
        let calculus = eval(ecuation)
        setEcuation(ecuation + "=" + calculus)
        setCurrent(calculus)
      } catch (error) {
        console.log(error);
        setEcuation("")
        setCurrent(0)
      }
    }
    else{
      setCurrent(current + targetContent)
      setEcuation(ecuation + targetContent)
    }
    setPrevious(targetContent)
  }


  return (
    <ChakraProvider>
      <Center bg="teal.400" h="100vh" w="100vw" >
        <Grid gap={0.5} padding={1} templateColumns="1fr 1fr 1fr 1fr" w="300px" templateRows="repeat(6, 60px)" bg="blackAlpha.800" >
          <GridItem display="flex" flexDirection="column-reverse" alignItems="flex-end" colSpan={4} color="white"  >{current}
          <p>{ecuation}</p></GridItem>
          <GridItem cursor="pointer" onClick={(e) => handleClick(e)} display="flex" justifyContent="center" alignItems="center" colSpan={2} color="white" textAlign="center" bg="red.400" >AC</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.500" >/</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.500" >*</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.700">7</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.700">8</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.700">9</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.500">-</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.700">4</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.700">5</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.700">6</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.500">+</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.700">1</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.700">2</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.700">3</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" rowSpan={2} color="white" textAlign="center" bg="teal.800">=</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={2} color="white" textAlign="center" bg="gray.700">0</GridItem>
          <GridItem onClick={(e) => handleClick(e)} cursor="pointer" display="flex" justifyContent="center" alignItems="center" colSpan={1} color="white" textAlign="center" bg="gray.700">.</GridItem>


        </Grid>
      </Center>
    </ChakraProvider>
  );
}

export default App;
