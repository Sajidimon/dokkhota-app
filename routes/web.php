<?php

use Illuminate\Support\Facades\Route;

Route::prefix('api')->group(function () {
    Route::get('/jobs', function () {
        return response()->json([
            [
                'id' => 1,
                'title' => 'সিনিয়র ফ্রন্টএন্ড ডেভেলপার',
                'company' => 'টেকভ্যালি সলিউশনস',
                'location' => 'ঢাকা, বাংলাদেশ (রিমোট)',
                'type' => 'ফুল-টাইম',
                'salary' => '৳৮০,০০০ - ৳১,২০,০০০ /মাস',
                'deadline' => '১৫ মে, ২০২৪',
                'is_hot' => true,
                'tags' => ['React', 'Vue', 'Tailwind']
            ],
            [
                'id' => 2,
                'title' => 'ইউআই/ইউএক্স ডিজাইনার',
                'company' => 'ক্রিয়েটিভ স্টুডিও',
                'location' => 'বনানী, ঢাকা',
                'type' => 'ফুল-টাইম',
                'salary' => 'আলোচনা সাপেক্ষে',
                'deadline' => '২০ মে, ২০২৪',
                'is_hot' => false,
                'tags' => ['Figma', 'Prototyping', 'User Research']
            ],
            [
                'id' => 3,
                'title' => 'কন্টেন্ট রাইটার (বাংলা)',
                'company' => 'ডিজিটাল নিউজ মিডিয়া',
                'location' => 'মিরপুর, ঢাকা',
                'type' => 'পার্ট-টাইম',
                'salary' => '৳২০,০০০ - ৳৩০,০০০ /মাস',
                'deadline' => '১০ মে, ২০২৪',
                'is_hot' => false,
                'tags' => ['SEO', 'Copywriting', 'Journalism']
            ],
        ]);
    });

    Route::get('/tools', function () {
        return response()->json([
            [
                'id' => 1,
                'title' => 'সিভি বিল্ডার প্রো',
                'description' => '১০ মিনিটের মধ্যে প্রফেশনাল মানের এআই-সহায়ক সিভি তৈরি করুন।',
                'icon' => 'contact_page',
                'category' => 'ক্যারিয়ার',
                'is_featured' => true
            ],
            [
                'id' => 2,
                'title' => 'কভার লেটার জেনারেটর',
                'description' => 'যে কোনো চাকরির বিজ্ঞাপনের জন্য এআই দিয়ে কাস্টমাইজড কভার লেটার তৈরি করুন।',
                'icon' => 'edit_document',
                'category' => 'ক্যারিয়ার',
                'is_featured' => false
            ],
            [
                'id' => 3,
                'title' => 'ইন্টারভিউ সিমুলেটর',
                'description' => 'এআই এর সাথে মক ইন্টারভিউ দিন এবং রিয়েল-টাইম ফিডব্যাক পান।',
                'icon' => 'record_voice_over',
                'category' => 'প্রস্তুতি',
                'is_featured' => false
            ],
        ]);
    });

    Route::get('/dictionary', function () {
        return response()->json([
            [
                'id' => 1,
                'term' => 'এজাইল মেথডলজি (Agile Methodology)',
                'definition' => 'সফটওয়্যার ডেভেলপমেন্টের একটি পদ্ধতি যা ধাপে ধাপে এবং দ্রুত কাজে বিশ্বাসী। এর মূল লক্ষ্য হলো দ্রুত ফিডব্যাকের মাধ্যমে ক্রমাগত উন্নতি করা।',
                'category' => 'প্রজেক্ট ম্যানেজমেন্ট'
            ],
            [
                'id' => 2,
                'term' => 'বিটুবি (B2B - Business to Business)',
                'definition' => 'যখন একটি ব্যবসা সরাসরি অন্য একটি ব্যবসার কাছে পণ্য বা সেবা বিক্রি করে। উদাহরণস্বরূপ: পাইকারি বিক্রেতারা খুচরা বিক্রেতাদের কাছে পণ্য বিক্রি করে।',
                'category' => 'মার্কেটিং ও সেলস'
            ],
            [
                'id' => 3,
                'term' => 'অনবোর্ডিং (Onboarding)',
                'definition' => 'নতুন কর্মীদের কোম্পানিতে যুক্ত করার প্রক্রিয়া। এতে তাদের কোম্পানির নিয়মকানুন, কাজের ধরন এবং সংস্কৃতির সাথে পরিচিত করানো হয়।',
                'category' => 'হিউম্যান রিসোর্স'
            ],
        ]);
    });

    Route::get('/quizzes', function () {
        return response()->json([
            [
                'id' => 1,
                'title' => 'ফিশিং এর মূল কথা',
                'description' => 'Test your ability to spot malicious emails and protect your data.',
                'category' => 'ডিজিটাল সাক্ষরতা',
                'is_daily' => true
            ],
            [
                'id' => 2,
                'title' => 'ইমেল এটিকেট',
                'description' => 'পেশাদার ইমেল লেখার নিয়ম কানুন জানুন।',
                'category' => 'ক্যারিয়ারের মূলকথা',
                'is_daily' => false
            ],
        ]);
    });

    Route::get('/quiz/{id}', function ($id) {
        return response()->json([
            'id' => $id,
            'title' => 'ফিশিং এর মূল কথা',
            'question' => [
                'text' => 'সম্ভাব্য নিয়োগকর্তাকে ইমেল শুরু করার জন্য নিচের কোনটি সবচেয়ে পেশাদার উপায়?',
                'options' => [
                    ['id' => 'A', 'text' => 'হে সেখানে,'],
                    ['id' => 'B', 'text' => 'প্রিয় হায়ারিং ম্যানেজার,'],
                    ['id' => 'C', 'text' => 'যিনি এটি দেখছেন,'],
                    ['id' => 'D', 'text' => 'কি খবর,'],
                ],
                'correct_option' => 'B'
            ]
        ]);
    });

    Route::get('/email-templates', function () {
        return response()->json([
            [
                'id' => 1,
                'title' => 'চাকরির আবেদন',
                'description' => 'যেকোনো কোম্পানিতে সিভি পাঠানোর আদর্শ ইমেল।',
                'category' => 'চাকরি',
                'content' => "Subject: Application for [Job Title] - [Your Name]\n\nDear Hiring Manager,\n\nI am writing to express my interest in the [Job Title] position at [Company Name]."
            ],
            [
                'id' => 2,
                'title' => 'ফলো-আপ ইমেল',
                'description' => 'ইন্টারভিউর পর ফলো-আপ করার জন্য।',
                'category' => 'ইন্টারভিউ',
                'content' => "Subject: Thank You - [Your Name] Interview\n\nDear [Interviewer Name],\n\nThank you for taking the time to speak with me today."
            ],
            [
                'id' => 3,
                'title' => 'সিক লিভ রিকোয়েস্ট',
                'description' => 'অসুস্থতার জন্য ছুটির আবেদন।',
                'category' => 'অফিস',
                'content' => "Subject: Sick Leave Request - [Your Name]\n\nDear [Manager Name],\n\nI am writing to inform you that I will not be able to come to work today."
            ]
        ]);
    });

    Route::get('/email-writing', function () {
        return response()->json([
            'title' => 'প্রফেশনাল ইমেল রাইটিং',
            'progress' => 45,
            'sections' => [
                ['title' => 'সাবজেক্ট লাইন', 'content' => 'ইমেলের বিষয়বস্তু সংক্ষেপে এবং স্পষ্টভাবে লিখুন।'],
                ['title' => 'সম্বোধন', 'content' => 'সঠিক সম্বোধন ব্যবহার করুন, যেমন "Dear [Name]" বা "Hi [Name]"।'],
                ['title' => 'বডি', 'content' => 'মূল বক্তব্য পরিষ্কারভাবে এবং পয়েন্ট আকারে লিখলে ভালো হয়।']
            ]
        ]);
    });

    Route::get('/interview-guide', function () {
        return response()->json([
            'checklist' => [
                ['id' => 1, 'text' => 'কোম্পানি সম্পর্কে গবেষণা', 'status' => 'done'],
                ['id' => 2, 'text' => 'ড্রেস কোড নির্বাচন', 'status' => 'done'],
                ['id' => 3, 'text' => 'সাধারণ প্রশ্নের উত্তর অনুশীলন', 'status' => 'pending']
            ],
            'questions' => [
                ['id' => 1, 'question' => '"আপনার সম্পর্কে বলুন"'],
                ['id' => 2, 'question' => '"কেন আপনি এই চাকরিটি চান?"']
            ],
            'bodyLanguage' => [
                ['id' => 1, 'title' => 'আই কন্ট্যাক্ট', 'desc' => 'আত্মবিশ্বাসের সাথে চোখের দিকে তাকান।', 'icon' => 'visibility'],
                ['id' => 2, 'title' => 'হ্যান্ডশেক', 'desc' => 'দৃঢ় কিন্তু আরামদায়ক হ্যান্ডশেক করুন।', 'icon' => 'front_hand'],
                ['id' => 3, 'title' => 'বসার ভঙ্গি', 'desc' => 'সোজা হয়ে বসুন, একটু সামনের দিকে ঝুঁকে।', 'icon' => 'airline_seat_recline_normal']
            ]
        ]);
    });
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
