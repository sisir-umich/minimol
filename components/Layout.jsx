import Head from 'next/head';
import { Box } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => (
    <>
        <Head>
            <title>minimol</title>
        </Head>
        <Box maxWidth="1280px" m="auto">
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
);

export default Layout;