import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, Grid, Image, Button, IconButton, Spinner, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const CustomTopBar = () => {
    const navigate = useNavigate();
    return (
        <Flex 
            as="header" position="fixed" top={0} left={0} w="full" zIndex={50} align="center" justify="space-between" px={6} py={4} 
            bg="rgba(255,255,255,0.8)" backdropFilter="blur(24px)" boxShadow="0 20px 40px rgba(0,0,0,0.06)"
        >
            <IconButton 
                icon={<Box as="span" className="material-symbols-outlined" fontSize="2xl">arrow_back</Box>}
                onClick={() => navigate(-1)}
                variant="unstyled" w="10" h="10" borderRadius="full" color="brand.on-surface" 
                _hover={{ bg: 'rgba(198,255,0,0.1)' }} _active={{ transform: 'scale(0.95)' }} transition="all 0.2s" aria-label="Go back"
            />
            <Heading as="h1" fontFamily="heading" fontWeight="bold" fontSize="lg" letterSpacing="tight" color="brand.on-surface">
                ইন্টারভিউ গাইড
            </Heading>
            <Flex w="10" h="10" borderRadius="full" overflow="hidden" bg="brand.surface-container-low" align="center" justify="center" p={1}>
                <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdniPaBA9yw7R7ARoI94HvRFpTq-tH2YecItdJwvZzYZzzrvvb4cN4M7LBwuImIIDktct7vwiph-kar1_hNwifJ-MWQWFFnCeCc37ycvhY8x5t-eipocNl1489Op61l0hZG8wcHlrKEv87L8FsmJ6Lk_ilGeD-tK7vbr34Vwatpy1PGM28RFUiyL5WS3urYCIQoISVtLRojscYXdHgKnxnjscMqZl_R6f-UPlpHvNh1k7aR1vh0WxMNZfeZgthkXF3zxyPdiTa" 
                    w="full" h="full" objectFit="cover" borderRadius="full"
                />
            </Flex>
        </Flex>
    );
};

