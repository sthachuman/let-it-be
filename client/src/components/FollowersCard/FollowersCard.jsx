import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import FollowersModal from "../FollowersModal/FollowersModal";
import { getUser } from "../../api/UserRequests";
import { getUserRecommendation } from "../../api/RecommendationRequests";
import User from "../User/User";
import { useSelector } from "react-redux";
const FollowersCard = ({ location }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getUserRecommendation(user._id);
      //foreach user, get the user info

      const userPromises = data?.top_users.map(async (user) => {
        const { data } = await getUser(user.user_id);
        return {
          ...user,
          firstname: data.firstname,
          lastname: data.lastname,
          username: data.username,
          profilePicture: data.profilePicture,
          followers: data.followers,
          followings: data.followings,
          _id: data._id,
        };
      });

      const updatedUsers = await Promise.all(userPromises);

      setPersons(updatedUsers);
    };
    fetchPersons();
  }, [user._id]);

  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {persons.map((person) => {
        if (person.user_id !== user._id) {
          return <User person={person} key={person.user_id} />;
        }
      })}
      {!location ? (
        <span onClick={() => setModalOpened(true)}>Show more</span>
      ) : (
        ""
      )}

      <FollowersModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </div>
  );
};

export default FollowersCard;
