import request from 'request-promise-native';

const jokeRequest = async jokeNum => {
  const { setup } = await request(`http://localhost:3001/setup/${jokeNum}`, {
    json: true,
  });
  const { punchline } = await request(
    `http://localhost:3001/punchline/${jokeNum}`,
    { json: true }
  );
  return { setup, punchline };
};

export default jokeRequest;
