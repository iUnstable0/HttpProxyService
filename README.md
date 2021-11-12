# HttpProxyService

Send HTTP requests to Roblox APIs or Discord Webhooks in-game

# Setup

You will need a [heroku](https://www.heroku.com) account.

- Create a [heroku](https://www.heroku.com) account [here](https://signup.heroku.com) (https://signup.heroku.com) for free
- Login [here](https://id.heroku.com/login) (https://id.heroku.com/login) if you already have a [heroku](https://www.heroku.com) account.

After you are logged into your [heroku](https://www.heroku.com) account, click [here](https://heroku.com/deploy?template=https://github.com/Unstable0/HttpProxyService) or click the button below.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Unstable0/HttpProxyService)

Choose your app name, regoin and then click `Deploy app`

![Screen Shot 2564-11-12 at 4 47 48 PM](https://user-images.githubusercontent.com/46888825/141446973-b742a191-bb89-4b7e-b89f-37e9fe201d98.png)

Wait until heroku finishes deploying your app

After your app is deployed, click on `View`.

![Screen Shot 2564-11-12 at 4 42 14 PM](https://user-images.githubusercontent.com/46888825/141445932-a3e1878a-df03-423c-bb1d-c255b75f11c5.png)

Copy your app URL, you will need this later.

![Screen Shot 2564-11-12 at 4 42 55 PM](https://user-images.githubusercontent.com/46888825/141446066-a85ede90-53ad-4a49-a5c6-c4020c7dd86d.png)

# Game Setup

Create a new [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) in [ServerStorage](https://developer.roblox.com/en-us/api-reference/class/ServerStorage) and name it `HttpProxyService`

Replace the code inside your [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) with this [code](https://github.com/Unstable0/HttpProxyService/blob/main/HttpProxyService.lua) (https://github.com/Unstable0/HttpProxyService/blob/main/HttpProxyService.lua)

On line 5

![Screen Shot 2564-11-12 at 4 56 37 PM](https://user-images.githubusercontent.com/46888825/141448026-e9bb49d6-187d-4f01-9c02-6633339e38ab.png)

Paste your [heroku](https://www.heroku.com) app URL that you copied earlier.

![Screen Shot 2564-11-12 at 4 42 55 PM](https://user-images.githubusercontent.com/46888825/141448105-74b27588-4bc9-4e68-866c-75a840473da8.png)

Example: My app URL is `https://aaaaaaad23.herokuapp.com` so my code will look like this

![Screen Shot 2564-11-12 at 4 59 51 PM](https://user-images.githubusercontent.com/46888825/141448477-264ea2ab-316e-4f16-9ac3-f700ebd334d4.png)

(Make sure there is no `/` at the end of your URL)

# Usage

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))

print(HttpProxyService:GetAsync("https://catalog.roblox.com/v1/search/items/details?Category=3"))

HttpProxyService:PostAsync("https://discord.com/api/webhooks/123456789012345678/83LgJzu7Qjmfyt1dunqEz651J1jh68kJijwkPaJuJnah7UjjekFgmRhti2_mLakIJneh", {
	Body = {
		Data = {
			content = "Hello world!"
		}
	}
})
```

```lua
HttpProxyService:GetAsync(URL, Options)
```

# HttpProxyService:GetAsync

**Parameters**

| Name | Type | Default |
| ------------- | ------------- | ------------- |
| url | [string](https://developer.roblox.com/en-us/articles/String) |  |
| options | [dictionary](https://education.roblox.com/en-us/resources/intro-to-dictionaries---series) | {} |

**Options**

```lua
{
    NoCache = true, --true = Stores (cache) the response, false = Doesn't stores (cache) the response. Default = false
    Headers = {}, --Send a header. Default = nil.
    Decode = true --true = returns a decoded data, false = returns a undecoded data.
}
```

**Examples**

Search roblox catalog with the keyword `Pants` and print the results

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))

local Data = HttpProxyService:GetAsync("https://catalog.roblox.com/v1/search/items/details?Category=3&Keyword=Pants", {
    Decode = true
})

for Index, Asset in pairs(Data) do
    print(Asset.name)
end
```

# HttpProxyService:PostAsync

**Parameters**

| Name | Type | Default |
| ------------- | ------------- | ------------- |
| url | [string](https://developer.roblox.com/en-us/articles/String) |  |
| options | [dictionary](https://education.roblox.com/en-us/resources/intro-to-dictionaries---series) | {} |

**Options**

```lua
{
    Body = {}, --Send a body. Default = {} (Empty body)
    Content_Type = "ApplicationJson" --Default = ApplicationJson
}
```

**Body**

```lua
{
    Data = {}, --Send a data. Default = nil (No data)
    Headers = {} --Send a headers. Default = nil (No headers)
}
```

**Examples**

Send a `Hello world!` message using discord webhook

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))

HttpProxyService:PostAsync("https://discord.com/api/webhooks/123456789012345678/83LgJzu7Qjmfyt1dunqEz651J1jh68kJijwkPaJuJnah7UjjekFgmRhti2_mLakIJneh", {
	Body = {
		Data = {
			content = "Hello world!"
		}
	}
})
```
