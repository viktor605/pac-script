function FindProxyForURL(url, host) {
    if (shExpMatch(host, "(*.dnrtele.com|dnrtele.com)") ||        
        dnsDomainIs(host, "dc-mail-01")) return "PROXY localhost:3128";
    return "DIRECT";
}
