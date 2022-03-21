export const BACKEND_URL = '/api';
export const getAllRecords = {
  url: '/records',
  method: 'get',
};
export const getLikesByid = (id) => ({
  url: `/records/${id}/likes`,
  method: 'get',
});
export const updateLike = (id) => ({
  url: `/records/${id}/likes`,
  method: 'patch',
});
export const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ODRiZTBkNS01MjVmLTQyMjAtOGU2My1kZmMwMjMwMmRkNTQiLCJuYW1lIjoiVHdpc3NhIE1vZGkiLCJyb2xlIjowLCJzdWJqZWN0IjoiVGVjaCBVbml2IDIwMjIiLCJlYXN0ZXJfZWdnIjoiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1kUXc0dzlXZ1hjUSIsIm5iZiI6MTY0NzgzNTQ5NywiZXhwIjoxNjQ3OTIxODk3LCJpYXQiOjE2NDc4MzU0OTcsImlzcyI6Im11c2ljLXJlY29yZHMtYXBpIiwiYXVkIjoiaHR0cHM6Ly9hcGkubXVzaWNyZWNvcmRzLmNvbSJ9.9e66mvIkROWUsE2Mv9KpiKJUheZQAi7PydWPAokiSjc';
