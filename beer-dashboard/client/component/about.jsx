About = React.createClass({
    render() {
        return (
            <div>
                <div className="bg"></div>
                <nav className="navbar navbar-default navbar-static-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-2">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Brand</a>
                        </div>

                        <div className="collapse navbar-collapse" id="navbar-collapse-2">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/services">Services</a></li>
                                <li><a href="/news">News</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li>
                                    <a className="btn btn-default btn-outline btn-circle collapsed"  data-toggle="collapse" href="#nav-collapse2" aria-expanded="false" aria-controls="nav-collapse2"><AccountsUIWrapper /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Top Secret: <small> About Us</small></h1>
                    </div>
                </div>
            </div>
        );
    }
});