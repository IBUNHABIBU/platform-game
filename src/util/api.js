const API = (() => {
  const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SeKTSeD6Z4mXClBX7TIt/scores';
  const sortScore = (obj) => {
    const result = [];
    obj.forEach(element => {
      result.push({ name: element.user, score: element.score });
    });
    const sortedScore = result.sort((a, b) => b.score - a.score).slice(0, 5);
    return sortedScore;
  };
  const addScore = async (name, score) => {
    const playerScore = {
      user: `${name}`,
      score,
    };

    try {
      const request = await fetch(baseUrl,
        {
          mode: 'cors',
          method: 'POST',
          body: JSON.stringify(playerScore),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
      const response = await request.json();
      return response;
    } catch (error) {
      return error;
    }
  };

  const getScores = async () => {
    try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      return sortScore(data.result);
    } catch (error) {
      return error;
    }
  };
  return { getScores, addScore, sortScore };
})();
export default API;
