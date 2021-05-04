function printLikes(users) {
    let message = "";
  
    // do your magic..
    for (var i = 0; i < users.length; i++) {
      if (users.length === 2) {
        message = `${users[0] + " and " + users[1]}`;
      } else if (users.length < 2) {
        message = `${users}`;
      } else {
        message = `${
          users[0] + ", " + users[1] + " and " + users.slice(2).length
        } others like your post`;
      }
    }
    console.log(message);
  }
  
  printLikes(["Fatima"]); // Fatima
  printLikes(["Saleem", "Wassim"]); // Saleem and Wassim
  printLikes(["wassim", "saleem", "farid"]); //wassim, saleem and 1 other like your post
  printLikes(["Saleem", "Wassim", "Ameer", "Ahmed"]); // Saleem, Wassim, and 2 others like your post
  printLikes(["Saleem", "Wassim", "Ameer", "Ahmed", "Ali", "Hasan"]); // Saleem, Wassim, and 4 others like your post
  