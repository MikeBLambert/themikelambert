import React, { Fragment } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

export default function about() {
  return (
    <Fragment>
      <div data-aos="fade-in">
        <h1>Software Engineer</h1>
      </div>

      <div data-aos="zoom-in-left">
        <h4>Vue</h4>
      </div>
      <div data-aos="zoom-in-right">
        <h4>React</h4>
      </div>
      <div data-aos="zoom-in-left">
        <h4>Redux</h4>
      </div>
      <div data-aos="zoom-in-right">
        <h4>NodeJS</h4>
      </div>
      <div data-aos="zoom-in-left">
        <h4 >JavaScript</h4>
      </div>
      <div data-aos="zoom-in-right">
        <h4>HTML5</h4>
      </div>
      <div data-aos="zoom-in-left">
        <h4>CSS</h4>
      </div>
      <div data-aos="zoom-in-right">
        <h4>PostgreSQL</h4>
      </div>
      <div data-aos="zoom-in-left">
        <h4>MongoDB</h4>
      </div>
      <div data-aos="zoom-in-right">
        <h4>Jest</h4>
      </div>
      <div data-aos="zoom-in-left">
        <h4>Git</h4>
      </div>
      <div data-aos="zoom-in-right">
        <h4>BASH</h4>
      </div>
    </Fragment>
  )
}
