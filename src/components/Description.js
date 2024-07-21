// src/components/Description.js
import React from 'react';
import './Description.css';

function Description() {
  return (
    <section className="description">
      <h3 style={{fontWeight: 'bold', color: 'white'}}>
        מהפכה בתחום האימונים בחדר הכושר - iFit
      </h3>
      <p 
      dir='rtl'>
iFit מבטיחה לשנות את הדרך שבה אנו עושים אימונים בחדר הכושר. עם iFit, סיימת לבזבז זמן. האפליקציה מאפשרת לך לעקוב אחרי כמות הסטים והחזרות שביצעת באימון האחרון, מציעה לך מטרות אימון והמלצות לכל יום.

בנוסף לכך, האפליקציה מאפשרת לך להתחבר ישירות עם חברים, מאפשרת לך להשוות תוצאות באימונים עם תרשים עמודות חזותי, ומספקת חוויה חברתית ומשותפת שמעצימה את ההתמקצעות שלך בספורט ובאימון.

iFit - התחל לפסוע אל עידני האימון החדשים והמתקדמים.
      </p>
      
    </section>
  );
}

export default Description;
