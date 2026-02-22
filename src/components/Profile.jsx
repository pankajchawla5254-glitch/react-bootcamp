function Profile(props) {
  return (
    <div style={{ border: "1px solid gray", padding: "12px", marginTop: "10px" }}>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <small>{props.location}</small>
    </div>
  );
}

export default Profile;