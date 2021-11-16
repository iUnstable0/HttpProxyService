local HttpProxyService = {}

local HttpService = game:GetService("HttpService")

local Url = "" -- Your URL here. Example: https://app-name-here.herokuapp.com (Without '/' at the end)

function IsTable(Object)
	if typeof(Object) == "table" then
		return true
	else
		return false
	end
end

function GetUrl(Method, Link, Password)
	return HttpProxyService:FormatParams(Url .. Method, {
		password = Password,
		url = HttpService:UrlEncode(Link)
	})
end

function HttpProxyService:New(Password)
	local Functions = {}
	
	function Functions:GetAsync(Link, Decode, FakeHeaders)
		if FakeHeaders == nil then
			FakeHeaders = {}
		end
		
		if IsTable(FakeHeaders) then
			FakeHeaders = HttpService:JSONEncode(FakeHeaders)
		end
		
		local Response = HttpService:RequestAsync({
			Url = GetUrl("/get", Link, Password),
			Method = "POST",
			Headers = {
				["Content-Type"] = "application/json"
			},
			Body = FakeHeaders
		}).Body

		local DecodedResponse = HttpService:JSONDecode(Response)

		if DecodedResponse.error then
			warn(DecodedResponse.error.message)
			
			return DecodedResponse
		end

		if Decode == nil or Decode then
			return DecodedResponse
		else
			return Response
		end
	end

	function Functions:PostAsync(Link, Decode, Data, Headers)
		local Body = HttpService:JSONEncode({
			Data = Data or {},
			Headers = Headers or {}
		})
		
		local Response = HttpService:RequestAsync({
			Url = GetUrl("/post", Link, Password),
			Method = "POST",
			Headers = {
				["Content-Type"] = "application/json"
			},
			Body = Body
		}).Body

		local DecodedResponse = HttpService:JSONDecode(Response)

		if DecodedResponse.error then
			warn(DecodedResponse.error.message)
			
			return DecodedResponse
		end

		if Decode == nil or Decode then
			return DecodedResponse
		else
			return Response
		end
	end
	
	function Functions:PatchAsync(Link, Decode, Data, Headers)
		local Body = HttpService:JSONEncode({
			Data = Data or {},
			Headers = Headers or {}
		})

		local Response = HttpService:RequestAsync({
			Url = GetUrl("/patch", Link, Password),
			Method = "POST",
			Headers = {
				["Content-Type"] = "application/json"
			},
			Body = Body
		}).Body
		
		local DecodedResponse = HttpService:JSONDecode(Response)

		if DecodedResponse.error then
			warn(DecodedResponse.error.message)

			return DecodedResponse
		end

		if Decode == nil or Decode then
			return DecodedResponse
		else
			return Response
		end
	end
	
	function Functions:DeleteAsync(Link, Decode, FakeHeaders)
		if FakeHeaders == nil then
			FakeHeaders = {}
		end

		if IsTable(FakeHeaders) then
			FakeHeaders = HttpService:JSONEncode(FakeHeaders)
		end

		local Response = HttpService:RequestAsync({
			Url = GetUrl("/delete", Link, Password),
			Method = "POST",
			Headers = {
				["Content-Type"] = "application/json"
			},
			Body = FakeHeaders
		}).Body

		local DecodedResponse = HttpService:JSONDecode(Response)

		if DecodedResponse.error then
			warn(DecodedResponse.error.message)

			return DecodedResponse
		end

		if Decode == nil or Decode then
			return DecodedResponse
		else
			return Response
		end
	end
	
	return Functions
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

local Proxy = newproxy(true)
local metatable = getmetatable(Proxy)

metatable.__newindex = function()
	error("This ModuleScript is read-only.")
end

metatable.__index = HttpProxyService
metatable.__metatable = "Metatable is locked."

return Proxy
