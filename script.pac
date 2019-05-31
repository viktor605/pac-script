function FindProxyForURL(url, host) {
    if (shExpMatch(host, "(*.dnrtele.com|dnrtele.com|192.168.111.252)") ||        
        dnsDomainIs(host, "dc-mail-01")) return "PROXY localhost:3128";
    return "DIRECT";
}
