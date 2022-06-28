import Link from 'next/link';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => (
    <Flex p="2" justifyContent="center">
        <Box fontSize="md" color='grat.400'>
            <Text _hover={{color: "tomato"}}>
                <Link href="https://sisirpotluri.com">
                    Source code by Sisir Potluri
                </Link>
            </Text>
        </Box>
    </Flex>
);

export default Footer;