
export type ProblemCategory = 'Python 基础' | '算法与数据结构' | 'NumPy' | 'Pandas';

export interface TestCase {
  input: string;
  expectedOutput: string;
}

export interface Problem {
  id: number;
  title: string;
  difficulty: '简单' | '中等' | '困难';
  category: ProblemCategory;
  description: string;
  inputFormat: string;
  outputFormat: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: string;
  testCases: TestCase[];
  tags?: string[];
  timeLimit?: string;
  memoryLimit?: string;
}

export type JudgeVerdict = 
  | 'Accepted' 
  | 'Wrong Answer' 
  | 'Runtime Error' 
  | 'Time Limit Exceeded' 
  | 'Presentation Error' 
  | 'Compile Error'
  | 'Memory Limit Exceeded';

export interface JudgeResult {
  status: JudgeVerdict;
  explanation: string;
  output: string;
}

export type JudgeStatus = 'idle' | 'judging' | 'finished' | 'error';

export interface Submission {
  id: string;
  code: string;
  result: JudgeResult;
  timestamp: Date;
}
