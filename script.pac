function FindProxyForURL(url, host) {
    if (shExpMatch(host, "(*.dnrtele.com|dnrtele.com)") ||        
        dnsDomainIs(host, "dc-mail-01") ||
        dnsDomainIs(host, "192.168.111.252")) return "PROXY localhost:3128";
    return "DIRECT";
}
