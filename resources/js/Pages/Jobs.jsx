import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Flex, Grid, Image, Button, Icon } from '@chakra-ui/react';
import Layout from './Layout';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load jobs", err);
                setLoading(false);
            });
    }, []);
    return (
        <Layout>
            <Box pb={8} spaceY={8} sx={{ '& > * + *': { marginTop: '2rem' } }}>
                {/* Welcome Section with Organic Shape */}
                <Box 
                    position="relative" 
                    overflow="hidden" 
                    bg="brand.primary-container" 
                    borderRadius="xl" 
                    p={8} 
                    border="4px solid black" 
                    boxShadow="8px 8px 0px 0px rgba(0, 0, 0, 1)"
                >
                    <Box position="relative" zIndex={10}>
                        <Heading as="h2" fontFamily="heading" fontWeight="black" fontSize="4xl" color="black" lineHeight="none" mb={4}>
                            নতুন সুযোগ <br/>খুঁজছেন?
                        </Heading>
                        <Text color="brand.on-primary-container" fontWeight="semibold" maxW="200px">
                            আপনার পছন্দের ক্যাটাগরিতে সেরা চাকরির আপডেট পান প্রতিদিন।
                        </Text>
                        <Box mt={6}>
                            <Button 
                                bg="black" 
                                color="brand.primary-container" 
                                px={6} 
                                py={6} 
                                borderRadius="full" 
                                fontWeight="bold" 
                                _hover={{ transform: 'translateY(-2px)' }}
                                _active={{ transform: 'translateY(4px)' }}
                                rightIcon={<Box as="span" className="material-symbols-outlined">tune</Box>}
                            >
                                কাস্টমাইজ করুন
                            </Button>
                        </Box>
                    </Box>
                    <Box position="absolute" right="-10" bottom="-10" w="48" h="48" opacity={0.2}>
                        <Box as="span" className="material-symbols-outlined fill-icon" fontSize="12rem">work</Box>
                    </Box>
                </Box>

                {/* Feed List */}
                <Box sx={{ '& > * + *': { marginTop: '3rem' } }}>
                    {loading ? (
                        <Text color="brand.on-surface-variant">লোড হচ্ছে...</Text>
                    ) : jobs.length > 0 ? (
                        jobs.map((job) => (
                            <Box 
                                key={job.id}
                                as="article" 
                                role="group" 
                                position="relative" 
                                bg="brand.surface-container-lowest" 
                                borderRadius="xl" 
                                border="4px solid black" 
                                transition="all 0.2s"
                            >
                                {job.is_hot && (
                                    <Box 
                                        position="absolute" 
                                        top="-4" 
                                        left="-4" 
                                        bg="brand.secondary-container" 
                                        color="brand.on-secondary-container" 
                                        px={4} 
                                        py={1} 
                                        fontWeight="bold" 
                                        borderRadius="lg" 
                                        border="2px solid black" 
                                        zIndex={20} 
                                        transform="rotate(-2deg)"
                                    >
                                        HOT VACANCY
                                    </Box>
                                )}
                                <Box p={6} pt={6}>
                                    <Flex justify="space-between" align="flex-start" mb={4}>
                                        <Box>
                                            <Heading as="h3" color="black" fontFamily="heading" fontWeight="black" fontSize="2xl" textTransform="uppercase" mb={1}>
                                                {job.company}
                                            </Heading>
                                            <Text color="brand.primary-dim" fontFamily="heading" fontWeight="bold" fontSize="lg">
                                                {job.title}
                                            </Text>
                                        </Box>
                                        <Flex 
                                            as="button"
                                            w="10" h="10" align="center" justify="center" borderRadius="lg" border="2px solid black"
                                            _hover={{ bg: 'brand.secondary-container' }} transition="colors 0.2s"
                                        >
                                            <Box as="span" className="material-symbols-outlined">bookmark_border</Box>
                                        </Flex>
                                    </Flex>

                                    <Flex wrap="wrap" gap={2} mb={6}>
                                        <Box bg="brand.surface-container" color="brand.on-surface-variant" px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="bold" border="1px solid" borderColor="blackAlpha.200">
                                            {job.type}
                                        </Box>
                                        <Box bg="brand.surface-container" color="brand.on-surface-variant" px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="bold" border="1px solid" borderColor="blackAlpha.200">
                                            {job.location}
                                        </Box>
                                        <Box bg="brand.surface-container" color="brand.on-surface-variant" px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="bold" border="1px solid" borderColor="blackAlpha.200">
                                            {job.salary}
                                        </Box>
                                    </Flex>
                                    
                                    <Flex wrap="wrap" gap={2} mb={6}>
                                        {job.tags && job.tags.map((tag, idx) => (
                                            <Box key={idx} bg="brand.primary-container" color="black" px={2} py={0.5} borderRadius="md" fontSize="xs" fontWeight="bold">
                                                {tag}
                                            </Box>
                                        ))}
                                    </Flex>

                                    <Flex gap={4} align="center">
                                        <Button 
                                            flex={1} bg="brand.primary-fixed" color="black" fontFamily="heading" fontWeight="black" py={6} borderRadius="xl" border="4px solid black" 
                                            boxShadow="8px 8px 0px 0px rgba(0, 0, 0, 1)" _hover={{ transform: 'translate(4px, 4px)', boxShadow: 'none' }} transition="all 0.2s"
                                        >
                                            আবেদন করুন
                                        </Button>
                                    </Flex>
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Text color="brand.on-surface-variant">কোনো চাকরি পাওয়া যায়নি।</Text>
                    )}
                </Box>
            </Box>

            {/* Floating Action Button */}
            <Flex 
                as="button"
                position="fixed" 
                bottom="28" 
                right="6" 
                w="16" 
                h="16" 
                bg="#C6FF00" 
                color="black" 
                borderRadius="2xl" 
                align="center" 
                justify="center" 
                border="4px solid black" 
                boxShadow="6px 6px 0px 0px rgba(0,0,0,1)" 
                zIndex={40} 
                _active={{ transform: 'translateY(4px)', boxShadow: 'none' }} 
                transition="all 0.2s"
            >
                <Box as="span" className="material-symbols-outlined" fontSize="3xl" fontWeight="bold">notifications_active</Box>
            </Flex>
        </Layout>
    );
};

export default Jobs;
