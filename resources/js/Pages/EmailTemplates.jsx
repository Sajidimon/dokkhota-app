import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, Grid, Image, Button, IconButton, useClipboard, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const CustomTopBar = () => {
    const navigate = useNavigate();
    return (
        <Flex 
            as="header" position="fixed" top={0} left={0} w="full" zIndex={50} align="center" justify="space-between" px={6} py={4} 
            bg="rgba(255,255,255,0.8)" backdropFilter="blur(24px)" boxShadow="0 4px 30px rgba(0,0,0,0.06)" bgGradient="linear(to-b, rgba(237,233,254,0.5), transparent)"
        >
            <IconButton 
                icon={<Box as="span" className="material-symbols-outlined" fontSize="2xl">arrow_back</Box>}
                onClick={() => navigate(-1)}
                variant="unstyled" w="10" h="10" borderRadius="full" color="brand.primary" 
                _hover={{ bg: 'rgba(198,255,0,0.1)' }} _active={{ transform: 'scale(0.95)' }} transition="all 0.2s" aria-label="Go back"
            />
            <Heading as="h1" fontFamily="heading" fontWeight="bold" fontSize="2xl" letterSpacing="tighter" color="brand.primary" textTransform="uppercase">
                ইমেল টেমপ্লেট
            </Heading>
            <Box w="10" /> {/* Placeholder for balance */}
        </Flex>
    );
};

