import { useEffect, useState } from "react";
import Card from "./Card";
import FilterContainer from "./filters/FilterContainer";
import NoRecentWorkouts from "./NoRecentWorkouts";
import LoadingSpinner from "../LoadingSpinner";

const CardContainer = () => {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState([]);

  const fetchWorkouts = async () => {
    //TODO:Dynamic user
    const response = await fetch("http://127.0.0.1:3000/workouts/user/1");

    const body = await response.json();
    setWorkouts(body.workouts);
    setFilters(body.filters);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div>
      <FilterContainer
        isLoading={isLoading}
        filters={filters}
        setWorkouts={setWorkouts}
        workouts={workouts}
        fetchWorkouts={fetchWorkouts}
      />

      <div className="flex flex-col justify-center items-center space-y-6">
        {isLoading ? (
          <div className="container-center">
            <LoadingSpinner />
          </div>
        ) : (
          workouts.map((workout) => <Card key={workout.id} workout={workout} />)
        )}
      </div>

      {isLoading === false && workouts.length === 0 && <NoRecentWorkouts />}
    </div>
  );
};

export default CardContainer;
