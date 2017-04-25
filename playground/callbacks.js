var getUser = (id, callback) => {
    var user = { id, name: 'Jobs' };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(123, (u) => {
    console.log(u);
});