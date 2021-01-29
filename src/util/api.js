// import 'isomorphic-fetch';
import regeneratorRuntime from "regenerator-runtime";
const API = (() => {

  const base_url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SeKTSeD6Z4mXClBX7TIt/scores';
  const sortScore = (obj) => {
    let result = [];
    obj.forEach(element => {
      result.push({name: element.user, score: element.score})
    });
    const sortedScore = result.sort((a,b)=> b.score - a.score).slice(0,5);
    return sortedScore;
  }
  const addScore = async (name, score) => {
    let _score = {
      user: `${name}`,
      score: score
    };
      try {
        const request = await fetch(base_url,
          {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(_score),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
          },
        );
        const response = await request.json();
        return response;
      } catch (error) {
        return error;
      }
  }
  const getScores = async () => {
    // fetch(base_url)
    // .then(response => response.json())
    // .then(data => {
    //   // console.log(data.result);
    //   return sortScore(data.result)
    //   // return json['result'].forEach((element) => sortScore(element) );
    // }).catch(error => console.log("error"));
    try {
      const response = await fetch(base_url);
      const data = await response.json();
      return sortScore(data.result);
    } catch (error) {
      return error;
    }
  }
  return { getScores, addScore, sortScore }
})()
export default API;