import React from 'react';
import { Box, Heading, Text, Flex, Grid, Image, Button, Icon } from '@chakra-ui/react';
import Layout from './Layout';

const Jobs = () => {
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
                    {/* Job Card 1 */}
                    <Box 
                        as="article" 
                        role="group" 
                        position="relative" 
                        bg="brand.surface-container-lowest" 
                        borderRadius="xl" 
                        border="4px solid black" 
                        transition="all 0.2s"
                    >
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
                        <Box position="relative" h="64" overflow="hidden" borderTopRadius="2.5rem" m={2} border="2px solid black">
                            <Image 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi9IgZPOnz6J_bjkyAVbsgcq_rXy9WNz12Y0B4VM9RCYooM3qYKlbbAYf0Rm8HjqaNISGeOMVLhAglaGo33_1xw0DwL0AGrNtg1eiflulqMtzQzrmcQ5AbR58m3ZG5A8h4n8EzM8m2KdsbYGIaE7K2Q4mLfJw6BZkCXQnmaGVdqUrNn4-RIQ2AYwd_LpFqCqq-vlg9t8WFNGuv7CSYkrME5TEtwpf1itxDknCYTZTtJJ_to0clL1KS7Kd1BfPul1CGeb8ql3YZ" 
                                w="full" 
                                h="full" 
                                objectFit="cover" 
                                filter="grayscale(100%)" 
                                _groupHover={{ filter: 'grayscale(0%)' }} 
                                transition="all 0.5s" 
                            />
                            <Flex 
                                position="absolute" 
                                inset={0} 
                                bgGradient="linear(to-t, blackAlpha.800, transparent)" 
                                direction="column" 
                                justify="flex-end" 
                                p={6}
                            >
                                <Text color="brand.primary-container" fontFamily="heading" fontWeight="bold" fontSize="lg">
                                    সফটওয়্যার ইঞ্জিনিয়ার
                                </Text>
                                <Heading as="h3" color="white" fontFamily="heading" fontWeight="black" fontSize="2xl" textTransform="uppercase">
                                    Tech Solutions Ltd.
                                </Heading>
                            </Flex>
                        </Box>
                        <Box p={6} pt={2}>
                            <Flex wrap="wrap" gap={2} mb={6}>
                                <Box bg="brand.surface-container" color="brand.on-surface-variant" px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="bold" border="1px solid" borderColor="blackAlpha.200">
                                    ফুল-টাইম
                                </Box>
                                <Box bg="brand.surface-container" color="brand.on-surface-variant" px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="bold" border="1px solid" borderColor="blackAlpha.200">
                                    রিমোট
                                </Box>
                                <Box bg="brand.surface-container" color="brand.on-surface-variant" px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="bold" border="1px solid" borderColor="blackAlpha.200">
                                    ৳৫০,০০০ - ৭০,০০০
                                </Box>
                            </Flex>
                            <Text color="brand.on-surface" opacity={0.8} noOfLines={3} mb={8} lineHeight="relaxed">
                                আমরা একজন দক্ষ রিঅ্যাক্ট ডেভেলপার খুঁজছি। আমাদের টিমে যোগ দিন এবং আধুনিক প্রযুক্তি ব্যবহার করে উদ্ভাবনী সমাধান তৈরি করুন। ৩ বছরের অভিজ্ঞতা থাকা আবশ্যক।
                            </Text>
                            <Flex gap={4} align="center">
                                <Button 
                                    flex={1} 
                                    bg="brand.primary-fixed" 
                                    color="black" 
                                    fontFamily="heading"
                                    fontWeight="black" 
                                    py={6} 
                                    borderRadius="xl" 
                                    border="4px solid black" 
                                    boxShadow="8px 8px 0px 0px rgba(0, 0, 0, 1)" 
                                    _hover={{ transform: 'translate(4px, 4px)', boxShadow: 'none' }} 
                                    transition="all 0.2s"
                                >
                                    আবেদন করুন
                                </Button>
                                <Flex 
                                    as="button"
                                    w="14" 
                                    h="14" 
                                    align="center" 
                                    justify="center" 
                                    borderRadius="xl" 
                                    border="4px solid black" 
                                    bg="white" 
                                    _hover={{ bg: 'brand.secondary-container' }} 
                                    transition="colors 0.2s"
                                >
                                    <Box as="span" className="material-symbols-outlined">bookmark</Box>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>

                    {/* Job Card 2 (Editorial Style) */}
                    <Box 
                        as="article" 
                        bg="brand.secondary-container" 
                        borderRadius="xl" 
                        p={8} 
                        border="4px solid black" 
                        position="relative" 
                        overflow="hidden"
                    >
                        <Flex direction={{ base: 'column', md: 'row' }} gap={8} align="flex-start" position="relative" zIndex={10}>
                            <Box flex={1}>
                                <Flex align="center" gap={2} color="brand.on-secondary-container" fontWeight="black" mb={2} textTransform="uppercase" letterSpacing="widest" fontSize="xs">
                                    <Box w="2" h="2" bg="black" borderRadius="full" /> Govt Job Update
                                </Flex>
                                <Heading as="h3" fontFamily="heading" fontWeight="black" fontSize="3xl" color="black" mb={4}>
                                    বাংলাদেশ ব্যাংক: সহকারী পরিচালক পদে নিয়োগ
                                </Heading>
                                <Text color="brand.on-secondary-container" mb={6} fontWeight="medium">
                                    আবেদনের শেষ সময়: ৩০ শে সেপ্টেম্বর, ২০২৪। আপনার ক্যারিয়ার গড়ার একটি বিশাল সুযোগ।
                                </Text>
                                <Button 
                                    bg="black" 
                                    color="white" 
                                    px={8} 
                                    py={6} 
                                    borderRadius="full" 
                                    fontWeight="bold" 
                                    rightIcon={<Box as="span" className="material-symbols-outlined" color="brand.primary-container">arrow_forward</Box>}
                                    _active={{ transform: 'scale(0.95)' }}
                                >
                                    বিস্তারিত দেখুন
                                </Button>
                            </Box>
                            <Box w={{ base: 'full', md: '48' }} h="48" borderRadius="xl" border="4px solid black" overflow="hidden" transform="rotate(3deg)" boxShadow="xl">
                                <Image 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJsSaKBWoCkg25p1Vi1TVgr_8R0lY9cCYR_nSLEbQ2wFjEFlmH1ffXVsJggKh1SrDtAwI-QNmcfR_A62DSDmEboz3n5Y3LOjWRLumhdL4h2Ea7kTmGnS0S5v4TUbfSgaQRaLnmOP84VrRUT4MR3uKfOkmFYGgmztCciiaznDQHWYhE-TGLb2GRb7YJE2GLI3yTTjBXWiPTvZ9ZZpb1pzHe2cb09tSXSANGcr0vgV9abTrtxSvOLIzOoRjgwqkRxlhDFDzttbH3" 
                                    w="full" h="full" objectFit="cover" 
                                />
                            </Box>
                        </Flex>
                    </Box>

                    {/* Job Card 3 (Bento Style Item) */}
                    <Box 
                        as="article" 
                        bg="white" 
                        borderRadius="xl" 
                        overflow="hidden" 
                        border="4px solid black"
                    >
                        <Flex direction={{ base: 'column', sm: 'row' }}>
                            <Flex 
                                w={{ base: 'full', sm: '33%' }} 
                                bg="brand.primary-container" 
                                p={6} 
                                direction="column" 
                                justify="space-between" 
                                borderBottom={{ base: '4px solid black', sm: 'none' }} 
                                borderRight={{ base: 'none', sm: '4px solid black' }}
                            >
                                <Box bg="white" p={3} borderRadius="xl" border="2px solid black" display="inline-block" w="fit-content">
                                    <Box as="span" className="material-symbols-outlined fill-icon" fontSize="4xl">design_services</Box>
                                </Box>
                                <Box mt={8}>
                                    <Text display="block" fontWeight="black" fontSize="xs" textTransform="uppercase" color="brand.primary-dim" opacity={0.6}>
                                        Company
                                    </Text>
                                    <Heading as="span" display="block" fontFamily="heading" fontWeight="bold" fontSize="xl" color="black">
                                        Creative Hive
                                    </Heading>
                                </Box>
                            </Flex>
                            <Flex w={{ base: 'full', sm: '66%' }} p={6} direction="column" justify="center">
                                <Heading as="h3" fontFamily="heading" fontWeight="bold" fontSize="2xl" color="black" mb={2}>
                                    ইউআই/ইউএক্স ডিজাইনার
                                </Heading>
                                <Flex align="center" gap={4} color="brand.on-surface-variant" fontWeight="bold" fontSize="sm" mb={6}>
                                    <Flex align="center" gap={1}>
                                        <Box as="span" className="material-symbols-outlined" fontSize="sm">location_on</Box> ঢাকা
                                    </Flex>
                                    <Flex align="center" gap={1}>
                                        <Box as="span" className="material-symbols-outlined" fontSize="sm">schedule</Box> ২ দিন আগে
                                    </Flex>
                                </Flex>
                                <Button 
                                    w="fit-content" 
                                    border="2px solid black" 
                                    px={6} 
                                    py={4} 
                                    borderRadius="full" 
                                    fontFamily="heading"
                                    fontWeight="black" 
                                    fontSize="sm" 
                                    bg="transparent"
                                    _hover={{ bg: 'black', color: 'white' }} 
                                    _active={{ transform: 'scale(0.90)' }}
                                    transition="all 0.2s"
                                >
                                    কুইক অ্যাপ্লাই
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>
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
