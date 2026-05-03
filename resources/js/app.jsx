import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './theme';

import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import Tools from './Pages/Tools';
import Dictionary from './Pages/Dictionary';
import Login from './Pages/Login';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/dictionary" element={<Dictionary />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
