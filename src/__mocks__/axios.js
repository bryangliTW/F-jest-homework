export default {
  post: jest.fn(() => Promise.resolve({ data: {} })),
  get: jest.fn(() =>
    Promise.resolve({ data: { name: "Michael", role: "Developer" } })
  ),
};
