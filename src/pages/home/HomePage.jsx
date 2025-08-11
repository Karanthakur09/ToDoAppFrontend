import React, { useState } from 'react'
import Navbar from '../../components/layouts/Navbar'
import PopModal from '../../components/popModal'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [allTask, setAllTask] = useState([]);

  const openModalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='add-task'>
          <h1>Your Task</h1>
          <input type='search' placeholder='search your task' />
          <button className=" btn btn-primary" onClick={openModalHandler} >
            Create Task <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <PopModal
        showModal={showModal}
        setShowModal={setShowModal}
        setTitle={setTitle}
        title={title}
        description={description}
        setDescription={setDescription}
      />
    </>
  )
}

export default HomePage