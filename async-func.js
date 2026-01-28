



function get(path, cb) {
  const data = {};
  cb(data);
}



function callUserFromComment(username) {
  get(`/users?username=${username}`, (user) => {
     get(`/posts?userId=${user.id}`, (posts) => {
      get(`/comments?postId=${posts[0].id}`, (comments) => {
            get(`/users?username=${comments[0].username}`, (commentUser) => {
              console.log(commentUser);
            });
          });
        });
      })
    }
    

callUserFromComment("john_doe");
