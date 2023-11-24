import React from 'react'

const userData = {
  name: 'Moudud',
  age: '21',
  professtion: 'Software Developer',
  image: 'https://avatars.githubusercontent.com/u/73835323?v=4',
  imgSize: 180
}

function Title() {
  return (
    <h5>Learning React.JS Advance Topic</h5>
  )
}

const ProfileDescribeData = () => {
  return (
    <>
      <Title />
      <h3 className='underline text-4xl'>Name: {userData.name}</h3>
      <h3>age: {userData.age}</h3>
      <img src={userData.image} alt="sabbir" style={{ width: userData.imgSize, height: userData.imgSize, borderRadius: '50%' }} />
    </>
  )
}

export default ProfileDescribeData