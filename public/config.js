let _CONFIG = {  
  wisp: "wss://wisp-server.replit.app/wisp/",
  
  // Motores de búsqueda organizados por las categorías que pediste
  engines: {
    // Generales
    bing: "https://www.bing.com/search?q=%s",
    yahoo: "https://search.yahoo.com/search?p=%s",
    duckduckgo: "https://duckduckgo.com/?q=%s",
    brave: "https://search.brave.com/search?q=%s",
    qwant: "https://www.qwant.com/?q=%s",
    ecosia: "https://www.ecosia.org/search?q=%s",
    startpage: "https://www.startpage.com/sp/search?query=%s",
    baidu: "https://www.baidu.com/s?wd=%s",
    yandex: "https://yandex.com/search/?text=%s",

    // Desarrollo y Código
    github: "https://github.com/search?q=%s&type=code",
    stackoverflow: "https://stackoverflow.com/search?q=%s",
    mdn: "https://developer.mozilla.org/es/search?q=%s",

    // Privacidad y Académico
    searxng: "https://searxng.site/search?q=%s", 
    wikipedia: "https://es.wikipedia.org/w/index.php?search=%s",
    scholar: "https://scholar.google.com/scholar?q=%s",
    wolfram: "https://www.wolframalpha.com/input?i=%s",

    // Entretenimiento y Redes
    youtube: "https://www.youtube.com/results?search_query=%s",
    reddit: "https://www.reddit.com/search/?q=%s",
    twitter: "https://x.com/search?q=%s",
    twitch: "https://www.twitch.search?term=%s",
    pinterest: "https://www.pinterest.com/search/pins/?q=%s",

    // Herramientas e IA
    perplexity: "https://www.perplexity.ai/search?q=%s",
    phind: "https://www.phind.com/search?q=%s",
    archive: "https://web.archive.org/web/*/%s",
    urban: "https://www.urbandictionary.com/define.php?term=%s"
  },
  
  // Motor por defecto
  defaultEngine: "google" 
};
