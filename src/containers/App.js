import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField, requestInfo } from "../action";

const mapStateToProps = state => {
  return {
    searchField: state.searchInfo.searchField,
    info: state.requestInfo.info,
    isPending: state.requestInfo.isPending,
    error: state.requestInfo.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestInfo: () => dispatch(requestInfo())
  };
};

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestInfo();
  }

  render() {
    const { searchField, onSearchChange, info, isPending } = this.props;
    const filterName = info.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    });

    const plural = filterName.length === 1 ? "" : "s";
    let result = !searchField.length
      ? ""
      : `${filterName.length} search result${plural} found`;
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1"> Robo Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <p className="ma2">{result}</p>
        <Scroll>
          <ErrorBoundary>
            <CardList info={filterName} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
