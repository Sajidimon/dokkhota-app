import React from 'react';
import { Box, Heading, Text, Flex, Grid, GridItem, Image, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            {/* Welcome Text */}
            <Box mb={6} ml={2}>
                <Heading as="h1" fontSize="4xl" fontFamily="heading" fontWeight="900" letterSpacing="tighter" color="brand.on-surface" mb={1}>
                    Hey Reyel
                </Heading>
                <Text color="brand.on-surface-variant" fontFamily="body">
                    আজ আপনার দক্ষতা বৃদ্ধি করতে প্রস্তুত?
                </Text>
            </Box>

            {/* Hero Card: Continue Learning */}
            <Box as="section" mb={10} position="relative">
                {/* Organic highlight blob behind card */}
                <Box 
                    position="absolute" 
                    top="-4" 
                    right="-4" 
                    w="32" 
                    h="32" 
                    bg="brand.primary-container" 
                    borderRadius="full" 
                    mixBlendMode="multiply" 
                    filter="blur(24px)" 
                    opacity={0.6} 
                    zIndex={0} 
                />
                <Box 
                    position="relative" 
                    zIndex={10} 
                    bg="brand.surface-container-highest" 
                    borderRadius="xl" 
                    p={6} 
                    boxShadow="0 20px 40px -15px rgba(0,0,0,0.1)" 
                    overflow="hidden"
                >
                    {/* Decorative background image inside card */}
                    <Box position="absolute" bottom="-10" right="-10" w="48" h="48" opacity={0.2}>
                        <Image 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiVsRWD6UE85P9yUqSVz9oO1_eoTh2tWqULjWivcBrazkeq9GQJQrYbh20vWjjbAmXTUcNcinFF5tm5ujoW6SPjfnAHue6XE2pU5hekXKQzra4utySmu2-LptjGI9W7LffQndC1H0ZOidZXXDHyH2wkRF8z7Cp1QlxrSOUJ6tXbJOzI6dWj5ntvJKMXbFk63c_MeItRXLtwYWOyoOzT-3vdoFf3GZsIKHOT1hKGevr7CPkk3iiK2sPvMiAu41PnYYj5MWkmjlI" 
                            w="full" h="full" objectFit="cover" borderRadius="full" 
                        />
                    </Box>

                    <Box display="inline-block" px={3} py={1} bg="brand.secondary-container" color="brand.on-secondary-container" borderRadius="full" fontSize="xs" fontWeight="bold" textTransform="uppercase" letterSpacing="wider" mb={4}>
                        চলমান
                    </Box>
                    <Heading as="h2" fontSize="2xl" fontFamily="heading" fontWeight="bold" color="brand.on-surface" lineHeight="tight" mb={2} pr={12}>
                        প্রফেশনাল ইমেল রাইটিং
                    </Heading>
                    <Text color="brand.on-surface-variant" fontSize="sm" mb={6}>
                        Module 3: Subject Lines that Work
                    </Text>

                    {/* Progress Bar */}
                    <Box mb={6}>
                        <Flex justify="space-between" fontSize="xs" fontWeight="bold" mb={2}>
                            <Text color="brand.primary">65% Complete</Text>
                            <Text color="brand.on-surface-variant">15 mins left</Text>
                        </Flex>
                        <Box h="2" w="full" bg="brand.surface-container-high" borderRadius="full" overflow="hidden">
                            <Box h="full" bgGradient="linear(to-r, brand.primary, brand.primary-container)" w="65%" borderRadius="full" boxShadow="0 0 10px #C6FF00" />
                        </Box>
                    </Box>

                    <Button 
                        w="full" 
                        py={6} 
                        bg="brand.primary" 
                        color="brand.on-primary" 
                        borderRadius="xl" 
                        fontFamily="heading" 
                        fontWeight="bold" 
                        fontSize="lg" 
                        boxShadow="0 10px 20px -10px #C6FF00" 
                        _hover={{ transform: 'scale(1.02)' }}
                        rightIcon={<Box as="span" className="material-symbols-outlined fill-icon" fontSize="xl">play_arrow</Box>}
                        onClick={() => navigate('/email-writing')}
                    >
                        শেখা শুরু করুন
                    </Button>
                </Box>
            </Box>

            {/* Explore Skills Grid */}
            <Box as="section" mb={12}>
                <Heading as="h3" fontSize="2xl" fontFamily="heading" fontWeight="bold" mb={6} color="brand.on-surface" display="flex" alignItems="center" gap={2}>
                    <Box as="span" w="2" h="6" bg="brand.primary-container" display="inline-block" borderRadius="full" />
                    দক্ষতা অন্বেষণ করুন
                </Heading>
                
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {/* Skill 1 */}
                    <Box 
                        bg="brand.surface-container-low" 
                        borderRadius="lg" 
                        p={5} 
                        position="relative" 
                        overflow="hidden" 
                        role="group" 
                        cursor="pointer"
                        _hover={{ bg: "brand.surface-variant" }} 
                        transition="colors 0.2s"
                        onClick={() => navigate('/quizzes')}
                    >
                        <Box position="absolute" right="-4" bottom="-4" w="20" h="20" bg="brand.secondary-container" borderRadius="full" opacity={0.5} />
                        <Box as="span" className="material-symbols-outlined" fontSize="4xl" color="brand.secondary" mb={4} position="relative" zIndex={10}>devices</Box>
                        <Heading as="h4" fontFamily="heading" fontWeight="bold" color="brand.on-surface" position="relative" zIndex={10} lineHeight="tight" fontSize="lg">
                            ডিজিটাল<br/>সাক্ষরতা
                        </Heading>
                    </Box>

                    {/* Skill 2 */}
                    <Box 
                        bg="brand.surface-container-low" 
                        borderRadius="lg" 
                        p={5} 
                        position="relative" 
                        overflow="hidden" 
                        role="group" 
                        cursor="pointer"
                        _hover={{ bg: "brand.surface-variant" }} 
                        transition="colors 0.2s"
                        onClick={() => navigate('/quizzes')}
                    >
                        <Box position="absolute" right="-4" bottom="-4" w="20" h="20" bg="brand.primary-container" borderRadius="full" opacity={0.5} />
                        <Box as="span" className="material-symbols-outlined" fontSize="4xl" color="brand.primary" mb={4} position="relative" zIndex={10}>work</Box>
                        <Heading as="h4" fontFamily="heading" fontWeight="bold" color="brand.on-surface" position="relative" zIndex={10} lineHeight="tight" fontSize="lg">
                            ক্যারিয়ারের<br/>মূলকথা
                        </Heading>
                    </Box>

                    {/* Skill 3 */}
                    <Box 
                        bg="brand.surface-container-low" 
                        borderRadius="lg" 
                        p={5} 
                        position="relative" 
                        overflow="hidden" 
                        role="group" 
                        cursor="pointer"
                        _hover={{ bg: "brand.surface-variant" }} 
                        transition="colors 0.2s"
                        onClick={() => navigate('/quizzes')}
                    >
                        <Box position="absolute" right="-4" bottom="-4" w="20" h="20" bg="#ffb74d" borderRadius="full" opacity={0.3} />
                        <Box as="span" className="material-symbols-outlined" fontSize="4xl" color="#f57c00" mb={4} position="relative" zIndex={10}>account_balance_wallet</Box>
                        <Heading as="h4" fontFamily="heading" fontWeight="bold" color="brand.on-surface" position="relative" zIndex={10} lineHeight="tight" fontSize="lg">
                            আর্থিক<br/>সাক্ষরতা
                        </Heading>
                    </Box>

                    {/* Skill 4 */}
                    <Box 
                        bg="brand.surface-container-low" 
                        borderRadius="lg" 
                        p={5} 
                        position="relative" 
                        overflow="hidden" 
                        role="group" 
                        cursor="pointer"
                        _hover={{ bg: "brand.surface-variant" }} 
                        transition="colors 0.2s"
                        onClick={() => navigate('/quizzes')}
                    >
                        <Box position="absolute" right="-4" bottom="-4" w="20" h="20" bg="#4dd0e1" borderRadius="full" opacity={0.3} />
                        <Box as="span" className="material-symbols-outlined" fontSize="4xl" color="#0097a7" mb={4} position="relative" zIndex={10}>psychology</Box>
                        <Heading as="h4" fontFamily="heading" fontWeight="bold" color="brand.on-surface" position="relative" zIndex={10} lineHeight="tight" fontSize="lg">
                            জীবন<br/>দক্ষতা
                        </Heading>
                    </Box>
                </Grid>
            </Box>

            {/* Quick Tools Scroller */}
            <Box as="section" mb={8}>
                <Heading as="h3" fontSize="2xl" fontFamily="heading" fontWeight="bold" mb={6} color="brand.on-surface" display="flex" alignItems="center" gap={2}>
                    <Box as="span" w="2" h="6" bg="brand.secondary-container" display="inline-block" borderRadius="full" />
                    দ্রুত সরঞ্জাম
                </Heading>
                
                <Flex 
                    gap={4} 
                    overflowX="auto" 
                    pb={4} 
                    css={{ scrollSnapType: "x mandatory" }} 
                    mx="-4" 
                    px={4}
                    sx={{
                        '&::-webkit-scrollbar': {
                            height: '6px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'transparent',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: 'rgba(0, 0, 0, 0.2)',
                            borderRadius: 'full',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: 'rgba(0, 0, 0, 0.3)',
                        }
                    }}
                >
                    {/* Tool 1 */}
                    <Flex 
                        minW="240px" 
                        css={{ scrollSnapAlign: "center" }} 
                        bg="brand.surface-container-highest" 
                        borderRadius="lg" 
                        p={5} 
                        direction="column" 
                        justify="space-between" 
                        border="1px solid" 
                        borderColor="rgba(171, 173, 174, 0.15)" 
                        boxShadow="sm"
                        cursor="pointer"
                        _hover={{ bg: "brand.surface-variant" }}
                        onClick={() => navigate('/email-templates')}
                    >
                        <Flex justify="space-between" align="flex-start" mb={4}>
                            <Flex w="12" h="12" bg="brand.secondary-container" color="brand.on-secondary-container" borderRadius="full" align="center" justify="center">
                                <Box as="span" className="material-symbols-outlined">description</Box>
                            </Flex>
                            <Box bg="brand.surface" color="brand.on-surface-variant" fontSize="10px" textTransform="uppercase" fontWeight="bold" px={2} py={1} borderRadius="full">
                                Template
                            </Box>
                        </Flex>
                        <Box>
                            <Heading as="h4" fontFamily="heading" fontWeight="bold" color="brand.on-surface" mb={1} fontSize="md">
                                সিভি টেমপ্লেট
                            </Heading>
                            <Text fontSize="xs" color="brand.on-surface-variant">
                                Build a professional resume in minutes.
                            </Text>
                        </Box>
                    </Flex>

                    {/* Tool 2 */}
                    <Flex 
                        minW="240px" 
                        css={{ scrollSnapAlign: "center" }} 
                        bg="brand.surface-container-highest" 
                        borderRadius="lg" 
                        p={5} 
                        direction="column" 
                        justify="space-between" 
                        border="1px solid" 
                        borderColor="rgba(171, 173, 174, 0.15)" 
                        boxShadow="sm"
                        cursor="pointer"
                        _hover={{ bg: "brand.surface-variant" }}
                        onClick={() => navigate('/dictionary')}
                    >
                        <Flex justify="space-between" align="flex-start" mb={4}>
                            <Flex w="12" h="12" bg="brand.primary-container" color="brand.on-primary-container" borderRadius="full" align="center" justify="center">
                                <Box as="span" className="material-symbols-outlined">menu_book</Box>
                            </Flex>
                            <Box bg="brand.surface" color="brand.on-surface-variant" fontSize="10px" textTransform="uppercase" fontWeight="bold" px={2} py={1} borderRadius="full">
                                Reference
                            </Box>
                        </Flex>
                        <Box>
                            <Heading as="h4" fontFamily="heading" fontWeight="bold" color="brand.on-surface" mb={1} fontSize="md">
                                ব্যবহারিক অভিধান
                            </Heading>
                            <Text fontSize="xs" color="brand.on-surface-variant">
                                Jargon translated into plain English.
                            </Text>
                        </Box>
                    </Flex>

                    {/* Tool 3 */}
                    <Flex 
                        minW="240px" 
                        css={{ scrollSnapAlign: "center" }} 
                        bg="brand.surface-container-highest" 
                        borderRadius="lg" 
                        p={5} 
                        direction="column" 
                        justify="space-between" 
                        border="1px solid" 
                        borderColor="rgba(171, 173, 174, 0.15)" 
                        boxShadow="sm"
                        cursor="pointer"
                        _hover={{ bg: "brand.surface-variant" }}
                        onClick={() => navigate('/email-writing')}
                    >
                        <Flex justify="space-between" align="flex-start" mb={4}>
                            <Flex w="12" h="12" bg="brand.secondary-container" color="brand.on-secondary-container" borderRadius="full" align="center" justify="center">
                                <Box as="span" className="material-symbols-outlined">mail</Box>
                            </Flex>
                            <Box bg="brand.surface" color="brand.on-surface-variant" fontSize="10px" textTransform="uppercase" fontWeight="bold" px={2} py={1} borderRadius="full">
                                Course
                            </Box>
                        </Flex>
                        <Box>
                            <Heading as="h4" fontFamily="heading" fontWeight="bold" color="brand.on-surface" mb={1} fontSize="md">
                                ইমেল রাইটিং
                            </Heading>
                            <Text fontSize="xs" color="brand.on-surface-variant">
                                প্রফেশনাল ইমেল লেখার কোর্স।
                            </Text>
                        </Box>
                    </Flex>

                    {/* Tool 4 */}
                    <Flex 
                        minW="240px" 
                        css={{ scrollSnapAlign: "center" }} 
                        bg="brand.surface-container-highest" 
                        borderRadius="lg" 
                        p={5} 
                        direction="column" 
                        justify="space-between" 
                        border="1px solid" 
                        borderColor="rgba(171, 173, 174, 0.15)" 
                        boxShadow="sm"
                        cursor="pointer"
                        _hover={{ bg: "brand.surface-variant" }}
                        onClick={() => navigate('/interview-guide')}
                    >
                        <Flex justify="space-between" align="flex-start" mb={4}>
                            <Flex w="12" h="12" bg="brand.primary-container" color="brand.on-primary-container" borderRadius="full" align="center" justify="center">
                                <Box as="span" className="material-symbols-outlined">psychology</Box>
                            </Flex>
                            <Box bg="brand.surface" color="brand.on-surface-variant" fontSize="10px" textTransform="uppercase" fontWeight="bold" px={2} py={1} borderRadius="full">
                                Guide
                            </Box>
                        </Flex>
                        <Box>
                            <Heading as="h4" fontFamily="heading" fontWeight="bold" color="brand.on-surface" mb={1} fontSize="md">
                                ইন্টারভিউ গাইড
                            </Heading>
                            <Text fontSize="xs" color="brand.on-surface-variant">
                                ইন্টারভিউতে সফল হওয়ার গাইড।
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Layout>
    );
};

export default Home;
