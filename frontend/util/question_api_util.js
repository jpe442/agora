export const fetchQuestions = () => (
  $.ajax({
    method: 'GET',
    url: '/api/questions'
  })
);

export const fetchQuestion = (id) => (
  $.ajax({
    method: 'GET',
    url: '/api/questions/' + id
  })
)

export const createQuestion = (question) => (
  $.ajax({
    method: 'POST',
    url: '/api/questions',
    data: { question }
  })
)

export const deleteQuestion = (id) => (
  $.ajax({
    method: 'DELETE',
    url: 'api/questions/' + id,
  })
)
