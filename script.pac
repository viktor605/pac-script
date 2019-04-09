function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "dc-mail-01") ||
        dnsDomainIs(host, "dc-abills-01.dnrtele.com")) return "PROXY localhost:3128";
    return "DIRECT";
}
