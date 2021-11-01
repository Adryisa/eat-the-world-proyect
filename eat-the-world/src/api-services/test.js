const getMovieRequest = async () => {
  const url = 'www.themealdb.com/api/json/v1/1/search.php?s=Potatoes';

  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
};

getMovieRequest();
