import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';

const Tools = () => {
    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/tools')
            .then(res => {
                setTools(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load tools", err);
                setLoading(false);
            });
    }, []);

    const featuredTool = tools.find(t => t.is_featured);
    const otherTools = tools.filter(t => !t.is_featured);
    return (
        <Layout>
            <Box pb={8} spaceY={8} sx={{ '& > * + *': { marginTop: '2rem' } }}>
                {/* Hero Section: Featured Tool */}
                {loading ? (
                    <Text color="brand.on-surface-variant">লোড হচ্ছে...</Text>
                ) : featuredTool && (
                    <Box as="section" position="relative" bg="brand.surface-container-low" borderRadius="xl" overflow="hidden" boxShadow="0 20px 40px rgba(0,0,0,0.05)">
                        <Box position="absolute" top="-10" right="-10" w="48" h="48" bg="brand.primary" borderRadius="full" filter="blur(3xl)" opacity={0.3} mixBlendMode="multiply" />
                        <Box position="absolute" bottom="-10" left="-10" w="48" h="48" bg="brand.secondary-container" borderRadius="full" filter="blur(3xl)" opacity={0.4} mixBlendMode="multiply" />
                        
                        <Flex p={8} position="relative" zIndex={10} direction={{ base: 'column', md: 'row' }} align="center" gap={8}>
                            <Box flex={1} spaceY={4} sx={{ '& > * + *': { marginTop: '1rem' } }}>
                                <Box display="inline-block" bg="brand.primary" color="brand.on-primary-fixed" px={3} py={1} borderRadius="full" fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="widest" fontFamily="label" boxShadow="sm">
                                    Featured
                                </Box>
                                <Heading as="h2" fontFamily="heading" fontSize={{ base: '4xl', md: '5xl' }} fontWeight="black" color="brand.on-surface" lineHeight="tight">
                                    {featuredTool.title}
                                </Heading>
                                <Text color="brand.on-surface-variant" fontSize="lg" maxW="md">
                                    {featuredTool.description}
                                </Text>
                                <Flex 
                                    as="button" mt={4} bg="brand.primary" color="brand.on-primary-fixed" fontWeight="bold" fontFamily="label" fontSize="lg" py={4} px={8} borderRadius="full" 
                                    boxShadow="0 10px 20px rgba(198,255,0,0.3)" _hover={{ transform: 'scale(1.05)' }} transition="transform 0.2s" align="center" gap={2}
                                    onClick={() => navigate('/email-templates')}
                                >
                                    শুরু করুন <Box as="span" className="material-symbols-outlined fill-icon">arrow_forward</Box>
                                </Flex>
                            </Box>
                            
                            <Flex w={{ base: 'full', md: '50%' }} justify="center">
                                <Box position="relative" w={{ base: '64', md: '80' }} h={{ base: '64', md: '80' }}>
                                    <Image 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXt19TaaS8LfrM5-TtgBkewIlOU-uZ-aKBXo9OS3UVPNyHH-6L0Z2-y1jE73So4qL2DZRUcv5WkRcC9-JjBLFYgh4vM77YCaOdrDRLlV46j9h1zO_fIZ-x0t0KqHJQ2yzYrHUF1TByr2vTmALb0Yzf4ihLAm10W8ca_V2nLo0uYlym1UauEM0anMo9CRqnne8nQWgGQVV_9zFAxGqLKKef4hXkhsdxv4UlMt9Qip3KPOnWSe14IzoL8TTEA_NTk2w_gDUABE-2" 
                                        w="full" h="full" objectFit="cover" borderRadius="xl" boxShadow="20px 20px 0px #C6FF00" transform="rotate(-3deg)" _hover={{ transform: 'rotate(0deg)' }} transition="transform 0.3s" border="4px solid" borderColor="brand.surface"
                                    />
                                </Box>
                            </Flex>
                        </Flex>
                    </Box>
                )}

                {/* Tool Categories */}
                <Box as="section" spaceY={6} sx={{ '& > * + *': { marginTop: '1.5rem' } }}>
                    <Heading as="h3" fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-surface" borderLeft="4px solid" borderColor="brand.primary" pl={4}>
                        আরও সরঞ্জাম
                    </Heading>
                    
                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }} gap={6}>
                        {loading ? (
                            <Text color="brand.on-surface-variant">লোড হচ্ছে...</Text>
                        ) : (
                            otherTools.map((tool, idx) => {
                                const linkTarget = tool.id === 3 ? '/interview-guide' : '#';
                                return (
                                    <Box key={tool.id} as={Link} to={linkTarget} role="group" display="block" bg="brand.surface-container-highest" borderRadius="lg" p={6} position="relative" overflow="hidden" transition="all 0.2s" _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}>
                                        <Box position="absolute" top="0" right="0" w="32" h="32" bg={idx % 2 === 0 ? "brand.secondary-container" : "brand.primary-container"} borderBottomLeftRadius="full" opacity={0.2} _groupHover={{ transform: 'scale(1.1)' }} transition="transform 0.2s" />
                                        <Flex w="14" h="14" bg="brand.surface" borderRadius="full" align="center" justify="center" mb={4} boxShadow="sm" _groupHover={{ bg: 'brand.primary' }} transition="colors 0.2s">
                                            <Box as="span" className="material-symbols-outlined" fontSize="3xl" color="brand.on-surface" _groupHover={{ color: 'brand.on-primary-fixed' }}>{tool.icon}</Box>
                                        </Flex>
                                        <Heading as="h4" fontFamily="heading" fontSize="xl" fontWeight="bold" color="brand.on-surface" mb={2}>{tool.title}</Heading>
                                        <Text color="brand.on-surface-variant" fontFamily="body">{tool.description}</Text>
                                    </Box>
                                );
                            })
                        )}
                    </Grid>
                </Box>
            </Box>
        </Layout>
    );
};

export default Tools;