const InterviewGuide = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/interview-guide')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load interview guide data", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Layout topBar={<CustomTopBar />}>
                <Center h="70vh">
                    <Spinner size="xl" color="brand.primary" />
                </Center>
            </Layout>
        );
    }

    if (!data) {
        return (
            <Layout topBar={<CustomTopBar />}>
                <Center h="70vh">
                    <Text>Data not found.</Text>
                </Center>
            </Layout>
        );
    }

    return (
        <Layout topBar={<CustomTopBar />}>
            <Box pb={8} spaceY={12} pt={{ base: 4, md: 8 }} sx={{ '& > * + *': { marginTop: '3rem' } }}>
                {/* Preparation Checklist Hero */}
                <Box position="relative" bg="brand.surface-container-low" borderRadius="xl" p={8} overflow="hidden">
                    <Box position="absolute" right="-10" top="-10" w="48" h="48" bg="brand.primary-container" opacity={0.4} borderRadius="full" filter="blur(3xl)" />
                    <Flex position="relative" zIndex={10} flexDir={{ base: 'column', md: 'row' }} gap={8} align="flex-start">
                        <Box flex="1" spaceY={6} sx={{ '& > * + *': { marginTop: '1.5rem' } }}>
                            <Box>
                                <Heading as="h2" fontFamily="heading" fontSize="3xl" fontWeight="bold" color="brand.on-surface" mb={2}>
                                    প্রস্তুতি চেকলিস্ট
                                </Heading>
                                <Text color="brand.on-surface-variant">ইন্টারভিউর আগে এই বিষয়গুলো নিশ্চিত করুন</Text>
                            </Box>
                            <Flex as="ul" flexDir="column" gap={4}>
                                {data.checklist.map(item => (
                                    <Flex key={item.id} as="li" align="center" gap={4} bg="brand.surface" borderRadius="lg" p={4} boxShadow="sm" border="1px solid" borderColor="rgba(171,173,174,0.15)">
                                        <Flex w="8" h="8" borderRadius="full" bg={item.status === 'done' ? "brand.primary-container" : "brand.surface-variant"} color={item.status === 'done' ? "brand.on-primary-container" : "brand.on-surface-variant"} align="center" justify="center">
                                            <Box as="span" className="material-symbols-outlined" fontSize="sm">{item.status === 'done' ? 'check' : 'pending'}</Box>
                                        </Flex>
                                        <Text fontWeight="medium" color="brand.on-surface">{item.text}</Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Box>
                        <Flex w={{ base: 'full', md: '33%' }} justify="center" align="center">
                            <Image 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZxWnJIKYB2jBEWkImrYOqiwPPVsepibzB2yQJaRuLDoY9EOE70fjpb8mUABXaw4f0DIbbW0lHa9PCgYNz_Q19XqDQszN4_ynse0OCOIyZse4y4Xo3AhbRgiDPbn_vuvJYwAopunQT244NfhIU_UDe-wFhgtD-dt-K-0BKzGWr7DBIGJUNg1JMyKx4zpjAVI0VxiWHswMZlpLOF_PYXUxLRpvsXKc6S3usT2xzBAnQOhjtzYmrkkTQVXstZdQcmp7NGZn4eOca" 
                                w="full" h="auto" borderRadius="xl" objectFit="cover" boxShadow="0 10px 30px rgba(0,0,0,0.1)" border="4px solid white" transform="rotate(2deg)"
                            />
                        </Flex>
                    </Flex>
                </Box>

                {/* Common Questions */}
                <Box as="section" spaceY={6} sx={{ '& > * + *': { marginTop: '1.5rem' } }}>
                    <Heading as="h2" fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-surface" display="flex" alignItems="center" gap={3}>
                        <Box as="span" className="material-symbols-outlined" color="brand.primary">forum</Box>
                        সাধারণ প্রশ্ন
                    </Heading>
                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={6}>
                        {data.questions.map(q => (
                            <Flex key={q.id} flexDir="column" justify="space-between" bg="brand.surface-container-highest" borderRadius="lg" p={6} boxShadow="sm" _hover={{ boxShadow: 'md' }} transition="box-shadow 0.2s">
                                <Heading as="h3" fontSize="xl" fontWeight="bold" color="brand.on-surface" mb={4}>{q.question}</Heading>
                                <Flex justify="flex-end" mt={4}>
                                    <Button bg="brand.secondary-container" color="brand.on-secondary-container" px={6} py={6} borderRadius="full" fontWeight="semibold" _hover={{ bg: 'brand.secondary-fixed-dim' }} transition="colors" rightIcon={<Box as="span" className="material-symbols-outlined" fontSize="sm">arrow_forward</Box>}>
                                        টিপস দেখুন
                                    </Button>
                                </Flex>
                            </Flex>
                        ))}
                    </Grid>
                </Box>

                {/* Body Language Tips */}
                <Box as="section" bg="brand.secondary-container" borderRadius="xl" p={8} position="relative" overflow="hidden">
                    <Box position="absolute" left="-20" bottom="0" w="64" h="64" bg="rgba(255,255,255,0.3)" borderRadius="full" filter="blur(3xl)" />
                    <Box position="relative" zIndex={10}>
                        <Heading as="h2" fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-secondary-container" mb={8} display="flex" alignItems="center" gap={3}>
                            <Box as="span" className="material-symbols-outlined">accessibility_new</Box>
                            বডি ল্যাঙ্গুয়েজ টিপস
                        </Heading>
                        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
                            {data.bodyLanguage.map((item, idx) => {
                                const rotations = ["-6deg", "6deg", "0deg"];
                                return (
                                    <Flex key={item.id} flexDir="column" align="center" textAlign="center" bg="rgba(255,255,255,0.6)" backdropFilter="blur(12px)" borderRadius="lg" p={6} boxShadow="sm">
                                        <Flex w="16" h="16" bg="brand.primary-container" color="brand.on-primary-container" borderRadius="full" align="center" justify="center" mb={4} transform={`rotate(${rotations[idx % 3]})`} boxShadow="lg">
                                            <Box as="span" className="material-symbols-outlined" fontSize="3xl">{item.icon}</Box>
                                        </Flex>
                                        <Heading as="h4" fontWeight="bold" fontSize="md" color="brand.on-surface" mb={2}>{item.title}</Heading>
                                        <Text fontSize="sm" color="brand.on-surface-variant">{item.desc}</Text>
                                    </Flex>
                                );
                            })}
                        </Grid>
                    </Box>
                </Box>

                {/* Mock Interview CTA */}
                <Flex as="section" flexDir="column" align="center" textAlign="center" bg="brand.primary" color="brand.on-primary" borderRadius="xl" p={8} position="relative" overflow="hidden" boxShadow="lg">
                    <Box position="absolute" inset={0} bgGradient="linear(to-r, brand.primary, brand.primary-container)" opacity={0.2} />
                    <Flex position="relative" zIndex={10} flexDir="column" align="center" spaceY={6} sx={{ '& > * + *': { marginTop: '1.5rem' } }}>
                        <Box as="span" className="material-symbols-outlined" fontSize="5xl">video_camera_front</Box>
                        <Heading as="h2" fontFamily="heading" fontSize="3xl" fontWeight="bold">মক ইন্টারভিউ</Heading>
                        <Text maxW="md" opacity={0.9}>আমাদের বিশেষজ্ঞ মেন্টরদের সাথে একটি ডেমো ইন্টারভিউ দিয়ে আপনার প্রস্তুতি যাচাই করুন।</Text>
                        <Button bg="white" color="brand.primary" px={8} py={7} borderRadius="xl" fontWeight="bold" fontSize="lg" _hover={{ bg: 'gray.100' }} transition="colors" boxShadow="md" mt={4}>
                            সেশন বুক করুন
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Layout>
    );
};

export default InterviewGuide;
