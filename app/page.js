'use client'
import React, { useEffect } from 'react';
import styles from './page.module.css'
import { initThreeScene } from '../component/ThreeTest';

export default function Home() {

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window !== "undefined") {
      const worldElement = document.getElementById('world');
        initThreeScene(worldElement); // `initThreeScene`에서 애니메이션 시작
    }
}, []);

  return (
    <div>
      <div className={styles.world} id="world"></div>
      <div className={styles.loader} id="loader">Loading...</div>
      
      
     
      <div className={styles.instructions} id="instructions">Mouse hover to make rocate<br/>
        <span className={styles.lightInstructions} id="lightInstructions">the odject will surely appreciate</span>
      </div>

      <div className={styles.credits} id="credits">
        <p>Prints on <a className={styles.society6} 
        class="society6" 
        href="https://society6.com/yakudoo/"  
        target="blank">society6</a> | <a href="https://codepen.io/Yakudoo/"  target="blank">my other codepens</a> | <a href="https://www.epic.net" target="blank">epic.net</a></p>
      </div>
     </div>
  )
}
