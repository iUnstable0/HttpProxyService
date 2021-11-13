local HttpProxyService = {}

local HttpService = game:GetService("HttpService")

local Url = "" -- Your URL here. Example: https://app-name-here.herokuapp.com (Without '/' at the end)

function GetUrl(Method, Link)
	return Url .. Method .. "?url=" .. HttpService:UrlEncode(Link)
end

function IsTable(Object)
	if typeof(Object) == "table" then
		return true
	else
		return false
	end
end

function HttpProxyService:GetAsync(Link, Options)
	if Options == nil then
		Options = {}
	end

	local Data = HttpService:GetAsync(GetUrl("/get", Link), Options.NoCache or t, Options.Headers or nil)

	local DecodedData = HttpService:JSONDecode(Data)

	if DecodedData.error then
		error(Data)
	end

	if Options.Decode == nil or Options.Decode then
		return DecodedData
	else
		return Data
	end
end

function HttpProxyService:PostAsync(Link, Options)
	if Options == nil then
		Options = {}
	end

	if IsTable(Options.Body) then
		Options.Body = HttpService:JSONEncode(Options.Body)
	end

	local Data = HttpService:PostAsync(
		GetUrl("/post", Link), Options.Body or {},
		Enum.HttpContentType[Options.Content_Type or "ApplicationJson"] or Options.Content_Type or
			Enum.HttpContentType.ApplicationJson
	)

	local DecodedData = HttpService:JSONDecode(Data)

	if DecodedData.error then
		error(Data)
	end

	if Options.Decode == nil or Options.Decode then
		return DecodedData
	else
		return Data
	end
end

function HttpProxyService:FormatParams(Link, Params)
	if Params == nil then
		Params = {}
	end
	
	local First = true

	for Key, Value in pairs(Params) do
		if First == true then
			Link = Link .. "?" .. Key .. "=" .. Value

			First = false
		else
			Link = Link .. "&" .. Key .. "=" .. Value
		end
	end

	return Link
end

return HttpProxyService
