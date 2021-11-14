# HttpProxyService

Send HTTP requests to Roblox APIs or Discord Webhooks in-game

# Recommended Setup Method

You will need a [Heroku](https://www.heroku.com) and [GitHub](https://www.github.com) account.

- Create a [Heroku](https://www.heroku.com) account [here](https://signup.heroku.com) (https://signup.heroku.com)
- Login [here](https://id.heroku.com/login) (https://id.heroku.com/login) if you already have a [Heroku](https://www.heroku.com) account

- Create a [Github](https://github.com) account [here](https://github.com/signup?user_email=&source=form-home-signup) (https://github.com/signup?user_email=&source=form-home-signup)
- Login [here](https://github.com/login) (https://github.com/login) if you already have a [GitHub](https://github.com) account

After you are logged into your [Heroku](https://www.heroku.com) account, click [here](https://dashboard.heroku.com/apps) (https://dashboard.heroku.com/apps) to go to the [dashboard](https://dashboard.heroku.com/apps)

On the top right, click `New` and click `Create new app`

![Screen Shot 2564-11-13 at 11 17 14 AM](https://user-images.githubusercontent.com/46888825/141605439-e2b27ddd-d9a9-44fb-96dd-27b67001fbb7.png)

Choose your app name, region and then click `Create app`

![Screen Shot 2564-11-13 at 11 18 45 AM](https://user-images.githubusercontent.com/46888825/141605458-fc0f6758-38fd-4534-9f34-f04f899f281c.png)

Click on GitHub and click `Connect to GitHub`

![Screen Shot 2564-11-13 at 11 21 58 AM](https://user-images.githubusercontent.com/46888825/141647663-c79566f9-4cbd-4c1d-b02e-ac1274e92674.png)
![Screen Shot 2564-11-13 at 11 23 03 AM](https://user-images.githubusercontent.com/46888825/141647665-9a97aba5-fabe-4fd4-9825-005239933f2a.png)

Click `Authorize Heroku` (You have to login into [Github](https://github.com) first)

![Screen Shot 2564-11-13 at 11 31 21 AM](https://user-images.githubusercontent.com/46888825/141605716-52563cef-2a17-49d3-af92-b5e95437b9df.png)

When you've connected your GitHub account to [Heroku](https://www.heroku.com), you will see this page.

![Screen Shot 2564-11-13 at 11 32 40 AM](https://user-images.githubusercontent.com/46888825/141605725-906925eb-3c94-45b0-9ebd-d6eb03e58ef1.png)

Fork [this repository](https://github.com/Unstable0/HttpProxyService) (https://github.com/Unstable0/HttpProxyService)

![Screen Shot 2564-11-13 at 11 28 09 AM](https://user-images.githubusercontent.com/46888825/141605640-e14a4f1a-8c2e-45aa-9825-a3187b737c4c.png)

After you fork this repository, go back to [Heroku](https://www.heroku.com) and search `HttpProxyService` then click `Connect`

![Screen Shot 2564-11-13 at 11 34 12 AM](https://user-images.githubusercontent.com/46888825/141605767-d2a79d37-27bb-428c-99cb-1d25de00a8b9.png)

Now click `Deploy` and wait until [Heroku](https://www.heroku.com) finish deploying your app

![Screen Shot 2564-11-13 at 11 40 00 AM](https://user-images.githubusercontent.com/46888825/141605863-0113ff48-bb8a-483d-8682-85101f24d12c.png)

After your app is deployed, click on `View`.

![Screen Shot 2564-11-13 at 11 40 29 AM](https://user-images.githubusercontent.com/46888825/141605871-7de372aa-ba97-49d6-b1bf-aa9c4683c80a.png)

Copy your app URL, you will need this later.

![Screen Shot 2564-11-13 at 11 41 55 AM](https://user-images.githubusercontent.com/46888825/141605911-96640522-1ed9-44f7-b05b-46802dda519d.png)

# Fast Setup Method (Not Recommended)

*Notes: You will have to delete your app and re-deploy to update the code if you are using this method, I recommend using the recommended method.*

After you are logged into your [Heroku](https://www.heroku.com) account, click [here](https://heroku.com/deploy?template=https://github.com/Unstable0/HttpProxyService) or click the button below.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Unstable0/HttpProxyService)

Choose your app name, region and then click `Deploy app`

![Screen Shot 2564-11-12 at 4 47 48 PM](https://user-images.githubusercontent.com/46888825/141446973-b742a191-bb89-4b7e-b89f-37e9fe201d98.png)

Wait until Heroku finishes deploying your app

After your app is deployed, click on `View`.

![Screen Shot 2564-11-12 at 4 42 14 PM](https://user-images.githubusercontent.com/46888825/141445932-a3e1878a-df03-423c-bb1d-c255b75f11c5.png)

Copy your app URL, you will need this later.

![Screen Shot 2564-11-13 at 11 41 55 AM](https://user-images.githubusercontent.com/46888825/141605979-11a0774b-11fc-481d-adfa-40d094a11682.png)

# Environment Variables Setup

Click [here](https://dashboard.heroku.com/apps) (https://dashboard.heroku.com/apps) to go to your [Heroku](https://www.heroku.com) account [dashboard](https://dashboard.heroku.com/apps)

Click on your app

![Screen Shot 2564-11-13 at 11 56 30 AM](https://user-images.githubusercontent.com/46888825/141606204-42a6f873-99a3-466b-9f4c-b585c56d3f6a.png)

Click `Settings`

![Screen Shot 2564-11-13 at 6 17 06 PM](https://user-images.githubusercontent.com/46888825/141636176-b8add2da-23dd-48c6-8bab-c7813b207465.png)

Click `Reveal Config Vars`
![Screen Shot 2564-11-13 at 6 18 11 PM](https://user-images.githubusercontent.com/46888825/141636578-1c56cfcb-a0fa-4dc2-835b-79f12155f696.png)

Type your user in the `Key` box and paste your [Roblox](https://www.roblox.com) account cookie inside the `Value` box (You will need this for authentication)

*Notes: Your user name cannot be `PORT` because it will break the code*

![Screen Shot 2564-11-13 at 6 26 16 PM](https://user-images.githubusercontent.com/46888825/141641856-f90e2fa1-3972-4537-a993-e64652e48730.png)

![Screen Shot 2564-11-14 at 7 39 20 AM](https://user-images.githubusercontent.com/46888825/141663252-65c5d983-343c-4dc7-8576-78152a6e0e9a.png)

You can add multiple users.

![Screen Shot 2564-11-14 at 7 39 47 AM](https://user-images.githubusercontent.com/46888825/141663257-52946684-7dac-4024-ac38-7073e3b204cb.png)

*Notes: You need to put your full cookie including the _|WARNING*

Now follow the same steps but type in `password` in the `Key` box and type in your password in the `Value` box (This password will be used to lock your app)

You can also use [this website](https://1password.com/password-generator/) (https://1password.com/password-generator/) to generate secure passwords.

![Screen Shot 2564-11-14 at 7 40 00 AM](https://user-images.githubusercontent.com/46888825/141663293-ba2ae7f4-fe1b-4ea4-9de4-419705d4a67e.png)

*Notes: Your password must contain only underscores, letters (a-z), and numbers to prevent problems.*

Head over to `Deploy`

![Screen Shot 2564-11-14 at 7 40 12 AM](https://user-images.githubusercontent.com/46888825/141663279-b7f24fc7-c8fd-4ada-b655-a454a967e907.png)

Scroll down and click `Deploy Branch`

![Screen Shot 2564-11-13 at 6 29 28 PM](https://user-images.githubusercontent.com/46888825/141642143-5143e42c-8ffd-49ad-888e-17d1375d3082.png)

Now, wait until [Heroku](https://www.heroku.com) finishes deploying your app.

*Notes: Your [Roblox](https://www.roblox.com) cookie resets every time you log in/out of your account. If you want to use your alt account cookie then open incognito mode and login into your alt account, get your cookie, and close the window so your cookie won't reset.*

*Every time you update/add/delete a config var, you will have to deploy your app again for the changes to take effect.*

# Game Setup

Create a new [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) in [ServerStorage](https://developer.roblox.com/en-us/api-reference/class/ServerStorage) and rename it to `HttpProxyService`

Replace the code inside your [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) with this [code](https://github.com/Unstable0/HttpProxyService/blob/main/HttpProxyService.lua) (https://github.com/Unstable0/HttpProxyService/blob/main/HttpProxyService.lua)

Go to line 5 where it says `local Url = ""`

![Screen Shot 2564-11-12 at 4 56 37 PM](https://user-images.githubusercontent.com/46888825/141448026-e9bb49d6-187d-4f01-9c02-6633339e38ab.png)

Paste your [Heroku](https://www.heroku.com) app URL that you copied earlier.

![Screen Shot 2564-11-13 at 11 41 55 AM](https://user-images.githubusercontent.com/46888825/141606335-452e3f12-0f8d-4bbb-8c5b-630079a03bac.png)

![Screen Shot 2564-11-13 at 11 46 45 AM](https://user-images.githubusercontent.com/46888825/141605997-295663fe-2b01-47da-9754-a873b89ff07f.png)

(Make sure there is no `/` at the end of your URL)

# Usage

# HttpProxyService:FormatParams

**Parameters**

| Name | Type | Default | Required |
| ------------- | ------------- | ------------- | ------------- |
| url | [string](https://developer.roblox.com/en-us/articles/String) |  | true |
| params | [dictionary](https://education.roblox.com/en-us/resources/intro-to-dictionaries---series) | {} | false |

**Returns** [formatted url](https://developer.roblox.com/en-us/articles/String)

**Example**

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))

local FormattedData = HttpProxyService:FormatParams("https://catalog.roblox.com/v1/search/items/details", {
	Category = 3,
	Keyword = "Pants"
})

print(FormattedData) --> https://catalog.roblox.com/v1/search/items/details?Category=3&Keyword=Pants
```

# HttpProxyService:New

**Parameters**

| Name | Type | Default | Description | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| password | [string](https://developer.roblox.com/en-us/articles/String) |  | Your app password | true |

**Returns** [HttpProxy](https://github.com/Unstable0/HttpProxyService#httpproxyservicegetasync)

**Examples**

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))
local HttpProxy = HttpProxyService:New(Password here) --Put your app password here

local Data = HttpProxy:GetAsync("https://www.roblox.com")

print(Data)
```

# HttpProxy:GetAsync

**Parameters**

| Name | Type | Default | Description | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| url | [string](https://developer.roblox.com/en-us/articles/String) |  | The web address you are requesting data from | true |
| decode | [bool](https://developer.roblox.com/en-us/articles/Boolean) | true | Whether the request decodes the response | false |
| headers | [dictionary](https://education.roblox.com/en-us/resources/intro-to-dictionaries---series) | {} | Used to specify some HTTP request headers | false |

**Returns** response body

**Examples**

Search roblox catalog with the keyword `Pants` and print the results

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))
local HttpProxy = HttpProxyService:New(Password here) --Put your app password here

local FormattedData = HttpProxyService:FormatParams("https://catalog.roblox.com/v1/search/items/details", {
	Category = 3,
	Keyword = "Pants"
})

local Data = HttpProxy:GetAsync(FormattedData)

for Index, Asset in pairs(Data.data) do
	print(Asset.name)
end
```

*If you want to send a get request to Roblox APIs with user credentials, add a `currentuser` header with the user name you added to the config vars. Examples below.*

Get the friend count for `User1`

![Screen Shot 2564-11-14 at 7 39 20 AM](https://user-images.githubusercontent.com/46888825/141663409-00d0f9ee-48fc-4a64-a30f-cb5939eb948a.png)

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))
local HttpProxy = HttpProxyService:New(Password here) --Put your app password here

local Data = HttpProxy:GetAsync("https://friends.roblox.com/v1/my/friends/count", true, {
	currentuser = "User1" --Replace with the user you added in the config var (Case sensitive)
}) --> { count: number_of_friends }

print(Data.count) --> 4 (Number of friends request on the first user)
```

Get the friend count for `User2`

![Screen Shot 2564-11-14 at 7 39 47 AM](https://user-images.githubusercontent.com/46888825/141663414-35492743-d1bc-4529-9ca3-939fe0274d09.png)

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))
local HttpProxy = HttpProxyService:New(Password here) --Put your app password here

local Data = HttpProxy:GetAsync("https://friends.roblox.com/v1/my/friends/count", true, {
	currentuser = "User2" --Replace with the user you added in the config var (Case sensitive)
}) --> { count: number_of_friends }

print(Data.count) --> 414 (Number of friends request on the second user)
```

See https://friends.roblox.com/docs#!/Friends/get_v1_my_friends_count

# HttpProxyService:PostAsync

**Parameters**

| Name | Type | Default | Description | Required |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| url | [string](https://developer.roblox.com/en-us/articles/String) |  | The web address you are requesting data from | true |
| decode | [bool](https://developer.roblox.com/en-us/articles/Boolean) | true | Whether the request decodes the response | false |
| data | [dictionary](https://education.roblox.com/en-us/resources/intro-to-dictionaries---series) | {} | The data being sent | false |
| headers | [dictionary](https://education.roblox.com/en-us/resources/intro-to-dictionaries---series) | {} | Used to specify some HTTP request headers | false |
| content_type | [HttpContentType](https://developer.roblox.com/en-us/api-reference/enum/HttpContentType) | ApplicationJson | Modifies the value in the Content-Type header sent with the request | false |

**Returns** result

**Examples**

Send a `Hello world!` message using discord webhook.

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))
local HttpProxy = HttpProxyService:New(Password here) --Put your app password here

HttpProxy:PostAsync("https://discord.com/api/webhooks/123456789012345678/83LgJzu7Qjmfyt1dunqEz651J1jh68kJijwkPaJuJnah7UjjekFgmRhti2_mLakIJneh", true, {
	content = "Hello World!"
})
```

*If you want to send a post request to Roblox APIs with user credentials, add a `currentuser` header with the user name that you added to the config vars. Examples below.*

Favorite the gear [Body Swap Potion](https://www.roblox.com/catalog/78730532/Body-Swap-Potion) (https://www.roblox.com/catalog/78730532/Body-Swap-Potion) using `User1` credentials

![Screen Shot 2564-11-14 at 7 39 20 AM](https://user-images.githubusercontent.com/46888825/141663409-00d0f9ee-48fc-4a64-a30f-cb5939eb948a.png)

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))
local HttpProxy = HttpProxyService:New(Password here) --Put your app password here

HttpProxy:PostAsync("https://catalog.roblox.com/v1/favorites/users/2293439462/assets/78730532/favorite", true, {}, {
	currentuser = "User1" --Replace with the user you added in the config var (Case sensitive)
})
```

Favorite the gear [Body Swap Potion](https://www.roblox.com/catalog/78730532/Body-Swap-Potion) (https://www.roblox.com/catalog/78730532/Body-Swap-Potion) using `User2` credentials

![Screen Shot 2564-11-14 at 7 39 47 AM](https://user-images.githubusercontent.com/46888825/141663414-35492743-d1bc-4529-9ca3-939fe0274d09.png)

```lua
local HttpProxyService = require(game:GetService("ServerStorage"):WaitForChild("HttpProxyService"))
local HttpProxy = HttpProxyService:New(Password here) --Put your app password here

HttpProxy:PostAsync("https://catalog.roblox.com/v1/favorites/users/2293439462/assets/78730532/favorite", true, {}, {
	currentuser = "User2" --Replace with the user you added in the config var (Case sensitive)
})
```

*Notes: If it warns error 409, it means the user already favorited the gear.*

See https://catalog.roblox.com/docs#!/Favorites/post_v1_favorites_users_userId_assets_assetId_favorite

# Updating

**If you installed using recommended method**

Open [GitHub](https://github.com) (https://github.com)
![Screen Shot 2564-11-13 at 11 52 07 AM](https://user-images.githubusercontent.com/46888825/141606102-5a1dc4a4-040c-4d2a-8918-85e219aea1e0.png)

Click on your repository

![Screen Shot 2564-11-13 at 11 52 30 AM](https://user-images.githubusercontent.com/46888825/141606111-62177bb7-d252-40c3-9193-da3391100df9.png)

If it says `This branch is x commits behind Unstable0:main`, it means there is an update.

![Screen Shot 2564-11-13 at 11 53 25 AM](https://user-images.githubusercontent.com/46888825/141606127-0e3b1328-3062-4e95-b88d-f1890805d147.png)

Tp update, click on `Fetch Upstream` and click `Fetch and merge`

![Screen Shot 2564-11-13 at 11 54 19 AM](https://user-images.githubusercontent.com/46888825/141606153-7cf7284d-5c55-42ae-802a-8e5e66b6bd25.png)

![Screen Shot 2564-11-13 at 11 55 00 AM](https://user-images.githubusercontent.com/46888825/141606161-0bee1aa4-5075-470d-9387-5e3ec63c48bb.png)

After you fetched the latest version, click [here](https://dashboard.heroku.com/apps) (https://dashboard.heroku.com/apps) to go to your [Heroku](https://www.heroku.com) account [dashboard](https://dashboard.heroku.com/apps)

Click on your app

![Screen Shot 2564-11-13 at 11 56 30 AM](https://user-images.githubusercontent.com/46888825/141606204-42a6f873-99a3-466b-9f4c-b585c56d3f6a.png)

Click `Deploy`

![Screen Shot 2564-11-13 at 11 57 19 AM](https://user-images.githubusercontent.com/46888825/141606219-c33bf599-3c8b-479c-ae5a-6ec9a11ccd01.png)

Scroll down and click `Deploy Branch` to update.

![Screen Shot 2564-11-13 at 11 57 54 AM](https://user-images.githubusercontent.com/46888825/141606231-64dd3446-f570-4a8e-b190-2f444e3cf2fe.png)

*Notes: You can enable automatic deployment so next time when you fetch the latest version on your repository, Heroku will re-deploy your app automatically (Meaning you do not need to re-deploy on your app dashboard)*

![Screen Shot 2564-11-13 at 11 58 26 AM](https://user-images.githubusercontent.com/46888825/141606245-27017421-970e-4676-be08-8e573a45f47e.png)

**For fast method**

*Notes: The video tutorial is not finished yet because I don't have a video editing program. You will have to delete the app and re-deploy it to Heroku for now.*

- Make sure you have [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) installed on your computer.
- If you are on Mac OS, you will need to install [homebrew](https://brew.sh) or install using the Standalone installation method.

![Screen Shot 2564-11-12 at 9 15 15 PM](https://user-images.githubusercontent.com/46888825/141480996-bc80b47c-abff-4b1d-8a1e-6e150f7a827f.png)

**For Macs with Apple chip**

If you get this message `unsupported arch: arm64` then close Terminal

Press `Command + Space` to open Spotlight search

Search `Terminal`, Hold `Command` key, and press `Enter` to reveal the file in Finder.

Duplicate the `Terminal` app and rename it to `Terminal with Rosetta`

Right-click on `Terminal with Rosetta`, click `Get Info`, and enable `Open using Rosetta`

![Screen Shot 2564-11-12 at 9 28 35 PM](https://user-images.githubusercontent.com/46888825/141483020-c12fc3b2-eb98-42ab-bef4-30b07726f22d.png)

After you've enabled it, reinstall Heroku again but on `Terminal with Rosetta`.

**After installing**

Open `Terminal` or `Command Prompt` (Open `Terminal with Rosetta` for Macs with Apple chip)

Type this on your command line `heroku login` then press `Enter`.

Follow the instructions on your screen.

If you get an `IP address mismatch` error, press Control + C on your command line and type `heroku login -i`, then press `Enter` again.

Type in your email and password.

Once you have logged in, follow [this](https://youtube.com) tutorial.
