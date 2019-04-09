function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "intranet.domain.com") ||
        dnsDomainIs(host, "dc-abills-01.dnrtele.com")) return "PROXY localhost:3128";
    return "DIRECT";
}
