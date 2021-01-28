const API = (() => {

  const base_url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vDFRaE6XelAP3gs7ISXc/scores';
  const sortScore = (obj) => {
    let result = [];
    obj.forEach(element => {
      result.push({name: element.name, score: element.score})
    });
    const sortedScore = result.sort((a,b)=> b.score - a.score)
    return sortedScore.slice(0,5);
  }
  const addScore = (name, score) => {
    let _score = {
      user: `${name}`,
      score
    }
         fetch(base_url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_score)
      }
      ).then(response => response.json())
  }
  const getScores = () => {
    fetch(base_url)
    .then(response => response.json())
  }
  return { getScores, addScore, sortScore }
})()
export default API;