FlowRouter.route('/', {
    action() {
        ReactLayout.render(App);
    }
});

FlowRouter.route('/about', {
    action() {
        ReactLayout.render(About);
    }
});

FlowRouter.route('/services', {
    action() {
        ReactLayout.render(Services);
    }
});

FlowRouter.route('/news', {
    action() {
        ReactLayout.render(News);
    }
});


FlowRouter.route('/contact', {
    action() {
        ReactLayout.render(Contact);
    }
});