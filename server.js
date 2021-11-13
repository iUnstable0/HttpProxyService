const axios = require("axios").default;
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/get", (request, response) => {
    if (!request.query.url) {
        return response.json({
            error: {
                message: "No URL Provided."
            }
        });
    };

    axios.get(request.query.url, {
        headers: request.body.Headers
    })
        .then(function (response2) {
            response.json(response2.data);
        })
        .catch(function (error) {
            console.log(error);

            return response.json({
                error: error
            });
        });
});

app.post("/post", (request, response) => {
    if (!request.query.url) {
        return response.json({
            error: {
                message: "No URL Provided."
            }
        });
    };

    axios.post(request.query.url, request.body.Data, {
        headers: request.body.Headers
    })
        .then(function (response2) {
            response.json({
                status: response2.status,
                statusText: response2.statusText
            });
        })
        .catch(function (error) {
            console.log(error);

            return response.json({
                error: error
            });
        });
});

// app.delete("/delete", (request, response) => {
//     if (!request.query.url) {
//         return response.json({
//             error: {
//                 message: "No URL Provided."
//             }
//         });
//     };

//     axios.delete(request.query.url)
// });

app.listen(process.env.PORT || 80, () => {
    console.log(`Listening on port ${process.env.PORT || 80}`)
});