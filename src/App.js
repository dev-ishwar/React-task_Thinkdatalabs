import { useEffect, useState } from "react";
import "./styles.css";
import Contacts from "./components/Contacts";
import Search from "./components/Search";

export default function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  //data fetch data at page load
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/?results=20")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    setFilteredUsers(users);
  }, []);

  //search based on input
  useEffect(() => {
    const filterUser = users.filter((user) => {
      if (input === "") {
        return user;
      } else if (user.name.toLowerCase().includes(input.toLowerCase())) {
        return user;
      }
    });
    setFilteredUsers(filterUser);
  }, [input, users]);

  //debouncing search -- only set search term when user stops typing, delay=0.5sec
  useEffect(() => {
    const handler = setTimeout(() => {
      setInput(searchInput);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchInput]);

  //input handler
  const handleSearchInput = (value) => {
    setSearchInput(value);
  };

  return (
    <div className="App">
      <Search onSearch={handleSearchInput} />
      {users.length > 0 && <Contacts users={filteredUsers} />}
    </div>
  );
}
