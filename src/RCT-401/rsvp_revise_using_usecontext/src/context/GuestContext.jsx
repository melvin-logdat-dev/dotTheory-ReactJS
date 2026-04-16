import { createContext, useContext, useState, useRef } from "react";

const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [pendingGuest, setPendingGuest] = useState("");
  const [guests, setGuests] = useState([]);
  const lastGuestId = useRef(0);

  const newGuestId = () => {
    lastGuestId.current += 1;
    return lastGuestId.current;
  };

  // handler / method
  const toggleProperty = (property, id) => {
    setGuests((prevGuests) =>
      prevGuests.map((guest) =>
        guest.id === id ? { ...guest, [property]: !guest[property] } : guest,
      ),
    );
  };

  // for confirmed checkbox
  const toggleConfirmation = (id) => {
    toggleProperty("isConfirmed", id);
  };

  const toggleEditing = (id) => {
    toggleProperty("isEditing", id);
  };

  const removeGuest = (id) => {
    setGuests((prevGuests) => prevGuests.filter((guest) => guest.id !== id));
  };

  const setName = (name, id) => {
    setGuests((prevGuests) =>
      prevGuests.map((guest) => (guest.id === id ? { ...guest, name } : guest)),
    );
  };

  const handleNameInput = (e) => {
    setPendingGuest(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const id = newGuestId();
    if (pendingGuest.trim() === "") return;
    setGuests((prevGuests) => [
      { name: pendingGuest, isConfirmed: false, isEditing: false, id },
      ...prevGuests,
    ]);
    setPendingGuest("");
  };

  const toggleFilter = () => {
    setIsFiltered((prevFiltered) => !prevFiltered);
  };

  const getTotalInvited = () => guests.length;
  const getAttendingGuests = () => guests.filter((g) => g.isConfirmed).length;
  const getUnConfirmedGuests = () =>
    guests.filter((g) => !g.isConfirmed).length;

  const totalInvited = getTotalInvited();
  const numberAttending = getAttendingGuests();
  const unConfirmedGuest = getUnConfirmedGuests();

  return (
    <GuestContext.Provider
      value={{
        handleSubmitForm,
        pendingGuest,
        handleNameInput,
        toggleFilter,
        isFiltered,
        totalInvited,
        numberAttending,
        unConfirmedGuest,
        guests,
        toggleConfirmation,
        toggleEditing,
        setName,
        removeGuest,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
};

export const useGuests = () => {
  return useContext(GuestContext);
};
