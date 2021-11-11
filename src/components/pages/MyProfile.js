import React from 'react';
import '../assets/styles/profile.css';

export default function MyProfile() {
  return (
    <div className="profile-container">
      <section className="mymission-items">
        <h2>My Missions</h2>
        <ul className="items-list">
          <li>Telstar</li>
          <li>Telstar</li>
          <li>Telstar</li>
          <li>Telstar</li>
        </ul>
      </section>
      <section className="myrocket-items">
        <h2>My Rockets</h2>
        <ul className="items-list">
          <li>Telstar</li>
          <li>Telstar</li>
          <li>Telstar</li>
          <li>Telstar</li>
        </ul>
      </section>
    </div>
  );
}
