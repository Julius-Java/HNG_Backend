const app = require('express')();
const PORT = process.env.PORT || 8080;

app.get('/emmanuel-julius', (req, res) => {
        res.status(200).send({
                slackUsername: "Emmanuel Julius",
                backend: true,
                age: 20,
                bio: "An aspiring full-stack developer with a curious personality"
        })
});

app.listen(PORT)