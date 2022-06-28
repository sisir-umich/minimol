import { useState } from "react";
import { Box } from '@chakra-ui/react';
import News from '../components/News';
import Search from '../components/Search';

export default function Home() {

  const [query, setQuery] = useState("today");

  console.log(`Rendering with the query: ${query}`);

  return (
    <Box>
      <Search setQuery={setQuery}></Search>
      <News query={query}></News>
    </Box>
  );
}
