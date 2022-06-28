import { Box, Input, Flex } from '@chakra-ui/react';
import React from 'react'

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {setQuery: props.setQuery};
        this.handler = this.handler.bind(this);
    }

    handler(event) {
        const { setQuery } = this.state;
        console.log("submitted");
        event.preventDefault();
        setQuery(event.target.query.value);
    }

    render() {
        return (
            <Flex flexWrap="wrap" justifyContent="center">
                <Box p="10">
                    <form onSubmit={this.handler}>
                        <Input variant='filled' bg='gray.50' color='tomato' id='query' placeholder='search' type='text'_placeholder={{ opacity: 0.6, color: 'inherit' }}/>
                        <Box>
                        </Box>
                    </form>
                </Box>
            </Flex>
        );
    }
}

export default Search;
