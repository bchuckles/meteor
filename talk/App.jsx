// App component - represents the whole app
App = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
        let query = {};

        if (this.state.hideCompleted) {
            // If hide completed is checked, filter tasks
            query = {checked: {$ne: true}};
        }

        return {
            tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
            incompleteCount: Tasks.find({checked: {$ne: true}}).count(),
            currentUser: Meteor.user()
        };

    },

    getTasks() {
        return [
            { _id: 1, text: "This is task 1" },
            { _id: 2, text: "This is task 2" },
            { _id: 3, text: "This is task 3" }
        ];
    },

    getInitialState() {
        return {
            hideCompleted: false
        }
    },

    renderTasks() {
        return this.data.tasks.map((task) => {
            return <Task key={task._id} task={task} />;
        });
    },

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var text = React.findDOMNode(this.refs.textInput).value.trim();

        Meteor.call("addTask", text);

        // Clear form
        React.findDOMNode(this.refs.textInput).value = "";
    },

    toggleHideCompleted() {
        this.setState({
            hideCompleted: ! this.state.hideCompleted
        });
    },

    render() {
        return (

            <div className="container">
                <section class="container-fluid" id="section1">
                    <div className="button-div">
                        <p><a className="btn btn-py btn-lg"  role="button"><AccountsUIWrapper /></a></p>
                    </div>
                    <div class="v-center">
                        <div className="jumbotron">
                            <h1>Talk About #IT</h1>
                            <p>#OBAMA</p>
                        </div>
                        </div>
                    <div>

                        { this.data.currentUser ?
                            <form className="new-task" onSubmit={this.handleSubmit} >
                                <input
                                    type="text"
                                    ref="textInput"
                                    placeholder="What are your thoughts?" />
                            </form> : ''
                        }
                    </div>
                </section>

                <div> <h1> </h1></div>
                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
});