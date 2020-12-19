import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/rootReducer";
import { fetchPosts } from "./AppSlice";
import css from './App.module.scss'

const Messages = ({sortedMessages, handleClick}: {sortedMessages: string[]; handleClick: (text: string) => void;}) => {
  return <>
    {sortedMessages.map((message: string, key: number) => (
      <Message text={message} handleClick={handleClick} key={key} />
    ))}
  </>
}

const Message = ({text, handleClick}: {text: string; handleClick: (text: string) => void;}) => {
  return <div onClick={() => handleClick(text)} className={css.hello}>{text}</div>;
};

const App = () => {
  const [search, setSearch] = useState<string>('')
  // const dispatch = useDispatch();
  // const { isLoading } = useSelector((state: RootState) => state.news);

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, []);
  const messages: string[] = ["hello", "world", "test", 'test2'];
  const handleClick = (text: string) => {
    console.log(text)
    // dispatch(setCurrentCountry(country))
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const sortedMessages = messages.filter((message: string) => message.includes(search))
  const a = {
    flag: "https://disease.sh/assets/img/flags/al.png"
  }
  return (
    <div className="App">
      {/* {
    isLoading ? "LOADING..." : "LOADED"
    } */}
      <img src={a.flag} alt=""/>
      <input type="text" value={search} onChange={handleChange} />
      <Messages sortedMessages={sortedMessages} handleClick={handleClick} />
    </div>
  );
};

export default App;
