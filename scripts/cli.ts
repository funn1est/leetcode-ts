const BASE_URL = 'https://leetcode.com/graphql';

const GET_QUESTION_KEY = 'GetQuestion';
const GET_QUESTION_QUERY = `query ${GET_QUESTION_KEY}($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
        questionId
        questionFrontendId
        titleSlug
        questionTitle
        categoryTitle
        codeDefinition
    }
}
`;

const GET_PROBLEMS_KEY = 'GetProblems';
const GET_PROBLEMS_QUERY = `query ${GET_PROBLEMS_KEY}(
  $categorySlug: String
  $limit: Int
  $skip: Int
  $filters: QuestionListFilterInput
) {
  problems: questionList(
    categorySlug: $categorySlug
    limit: $limit
    skip: $skip
    filters: $filters
  ) {
    total: totalNum
    questions: data {
      acRate
      difficulty
      freqBar
      frontendQuestionId: questionFrontendId
      isFavor
      paidOnly: isPaidOnly
      status
      title
      titleSlug
      topicTags {
        name
        id
        slug
      }
      hasSolution
      hasVideoSolution
    }
  }
}
`;

interface Resp<T> {
  data: T;
}

interface QuestionData {
  question: {
    questionId: string;
    questionFrontendId: string;
    titleSlug: string;
    questionTitle: string;
    categoryTitle: string;
    codeDefinition: string;
  };
}

interface CodeDefinition {
  value: string;
  text: string;
  defaultCode: string;
}

interface Problem {
  frontendQuestionId: string;
  title: string;
  titleSlug: string;
}

interface ProblemData {
  problems: {
    total: number;
    questions: Problem[];
  };
}

const QUESTION_EXEC = /leetcode(-cn)?\.com\/problems\/([^/]*)/;

const genCode = (name: string, code: string) => `/// https://leetcode.com/problems/${name}

${code}

export {};
`;

const genTest = (fileName: string) => `import {} from './index';

it('test ${fileName}', () => {
  expect().toStrictEqual();
});
`;

interface Query {
  operationName: string;
  variables: Record<string, any>;
  query: string;
}

const gql = <T>(query: Query) =>
  fetch(BASE_URL, {
    body: JSON.stringify(query),
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    credentials: 'include',
  })
    .then((data) => data.json() as unknown as Resp<T>)
    .then(({ data }) => data);

const main = async () => {
  const [input] = Deno.args;
  let questionName = '';
  if (/^[0-9]+$/.test(input)) {
    // number
    const {
      problems: { questions },
    } = await gql<ProblemData>({
      operationName: GET_PROBLEMS_KEY,
      variables: {
        categorySlug: '',
        filters: {
          searchKeywords: input,
        },
        limit: 50,
        skip: 0,
      },
      query: GET_PROBLEMS_QUERY,
    });
    const problem = questions.find(({ frontendQuestionId }) => frontendQuestionId === input);
    if (!problem) {
      return;
    }
    questionName = problem.titleSlug;
  } else {
    // url
    const re = QUESTION_EXEC.exec(input);
    if (re === null) {
      return;
    }
    questionName = re[2];
  }

  const { question } = await gql<QuestionData>({
    operationName: GET_QUESTION_KEY,
    variables: {
      titleSlug: questionName,
    },
    query: GET_QUESTION_QUERY,
  });
  const codes = JSON.parse(question.codeDefinition) as unknown as CodeDefinition[];
  const fileName = `n${question.questionFrontendId}_${question.titleSlug.replace(/-/g, '_')}`;
  const tsCode = codes.find(({ value }) => value === 'typescript');
  if (!tsCode) {
    return;
  }

  await Deno.mkdir(`./src/${fileName}`, { recursive: true });
  Deno.writeTextFile(
    `./src/${fileName}/index.ts`,
    genCode(question.titleSlug, tsCode.defaultCode),
    { create: true },
  );
  Deno.writeTextFile(`./src/${fileName}/test.ts`, genTest(fileName), { create: true });
  console.log(`gen ${fileName} successfully`);
};

main();
