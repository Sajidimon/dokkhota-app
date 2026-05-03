import React, { useState } from 'react';
import { Box, Heading, Text, Flex, Button, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

// Null topBar and bottomNav for this screen to hide them, as per HTML
const QuizQuestion = () => {
    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState('B');

    const options = [
        { id: 'A', text: 'হে সেখানে,' },
        { id: 'B', text: 'প্রিয় হায়ারিং ম্যানেজার,' },
        { id: 'C', text: 'যিনি এটি দেখছেন,' },
        { id: 'D', text: 'কি খবর,' },
    ];

    const isSelected = (id) => selectedAnswer === id;

    return (
        <Layout topBar={null}>
            {/* The Layout component has a padding top, so we will use absolute positioning for backgrounds to stretch fully */}
            <Box position="fixed" top={0} left={0} right={0} bottom={0} zIndex={-1} overflow="hidden" pointerEvents="none" display={{ base: 'block', md: 'none' }}>
                {/* Decorative Asymmetric Background Elements */}
                <Box position="absolute" top="-10%" left="-10%" w="50vw" h="50vw" bg="brand.secondary-container" opacity={0.4} filter="blur(100px)" borderRadius="full" />
                <Box position="absolute" bottom="-20%" right="-10%" w="60vw" h="60vw" bg="brand.primary-container" opacity={0.2} filter="blur(120px)" borderRadius="40% 60% 70% 30% / 40% 50% 60% 50%" />
            </Box>

            <Flex flexDir="column" minH="calc(100vh - 12rem)" w="full">
                {/* Contextual Top Header */}
                <Flex flexDir="column" gap={6} w="full" mb={10}>
                    <Flex justify="space-between" align="center" w="full">
                        <IconButton 
                            icon={<Box as="span" className="material-symbols-outlined">close</Box>}
                            onClick={() => navigate('/quizzes')}
                            w="12" h="12" borderRadius="full" bg="brand.surface-container-lowest" color="brand.on-surface" boxShadow="0 4px 20px rgba(0,0,0,0.04)"
                            _hover={{ transform: 'scale(0.95)' }} transition="transform 0.2s" aria-label="Close"
                        />
                        <Flex align="center" gap={2} bg="brand.surface-container-highest" px={4} py={2} borderRadius="full">
                            <Box as="span" className="material-symbols-outlined fill-icon" color="brand.error-container" fontSize="lg">local_fire_department</Box>
                            <Text fontFamily="headline" fontWeight="bold" fontSize="sm" letterSpacing="widest" color="brand.on-surface" textTransform="uppercase">
                                স্ট্রিক: 4
                            </Text>
                        </Flex>
                    </Flex>
                    
                    {/* Progress Section */}
                    <Flex flexDir="column" gap={2} w="full">
                        <Flex justify="space-between" align="flex-end">
                            <Heading as="span" fontFamily="headline" fontWeight="extrabold" fontSize="3xl" color="brand.on-surface">প্রশ্ন ৪</Heading>
                            <Text fontFamily="body" fontWeight="bold" color="brand.on-surface-variant" fontSize="sm">4 / 10</Text>
                        </Flex>
                        <Box w="full" h="3" bg="brand.surface-container-highest" borderRadius="full" overflow="hidden" mt={1}>
                            <Box h="full" bg="brand.primary-container" w="40%" borderRadius="full" boxShadow="0 0 10px #C5FE00" />
                        </Box>
                    </Flex>
                </Flex>

                {/* Question Container */}
                <Flex flex="1" flexDir="column" w="full" position="relative">
                    {/* The Question */}
                    <Box mb={10} position="relative">
                        <Box as="span" position="absolute" top="-10" left="-4" fontSize="9xl" fontFamily="headline" fontWeight="black" color="brand.surface-container-highest" opacity={0.5} userSelect="none" zIndex={-1}>"</Box>
                        <Heading as="h1" fontFamily="headline" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="extrabold" lineHeight="tight" color="brand.on-surface">
                            সম্ভাব্য নিয়োগকর্তাকে ইমেল শুরু করার জন্য নিচের কোনটি সবচেয়ে পেশাদার উপায়?
                        </Heading>
                    </Box>

                    {/* Options Form */}
                    <Flex flexDir="column" gap={4} w="full" mb={12}>
                        {options.map((option) => (
                            <Flex 
                                key={option.id} as="label" role="group" position="relative" align="center" p={6} cursor="pointer"
                                bg={isSelected(option.id) ? 'brand.primary-container' : 'brand.surface-container-lowest'}
                                borderRadius="lg"
                                transition="all 0.3s"
                                _hover={{ 
                                    bg: isSelected(option.id) ? 'brand.primary-container' : 'brand.surface-container-low',
                                    boxShadow: isSelected(option.id) ? '0 15px 40px rgba(197,254,0,0.25)' : '0 10px 40px rgba(0,0,0,0.06)'
                                }}
                                boxShadow={isSelected(option.id) ? '0 15px 40px rgba(197,254,0,0.25)' : '0 8px 30px rgba(0,0,0,0.03)'}
                                transform={isSelected(option.id) ? 'scale(1.02)' : 'scale(1)'}
                                onClick={() => setSelectedAnswer(option.id)}
                            >
                                {isSelected(option.id) && (
                                    <Box position="absolute" inset={0} borderRadius="lg" outline="2px solid" outlineColor="brand.primary-container" outlineOffset="2px" opacity={0.5} />
                                )}
                                <Flex 
                                    w="8" h="8" borderRadius="full" align="center" justify="center" mr={5}
                                    bg={isSelected(option.id) ? 'brand.surface-container-lowest' : 'brand.surface-container-high'}
                                    fontFamily="headline" fontWeight={isSelected(option.id) ? 'black' : 'bold'}
                                    color={isSelected(option.id) ? 'brand.primary-dim' : 'brand.on-surface-variant'}
                                    _groupHover={{ 
                                        bg: isSelected(option.id) ? 'brand.surface-container-lowest' : 'brand.primary-container',
                                        color: isSelected(option.id) ? 'brand.primary-dim' : 'brand.on-primary-container'
                                    }}
                                    transition="colors 0.3s"
                                    boxShadow={isSelected(option.id) ? 'sm' : 'none'}
                                >
                                    {option.id}
                                </Flex>
                                <Text fontFamily="body" fontSize="lg" fontWeight={isSelected(option.id) ? 'extrabold' : 'semibold'} color={isSelected(option.id) ? 'brand.on-primary-container' : 'brand.on-surface'}>
                                    {option.text}
                                </Text>
                                {isSelected(option.id) && (
                                    <Box as="span" className="material-symbols-outlined fill-icon" ml="auto" color="brand.primary-dim">check_circle</Box>
                                )}
                            </Flex>
                        ))}
                    </Flex>
                </Flex>

                {/* Bottom Fixed Action Bar */}
                <Box as="footer" mt="auto" pt={4} pb={6} w="full" position="relative" zIndex={20}>
                    <Button 
                        w="full" py={7} px={8} borderRadius="xl" bgGradient="linear(to-r, brand.primary-container, #B9EF00)" color="brand.on-primary-container"
                        fontFamily="headline" fontWeight="extrabold" fontSize="xl" letterSpacing="tight" boxShadow="0 10px 30px rgba(197,254,0,0.3)"
                        _hover={{ transform: 'scale(0.98)' }} transition="transform 0.2s"
                        onClick={() => navigate('/quizzes')}
                    >
                        উত্তর যাচাই করুন
                    </Button>
                </Box>
            </Flex>
        </Layout>
    );
};

export default QuizQuestion;
