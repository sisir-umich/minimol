import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
import { Flex } from '@chakra-ui/react';

import Card from '../components/Card'
import { baseUrl, credentials } from '../utils/fetchTools'

function News({ query }) {
    const [data, setData] = useState([]);

    console.log(`Rendering news for query: ${query}`);

    useEffect(() => {
        axios.get(`${baseUrl}/search?q=${query}&lang=en&page_size=8`, {
            headers: credentials
        })
        .then((response) => {
            console.log(response);
            const results = response.data.articles;
            setData(results);
        })
        .catch(error => console.error(`Error: ${error}`));
        console.log(data);
    });

    return (
        <div>
            <Flex flexWrap="wrap" justifyContent="center">
                {data && data.map((news) => <Card news={news} key={news.id} />)}
            </Flex>
        </div>
    );

}

function areEqual(query, nextQuery) {
    if (nextQuery === query) {
        return true;
    }
    return false;
}

export default React.memo(News, areEqual);