const EmailTemplates = () => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('সব');
    const toast = useToast();

    useEffect(() => {
        fetch('/api/email-templates')
            .then(res => res.json())
            .then(data => {
                setTemplates(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load templates", err);
                setLoading(false);
            });
    }, []);

    const categories = ['সব', ...new Set(templates.map(t => t.category))];
    const filteredTemplates = activeCategory === 'সব' ? templates : templates.filter(t => t.category === activeCategory);

    const handleCopy = (content) => {
        navigator.clipboard.writeText(content);
        toast({
            title: "কপি হয়েছে",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "bottom"
        });
    };

    return (
        <Layout topBar={<CustomTopBar />}>
            <Box pb={8} spaceY={12} sx={{ '& > * + *': { marginTop: '3rem' } }}>
                {/* Introduction Header */}
                <Box position="relative" bg="brand.surface-container-low" borderRadius="xl" p={8} overflow="hidden" boxShadow="0 4px 30px rgba(0,0,0,0.02)">
                    <Box position="absolute" right="-10" top="-10" w="40" h="40" bg="brand.primary" opacity={0.2} borderRadius="full" filter="blur(3xl)" />
                    <Flex position="relative" zIndex={10} flexDir={{ base: 'column', md: 'row' }} align="center" gap={8}>
                        <Box flex="1">
                            <Heading as="h2" fontFamily="heading" fontSize="3xl" fontWeight="bold" color="brand.on-surface" mb={4} lineHeight="tight">
                                পেশাদার যোগাযোগ এখন আরও সহজ
                            </Heading>
                            <Text fontFamily="body" fontSize="lg" color="brand.on-surface-variant" maxW="2xl">
                                আমাদের প্রস্তুত করা ইমেল টেমপ্লেটগুলো ব্যবহার করে আত্মবিশ্বাসের সাথে ইন্টার্নশিপের আবেদন, নেটওয়ার্কিং এবং ফলো-আপ করুন।
                            </Text>
                        </Box>
                        <Box w={{ base: '32', md: '48' }} h={{ base: '32', md: '48' }} position="relative" flexShrink={0}>
                            <Image 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaP6ljoNDCrUN4HXkidrtMmu8FX8l1O24h_uB96qsdlBMel0IKr5vpMhlgZdBxpDK-StsIER0ASXOQlwhBZx-GSZ9b6tG-jwWZ3IHU5LBSjmhAUsBcJKzuBrcAKXIO1WymUzascMKdlcqi0hBNN-UFTv8UMHi6Ownv2EVHJV6Z0w9YiM6H3FYd7zKAkhSt6wHSZ5ADCS9Ma5-6xqAz1Ji9LhUsR4BITXQ-SgBPgHZ3XpvEL9wYKzFhfMsAsgCJDjddL7ndWbod" 
                                w="full" h="full" objectFit="cover" borderRadius="full" filter="drop-shadow(0 25px 25px rgba(0,0,0,0.15))" mixBlendMode="multiply" border="4px solid rgba(255,255,255,0.5)"
                            />
                        </Box>
                    </Flex>
                </Box>

                {/* Template Categories */}
                <Flex overflowX="auto" pb={4} gap={3} mx="-4" px={4} sx={{ '&::-webkit-scrollbar': { display: 'none' }, msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                    {categories.map((cat, idx) => (
                        <Button 
                            key={idx}
                            bg={activeCategory === cat ? "brand.primary" : "brand.surface-container"} 
                            color={activeCategory === cat ? "brand.on-primary" : "brand.on-surface"} 
                            fontFamily="body" fontWeight="bold" fontSize="sm" px={6} py={3} borderRadius="full" letterSpacing="wide" 
                            boxShadow={activeCategory === cat ? "md" : "none"}
                            _hover={{ bg: activeCategory === cat ? 'brand.primary-dim' : 'brand.surface-container-high' }} 
                            transition="colors" flexShrink={0}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </Button>
                    ))}
                </Flex>

                {/* Template List */}
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
                    {loading ? (
                        <Text color="brand.on-surface-variant">লোড হচ্ছে...</Text>
                    ) : (
                        filteredTemplates.map((template, idx) => (
                            <Flex key={template.id} as="article" flexDir="column" bg="brand.surface-container-lowest" borderRadius="xl" p={6} position="relative" overflow="hidden" role="group" transition="box-shadow 0.3s" _hover={{ boxShadow: 'md' }}>
                                <Box position="absolute" top="0" right="0" w="24" h="24" bg={idx % 2 === 0 ? "rgba(76,100,0,0.1)" : "rgba(98,85,123,0.1)"} borderBottomLeftRadius="full" zIndex={0} />
                                <Box position="relative" zIndex={10} flex="1">
                                    <Flex align="flex-start" justify="space-between" mb={4}>
                                        <Heading as="h3" fontFamily="heading" fontWeight="bold" fontSize="xl" color="brand.on-surface" pr={4}>{template.title}</Heading>
                                        <Box as="span" className="material-symbols-outlined" color={idx % 2 === 0 ? "brand.primary" : "brand.secondary"} bg={idx % 2 === 0 ? "rgba(76,100,0,0.1)" : "rgba(98,85,123,0.1)"} p={2} borderRadius="full">mail</Box>
                                    </Flex>
                                    <Text fontFamily="body" fontSize="sm" color="brand.on-surface-variant" mb={6} noOfLines={3}>
                                        {template.description}
                                    </Text>
                                </Box>
                                <Flex gap={3} mt="auto" pt={4} borderTop="1px solid" borderColor="rgba(171,173,174,0.15)" position="relative" zIndex={10}>
                                    <Button onClick={() => handleCopy(template.content)} flex="1" bg="brand.secondary-container" color="brand.on-secondary-container" fontFamily="body" fontWeight="semibold" fontSize="sm" py={2.5} px={4} borderRadius="full" _hover={{ bg: 'brand.secondary-fixed-dim' }} transition="colors" leftIcon={<Box as="span" className="material-symbols-outlined" fontSize="sm">content_copy</Box>}>
                                        কপি করুন
                                    </Button>
                                    <Button flex="1" bgGradient="linear(to-r, brand.primary, brand.primary-container)" color="brand.on-primary" fontFamily="body" fontWeight="bold" fontSize="sm" py={2.5} px={4} borderRadius="full" boxShadow="sm" _hover={{ boxShadow: 'md' }} transition="all 0.3s">
                                        ব্যবহার করুন
                                    </Button>
                                </Flex>
                            </Flex>
                        ))
                    )}
                </Grid>
            </Box>
        </Layout>
    );
};

export default EmailTemplates;
