import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, Button, IconButton, Image, Grid, Spinner, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';

// Null topBar and bottomNav for this screen to hide them, as per HTML
const ProfessionalEmailWriting = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/email-writing')
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load email writing data", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Layout topBar={null}>
                <Center h="100vh">
                    <Spinner size="xl" color="brand.primary" />
                </Center>
            </Layout>
        );
    }

    if (!data) {
        return (
            <Layout topBar={null}>
                <Center h="100vh">
                    <Text>Data not found.</Text>
                </Center>
            </Layout>
        );
    }

    return (
        <Layout topBar={null}>
            <Flex flexDir="column" minH="calc(100vh - 12rem)" w="full" overflowX="hidden">
                {/* TopAppBar */}
                <Flex 
                    as="header" position="fixed" top={0} left={0} w="full" zIndex={50} align="center" justify="space-between" px={6} py={4} 
                    bg="rgba(255,255,255,0.8)" backdropFilter="blur(24px)" boxShadow="0 20px 50px rgba(198,255,0,0.1)" borderBottomRadius="3rem"
                >
                    <IconButton 
                        icon={<Box as="span" className="material-symbols-outlined">arrow_back</Box>}
                        onClick={() => navigate(-1)}
                        w="12" h="12" borderRadius="full" bg="brand.surface-container-lowest" color="brand.primary" 
                        _hover={{ transform: 'scale(1.05)' }} _active={{ transform: 'scale(0.95)' }} transition="all 0.3s" aria-label="Go back"
                    />
                    <Heading as="h1" fontFamily="heading" fontWeight="bold" fontSize="xl" letterSpacing="tighter" color="brand.on-surface">
                        {data.title}
                    </Heading>
                    <IconButton 
                        icon={<Box as="span" className="material-symbols-outlined">more_vert</Box>}
                        variant="unstyled" w="12" h="12" borderRadius="full" color="brand.on-surface-variant"
                        _hover={{ transform: 'scale(1.05)' }} _active={{ transform: 'scale(0.95)' }} transition="all 0.3s" aria-label="More options"
                    />
                </Flex>

                <Box flex="1" pt={28} w="full" maxW={{ base: 'md', md: '2xl', lg: '4xl' }} mx="auto" spaceY={8} sx={{ '& > * + *': { marginTop: '2rem' } }}>
                    {/* Progress Bar */}
                    <Box px={2}>
                        <Flex justify="space-between" align="center" mb={2}>
                            <Text fontSize="xs" fontFamily="label" fontWeight="bold" color="brand.on-surface-variant" textTransform="uppercase" letterSpacing="wider">অগ্রগতি</Text>
                            <Text fontSize="xs" fontFamily="label" fontWeight="bold" color="brand.primary">{data.progress}%</Text>
                        </Flex>
                        <Box h="3" w="full" bg="brand.surface-container-high" borderRadius="full" overflow="hidden">
                            <Box h="full" bgGradient="linear(to-r, brand.primary, brand.primary-container)" w={`${data.progress}%`} borderRadius="full" />
                        </Box>
                    </Box>

                    {/* Hero Card */}
                    <Box position="relative" bg="brand.surface-container-low" borderRadius="xl" overflow="hidden" p={6} mt={4} zIndex={10} boxShadow="0 10px 30px rgba(0,0,0,0.05)">
                        <Box position="absolute" top="-10" right="-10" w="40" h="40" bg="brand.primary" opacity={0.2} borderRadius="full" filter="blur(24px)" zIndex={0} />
                        <Flex position="relative" zIndex={10} flexDir={{ base: 'column', md: 'row' }} gap={6} align="center">
                            <Box w={{ base: 'full', md: '50%' }} borderRadius="lg" overflow="hidden" boxShadow="xl" position="relative" aspectRatio={{ base: '16/9', md: '1/1' }}>
                                <Image 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACzlIbsPBjuX4waXxrtt8YBg-Be6k9-06K5x-yz1eUTP6BPIGlqmSim0G8pZFEOuQ8Bxhwy_j0Yqbl0yzmnLGs_59W_m-2z6Wbk_P5e1SIW-vDWWlgway_aoBC--joOPstVECsMEcJWxGrF8BzcXmokakWtFYMF0BwUZhY0N6RiZdHUpaz5l5W_BX2-NwMXzMweVwL-TN5OeLSF41ERY4Ib8uPE9ESp9ffKbkTJttXttBZL4Ve8UXtaIJUdDMf4otwzP5-xET1" 
                                    w="full" h="full" objectFit="cover" mixBlendMode="multiply" opacity={0.9} transform="scale(1.05)" _hover={{ transform: 'scale(1.1)' }} transition="transform 0.7s"
                                />
                            </Box>
                            <Box w={{ base: 'full', md: '50%' }} spaceY={2} sx={{ '& > * + *': { marginTop: '0.5rem' } }}>
                                <Box display="inline-block" px={3} py={1} bg="brand.secondary-container" color="brand.on-secondary-container" fontSize="xs" fontFamily="label" fontWeight="bold" borderRadius="full">
                                    মডিউল ৩
                                </Box>
                                <Heading as="h2" fontFamily="heading" fontSize="3xl" fontWeight="bold" lineHeight="tight" letterSpacing="tight" color="brand.on-surface">
                                    {data.sections[0].title}
                                </Heading>
                            </Box>
                        </Flex>
                    </Box>

                    {/* Content */}
                    <Box spaceY={6} px={2} sx={{ '& > * + *': { marginTop: '1.5rem' } }}>
                        <Text fontFamily="body" fontSize="base" lineHeight="relaxed" color="brand.on-surface-variant">
                            {data.sections[0].content}
                        </Text>
                        
                        {/* Tip Card */}
                        <Box bg="brand.surface-container-highest" borderRadius="lg" p={5} position="relative" overflow="hidden" role="group" transition="all 0.3s" _hover={{ boxShadow: '0 8px 25px rgba(198,255,0,0.15)' }}>
                            <Box position="absolute" left={0} top={0} bottom={0} w={2} bg="brand.primary" />
                            <Flex align="flex-start" gap={4}>
                                <Flex w="10" h="10" borderRadius="full" bg="rgba(76,100,0,0.2)" align="center" justify="center" shrink={0}>
                                    <Box as="span" className="material-symbols-outlined fill-icon" color="brand.primary">lightbulb</Box>
                                </Flex>
                                <Box>
                                    <Heading as="h3" fontFamily="heading" fontWeight="bold" fontSize="lg" mb={1} color="brand.on-surface">টিপ</Heading>
                                    <Text fontFamily="body" fontSize="sm" fontWeight="medium" color="brand.on-surface-variant">
                                        সাবজেক্ট লাইন সংক্ষিপ্ত এবং স্পষ্ট রাখুন। মূল বিষয়টি ৫-৭ শব্দের মধ্যে তুলে ধরার চেষ্টা করুন।
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>

                        {/* Good vs Bad Section */}
                        <Box spaceY={4} pt={4} sx={{ '& > * + *': { marginTop: '1rem' } }}>
                            <Heading as="h3" fontFamily="heading" fontWeight="bold" fontSize="xl" color="brand.on-surface">উদাহরণ</Heading>
                            <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={4}>
                                {/* Bad Example */}
                                <Flex flexDir="column" gap={2} bg="rgba(176,37,0,0.05)" border="1px solid" borderColor="rgba(176,37,0,0.2)" borderRadius="lg" p={4}>
                                    <Flex align="center" gap={2} color="brand.error">
                                        <Box as="span" className="material-symbols-outlined" fontSize="sm">cancel</Box>
                                        <Text fontFamily="label" fontWeight="bold" fontSize="xs" textTransform="uppercase">এড়িয়ে চলুন</Text>
                                    </Flex>
                                    <Text fontFamily="body" fontSize="sm" color="brand.on-surface" bg="brand.surface-container-lowest" p={3} borderRadius="md" boxShadow="sm" border="1px solid" borderColor="rgba(171,173,174,0.15)">
                                        "হ্যালো, আমার একটা প্রশ্ন ছিল আগামী সপ্তাহের মিটিং নিয়ে"
                                    </Text>
                                </Flex>

                                {/* Good Example */}
                                <Flex flexDir="column" gap={2} position="relative" bg="rgba(76,100,0,0.05)" border="1px solid" borderColor="rgba(76,100,0,0.3)" borderRadius="lg" p={4}>
                                    <Box position="absolute" top="-3" right="-3" w="16" h="16" bg="brand.primary" opacity={0.1} borderRadius="full" filter="blur(16px)" zIndex={0} />
                                    <Flex align="center" gap={2} color="brand.primary" zIndex={10}>
                                        <Box as="span" className="material-symbols-outlined" fontSize="sm">check_circle</Box>
                                        <Text fontFamily="label" fontWeight="bold" fontSize="xs" textTransform="uppercase">সেরা অভ্যাস</Text>
                                    </Flex>
                                    <Text fontFamily="body" fontSize="sm" fontWeight="bold" color="brand.on-surface" bg="brand.surface-container-lowest" p={3} borderRadius="md" boxShadow="sm" border="1px solid" borderColor="rgba(76,100,0,0.2)" zIndex={10}>
                                        "প্রশ্ন: মার্কেটিং মিটিং (১৫ মে)"
                                    </Text>
                                </Flex>
                            </Grid>
                        </Box>
                    </Box>

                    {/* Action Button */}
                    <Box pt={8} pb={12}>
                        <Button 
                            w="full" bg="brand.primary" color="brand.on-primary" fontFamily="heading" fontWeight="bold" fontSize="lg" py={7} borderRadius="full" 
                            boxShadow="0 10px 30px rgba(198,255,0,0.3)" _hover={{ bg: 'brand.primary-container', boxShadow: '0 15px 40px rgba(198,255,0,0.5)', transform: 'translateY(-4px)' }} 
                            transition="all 0.3s" rightIcon={<Box as="span" className="material-symbols-outlined">arrow_forward</Box>}
                        >
                            পরবর্তী পাঠ
                        </Button>
                    </Box>
                </Box>
            </Flex>
        </Layout>
    );
};

export default ProfessionalEmailWriting;
