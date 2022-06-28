import Link from 'next/link';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';

const Card = ({ news: { title, summary, link, published_date, country, author } }) => (
    <Flex flexWrap="wrap" w="450px" p="10" m="5" paddingTop="5" cursor="pointer" bg='gray.50' borderRadius="10">
        <Box>
            <Link href={link}>
                <Text fontSize="xl" _hover={{color: "tomato"}}>
                    {title.length > 100 ? `${title.substring(0, 100)}...` : title}
                </Text>
            </Link>
            <Text paddingTop="1">
                Published in {country} by {author ? author.length > 26 ? `${author.substring(0, 26)}...` : author : 'Unknown Author'}
            </Text>
            <Text>
                on {published_date.substring(5, 10)}
            </Text>
            <Text paddingTop="6">
                {summary.length > 500 ? `${summary.substring(0, 300)}...` : summary}
            </Text>
        </Box>
    </Flex>
);

export default Card;