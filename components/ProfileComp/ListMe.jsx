import { Fragment, useState } from 'react';
import { checkInputHandler } from '../../utils/GlobalFunctions';
import { toast } from 'react-hot-toast';

const ListMe = (props) => {
  const { userData } = props;
  const [state, setState] = useState({ firstname: '', lastname: '' });
  const onChangeHandler = (e) => {
    if (checkInputHandler(e)) {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };
  console.log({ state });
  const onSubmitHandler = () => {
    if (state.firstname?.length <= 2) toast.error('Invalid First name');
    else if (state.lastname?.length <= 2) toast.error('Invalid Last name');
    else {
      const data = { firstname: state.firstname, lastname: state.lastname };
      console.log({ data });
      // TODO: Update profile API
    }
  };

  return (
    <Fragment>
      <div className="row gx-3 mb-3 mt-3">
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputFirstName">
            First name
          </label>
          <input
            className="form-control"
            id="inputFirstName"
            type="text"
            name="firstname"
            value={state.firstname || ''}
            placeholder={userData?.user?.first_name}
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
        <div className="col-md-6">
          <label className="small mb-1" htmlFor="inputLastName">
            Last name
          </label>
          <input className="form-control" id="inputLastName" type="text" name="lastname" value={state.lastname || ''} placeholder={userData?.user?.last_name} onChange={(e) => onChangeHandler(e)} />
        </div>
      </div>

      <div className="mb-3">
        <label className="small mb-1" htmlFor="inputEmailAddress">
          Email address
        </label>
        <input className="form-control" id="inputEmailAddress" type="email" placeholder={userData?.user?.email} value={userData?.user?.email} disabled readOnly />
      </div>

      <button className="btn btn-primary" type="button" onClick={() => onSubmitHandler()}>
        Save changes
      </button>
    </Fragment>
  );
};

export default ListMe;
