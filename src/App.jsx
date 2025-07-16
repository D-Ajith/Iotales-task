import React from 'react'
import Navbar from './Navbar/Navbar'
import Greenpart from './Greenpart/Greenpart'
import Pinkpart from './Pinkpart/Pinkpart'
import Orangepart from './Orangepart/Orangepart'
import Bluepart from './Bluepart/Bluepart'
import Yellowpart from './Yellowpart/Yellowpart'
import Yellowbluecloud from "./Yellowbluecloud/Yellowbluecloud"
import Purplepart from './Purplepart/Purplepart'
import Darkgreenpart from './Darkgreenpart/Darkgreenpart'
import Brownpart from './Brownpart/Brownpart'
import Blackpart from './Blackpart/Blackpart'
import Footerpart from './Footerpart/Footerpart'
import Clouddivider from './Clouddivider/Clouddivider'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Greenpart/>
      <Pinkpart/>
      <Clouddivider/>
      <Orangepart/>
      <Bluepart/>
      <Yellowbluecloud/>
      <Yellowpart/>
      <Purplepart/>
      <Darkgreenpart/>
      <Brownpart/>
      <Blackpart/>
      <Footerpart/>
    </div>
  )
}

export default App