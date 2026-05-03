<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

Route::get('/jobs', [ApiController::class, 'getJobs']);
Route::get('/tools', [ApiController::class, 'getTools']);
Route::get('/dictionary', [ApiController::class, 'getDictionary']);
Route::get('/quizzes', [ApiController::class, 'getQuizzes']);
Route::get('/quiz/{id}', [ApiController::class, 'getQuiz']);
Route::get('/email-templates', [ApiController::class, 'getEmailTemplates']);
Route::get('/email-writing', [ApiController::class, 'getEmailWriting']);
Route::get('/interview-guide', [ApiController::class, 'getInterviewGuide']);
