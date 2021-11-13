require("dotenv").config();
const axios = require("axios").default;
const express = require("express");
const app = express();

const users = {
    admin: process.env.admin
};

const tokens = {};

async function getNewToken(cookie) {
    try {
        await axios.post("https://auth.roblox.com/v2/logout", {}, {
            headers: {
                cookie: cookie
            }
        });
    } catch (error) {
        if ("response" in error) {
            if (error.response.status !== 403) {
                return new Error("Invalid cookie");
            };

            return error.response.headers["x-csrf-token"];
        } else {
            return new Error(error);
        };
    };
};

async function getToken(cookie, newToken) {
    if (cookie in tokens) {
        if (newToken) {
            tokens[cookie] = await getNewToken(cookie);
        };

        return tokens[cookie];
    } else {
        tokens[cookie] = await getNewToken(cookie);

        return tokens[cookie];
    };
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/get", async (request, response) => {
    if (!request.query.url) {
        return response.json({
            error: {
                message: "No URL Provided."
            }
        });
    } else if (!request.query.password) {
        return response.json({
            error: {
                message: "No Password Provided."
            }
        });
    };

    if (request.query.password !== process.env.password) {
        return response.json({
            error: {
                message: "Invalid Password."
            }
        });
    };

    var newHeaders = {};

    if ("user" in request.headers) {
        if (request.headers.user in users) {
            newHeaders.cookie = ".ROBLOSECURITY=" + users[request.headers.user]
            newHeaders["x-csrf-token"] = await getToken(newHeaders.cookie, false);
        } else {
            return response.json({
                error: {
                    message: "Invalid user."
                }
            });
        };
    };

    axios.get(request.query.url, {
        headers: newHeaders
    })
        .then(function (response2) {
            response.json(response2.data);
        })
        .catch(async function (error) {
            if (error.status === 403) {
                newHeaders["x-csrf-token"] = await getToken(newHeaders.cookie, true);

                axios.get(request.query.url, {
                    headers: newHeaders
                })
                    .then(function (response2) {
                        response.json(response2.data);
                    })
                    .catch(function (error) {
                        response.json({
                            error: error
                        });
                    });
            } else {
                response.json({
                    error: error
                });
            };
        });
});

app.post("/post", async (request, response) => {
    if (!request.query.url) {
        return response.json({
            error: {
                message: "No URL Provided."
            }
        });
    } else if (!request.query.password) {
        return response.json({
            error: {
                message: "No Password Provided."
            }
        });
    };

    if (request.query.password !== process.env.password) {
        return response.json({
            error: {
                message: "Invalid Password."
            }
        });
    };

    var newHeaders = {};

    if ("user" in request.body.Headers) {
        if (request.body.Headers.user in users) {
            newHeaders.cookie = ".ROBLOSECURITY=" + users[request.body.Headers.user]
            newHeaders["x-csrf-token"] = await getToken(newHeaders.cookie, false);
        } else {
            return response.json({
                error: {
                    message: "Invalid user."
                }
            });
        };
    };

    axios.post(request.query.url, request.body.Data, {
        headers: newHeaders
    })
        .then(function (response2) {
            response.json(response2.data);
        })
        .catch(async function (error) {
            if (error.response.status === 403) {
                newHeaders["x-csrf-token"] = await getToken(newHeaders.cookie, true);

                axios.post(request.query.url, request.body.Data, {
                    headers: newHeaders
                })
                    .then(function (response2) {
                        response.json(response2.data);
                    })
                    .catch(function (error) {
                        response.json({
                            error: error
                        });
                    });
            } else {
                response.json({
                    error: error
                });
            };
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
    console.log(`Listening on port ${process.env.PORT || 80}`);
});