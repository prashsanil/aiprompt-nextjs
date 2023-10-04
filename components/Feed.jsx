'use client';

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  // console.log(data);
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('');
  const [allPosts, setAllPosts] = useState([]);


  

  //Fetch prompts from db
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      // console.log(data); 
      setAllPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {

  }


  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search For a Tag or Username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList
        data={allPosts}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed