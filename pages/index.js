import { useEffect, useState, Fragment } from "react";
import { Box } from '@chakra-ui/react';
import News from '../components/News';
import Search from '../components/Search';

import * as tf from "@tensorflow/tfjs";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner"


export default function Home() {

  const [query, setQuery] = useState("today");
  const [model, setModel] = useState(null);
  const [metadata, setMetadata] = useState(null);

  const load = async () => {
    console.log("Starting to load model...");
    const loadedModel = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json');
    const metadataJson = await fetch("https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json");
    const loadedMetadata = await metadataJson.json();
    setModel(loadedModel);
    setMetadata(loadedMetadata);
    console.log("CNN Model Loaded");
  }

  useEffect(() => {
    load()
  }, [])

  console.log(`Rendering with the query: ${query}`);

  if (model === null || metadata === null) {
    return (
      <Box>
        Loading
      </Box>
    )
  }

  return (
    <Box>
      <Search setQuery={setQuery}></Search>
      <News query={query} model={model} metadata={metadata}></News>
    </Box>
  );
}
