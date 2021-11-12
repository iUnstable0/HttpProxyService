local HttpProxyService = {}

local HttpService = game:GetService("HttpService")

local Url = "http://localhost" -- Your URL here. Example: https://app-name-here.herokuapp.com (Without '/' at the end)

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

    local Data = HttpService:GetAsync(GetUrl("/get", Link), Options.NoCache or false, Options.Headers or nil)

    local DecodedData = HttpService:JSONDecode(Data)

    if DecodedData.error then
        error(Data)
    end

    if Options.Decode then
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
                         Enum.HttpContentType.ApplicationJson, Options.Compress or false
                 )

    local DecodedData = HttpService:JSONDecode(Data)

    if DecodedData.error then
        error(Data)
    end

    if Options.Decode then
        return DecodedData
    else
        return Data
    end
end

return HttpProxyService
