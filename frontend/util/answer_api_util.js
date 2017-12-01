export const fetchAnswers = () => (
  $.ajax({
    method: 'GET',
    url: '/api/answers'
  })
);

export const fetchAnswer = (id) => (
  $.ajax({
    method: 'GET',
    url: '/api/answers/' + id
  })
)

export const createAnswer = (answer) => (
  $.ajax({
    method: 'POST',
    url: '/api/answers',
    data: { answer }
  })
)

export const deleteAnswer = (id) => (
  $.ajax({
    method: 'DELETE',
    url: 'api/answers/' + id,
  })
)

export const updateAnswer = answer => {
  return $.ajax({
    method: 'PATCH',
    url: 'api/answers/' + answer.id,
    data: { answer }
  }
)};