import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import AddFab from '../common/Headers.js/AddFab';
import PostListing from '../components/HomeComp/PostListing/PostListing';
import * as actionCreator from '../redux/Actions/ActionCreator/ResourceAction';
import Search from '../components/BookmarkComp/Search';

const HomePage = (props) => {
  const { GetResourcesAction } = props;

  useEffect(() => {
    GetResourcesAction();
  }, []);

  return (
    <Fragment>
      <div className="mx-auto">
        <div className="container-fluid">
          <Search />

          <div className="row">
            <div className="col-8">
              <h5>Latest</h5>
              <PostListing />
            </div>
            <div className="col-4">
              <h5>Trending</h5>
              {[0, 0, 0, 0].map((item, index) => {
                return (
                  <div className="trending-card my-2" key={index}>
                    hi
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="d-block d-md-none">
          <AddFab />
        </div>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({ GetResourcesAction: () => dispatch(actionCreator.GetResourcesAction()) });

export default connect(null, mapDispatchToProps)(HomePage);
