local HttpProxyService = {}

local HttpService = game:GetService("HttpService")

local Url = "https://httpproxyservice.herokuapp.com" -- Your URL here. Example: https://app-name-here.herokuapp.com (Without '/' at the end)

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

function HttpProxyService:GetAsync(Link, Decode, NoCache, Headers)
	local Data = HttpService:GetAsync(GetUrl("/get", Link), NoCache or true, Headers or nil)

	local DecodedData = HttpService:JSONDecode(Data)

	if DecodedData.error then
		error(DecodedData.error.message)
	end

	if Decode == nil or Decode then
		return DecodedData
	else
		return Data
	end
end

function HttpProxyService:PostAsync(Link, Decode, Data, Headers, Content_Type)
	local Body = {}
	
	if Data ~= nil then
		Body.Data = Data
	end
	
	if Headers ~= nil then
		Body.Headers = Headers
	end
	
	Body = HttpService:JSONEncode(Body)
	
	local Data = HttpService:PostAsync(GetUrl("/post", Link), Body, Enum.HttpContentType[Content_Type or "ApplicationJson"] or Content_Type or Enum.HttpContentType.ApplicationJson)

	local DecodedData = HttpService:JSONDecode(Data)

	if DecodedData.error then
		error(DecodedData.error.message)
	end

	if Decode == nil or Decode then
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
