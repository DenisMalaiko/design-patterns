class AutoNews {
    news: string;
    actions: any;
    constructor() {
        this.news = '';
        this.actions = [];
    }

    setNews(text: string) {
        this.news = text;
        this.notifyAll();
    }

    notifyAll() {
        return this.actions.forEach((subs: any) => subs.inform(this));
    }

    register(observer: any) {
        this.actions.push(observer)
    }
};

class Den {
    inform(message: any) {
        console.log(`Den has been informed: ${message.news}`);
    }
}

const autoNews = new AutoNews();

autoNews.register(new Den());
autoNews.setNews('New post')