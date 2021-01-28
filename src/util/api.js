const API = (() => {

  const base_url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vDFRaE6XelAP3gs7ISXc/scores';
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
    .then(data => console.log(data))
  }
  return { getScores, addScore }
})()
export default API;