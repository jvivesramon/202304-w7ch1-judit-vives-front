import { useEffect } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppDispatch } from "../../store";
import Header from "../Header/Header";
import { loadRobotActionCreator } from "../../store/robots/robotsSlice";
import RobotList from "../RobotList/RobotList";
import LoginForm from "../LoginForm/LoginForm";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { getRobots } = useApi();

  useEffect(() => {
    (async () => {
      const robotsApi = await getRobots();
      const { robots } = robotsApi;
      dispatch(loadRobotActionCreator(robots));
    })();
  }, [getRobots, dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <RobotList />
        <LoginForm />
      </div>
    </>
  );
};
export default App;
