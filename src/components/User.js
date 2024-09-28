const User = ({ name, role, hobby }) => {
  return (
    <div className="p-4 m-2 border border-black rounded-xl">
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p>Hobby: {hobby}</p>
    </div>
  );
};

export default User;
