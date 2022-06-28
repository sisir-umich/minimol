import Link from 'next/link';
import { Box, Flex } from '@chakra-ui/react';

const Header = () => (
    <Flex p="2" justifyContent="center">
        <Box fontSize="3xl" color='tomato' fontWeight="bold">
            <Link href="/" paddingLeft="2">minimol</Link>
        </Box>
    </Flex>
);

export default Header;