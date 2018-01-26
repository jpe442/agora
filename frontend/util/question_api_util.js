export const fetchQuestions = () => (
  $.ajax({
    method: 'GET',
    url: '/api/questions'
  })
);

export const searchQuestions = (query) => (
  $.ajax({
    method: 'GET',
    url: '/api/questions/search',
    data: { query }
  })
)

export const fetchQuestion = (id) => (
  $.ajax({
    method: 'GET',
    url: '/api/questions/' + id
  })
)

export const createQuestion = (question) => (
  $.ajax({
    method: 'POST',
    url: '/api/questions/',
    data: { question }
  })
)

export const deleteQuestion = (id) => (
  $.ajax({
    method: 'DELETE',
    url: '/api/questions/' + id,
  })
)

export const updateQuestion = question => (
  $.ajax({
    method: 'PATCH',
    url: 'api/questions/' + question.id,
    data: { question }
  })
);