require("dotenv").config();
const axios = require("axios").default;
const express = require("express");
const app = express();

const disallowedHeaders = ["host", "accept", "accept-encoding", "cache-control", "connection", "user-agent", "roblox-id", "currentuser"];

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

function handleError(error, response) {
    if ("errors" in error.response.data) {
        if (error.response.data.errors[0] !== null) {
            return response.json({
                error: {
                    message: error.response.data.errors[0].message
                }
            });
        };
    } else if ("message" in error.response.data) {
        return response.json({
            error: {
                message: error.response.data.message
            }
        });
    };

    response.json({
        error: error
    });
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/get", async (request, response) => {
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

    if ("currentuser" in request.body) {
        if (request.body.currentuser in process.env) {
            newHeaders.cookie = ".ROBLOSECURITY=" + process.env[request.body.currentuser]
            newHeaders["x-csrf-token"] = await getToken(newHeaders.cookie, false);
        } else {
            return response.json({
                error: {
                    message: "Invalid user."
                }
            });
        };
    };

    for (const [header, value] of Object.entries(request.body)) {
        if (!disallowedHeaders.includes(header)) {
            newHeaders[header] = value;
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
                        handleError(error, response);
                    });
            } else {
                handleError(error, response);
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

    if ("currentuser" in request.body.Headers) {
        if (request.body.Headers.currentuser in process.env) {
            newHeaders.cookie = ".ROBLOSECURITY=" + process.env[request.body.Headers.currentuser]
            newHeaders["x-csrf-token"] = await getToken(newHeaders.cookie, false);
        } else {
            return response.json({
                error: {
                    message: "Invalid user."
                }
            });
        };
    };

    for (const [header, value] of Object.entries(request.body.Headers)) {
        if (!disallowedHeaders.includes(header)) {
            newHeaders[header] = value;
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
                        handleError(error, response);
                    });
            } else {
                handleError(error, response);
            };
        });
});

app.listen(process.env.PORT || 80, () => {
    console.log(`Listening on port ${process.env.PORT || 80}`);
});