import UserItem from "../UserItem/UserItem";
import styles from "./UserList.module.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={styles["center"]}>
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
