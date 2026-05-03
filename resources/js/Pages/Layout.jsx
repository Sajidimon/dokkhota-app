import React from 'react';
import { Box, Flex, HStack, Image, Text, IconButton, Center } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';

const TopAppBar = () => (
    <Flex 
        position="fixed" 
        top="0" 
        w="full" 
        zIndex="50" 
        justify="space-between" 
        align="center" 
        px={6} 
        h="5rem"
        bg="rgba(255, 255, 255, 0.8)"
        backdropFilter="blur(24px)"
        boxShadow="0 4px 30px rgba(0,0,0,0.06)"
    >
        <HStack spacing={3}>
            <Box w="10" h="10" borderRadius="full" overflow="hidden" border="2px solid" borderColor="brand.primary-container" boxShadow="lg">
                <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqKAuFP6ppaa6eUrO1iZIunb00A9mYW5nJiATwZhyfG9uqefyzup7hs2jB5-4q3A_OpzenKAZkOGbmdodHJJvwHyIyDVe5Ef6D8CDTrJJvUnQn_GlG_IV5lSMaOqyQMLmTpv4qbNAclrXeecxBE6TFf4RfQI5z_OzAwvxyITw_AOtQL5cOB9iJsvXD6_C9l1LKgv02-BJxYcVWzNIyS5ZM2Qycxhz9AxvSOXHsk_s9HCK3-h5bbkaq_33CQLC_fLA-cIaJ0-9Y" 
                    w="full" 
                    h="full" 
                    objectFit="cover" 
                />
            </Box>
            <Text fontSize="2xl" fontWeight="black" fontStyle="italic" fontFamily="heading" color="zinc.900" letterSpacing="tight">
                DOKHOTA
            </Text>
        </HStack>
        
        <Flex 
            as="button"
            position="relative"
            align="center" 
            justify="center" 
            w="10" 
            h="10" 
            borderRadius="full" 
            bg="brand.surface-container-high" 
            color="#C6FF00"
            _hover={{ opacity: 0.8 }}
            transition="opacity 0.2s"
        >
            <Box as="span" className="material-symbols-outlined">local_fire_department</Box>
            <Flex 
                position="absolute" 
                top="-1" 
                right="-1" 
                bg="brand.error" 
                color="brand.on-error" 
                fontSize="10px" 
                fontWeight="bold" 
                w="4" 
                h="4" 
                align="center" 
                justify="center" 
                borderRadius="full"
            >
                3
            </Flex>
        </Flex>
    </Flex>
);

const BottomNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { path: '/', icon: 'home', label: 'হোম', isActive: true },
        { path: '/jobs', icon: 'school', label: 'কুইজ', isActive: false },
        { path: '/tools', icon: 'handyman', label: 'সরঞ্জাম', isActive: false },
        { path: '/login', icon: 'person', label: 'প্রোফাইল', isActive: false },
    ];

    return (
        <Flex 
            position="fixed" 
            bottom="0" 
            w="full" 
            zIndex="50" 
            justify="space-around" 
            align="center" 
            pt={4} 
            pb={8} 
            px={4} 
            bg="rgba(255, 255, 255, 0.9)" 
            backdropFilter="blur(24px)"
            borderTopRadius="3rem"
            boxShadow="0 -10px 40px rgba(198,255,0,0.08)"
        >
            {navItems.map((item) => {
                const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '');
                
                if (isActive) {
                    return (
                        <Flex 
                            key={item.path}
                            as="button"
                            direction="column" 
                            align="center" 
                            justify="center"
                            bg="#C6FF00"
                            color="black"
                            borderRadius="full"
                            px={5}
                            py={2}
                            transform="scale(1.1)"
                            boxShadow="0 0 20px #C6FF00"
                            onClick={() => navigate(item.path)}
                        >
                            <Box as="span" className="material-symbols-outlined fill-icon" fontSize="2xl">{item.icon}</Box>
                            <Text fontFamily="body" fontWeight="bold" fontSize="10px" textTransform="uppercase" letterSpacing="widest" mt={1}>
                                {item.label}
                            </Text>
                        </Flex>
                    )
                }

                return (
                    <Flex 
                        key={item.path}
                        as="button"
                        direction="column" 
                        align="center" 
                        justify="center"
                        color="gray.400"
                        _hover={{ color: "#C6FF00" }}
                        transition="colors 0.2s"
                        onClick={() => navigate(item.path)}
                    >
                        <Box as="span" className="material-symbols-outlined" fontSize="2xl">{item.icon}</Box>
                        <Text fontFamily="body" fontWeight="bold" fontSize="10px" textTransform="uppercase" letterSpacing="widest" mt={1}>
                            {item.label}
                        </Text>
                    </Flex>
                );
            })}
        </Flex>
    );
};

const Layout = ({ children, topBar }) => {
    return (
        <Box minH="100vh" className="bg-wavy" pb="32">
            {topBar !== undefined ? topBar : <TopAppBar />}
            <Box pt="24" px={4} maxW="lg" mx="auto">
                {children}
            </Box>
            <BottomNav />
        </Box>
    );
};

export default Layout;
