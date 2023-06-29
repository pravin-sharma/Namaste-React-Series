const User = ({ name, role, hobby }) => {
  return (
    <div className="user-card">
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
};

export default User;
