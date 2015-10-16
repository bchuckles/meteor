App = React.createClass({
    mixins: [ReactMeteorData],

    getMeteorData() {
        return {
            beers: Beers.find({}).fetch()
        }
    },

    mapData: function() {
        var data = [
            { qty: 0, xLabel: "Sun" },
            { qty: 0, xLabel: "Mon" },
            { qty: 0, xLabel: "Tue" },
            { qty: 0, xLabel: "Wed" },
            { qty: 0, xLabel: "Thu" },
            { qty: 0, xLabel: "Fri" },
            { qty: 0, xLabel: "Sat" },
        ];
        this.data.beers.map(function(d) {
            data[moment(d.date).weekday()].qty += d.beers;
        });

        return data;
    },



    render: function() {
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
                    <h1>Top Secret: <small>Are you ready to make some</small></h1>
                    </div>
                </div>
                <div className="container"> <h3> We can do anything is we put our mind to it</h3></div>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h3>Thumbnail label</h3>
                                <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <BeerForm />
                            <BeerList data={this.data.beers}/>
                        </div>
                        <div className="col-md-offset-2 col-md-6">
                            <BarChart data={this.mapData()} width="480" height="320"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
});