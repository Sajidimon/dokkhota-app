import React from 'react';
import { Box, Heading, Text, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import Layout from './Layout';

const Tools = () => {
    return (
        <Layout>
            <Box pb={8} spaceY={8} sx={{ '& > * + *': { marginTop: '2rem' } }}>
                {/* Hero Section: Featured Tool */}
                <Box as="section" position="relative" bg="brand.surface-container-low" borderRadius="xl" overflow="hidden" boxShadow="0 20px 40px rgba(0,0,0,0.05)">
                    <Box position="absolute" top="-10" right="-10" w="48" h="48" bg="brand.primary" borderRadius="full" filter="blur(3xl)" opacity={0.3} mixBlendMode="multiply" />
                    <Box position="absolute" bottom="-10" left="-10" w="48" h="48" bg="brand.secondary-container" borderRadius="full" filter="blur(3xl)" opacity={0.4} mixBlendMode="multiply" />
                    
                    <Flex p={8} position="relative" zIndex={10} direction={{ base: 'column', md: 'row' }} align="center" gap={8}>
                        <Box flex={1} spaceY={4} sx={{ '& > * + *': { marginTop: '1rem' } }}>
                            <Box display="inline-block" bg="brand.primary" color="brand.on-primary-fixed" px={3} py={1} borderRadius="full" fontSize="sm" fontWeight="bold" textTransform="uppercase" letterSpacing="widest" fontFamily="label" boxShadow="sm">
                                Featured
                            </Box>
                            <Heading as="h2" fontFamily="heading" fontSize={{ base: '4xl', md: '5xl' }} fontWeight="black" color="brand.on-surface" lineHeight="tight">
                                সিভি মেকার
                            </Heading>
                            <Text color="brand.on-surface-variant" fontSize="lg" maxW="md">
                                প্রফেশনাল সিভি তৈরি করুন মাত্র কয়েক মিনিটে। আমাদের স্মার্ট টেমপ্লেট দিয়ে আপনার ক্যারিয়ারের শুরুটা হোক দারুণ।
                            </Text>
                            <Flex 
                                as="button" mt={4} bg="brand.primary" color="brand.on-primary-fixed" fontWeight="bold" fontFamily="label" fontSize="lg" py={4} px={8} borderRadius="full" 
                                boxShadow="0 10px 20px rgba(198,255,0,0.3)" _hover={{ transform: 'scale(1.05)' }} transition="transform 0.2s" align="center" gap={2}
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

                {/* Tool Categories */}
                <Box as="section" spaceY={6} sx={{ '& > * + *': { marginTop: '1.5rem' } }}>
                    <Heading as="h3" fontFamily="heading" fontSize="2xl" fontWeight="bold" color="brand.on-surface" borderLeft="4px solid" borderColor="brand.primary" pl={4}>
                        আরও সরঞ্জাম
                    </Heading>
                    
                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }} gap={6}>
                        {/* Tool Card 1 */}
                        <Box as="a" href="#" role="group" display="block" bg="brand.surface-container-highest" borderRadius="lg" p={6} position="relative" overflow="hidden" transition="all 0.2s" _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}>
                            <Box position="absolute" top="0" right="0" w="32" h="32" bg="brand.secondary-container" borderBottomLeftRadius="full" opacity={0.2} _groupHover={{ transform: 'scale(1.1)' }} transition="transform 0.2s" />
                            <Flex w="14" h="14" bg="brand.surface" borderRadius="full" align="center" justify="center" mb={4} boxShadow="sm" _groupHover={{ bg: 'brand.primary' }} transition="colors 0.2s">
                                <Box as="span" className="material-symbols-outlined" fontSize="3xl" color="brand.on-surface" _groupHover={{ color: 'brand.on-primary-fixed' }}>menu_book</Box>
                            </Flex>
                            <Heading as="h4" fontFamily="heading" fontSize="xl" fontWeight="bold" color="brand.on-surface" mb={2}>ব্যবহারিক অভিধান</Heading>
                            <Text color="brand.on-surface-variant" fontFamily="body">কর্পোরেট জার্গন এবং কঠিন শব্দের সহজ অর্থ খুঁজে বের করুন।</Text>
                        </Box>

                        {/* Tool Card 2 */}
                        <Box as="a" href="#" role="group" display="block" bg="brand.surface-container-highest" borderRadius="lg" p={6} position="relative" overflow="hidden" transition="all 0.2s" _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}>
                            <Box position="absolute" top="0" right="0" w="32" h="32" bg="brand.primary-container" borderBottomLeftRadius="full" opacity={0.2} _groupHover={{ transform: 'scale(1.1)' }} transition="transform 0.2s" />
                            <Flex w="14" h="14" bg="brand.surface" borderRadius="full" align="center" justify="center" mb={4} boxShadow="sm" _groupHover={{ bg: 'brand.primary' }} transition="colors 0.2s">
                                <Box as="span" className="material-symbols-outlined" fontSize="3xl" color="brand.on-surface" _groupHover={{ color: 'brand.on-primary-fixed' }}>forum</Box>
                            </Flex>
                            <Heading as="h4" fontFamily="heading" fontSize="xl" fontWeight="bold" color="brand.on-surface" mb={2}>ইন্টারভিউ গাইড</Heading>
                            <Text color="brand.on-surface-variant" fontFamily="body">সাধারণ প্রশ্ন এবং সফল ইন্টারভিউ এর টিপস ও ট্রিকস।</Text>
                        </Box>

                        {/* Tool Card 3 */}
                        <Box as="a" href="#" role="group" display="block" bg="brand.surface-container-highest" borderRadius="lg" p={6} position="relative" overflow="hidden" transition="all 0.2s" _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}>
                            <Box position="absolute" bottom="0" right="0" w="32" h="32" bg="brand.secondary-container" borderTopLeftRadius="full" opacity={0.2} _groupHover={{ transform: 'scale(1.1)' }} transition="transform 0.2s" />
                            <Flex w="14" h="14" bg="brand.surface" borderRadius="full" align="center" justify="center" mb={4} boxShadow="sm" _groupHover={{ bg: 'brand.primary' }} transition="colors 0.2s">
                                <Box as="span" className="material-symbols-outlined" fontSize="3xl" color="brand.on-surface" _groupHover={{ color: 'brand.on-primary-fixed' }}>mail</Box>
                            </Flex>
                            <Heading as="h4" fontFamily="heading" fontSize="xl" fontWeight="bold" color="brand.on-surface" mb={2}>ইমেল টেমপ্লেট</Heading>
                            <Text color="brand.on-surface-variant" fontFamily="body">প্রফেশনাল যোগাযোগের জন্য রেডিমেড ইমেল স্যাম্পল।</Text>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        </Layout>
    );
};

export default Tools;
