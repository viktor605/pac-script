// -*-javascript-*-
// ~/.pac: Proxy Auto-Config file

var tor = "HTTP localhost:3128";

var censoredHosts = ["dc-abills-01.dnrtele.com",
                     "archive.org",
                     "lj.rossia.org"]


function FindProxyForURL(url, host)
{

    for (var censoredHost of censoredHosts) {
        if (host === censoredHost || dnsDomainIs(host, "." + censoredHost))
            return tor;
    }

    return "DIRECT";
}
