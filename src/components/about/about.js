import React from 'react'
import Code from './code'
import styles from './about.module.css'
import Study from './study';
import Global from './global';

export default function about() {
  return (
    <div id={styles.container}>
      <Code />
      <Study />
      <Global />
    </div>
  )
}
