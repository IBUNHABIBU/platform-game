const API = (() => {

  const base_url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vDFRaE6XelAP3gs7ISXc/scores';
  const addScore = (name, score) => {
    let score = {
      user: `${name}`,
      score
    }
         fetch(base_url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(score)
      }
      ).then(response => response.json())
  }
  const getScores = () => {
    fetch(base_url)
    .then(response => response.json())
    .then(date => console.log(data))
  }
  return { getScores, addScore }
})()
export default API;