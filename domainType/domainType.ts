function domainType(domains: string[]): string[] {
    return domains.map(domain => {
        switch (domain.split('.').pop()) {
            case "org":
                return "organization";
            case "com":
                return "commercial";
            case "net":
                return "network";
            case "info":
                return "information";
            default:
                break;
        }
    });
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));