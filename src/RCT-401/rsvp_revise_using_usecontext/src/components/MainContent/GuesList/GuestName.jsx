function GuestName({ isEditing, name, handleNameEdits }) {
  return (
    <>
      {isEditing ? (
        <input type="text" value={name} onChange={handleNameEdits} />
      ) : (
        <span>{name}</span>
      )}
    </>
  );
}

export default GuestName;
