export const fetchQuestions = () => (
  $.ajax({
    method: 'GET',
    url: '/api/questions'
  })
);

export const createQuestion = (question) => (
  $.ajax({
    method: 'POST',
    url: '/api/questions',
    data: { question }
  })
)
