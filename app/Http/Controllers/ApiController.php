<?php

namespace App\Http\Controllers;

use App\Services\MockDataService;

class ApiController extends Controller
{
    protected $mockDataService;

    public function __construct(MockDataService $mockDataService)
    {
        $this->mockDataService = $mockDataService;
    }

    public function getJobs()
    {
        return response()->json($this->mockDataService->getJobs());
    }

    public function getTools()
    {
        return response()->json($this->mockDataService->getTools());
    }

    public function getDictionary()
    {
        return response()->json($this->mockDataService->getDictionary());
    }

    public function getQuizzes()
    {
        return response()->json($this->mockDataService->getQuizzes());
    }

    public function getQuiz($id)
    {
        return response()->json($this->mockDataService->getQuiz($id));
    }

    public function getEmailTemplates()
    {
        return response()->json($this->mockDataService->getEmailTemplates());
    }

    public function getEmailWriting()
    {
        return response()->json($this->mockDataService->getEmailWriting());
    }

    public function getInterviewGuide()
    {
        return response()->json($this->mockDataService->getInterviewGuide());
    }
}
